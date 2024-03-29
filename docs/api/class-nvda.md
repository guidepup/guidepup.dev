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
- [nvda.act([options])](./class-nvda#nvda-act)
- [nvda.clearItemTextLog()](./class-nvda#nvda-clear-item-text-log)
- [nvda.clearSpokenPhraseLog()](./class-nvda#nvda-clear-spoken-phrase-log)
- [nvda.click([options])](./class-nvda#nvda-click)
- [nvda.default()](./class-nvda#nvda-default)
- [nvda.detect()](./class-nvda#nvda-detect)
- [nvda.interact()](./class-nvda#nvda-interact)
- [nvda.itemText()](./class-nvda#nvda-item-text)
- [nvda.itemTextLog()](./class-nvda#nvda-item-text-log)
- [nvda.lastSpokenPhrase()](./class-nvda#nvda-last-spoken-phrase)
- [nvda.next([options])](./class-nvda#nvda-next)
- [nvda.perform(command[, options])](./class-nvda#nvda-perform)
- [nvda.press(key[, options])](./class-nvda#nvda-press)
- [nvda.previous([options])](./class-nvda#nvda-previous)
- [nvda.spokenPhraseLog()](./class-nvda#nvda-spoken-phrase-log)
- [nvda.start([options])](./class-nvda#nvda-start)
- [nvda.stop()](./class-nvda#nvda-stop)
- [nvda.stopInteracting()](./class-nvda#nvda-stop-interacting)
- [nvda.type(text[, options])](./class-nvda#nvda-type)

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

**Returns:** [NVDAKeyCodeCommands]

## nvda.act([options]) {#nvda-act}

Perform the default action for the item in the NVDA cursor.

Equivalent of executing <kbd>Enter</kbd>.

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

**Returns:** [Promise]&#60;[void]&#62;

## nvda.clearItemTextLog() {#nvda-clear-item-text-log}

Clear the log of all spoken phrases for this NVDA instance.

For NVDA this is the same as `clearSpokenPhraseLog`.

```ts
import { nvda } from "@guidepup/guidepup";

(async () => {
  // Start NVDA.
  await nvda.start();

  // ... perform some commands.

  // Clear the spoken phrase log.
  await nvda.clearItemTextLog();

  // Stop NVDA.
  await nvda.stop();
})();
```

**Returns:** [Promise]&#60;[void]&#62;

## nvda.clearSpokenPhraseLog() {#nvda-clear-spoken-phrase-log}

Clear the log of all spoken phrases for this NVDA instance.

```ts
import { nvda } from "@guidepup/guidepup";

(async () => {
  // Start NVDA.
  await nvda.start();

  // ... perform some commands.

  // Clear the spoken phrase log.
  await nvda.clearSpokenPhraseLog();

  // Stop NVDA.
  await nvda.stop();
})();
```

**Returns:** [Promise]&#60;[void]&#62;

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

- **Optional:** `options` [ClickOptions] Click options.

**Returns:** [Promise]&#60;[void]&#62;

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

**Returns:** [Promise]&#60;[boolean]&#62;

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

**Returns:** [Promise]&#60;[boolean]&#62;

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

**Returns:** [Promise]&#60;[void]&#62;

## nvda.itemText() {#nvda-item-text}

Get the text of the item in the NVDA cursor.

For NVDA this is the same as `lastSpokenPhrase`.

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

**Returns:** [Promise]&#60;[string]&#62; The item's text.

## nvda.itemTextLog() {#nvda-item-text-log}

Get the log of all visited item text for this NVDA instance.

For NVDA this is the same as `spokenPhraseLog`.

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

**Returns:** [Promise]&#60;[Array]&#60;[string]&#62;> The item text log.

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

**Returns:** [Promise]&#60;[string]&#62; The last spoken phrase.

## nvda.next([options]) {#nvda-next}

Move the NVDA cursor to the next location.

Equivalent of executing `Down Arrow`.

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

**Parameters:**

- **Optional:** `options` [CommandOptions] Additional options.

**Returns:** [Promise]&#60;[void]&#62;

## nvda.perform(command[, options]) {#nvda-perform}

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

- `command` [WindowsKeyCodeCommand] | [WindowsKeystrokeCommand] NVDA keyboard command.
- **Optional:** `options` [CommandOptions] Additional options.

**Returns:** [Promise]&#60;[void]&#62;

## nvda.press(key[, options]) {#nvda-press}

Press a key on the focused item.

`key` can specify the intended [keyboardEvent.key](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key)
value or a single character to generate the text for. A superset of the `key` values can be found [on the MDN key values page](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values). Examples of the keys are:

<p><kbd>F1</kbd> - <kbd>F20</kbd>, <kbd>Digit0</kbd> - <kbd>Digit9</kbd>, <kbd>KeyA</kbd> - <kbd>KeyZ</kbd>, <kbd>Backquote</kbd>, <kbd>Minus</kbd>, <kbd>Equal</kbd>, <kbd>Backslash</kbd>, <kbd>Backspace</kbd>, <kbd>Tab</kbd>,
<kbd>Delete</kbd>, <kbd>Escape</kbd>, <kbd>ArrowDown</kbd>, <kbd>End</kbd>, <kbd>Enter</kbd>, <kbd>Home</kbd>, <kbd>Insert</kbd>, <kbd>PageDown</kbd>, <kbd>PageUp</kbd>, <kbd>ArrowRight</kbd>, <kbd>ArrowUp</kbd>, etc.</p>

See [WindowsKeyCodes] for the full range of available keys.

Following modification shortcuts are also supported: <kbd>Shift</kbd>, <kbd>Control</kbd>, <kbd>Alt</kbd>.

See [WindowsModifiers] for the full range of available modifiers.

Holding down <kbd>Shift</kbd> will type the text that corresponds to the `key` in the upper case.

If `key` is a single character, it is case-sensitive, so the values <kbd>a</kbd> and <kbd>A</kbd> will generate different respective texts.

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

- `key` [string] Name of the key to press or a character to generate, such as <kbd>ArrowLeft</kbd> or <kbd>a</kbd>.
- **Optional:** `options` [CommandOptions] Additional options.

**Returns:** [Promise]&#60;[void]&#62;

## nvda.previous([options]) {#nvda-previous}

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

**Parameters:**

- **Optional:** `options` [CommandOptions] Additional options.

**Returns:** [Promise]&#60;[void]&#62;

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

**Returns:** [Promise]&#60;[Array]&#60;[string]&#62;> The spoken phrase log.

## nvda.start([options]) {#nvda-start}

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

**Parameters:**

- **Optional:** `options` [CommandOptions] Additional options.

**Returns:** [Promise]&#60;[void]&#62;

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

**Returns:** [Promise]&#60;[void]&#62;

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

**Returns:** [Promise]&#60;[void]&#62;

## nvda.type(text[, options]) {#nvda-type}

Type text into the focused item.

To press a special key, like <kbd>Control</kbd> or <kbd>ArrowDown</kbd>, use [`nvda.press(key[, options])`](./class-nvda#nvda-press).

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

- `text` [string] Text to type into the focused item.
- **Optional:** `options` [CommandOptions] Additional options.

**Returns:** [Promise]&#60;[void]&#62;

[clickoptions]: ./class-click-options "ClickOptions"
[commandoptions]: ./class-command-options "CommandOptions"
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
