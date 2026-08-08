---
title: Testing live regions
description: Use Guidepup Virtual Screen Reader to exercise aria-live announcements.
---

# Testing live regions

The Virtual Screen Reader can report phrase output that flows through a live regions. That makes it a useful fit for DOM fixtures that rely on updates to a region with `aria-live="polite"`, `aria-live="assertive"`, or `aria-live="off"`.

Most live region tests use the same cycle:

1. Build a DOM fixture that includes one or more live regions.
2. Start the Virtual Screen Reader on the container.
3. Trigger the live update by focusing a control and interacting or mutating the DOM.
4. Wait until the DOM shows the updated content.
5. Assert against `await virtual.spokenPhraseLog()`.

## A typical workflow

```ts
import { waitFor } from "@testing-library/dom";
import { virtual } from "@guidepup/virtual-screen-reader";

async function testLiveRegion() {
  setupAriaLive();

  await virtual.start({ container: document.body });

  document.querySelector<HTMLButtonElement>("#trigger")!.focus();

  await virtual.act();

  await waitFor(() => {
    expect(document.querySelector("#live-region")?.textContent).toBe(
      "Announcement",
    );
  });

  expect(await virtual.spokenPhraseLog()).toEqual([
    "document",
    "button, Test aria-live polite",
    "polite: Announcement",
  ]);

  await virtual.stop();
}
```

That example is intentionally close to the Virtual Screen Reader test style you would use in a real DOM environment. The first item in the phrase log is usually the document root, followed by the roles and text that the cursor reaches as it steps through the fixture.

## Common assertions

Use `spokenPhraseLog()` to assert on the full announcement sequence, and use `lastSpokenPhrase()` when you only need to inspect the most recent announcement that was captured.

```ts
const currentPhrase = await virtual.lastSpokenPhrase();
expect(currentPhrase).toContain("assertive: last announcement");

const log = await virtual.spokenPhraseLog();
expect(log).toEqual(expect.arrayContaining(["polite: earlier announcement"]));
```

That makes the phrase log a good fit for verbose live region regression tests, even when the setup and the assertions are otherwise plain DOM operations.
