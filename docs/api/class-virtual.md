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

    // Start your Virtual Screen Reader instance
    await virtual.start({ container: document.body });

    // Navigate your environment with the Virtual Screen Reader just as your users would
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

    // Stop your Virtual Screen Reader instance
    await virtual.stop();
  });
});
```

**Contents:**

- [virtual.activeNode](./class-virtual#virtual-active-node)
- [virtual.commands](./class-virtual#virtual-commands)
- [virtual.act()](./class-virtual#virtual-act)
- [virtual.clearItemTextLog()](./class-virtual#virtual-clear-item-text-log)
- [virtual.clearSpokenPhraseLog()](./class-virtual#virtual-clear-spoken-phrase-log)
- [virtual.click()](./class-virtual#virtual-click)
- [virtual.default()](./class-virtual#virtual-default)
- [virtual.detect()](./class-virtual#virtual-detect)
- [virtual.interact()](./class-virtual#virtual-interact)
- [virtual.itemText()](./class-virtual#virtual-item-text)
- [virtual.itemTextLog()](./class-virtual#virtual-item-text-log)
- [virtual.lastSpokenPhrase()](./class-virtual#virtual-last-spoken-phrase)
- [virtual.next()](./class-virtual#virtual-next)
- [virtual.perform(command[, options])](./class-virtual#virtual-perform)
- [virtual.press(key)](./class-virtual#virtual-press)
- [virtual.previous()](./class-virtual#virtual-previous)
- [virtual.spokenPhraseLog()](./class-virtual#virtual-spoken-phrase-log)
- [virtual.start([options])](./class-virtual#virtual-start)
- [virtual.stop()](./class-virtual#virtual-stop)
- [virtual.stopInteracting()](./class-virtual#virtual-stop-interacting)
- [virtual.type(text)](./class-virtual#virtual-type)

## virtual.activeNode {#virtual-activeNode}

Getter for the active node under the Virtual Screen Reader cursor.

Note that this is not always the same as the currently focused node.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Move to the next element.
  await virtual.next();

  // Log the currently focused node.
  console.log(virtual.activeNode);

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Returns:** [Node] | [null]

## virtual.commands {#virtual-commands}

Getter for all Virtual Screen Reader commands.

Use with the `perform` command to invoke an action:

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Perform action to move to the next landmark.
  await virtual.perform(virtual.commands.moveToNextLandmark);

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

See also:

- [virtual.perform(command[, options])](./class-virtual#virtual-perform)

**Returns:** [VirtualCommands]

## virtual.act() {#virtual-act}

Perform the default action for the item in the Virtual Screen Reader cursor.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Move to the next item.
  await virtual.next();

  // Perform the default action for the item.
  await virtual.act();

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Returns:** [Promise]&#60;[void]&#62;

## virtual.clearItemTextLog() {#virtual-clear-item-text-log}

Clear the log of all visited item text for this Virtual Screen Reader instance.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // ... perform some commands.

  // Clear the item text log.
  await virtual.clearItemTextLog();

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Returns:** [Promise]&#60;[void]&#62;

## virtual.clearSpokenPhraseLog() {#virtual-clear-spoken-phrase-log}

Clear the log of all spoken phrases for this Virtual Screen Reader instance.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // ... perform some commands.

  // Clear the spoken phrase log.
  await virtual.clearSpokenPhraseLog();

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Returns:** [Promise]&#60;[void]&#62;

## virtual.click([options]) {#virtual-click}

Click the mouse.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Left-click the mouse.
  await virtual.click();

  // Left-click the mouse using specific options.
  await virtual.click({ button: "left", clickCount: 1 });

  // Double-right-click the mouse.
  await virtual.click({ button: "right", clickCount: 2 });

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Parameters:**

- **Optional:** `options` [ClickOptions] Click options.

**Returns:** [Promise]&#60;[void]&#62;

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

**Returns:** [Promise]&#60;[boolean]&#62;

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

**Returns:** [Promise]&#60;[boolean]&#62;

## virtual.interact() {#virtual-interact}

No-op to provide same API across screen readers.

The Virtual Screen Reader does not require users to perform an additional command to interact with the item in the Virtual Screen Reader cursor.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Move to the next item.
  await virtual.next();

  // Interact with the item - does nothing with the Virtual Screen Reader.
  await virtual.interact();

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Returns:** [Promise]&#60;[void]&#62;

## virtual.itemText() {#virtual-item-text}

Get the text of the item in the Virtual Screen Reader cursor.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Move to the next item.
  await virtual.next();

  // Get the text (if any) for the item currently in focus by the Virtual
  // screen reader cursor.
  const itemText = await virtual.itemText();
  console.log(itemText);

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Returns:** [Promise]&#60;[string]&#62; The item's text.

## virtual.itemTextLog() {#virtual-item-text-log}

Get the log of all visited item text for this Virtual Screen Reader instance.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Move through several items.
  for (let i = 0; i < 10; i++) {
    await virtual.next();
  }

  // Get the text (if any) for all the items visited by the Virtual screen
  // reader cursor.
  const itemTextLog = await virtual.itemTextLog();
  console.log(itemTextLog);

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Returns:** [Promise]&#60;[Array]&#60;[string]&#62;> The item text log.

## virtual.lastSpokenPhrase() {#virtual-last-spoken-phrase}

Get the last spoken phrase.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Move to the next item.
  await virtual.next();

  // Get the phrase spoken by Virtual Screen Reader from moving to the next item above.
  const lastSpokenPhrase = await virtual.lastSpokenPhrase();
  console.log(lastSpokenPhrase);

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Returns:** [Promise]&#60;[string]&#62; The last spoken phrase.

## virtual.next() {#virtual-next}

Move the Virtual cursor to the next location.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Move to the next item.
  await virtual.next();

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Parameters:**

- **Optional:** `options` [CommandOptions] Additional options.

**Returns:** [Promise]&#60;[void]&#62;

## virtual.perform(command[, options]) {#virtual-perform}

Perform a Virtual Screen Reader command.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Perform action to move to the next landmark.
  await virtual.perform(virtual.commands.moveToNextLandmark);

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

See also:

- [virtual.commands](./class-virtual#virtual-commands)
- [VirtualCommands]

**Parameters:**

- `command` [string] Virtual Screen Reader command to execute. See [VirtualCommands] for valid commands.
- **Optional:** `options` [object] Additional options.

**Returns:** [Promise]&#60;[void]&#62;

## virtual.press(key) {#virtual-press}

Press a key on the focused item.

`key` can specify the intended [`keyboardEvent.key`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key)
value or a single character to generate the text for. A superset of the `key` values can be found [on the MDN key values page](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values). Examples of the keys are:

<p><kbd>F1</kbd> - <kbd>F20</kbd>, <kbd>Digit0</kbd> - <kbd>Digit9</kbd>, <kbd>KeyA</kbd> - <kbd>KeyZ</kbd>, <kbd>Backquote</kbd>, <kbd>Minus</kbd>, <kbd>Equal</kbd>, <kbd>Backslash</kbd>, <kbd>Backspace</kbd>, <kbd>Tab</kbd>,
<kbd>Delete</kbd>, <kbd>Escape</kbd>, <kbd>ArrowDown</kbd>, <kbd>End</kbd>, <kbd>Enter</kbd>, <kbd>Home</kbd>, <kbd>Insert</kbd>, <kbd>PageDown</kbd>, <kbd>PageUp</kbd>, <kbd>ArrowRight</kbd>, <kbd>ArrowUp</kbd>, etc.</p>

Following modification shortcuts are also supported: <kbd>Shift</kbd>, <kbd>Control</kbd>, <kbd>Alt</kbd>, <kbd>Meta</kbd>, <kbd>Command</kbd>.

Holding down <kbd>Shift</kbd> will type the text that corresponds to the `key` in the upper case.

If `key` is a single character, it is case-sensitive, so the values <kbd>a</kbd> and <kbd>A</kbd> will generate different respective texts.

Shortcuts such as `key: "Command+f"` or `key: "Command+Shift+f"` are supported as well. When specified with the modifier, modifier is pressed and being held while the subsequent key is being pressed.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Open a find text modal.
  await virtual.press("Command+f");

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Parameters:**

- `key` [string] Name of the key to press or a character to generate, such as <kbd>ArrowLeft</kbd> or <kbd>a</kbd>.

**Returns:** [Promise]&#60;[void]&#62;

## virtual.previous() {#virtual-previous}

Move the Virtual cursor to the previous location.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Move to the previous item.
  await virtual.previous();

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Returns:** [Promise]&#60;[void]&#62;

## virtual.spokenPhraseLog() {#virtual-spoken-phrase-log}

Get the log of all spoken phrases for this Virtual Screen Reader instance.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Move through several items.
  for (let i = 0; i < 10; i++) {
    await virtual.next();
  }

  // Get the phrase spoken by the Virtual Screen Reader from moving through the
  // items above.
  const spokenPhraseLog = await virtual.spokenPhraseLog();
  console.log(spokenPhraseLog);

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Returns:** [Promise]&#60;[Array]&#60;[string]&#62;> The spoken phrase log.

## virtual.start([options]) {#virtual-start}

Turn the Virtual Screen Reader on.

This must be called before any other Virtual Screen Reader command can be issued.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader on the entire page.
  await virtual.start({ container: document.body });

  // ... perform some commands.

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Parameters:**

- **Optional:** `options` [StartOptions] Start options.

**Returns:** [Promise]&#60;[void]&#62;

## virtual.stop() {#virtual-stop}

Turn the Virtual Screen Reader off.

Calling this method will clear any item text or spoken phrases collected by the Virtual Screen Reader.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // ... perform some commands.

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Returns:** [Promise]&#60;[void]&#62;

## virtual.stopInteracting() {#virtual-stop-interacting}

No-op to provide same API across screen readers.

The Virtual Screen Reader does not require users to perform an additional command to interact with the item in the Virtual Screen Reader cursor.

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Interact with the item - does nothing with the Virtual Screen Reader.
  await virtual.interact();

  // ... perform some commands.

  // Stop interacting with the item - does nothing with Virtual.
  await virtual.stopInteracting();

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Returns:** [Promise]&#60;[void]&#62;

## virtual.type(text) {#virtual-type}

Type text into the focused item.

To press a special key, like <kbd>Control</kbd> or <kbd>ArrowDown</kbd>, use [`virtual.press(key)`](./class-virtual#virtual-press).

```ts
import { virtual } from "@guidepup/virtual-screen-reader";

test("example test", async () => {
  // Start the Virtual Screen Reader.
  await virtual.start({ container: document.body });

  // Type a username and key Enter.
  await virtual.type("my-username");
  await virtual.press("Enter");

  // Stop the Virtual Screen Reader.
  await virtual.stop();
});
```

**Parameters:**

- `text` [string] Text to type into the focused item.

**Returns:** [Promise]&#60;[void]&#62;

[clickoptions]: ./class-click-options "ClickOptions"
[commandoptions]: ./class-command-options "CommandOptions"
[screenreader]: ./class-screenreader "ScreenReader"
[startoptions]: ./class-start-options "StartOptions"
[virtualcommands]: ./class-virtual-commands "VirtualCommands"
[virtual]: ./class-virtual "virtual"
[array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array"
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean "boolean"
[node]: https://developer.mozilla.org/en-US/docs/Web/API/Node "Node"
[null]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null "null"
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "object"
[promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String "string"
[void]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void"
