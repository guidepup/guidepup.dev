---
title: "NVDA"
---

**Implements:** [ScreenReader]

A NVDA instance can be used to launch and control NVDA.

Here's a typical example using a [NVDA] instance:

```ts
import { nvda } from "@guidepup/guidepup";

(async () => {
  // Start NVDA.
  await nvda.start();

  // Move to the next item.
  await nvda.next();

  // Stop NVDA.
  await nvda.stop();
})();
```

**Contents:**

- [nvda.keyboardCommands](./class-nvda#nvda-keyboard-commands)
- [nvda.act()](./class-nvda#nvda-act)
- [nvda.click([options])](./class-nvda#nvda-click)
- [nvda.default()](./class-nvda#nvda-default)
- [nvda.detect()](./class-nvda#nvda-detect)
- [nvda.interact()](./class-nvda#nvda-interact)
- [nvda.itemText()](./class-nvda#nvda-item-text)
- [nvda.itemTextLog()](./class-nvda#nvda-item-text-log)
- [nvda.lastSpokenPhrase()](./class-nvda#nvda-last-spoken-phrase)
- [nvda.next()](./class-nvda#nvda-next)
- [nvda.perform(command)](./class-nvda#nvda-perform)
- [nvda.press(key)](./class-nvda#nvda-press)
- [nvda.previous()](./class-nvda#nvda-previous)
- [nvda.spokenPhraseLog()](./class-nvda#nvda-spoken-phrase-log)
- [nvda.start()](./class-nvda#nvda-start)
- [nvda.stop()](./class-nvda#nvda-stop)
- [nvda.stopInteracting()](./class-nvda#nvda-stop-interacting)
- [nvda.type(text)](./class-nvda#nvda-type)

## nvda.keyboardCommands {#nvda-keyboard-commands}

Getter for all NVDA keyboard commands.

Use with the NVDA `perform` command to invoke a keyboard action:

```ts
import { nvda } from "@guidepup/guidepup";

(async () => {
  // Start NVDA.
  await nvda.start();

  // Move to the next item.
  await nvda.perform(nvda.keyboardCommands.moveToNext);

  // Stop NVDA.
  await nvda.stop();
})();
```

**Returns:** &#60;[NVDAKeyCodeCommands]&#62;

## nvda.act() {#nvda-act}

Perform the default action for the item in the NVDA cursor.

Equivalent of executing `Enter` or `Spacebar` (depending on the item).

```ts
import { nvda } from "@guidepup/guidepup";

(async () => {
  // Start NVDA.
  await nvda.start();

  // Move to the next item.
  await nvda.next();

  // Perform the default action for the item.
  await nvda.act();

  // Stop NVDA.
  await nvda.stop();
})();
```

**Returns:** &#60;[Promise]<[void]>&#62;

## nvda.click([options]) {#nvda-click}

Click the mouse.

```ts
import { nvda } from "@guidepup/guidepup";

(async () => {
  // Start NVDA.
  await nvda.start();

  // Left-click the mouse.
  await nvda.click();

  // Left-click the mouse using specific options.
  await nvda.click({ button: "left", clickCount: 1 });

  // Double-right-click the mouse.
  await nvda.click({ button: "right", clickCount: 2 });

  // Stop NVDA.
  await nvda.stop();
})();
```

**Parameters:**

- **Optional:** `options` &#60;[ClickOptions]&#62; Click options.

**Returns:** &#60;[Promise]<[void]>&#62;

## nvda.default() {#nvda-default}

Detect whether NVDA is the default screen reader for the current OS:

- `true` for Windows
- `false` for MacOS
- `false` for Linux

```ts
import { nvda } from "@guidepup/guidepup";

(async () => {
  const isNVDADefaultScreenReader = await nvda.default();

  console.log(isNVDADefaultScreenReader);
})();
```

**Returns:** &#60;[Promise]<[boolean]>&#62;

## nvda.detect() {#nvda-detect}

Detect whether NVDA is supported for the current OS:

- `true` for Windows
- `false` for MacOS
- `false` for Linux

```ts
import { nvda } from "@guidepup/guidepup";

(async () => {
  const isNVDADefaultScreenReader = await nvda.detect();

  console.log(isNVDADefaultScreenReader);
})();
```

**Returns:** &#60;[Promise]<[boolean]>&#62;

## nvda.interact() {#nvda-interact}

No-op to provide same API across screen readers.

NVDA does not require users to perform an additional command to interact with the item in the NVDA cursor.

```ts
import { nvda } from "@guidepup/guidepup";

(async () => {
  // Start NVDA.
  await nvda.start();

  // Move to the next item.
  await nvda.next();

  // Interact with the item - does nothing on NVDA.
  await nvda.interact();

  // Stop NVDA.
  await nvda.stop();
})();
```

**Returns:** &#60;[Promise]<[void]>&#62;

## nvda.itemText() {#nvda-item-text}

Get the text of the item in the NVDA cursor.

```ts
import { nvda } from "@guidepup/guidepup";

(async () => {
  // Start NVDA.
  await nvda.start();

  // Move to the next item.
  await nvda.next();

  // Get the text (if any) for the item currently in focus by the NVDA
  // cursor.
  const itemText = await nvda.itemText();
  console.log(itemText);

  // Stop NVDA.
  await nvda.stop();
})();
```

**Returns:** &#60;[Promise]<[string]>&#62; The item's text.

## nvda.itemTextLog() {#nvda-item-text-log}

Get the log of all visited item text for this NVDA instance.

```ts
import { nvda } from "@guidepup/guidepup";

(async () => {
  // Start NVDA.
  await nvda.start();

  // Move through several items.
  for (let i = 0; i < 10; i++) {
    await nvda.next();
  }

  // Get the text (if any) for all the items visited by the NVDA cursor.
  const itemTextLog = await nvda.itemTextLog();
  console.log(itemTextLog);

  // Stop NVDA.
  await nvda.stop();
})();
```

**Returns:** &#60;[Promise]<[Array]<[string]>>&#62; The item text log.

## nvda.lastSpokenPhrase() {#nvda-last-spoken-phrase}

Get the last spoken phrase.

```ts
import { nvda } from "@guidepup/guidepup";

(async () => {
  // Start NVDA.
  await nvda.start();

  // Move to the next item.
  await nvda.next();

  // Get the phrase spoken by NVDA from moving to the next item above.
  const lastSpokenPhrase = await nvda.lastSpokenPhrase();
  console.log(lastSpokenPhrase);

  // Stop NVDA.
  await nvda.stop();
})();
```

**Returns:** &#60;[Promise]<[string]>&#62; The last spoken phrase.

## nvda.next() {#nvda-next}

Move the NVDA cursor to the next location.

Equivalent of executing `VO-Right Arrow`.

```ts
import { nvda } from "@guidepup/guidepup";

(async () => {
  // Start NVDA.
  await nvda.start();

  // Move to the next item.
  await nvda.next();

  // Stop NVDA.
  await nvda.stop();
})();
```

**Returns:** &#60;[Promise]<[void]>&#62;

## nvda.perform(command) {#nvda-perform}

Perform a NVDA command.

The command can be a [WindowsKeyCodeCommand] or [WindowsKeystrokeCommand].

```ts
import { nvda, NVDAKeyCodeCommands } from "@guidepup/guidepup";

(async () => {
  // Start NVDA.
  await nvda.start();

  // Type using a custom keystroke command.
  await nvda.perform({ characters: "my-username" });

  // Keyboard commands available on the NVDA instance.
  await nvda.perform(nvda.keyboardCommands.performDefaultActionForItem);

  // Stop NVDA.
  await nvda.stop();
})();
```

**Parameters:**

- `command` &#60;[WindowsKeyCodeCommand] | [WindowsKeystrokeCommand]&#62; NVDA keyboard command.

**Returns:** &#60;[Promise]<[void]>&#62;

## nvda.press(key) {#nvda-press}

Press a key on the focused item.

`key` can specify the intended [keyboardEvent.key](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key)
value or a single character to generate the text for. A superset of the `key` values can be found [on the MDN key values page](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values). Examples of the keys are:

`F1` - `F20`, `Digit0` - `Digit9`, `KeyA` - `KeyZ`, `Backquote`, `Minus`, `Equal`, `Backslash`, `Backspace`, `Tab`,
`Delete`, `Escape`, `ArrowDown`, `End`, `Enter`, `Home`, `Insert`, `PageDown`, `PageUp`, `ArrowRight`, `ArrowUp`, etc.

See [WindowsKeyCodes] for the full range of available keys.

Following modification shortcuts are also supported: `Shift`, `Control`, `Alt`.

See [WindowsModifiers] for the full range of available modifiers.

Holding down `Shift` will type the text that corresponds to the `key` in the upper case.

If `key` is a single character, it is case-sensitive, so the values `a` and `A` will generate different respective texts.

Shortcuts such as `key: "Control+f"` or `key: "Control+Shift+f"` are supported as well. When specified with the modifier, modifier is pressed and being held while the subsequent key is being pressed.

```ts
import { nvda } from "@guidepup/guidepup";

(async () => {
  // Start NVDA.
  await nvda.start();

  // Open a find text modal.
  await nvda.press("Control+f");

  // Stop NVDA.
  await nvda.stop();
})();
```

**Parameters:**

- `key` &#60;[string]&#62; Name of the key to press or a character to generate, such as `ArrowLeft` or `a`.

**Returns:** &#60;[Promise]<[void]>&#62;

## nvda.previous() {#nvda-previous}

Move the NVDA cursor to the previous location.

Equivalent of executing `Up Arrow`.

```ts
import { nvda } from "@guidepup/guidepup";

(async () => {
  // Start NVDA.
  await nvda.start();

  // Move to the previous item.
  await nvda.previous();

  // Stop NVDA.
  await nvda.stop();
})();
```

**Returns:** &#60;[Promise]<[void]>&#62;

## nvda.spokenPhraseLog() {#nvda-spoken-phrase-log}

Get the log of all spoken phrases for this NVDA instance.

```ts
import { nvda } from "@guidepup/guidepup";

(async () => {
  // Start NVDA.
  await nvda.start();

  // Move through several items.
  for (let i = 0; i < 10; i++) {
    await nvda.next();
  }

  // Get the phrase spoken by NVDA from moving through the items above.
  const spokenPhraseLog = await nvda.spokenPhraseLog();
  console.log(spokenPhraseLog);

  // Stop NVDA.
  await nvda.stop();
})();
```

**Returns:** &#60;[Promise]<[Array]<[string]>>&#62; The spoken phrase log.

## nvda.start() {#nvda-start}

Turn NVDA on.

```ts
import { nvda } from "@guidepup/guidepup";

(async () => {
  // Start NVDA.
  await nvda.start();

  // ... perform some commands.

  // Stop NVDA.
  await nvda.stop();
})();
```

**Returns:** &#60;[Promise]<[void]>&#62;

## nvda.stop() {#nvda-stop}

Turn NVDA off.

```ts
import { nvda } from "@guidepup/guidepup";

(async () => {
  // Start NVDA.
  await nvda.start();

  // ... perform some commands.

  // Stop NVDA.
  await nvda.stop();
})();
```

**Returns:** &#60;[Promise]<[void]>&#62;

## nvda.stopInteracting() {#nvda-stop-interacting}

No-op to provide same API across screen readers.

NVDA does not require users to perform an additional command to interact with the item in the NVDA cursor.

```ts
import { nvda } from "@guidepup/guidepup";

(async () => {
  // Start NVDA.
  await nvda.start();

  // Interact with the item - does nothing on NVDA.
  await nvda.interact();

  // ... perform some commands.

  // Stop interacting with the item - does nothing on NVDA.
  await nvda.stopInteracting();

  // Stop NVDA.
  await nvda.stop();
})();
```

**Returns:** &#60;[Promise]<[void]>&#62;

## nvda.type(text) {#nvda-type}

Type text into the focused item.

To press a special key, like `Control` or `ArrowDown`, use [`nvda.press(key)`](./class-nvda#nvda-press).

```ts
import { nvda } from "@guidepup/guidepup";

(async () => {
  // Start NVDA.
  await nvda.start();

  // Type a username and key Enter.
  await nvda.type("my-username");
  await nvda.press("Enter");

  // Stop NVDA.
  await nvda.stop();
})();
```

**Parameters:**

- `text` &#60;[string]&#62; Text to type into the focused item.

**Returns:** &#60;[Promise]<[void]>&#62;

[clickoptions]: ./class-click-options "ClickOptions"
[nvda]: ./class-nvda "NVDA"
[windowsmodifiers]: ./class-windows-modifiers "WindowsModifiers"
[nvdakeycodecommands]: ./class-nvda-key-code-commands "NVDAKeyCodeCommands"
[screenreader]: ./class-screenreader "ScreenReader"
[windowskeycodecommand]: ./class-windows-key-code-command "WindowsKeyCodeCommand"
[windowskeycodes]: ./class-windows-key-codes "WindowsKeyCodes"
[windowskeystrokecommand]: ./class-windows-keystroke-command "WindowsKeystrokeCommand"
[array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array"
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean "boolean"
[promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String "string"
[void]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void"
