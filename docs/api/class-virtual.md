---
title: "Virtual"
---

**Implements:** [ScreenReader]

A Virtual Screen Reader instance can be used to launch and control a headless JavaScript screen reader which is compatible with any specification compliant [DOM](https://dom.spec.whatwg.org/) implementation, e.g. [jsdom](https://github.com/jsdom/jsdom), [Jest](https://jestjs.io/), or any modern browser.

Here's a typical example using a [Virtual] instance:

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

function setupBasicPage() {
  document.body.innerHTML = `
  <nav>Nav Text</nav>
  <section>
    <h1>Section Heading</h1>
    <p>Section Text</p>
    <article>
      <header>
        <h1>Article Header Heading</h1>
        <p>Article Header Text</p>
      </header>
      <p>Article Text</p>
    </article> 
  </section>
  <footer>Footer</footer>
  `;
}

describe("Screen Reader Tests", () => {
  test("should traverse the page announcing the expected roles and content", async () => {
    // Setup a page using a framework and testing library of your choice
    setupBasicPage();

    // Start your virtual screen reader instance
    await virtual.start({ container: document.body });

    // Navigate your environment with the virtual screen reader just as your users would
    while ((await virtual.lastSpokenPhrase()) !== "end of document") {
      await virtual.next();
    }

    // Assert on what your users would really see and hear when using screen readers
    expect(await virtual.spokenPhraseLog()).toEqual([
      "document",
      "navigation",
      "Nav Text",
      "end of navigation",
      "region",
      "heading, Section Heading, level 1",
      "Section Text",
      "article",
      "banner",
      "heading, Article Header Heading, level 1",
      "Article Header Text",
      "end of banner",
      "Article Text",
      "end of article",
      "end of region",
      "contentinfo",
      "Footer",
      "end of contentinfo",
      "end of document",
    ]);

    // Stop your virtual screen reader instance
    await virtual.stop();
  });
});
```

**Contents:**

- [virtual.act()](./class-virtual#virtual-act)
- [virtual.click()](./class-virtual#virtual-click)
- [virtual.default()](./class-virtual#virtual-default)
- [virtual.detect()](./class-virtual#virtual-detect)
- [virtual.interact()](./class-virtual#virtual-interact)
- [virtual.itemText()](./class-virtual#virtual-item-text)
- [virtual.itemTextLog()](./class-virtual#virtual-item-text-log)
- [virtual.lastSpokenPhrase()](./class-virtual#virtual-last-spoken-phrase)
- [virtual.next()](./class-virtual#virtual-next)
- [virtual.perform()](./class-virtual#virtual-perform)
- [virtual.press(key)](./class-virtual#virtual-press)
- [virtual.previous()](./class-virtual#virtual-previous)
- [virtual.spokenPhraseLog()](./class-virtual#virtual-spoken-phrase-log)
- [virtual.start([options])](./class-virtual#virtual-start)
- [virtual.stop()](./class-virtual#virtual-stop)
- [virtual.stopInteracting()](./class-virtual#virtual-stop-interacting)
- [virtual.type(text)](./class-virtual#virtual-type)

## virtual.act() {#virtual-act}

Perform the default action for the item in the Virtual cursor.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start Virtual.
  await virtual.start({ container: document.body });

  // Move to the next item.
  await virtual.next();

  // Perform the default action for the item.
  await virtual.act();

  // Stop Virtual.
  await virtual.stop();
});
```

**Returns:** &#60;[Promise]<[void]>&#62;

## virtual.click([options]) {#virtual-click}

Click the mouse.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start Virtual.
  await virtual.start({ container: document.body });

  // Left-click the mouse.
  await virtual.click();

  // Left-click the mouse using specific options.
  await virtual.click({ button: "left", clickCount: 1 });

  // Double-right-click the mouse.
  await virtual.click({ button: "right", clickCount: 2 });

  // Stop Virtual.
  await virtual.stop();
});
```

**Parameters:**

- **Optional:** `options` &#60;[ClickOptions]&#62; Click options.

**Returns:** &#60;[Promise]<[void]>&#62;

## virtual.default() {#virtual-default}

Detect whether Virtual is the default screen reader for the current OS:

- `false` for all OS

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  const isVirtualDefaultScreenReader = await virtual.default();

  console.log(isVirtualDefaultScreenReader);
});
```

**Returns:** &#60;[Promise]<[boolean]>&#62;

## virtual.detect() {#virtual-detect}

Detect whether Virtual is supported for the current OS:

- `true` for all OS

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  const isVirtualSupportedScreenReader = await virtual.detect();

  console.log(isVirtualSupportedScreenReader);
});
```

**Returns:** &#60;[Promise]<[boolean]>&#62;

## virtual.interact() {#virtual-interact}

No-op to provide same API across screen readers.

Virtual does not require users to perform an additional command to interact with the item in the Virtual cursor.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start Virtual.
  await virtual.start({ container: document.body });

  // Move to the next item.
  await virtual.next();

  // Interact with the item - does nothing with Virtual.
  await virtual.interact();

  // Stop Virtual.
  await virtual.stop();
});
```

**Returns:** &#60;[Promise]<[void]>&#62;

## virtual.itemText() {#virtual-item-text}

Get the text of the item in the Virtual cursor.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start Virtual.
  await virtual.start({ container: document.body });

  // Move to the next item.
  await virtual.next();

  // Get the text (if any) for the item currently in focus by the Virtual
  // cursor.
  const itemText = await virtual.itemText();
  console.log(itemText);

  // Stop Virtual.
  await virtual.stop();
});
```

**Returns:** &#60;[Promise]<[string]>&#62; The item's text.

## virtual.itemTextLog() {#virtual-item-text-log}

Get the log of all visited item text for this Virtual instance.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start Virtual.
  await virtual.start({ container: document.body });

  // Move through several items.
  for (let i = 0; i < 10; i++) {
    await virtual.next();
  }

  // Get the text (if any) for all the items visited by the Virtual cursor.
  const itemTextLog = await virtual.itemTextLog();
  console.log(itemTextLog);

  // Stop Virtual.
  await virtual.stop();
});
```

**Returns:** &#60;[Promise]<[Array]<[string]>>&#62; The item text log.

## virtual.lastSpokenPhrase() {#virtual-last-spoken-phrase}

Get the last spoken phrase.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start Virtual.
  await virtual.start({ container: document.body });

  // Move to the next item.
  await virtual.next();

  // Get the phrase spoken by virtual from moving to the next item above.
  const lastSpokenPhrase = await virtual.lastSpokenPhrase();
  console.log(lastSpokenPhrase);

  // Stop Virtual.
  await virtual.stop();
});
```

**Returns:** &#60;[Promise]<[string]>&#62; The last spoken phrase.

## virtual.next() {#virtual-next}

Move the Virtual cursor to the next location.

Equivalent of executing `VO-Right Arrow`.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start Virtual.
  await virtual.start({ container: document.body });

  // Move to the next item.
  await virtual.next();

  // Stop Virtual.
  await virtual.stop();
});
```

**Parameters:**

- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[void]>&#62;

## virtual.perform() {#virtual-perform}

Not implemented.

Will throw an error if called.

## virtual.press(key) {#virtual-press}

Press a key on the focused item.

`key` can specify the intended [`keyboardEvent.key`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key)
value or a single character to generate the text for. A superset of the `key` values can be found [on the MDN key values page](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values). Examples of the keys are:

`F1` - `F20`, `Digit0` - `Digit9`, `KeyA` - `KeyZ`, `Backquote`, `Minus`, `Equal`, `Backslash`, `Backspace`, `Tab`,
`Delete`, `Escape`, `ArrowDown`, `End`, `Enter`, `Home`, `Insert`, `PageDown`, `PageUp`, `ArrowRight`, `ArrowUp`, etc.

Following modification shortcuts are also supported: `Shift`, `Control`, `Alt`, `Meta`, `Command`.

Holding down `Shift` will type the text that corresponds to the `key` in the upper case.

If `key` is a single character, it is case-sensitive, so the values `a` and `A` will generate different respective texts.

Shortcuts such as `key: "Command+f"` or `key: "Command+Shift+f"` are supported as well. When specified with the modifier, modifier is pressed and being held while the subsequent key is being pressed.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start Virtual.
  await virtual.start({ container: document.body });

  // Open a find text modal.
  await virtual.press("Command+f");

  // Stop Virtual.
  await virtual.stop();
});
```

**Parameters:**

- `key` &#60;[string]&#62; Name of the key to press or a character to generate, such as `ArrowLeft` or `a`.

**Returns:** &#60;[Promise]<[void]>&#62;

## virtual.previous() {#virtual-previous}

Move the Virtual cursor to the previous location.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start Virtual.
  await virtual.start({ container: document.body });

  // Move to the previous item.
  await virtual.previous();

  // Stop Virtual.
  await virtual.stop();
});
```

**Returns:** &#60;[Promise]<[void]>&#62;

## virtual.spokenPhraseLog() {#virtual-spoken-phrase-log}

Get the log of all spoken phrases for this Virtual instance.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start Virtual.
  await virtual.start({ container: document.body });

  // Move through several items.
  for (let i = 0; i < 10; i++) {
    await virtual.next();
  }

  // Get the phrase spoken by Virtual from moving through the items above.
  const spokenPhraseLog = await virtual.spokenPhraseLog();
  console.log(spokenPhraseLog);

  // Stop Virtual.
  await virtual.stop();
});
```

**Returns:** &#60;[Promise]<[Array]<[string]>>&#62; The spoken phrase log.

## virtual.start([options]) {#virtual-start}

Turn Virtual on.

This must be called before any other Virtual command can be issued.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start Virtual on the entire page.
  await virtual.start({ container: document.body });

  // ... perform some commands.

  // Stop Virtual.
  await virtual.stop();
});
```

**Parameters:**

- **Optional:** `options` &#60;[StartOptions]&#62; Start options.

**Returns:** &#60;[Promise]<[void]>&#62;

## virtual.stop() {#virtual-stop}

Turn Virtual off.

Calling this method will clear any item text or spoken phrases collected by Virtual.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start Virtual.
  await virtual.start({ container: document.body });

  // ... perform some commands.

  // Stop Virtual.
  await virtual.stop();
});
```

**Returns:** &#60;[Promise]<[void]>&#62;

## virtual.stopInteracting() {#virtual-stop-interacting}

No-op to provide same API across screen readers.

Virtual does not require users to perform an additional command to interact with the item in the Virtual cursor.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start Virtual.
  await virtual.start({ container: document.body });

  // Interact with the item - does nothing with Virtual.
  await virtual.interact();

  // ... perform some commands.

  // Stop interacting with the item - does nothing with Virtual.
  await virtual.stopInteracting();

  // Stop Virtual.
  await virtual.stop();
});
```

**Returns:** &#60;[Promise]<[void]>&#62;

## virtual.type(text) {#virtual-type}

Type text into the focused item.

To press a special key, like `Control` or `ArrowDown`, use [`virtual.press(key[, options])`](./class-virtual#virtual-press).

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start Virtual.
  await virtual.start({ container: document.body });

  // Type a username and key Enter.
  await virtual.type("my-username");
  await virtual.press("Enter");

  // Stop Virtual.
  await virtual.stop();
});
```

**Parameters:**

- `text` &#60;[string]&#62; Text to type into the focused item.

**Returns:** &#60;[Promise]<[void]>&#62;

[clickoptions]: ./class-click-options "ClickOptions"
[commandoptions]: ./class-command-options "CommandOptions"
[screenreader]: ./class-screenreader "ScreenReader"
[startoptions]: ./class-start-options "StartOptions"
[virtual]: ./class-virtual "virtual"
[array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array"
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean "boolean"
[promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string"
[void]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void"
