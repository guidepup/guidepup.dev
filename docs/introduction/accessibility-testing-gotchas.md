---
title: Accessibility testing gotchas
description: Concrete examples that can pass browser and axe checks while still being poor or broken for screen reader users.
---

# Accessibility testing gotchas

A static accessibility check or browser assertion can tell you that a UI pattern is valid in terms of static HTML, ARIA relationships and DOM state.

That does not guarantee that a screen reader user gets a good experience when the interface actually runs.

This page describes a non-exhaustive selection of example patterns that can pass automated checks but are still poor or outright broken for screen reader users.

## Example 1: Live region elements created too late

A common live region mistake looks like this:

```html
<main>
  <h1>Example 1</h1>
  <button id="add-to-cart">Add to cart</button>
</main>
```

```js
const button = document.querySelector("#add-to-cart");

button.addEventListener("click", () => {
  const status = document.createElement("div");

  status.setAttribute("aria-live", "polite");
  status.textContent = "Added to cart";

  document.body.appendChild(status);
});
```

- This will pass static analyser tests such as axe (try it out using the [axe DevTools](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd) browser extension!)
- This will pass Playwright tests that assert the announced text is present on click
- This will pass Playwright accessibility tests because the markup is valid
- But this **will NOT** actually work for most screen readers

The problem is that screen readers are not guaranteed to pick up a brand new live region node in the middle of a user workflow. A user may not hear it, or at best will hear it inconsistently depending on browser, OS, and screen reader configuration.

A more robust implementation creates the live region in the page up front and only updates its text content:

```html
<main>
  <h1>Example 1</h1>
  <button id="add-to-cart">Add to cart</button>
</main>

<div aria-atomic="true" aria-live="polite" id="cart-status"></div>
```

```js
button.addEventListener("click", () => {
  const cartStatus = document.querySelector("#cart-status");

  cartStatus.textContent = "Added to cart";
});
```

That pattern is much more likely to be announced reliably because the live region already exists and the screen reader is observing a known, stable node.

**Catch this bug with Guidepup** by asserting on the last spoken phrase when interacting with the button:

```ts
await screenReader.act();
const lastSpokenPhrase = await screenReader.lastSpokenPhrase();

expect(lastSpokenPhrase).toContain("Added to cart");
```

> Could this be caught by adding unit or functional tests that check the live region exists on page load? Yes, probably!
>
> But... that would be a brittle test that couples you to implementation detail rather than focusing on customer facing behaviours.
>
> You _could_ have an obscure Playwright test that checks the live announcer element is present in the page, but you could also just test that the button announces properly with Guidepup!
>
> Plus user-facing, outcome-based Guidepup testing won't break when you rename your live announcer element, or move it to a different part of the page, or create more of them!

## Example 2: Unicode icons, emoji and decorative symbols

A page can easily pass axe checks and Playwright assertions while still presenting a poor screen reader experience when it relies on Unicode, emoji and similar symbol-heavy content for meaning.

```html
<main>
  <h1>Example 2</h1>

  <section aria-labelledby="inbox-heading">
    <h2 id="inbox-heading">Inbox 📥</h2>
    <p>2 messages ✨</p>
    <button>Review now</button>
  </section>
</main>
```

That page might be fine in terms of static structure:

- The heading is a heading.
- The button is a button.
- The page contains text that Playwright can query.
- The emoji and symbols are valid Unicode characters.

But the experience for a screen reader user can feel awkward or confusing.

A screen reader may announce a symbol such as 📥 as "inbox tray" meaning the above heading reads as "Inbox inbox tray", and ✨ as "sparkles" resulting in "2 messages sparkles". Other screen readers may simply produce a strange pause or hesitation depending on the synthesizer and locale.

If a symbol is being used as part of the primary meaning, the user receives a message that is visual, but not necessarily clear at the speech layer. That should trigger the same red flags as images or SVG elements that have no accessible name, or as decorative graphics that are not hidden from assistive technology.

This is why a good accessibility strategy should ask more than “does the DOM validate?”

A screen reader test should consider whether the character is:

- Purely decorative and should be hidden from assistive technology (using `aria-hidden="true"` or equivalent behaviour)
- Part of the actual meaning and therefore should be reinforced with an accessible label
- Useful as a cue that a user can understand consistently across screen readers and platforms

**Catch this issue with Guidepup** by navigating to the item and checking the spoken phrase for the content you actually want the user to hear:

```ts
// ... screen reader navigation
await screenReader.next();
const phrase = await screenReader.lastSpokenPhrase();

expect(phrase).toEqual("heading level 2, Inbox");
```

That lets you verify the user-facing message, not just whether a Unicode character survives a browser or static accessibility check.

## Where else can this show up?

There are far more cases where real screen reader behaviour diverges from what the DOM or accessibility tree might indicate. That is one reason axe, Playwright and other accessibility testing tools can give us false confidence.

These examples tend to fall into a few buckets:

- **Valid markup, but flawed dynamic behaviour**: the live region bug above, focus management, dialog behaviour and similar patterns
- **Valid markup, but a poor user experience**: the emoji example above, fragmented speech caused by excessive wrappers around words in continuous text, or repeated announcement patterns that make the page feel noisy
- **Valid markup and a valid implementation, but unsupported in a specific screen reader/browser combination**: you can implement a theoretically perfect, up-to-date WAI-ARIA technique for a complex widget and still find that VoiceOver does not support the relevant attribute. For example, VoiceOver historically had poor support for `aria-activedescendant`, which caused issues for certain combobox implementations. [Read about how the React Aria team tackled it](https://react-aria.adobe.com/blog/building-a-combobox)

If you find other examples that have caught you out with standard accessibility automation tools, [please let us know](https://github.com/guidepup/guidepup.dev/issues)!

## Why this matters

A strong accessibility strategy combines tools that answer different questions:

1. Static analysis can tell you whether markup is syntactically valid and rule-compliant.
2. Browser assertions can check visual structure and runtime state.
3. Screen reader tests can determine whether people hear, navigate, understand and act on the interface.

The difference between “passes” and “works for a user” is where Guidepup fits.
