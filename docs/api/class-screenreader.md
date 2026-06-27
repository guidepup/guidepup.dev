---
title: "ScreenReader"
---

**Implements:** [IScreenReader]

A ScreenReader instance can be used to launch and control the default screen reader for the environment: VoiceOver for MacOS and NVDA for Windows.

Here's a typical example using a [ScreenReader] instance:

```ts
import { screenReader } from "@guidepup/guidepup";

(async () => {
  // Start the screen reader.
  await screenReader.start();

  // Move to the next item.
  await screenReader.next();

  // Stop the screen reader.
  await screenReader.stop();
})();
```

See also:

- [NVDA]
- [VoiceOver]

**Contents:**

- [screenReader.name](./class-screenreader#screenreader-name)
- [screenReader.act([options])](./class-screenreader#screenreader-act)
- [screenReader.clearItemTextLog()](./class-screenreader#screenreader-clear-item-text-log)
- [screenReader.clearSpokenPhraseLog()](./class-screenreader#screenreader-clear-spoken-phrase-log)
- [screenReader.click([options])](./class-screenreader#screenreader-click)
- [screenReader.default()](./class-screenreader#screenreader-default)
- [screenReader.detect()](./class-screenreader#screenreader-detect)
- [screenReader.interact([options])](./class-screenreader#screenreader-interact)
- [screenReader.itemText()](./class-screenreader#screenreader-item-text)
- [screenReader.itemTextLog()](./class-screenreader#screenreader-item-text-log)
- [screenReader.lastSpokenPhrase()](./class-screenreader#screenreader-last-spoken-phrase)
- [screenReader.next([options])](./class-screenreader#screenreader-next)
- [screenReader.perform(command, [options])](./class-screenreader#screenreader-perform)
- [screenReader.press(key, [options])](./class-screenreader#screenreader-press)
- [screenReader.previous([options])](./class-screenreader#screenreader-previous)
- [screenReader.spokenPhraseLog()](./class-screenreader#screenreader-spoken-phrase-log)
- [screenReader.start([options])](./class-screenreader#screenreader-start)
- [screenReader.stop([options])](./class-screenreader#screenreader-stop)
- [screenReader.stopInteracting([options])](./class-screenreader#screenreader-stop-interacting)
- [screenReader.type(text[, options])](./class-screenreader#screenreader-type)

## screenReader.name {#screenreader-name}

Getter for the screen reader name, either "NVDA" or "VoiceOver".

```ts
import { screenReader } from "@guidepup/guidepup";

console.log(screenReader.name); // "NVDA" or "VoiceOver"
```

**Returns:** [string]

## screenReader.act([options]) {#screenreader-act}

Perform the default action for the item in the screen reader cursor.

```ts
import { screenReader } from "@guidepup/guidepup";

(async () => {
  // Start the screen reader.
  await screenReader.start();

  // Move to the next item.
  await screenReader.next();

  // Perform the default action for the item.
  await screenReader.act();

  // Stop the screen reader.
  await screenReader.stop();
})();
```

**Parameters:**

- **Optional:** `options` [CommandOptions] Additional options.

**Returns:** [Promise]&#60;[void]&#62;

## screenReader.clearItemTextLog() {#screenreader-clear-item-text-log}

Clear the log of all visited item text for this screen reader instance.

```ts
import { screenReader } from "@guidepup/guidepup";

(async () => {
  // Start the screen reader.
  await screenReader.start();

  // ... perform some commands.

  // Clear the item text log.
  await screenReader.clearItemTextLog();

  // Stop the screen reader.
  await screenReader.stop();
})();
```

**Returns:** [Promise]&#60;[void]&#62;

## screenReader.clearSpokenPhraseLog() {#screenreader-clear-spoken-phrase-log}

Clear the log of all spoken phrases for this screen reader instance.

```ts
import { screenReader } from "@guidepup/guidepup";

(async () => {
  // Start the screen reader.
  await screenReader.start();

  // ... perform some commands.

  // Clear the spoken phrase log.
  await screenReader.clearSpokenPhraseLog();

  // Stop the screen reader.
  await screenReader.stop();
})();
```

**Returns:** [Promise]&#60;[void]&#62;

## screenReader.click([options]) {#screenreader-click}

Click the mouse.

```ts
import { screenReader } from "@guidepup/guidepup";

(async () => {
  // Start the screen reader.
  await screenReader.start();

  // Left-click the mouse.
  await screenReader.click();

  // Left-click the mouse using specific options.
  await screenReader.click({ button: "left", clickCount: 1 });

  // Double-right-click the mouse.
  await screenReader.click({ button: "right", clickCount: 2 });

  // Stop the screen reader.
  await screenReader.stop();
})();
```

**Parameters:**

- **Optional:** `options` [ClickOptions] Click options.

**Returns:** [Promise]&#60;[void]&#62;

## screenReader.default() {#screenreader-default}

Detect whether the screen reader is the default screen reader for the current OS.

When using a ScreenReader instance this will always return `true`.

```ts
import { screenReader } from "@guidepup/guidepup";

(() => {
  const isDefaultScreenReader = screenReader.default();

  console.log(isDefaultScreenReader); // true
})();
```

**Returns:** [Promise]&#60;[boolean]&#62;

## screenReader.detect() {#screenreader-detect}

Detect whether the screen reader is supported for the current OS.

When using a ScreenReader instance this will always return `true`.

```ts
import { screenReader } from "@guidepup/guidepup";

(async () => {
  const isSupportedScreenReader = await screenReader.detect();

  console.log(isSupportedScreenReader);
})();
```

**Returns:** [Promise]&#60;[boolean]&#62;

## screenReader.interact([options]) {#screenreader-interact}

Interact with the item under the screen reader cursor.

Provided as a compatibility layer for VoiceOver; NVDA does not require users to perform an additional command to interact with the item in the NVDA cursor.

```ts
import { screenReader } from "@guidepup/guidepup";

(async () => {
  // Start the screen reader.
  await screenReader.start();

  // Move to the next item.
  await screenReader.next();

  // Interact with the item - does nothing on NVDA.
  await screenReader.interact();

  // Stop the screen reader.
  await screenReader.stop();
})();
```

**Parameters:**

- **Optional:** `options` [CommandOptions] Additional options.

**Returns:** [Promise]&#60;[void]&#62;

## screenReader.itemText() {#screenreader-item-text}

Get the text of the item in the screen reader cursor.

```ts
import { screenReader } from "@guidepup/guidepup";

(async () => {
  // Start the screen reader.
  await screenReader.start();

  // Move to the next item.
  await screenReader.next();

  // Get the text (if any) for the item currently in focus by the screen reader
  // cursor.
  const itemText = await screenReader.itemText();
  console.log(itemText);

  // Stop the screen reader.
  await screenReader.stop();
})();
```

**Returns:** [Promise]&#60;[string]&#62; The item's text.

## screenReader.itemTextLog() {#screenreader-item-text-log}

Get the log of all visited item text for this screen reader instance.

```ts
import { screenReader } from "@guidepup/guidepup";

(async () => {
  // Start the screen reader.
  await screenReader.start();

  // Move through several items.
  for (let i = 0; i < 10; i++) {
    await screenReader.next();
  }

  // Get the text (if any) for all the items visited by the screen reader cursor.
  const itemTextLog = await screenReader.itemTextLog();
  console.log(itemTextLog);

  // Stop the screen reader.
  await screenReader.stop();
})();
```

**Returns:** [Promise]&#60;[Array]&#60;[string]&#62;> The item text log.

## screenReader.lastSpokenPhrase() {#screenreader-last-spoken-phrase}

Get the last spoken phrase.

```ts
import { screenReader } from "@guidepup/guidepup";

(async () => {
  // Start the screen reader.
  await screenReader.start();

  // Move to the next item.
  await screenReader.next();

  // Get the phrase spoken by the screen reader from moving to the next item above.
  const lastSpokenPhrase = await screenReader.lastSpokenPhrase();
  console.log(lastSpokenPhrase);

  // Stop the screen reader.
  await screenReader.stop();
})();
```

**Returns:** [Promise]&#60;[string]&#62; The last spoken phrase.

## screenReader.next([options]) {#screenreader-next}

Move the screen reader cursor to the next location.

```ts
import { screenReader } from "@guidepup/guidepup";

(async () => {
  // Start the screen reader.
  await screenReader.start();

  // Move to the next item.
  await screenReader.next();

  // Stop the screen reader.
  await screenReader.stop();
})();
```

**Parameters:**

- **Optional:** `options` [CommandOptions] Additional options.

**Returns:** [Promise]&#60;[void]&#62;

## screenReader.perform(command[, options]) {#screenreader-perform}

Perform a screen reader command.

```ts
import {
  NVDAKeyCodeCommands,
  voiceOverKeyCodeCommands,
} from "@guidepup/guidepup";

(async () => {
  // Start the screen reader.
  await screenReader.start();

  // Type using a custom keystroke command.
  await screenReader.perform({ characters: "my-username" });

  if (screenReader.name === "NVDA") {
    await screenReader.perform(NVDAKeyCodeCommands.performDefaultActionForItem);
  } else {
    await screenReader.perform(
      voiceOverKeyCodeCommands.performDefaultActionForItem,
    );
  }

  // Stop the screen reader.
  await screenReader.stop();
})();
```

**Parameters:**

- `command` [any] Screen reader command to execute.
- **Optional:** `options` [CommandOptions] Additional options.

**Returns:** [Promise]&#60;[void]&#62;

## screenReader.press(key[, options]) {#screenreader-press}

Press a key on the focused item.

`key` can specify the intended [`keyboardEvent.key`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key)
value or a single character to generate the text for. A superset of the `key` values can be found
[on the MDN key values page](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values). Examples of the keys are:

<p><kbd>F1</kbd> - <kbd>F20</kbd>, <kbd>Digit0</kbd> - <kbd>Digit9</kbd>, <kbd>KeyA</kbd> - <kbd>KeyZ</kbd>, <kbd>Backquote</kbd>, <kbd>Minus</kbd>, <kbd>Equal</kbd>, <kbd>Backslash</kbd>, <kbd>Backspace</kbd>, <kbd>Tab</kbd>,
<kbd>Delete</kbd>, <kbd>Escape</kbd>, <kbd>ArrowDown</kbd>, <kbd>End</kbd>, <kbd>Enter</kbd>, <kbd>Home</kbd>, <kbd>Insert</kbd>, <kbd>PageDown</kbd>, <kbd>PageUp</kbd>, <kbd>ArrowRight</kbd>, <kbd>ArrowUp</kbd>, etc.</p>

Following modification shortcuts are also supported: <kbd>Shift</kbd>, <kbd>Control</kbd>, <kbd>Alt</kbd>, <kbd>Meta</kbd>.

Holding down <kbd>Shift</kbd> will type the text that corresponds to the `key` in the upper case.

If `key` is a single character, it is case-sensitive, so the values <kbd>a</kbd> and <kbd>A</kbd> will generate different respective
texts.

Shortcuts such as `key: "Control+f"` or `key: "Control+Shift+f"` are supported as well. When specified with the
modifier, modifier is pressed and being held while the subsequent key is being pressed.

```ts
import { screenReader } from "@guidepup/guidepup";

(async () => {
  // Start the screen reader.
  await screenReader.start();

  // Open a find text modal.
  await screenReader.press("Control+f");

  // Stop the screen reader.
  await screenReader.stop();
})();
```

**Parameters:**

- `key` [string] Name of the key to press or a character to generate, such as <kbd>ArrowLeft</kbd> or <kbd>a</kbd>.
- **Optional:** `options` [KeyboardOptions] Additional options.

**Returns:** [Promise]&#60;[void]&#62;

## screenReader.previous([options]) {#screenreader-previous}

Move the screen reader cursor to the previous location.

```ts
import { screenReader } from "@guidepup/guidepup";

(async () => {
  // Start the screen reader.
  await screenReader.start();

  // Move to the previous item.
  await screenReader.previous();

  // Stop the screen reader.
  await screenReader.stop();
})();
```

**Parameters:**

- **Optional:** `options` [CommandOptions] Additional options.

**Returns:** [Promise]&#60;[void]&#62;

## screenReader.spokenPhraseLog() {#screenreader-spoken-phrase-log}

Get the log of all spoken phrases for this screen reader instance.

```ts
import { screenReader } from "@guidepup/guidepup";

(async () => {
  // Start the screen reader.
  await screenReader.start();

  // Move through several items.
  for (let i = 0; i < 10; i++) {
    await screenReader.next();
  }

  // Get the phrase spoken by the screen reader from moving through the items above.
  const spokenPhraseLog = await screenReader.spokenPhraseLog();
  console.log(spokenPhraseLog);

  // Stop the screen reader.
  await screenReader.stop();
})();
```

**Returns:** [Promise]&#60;[Array]&#60;[string]&#62;> The spoken phrase log.

## screenReader.start([options]) {#screenreader-start}

Turn the screen reader on.

```ts
import { screenReader } from "@guidepup/guidepup";

(async () => {
  // Start the screen reader.
  await screenReader.start();

  // ... perform some commands.

  // Stop the screen reader.
  await screenReader.stop();
})();
```

**Parameters:**

- **Optional:** `options` [CommandOptions] Additional options.

**Returns:** [Promise]&#60;[void]&#62;

## screenReader.stop([options]) {#screenreader-stop}

Turn the screen reader off.

```ts
import { screenReader } from "@guidepup/guidepup";

(async () => {
  // Start the screen reader.
  await screenReader.start();

  // ... perform some commands.

  // Stop the screen reader.
  await screenReader.stop();
})();
```

**Parameters:**

- **Optional:** `options` [CommandOptions] Additional options.

**Returns:** [Promise]&#60;[void]&#62;

## screenReader.stopInteracting([options]) {#screenreader-stop-interacting}

Stop interacting with the current item.

Provided as a compatibility layer for VoiceOver; NVDA does not require users to perform an additional command to stop interacting with the item in the NVDA cursor.

```ts
import { screenReader } from "@guidepup/guidepup";

(async () => {
  // Start the screen reader.
  await screenReader.start();

  // Interact with the item - does nothing on NVDA.
  await screenReader.interact();

  // ... perform some commands.

  // Stop interacting with the item - does nothing on NVDA.
  await screenReader.stopInteracting();

  // Stop the screen reader.
  await screenReader.stop();
})();
```

**Parameters:**

- **Optional:** `options` [CommandOptions] Additional options.

**Returns:** [Promise]&#60;[void]&#62;

## screenReader.type(text[, options]) {#screenreader-type}

Type text into the focused item.

To press a special key, like <kbd>Control</kbd> or <kbd>ArrowDown</kbd>, use [`screenReader.press(key[, options])`](./class-screenreader#screenreader-press).

```ts
import { screenReader } from "@guidepup/guidepup";

(async () => {
  // Start the screen reader.
  await screenReader.start();

  // Type a username and key Enter.
  await screenReader.type("my-username");
  await screenReader.press("Enter");

  // Stop the screen reader.
  await screenReader.stop();
})();
```

**Parameters:**

- `text` [string] Text to type into the focused item.
- **Optional:** `options` [CommandOptions] Additional options.

**Returns:** [Promise]&#60;[void]&#62;

[clickoptions]: ./class-click-options "ClickOptions"
[commandoptions]: ./class-command-options "CommandOptions"
[keyboardoptions]: ./class-keyboard-options "KeyboardOptions"
[macoskeyboardcommand]: ./class-macos-keyboard-command "MacOSKeyboardCommand"
[macoskeycodecommand]: ./class-macos-key-code-command "MacOSKeyCodeCommand"
[macoskeycodes]: ./class-macos-key-codes "MacOSKeyCodes"
[macoskeystrokecommand]: ./class-macos-keystroke-command "MacOSKeystrokeCommand"
[macosmodifiers]: ./class-macos-modifiers "MacOSModifiers"
[nvda]: ./class-nvda "NVDA"
[nvdakeycodecommands]: ./class-nvda-key-code-commands "NVDAKeyCodeCommands"
[iscreenreader]: ./class-iscreenreader "IScreenReader"
[screenreader]: ./class-screenreader "ScreenReader"
[voiceover]: ./class-voiceover "VoiceOver"
[windowskeycodecommand]: ./class-windows-key-code-command "WindowsKeyCodeCommand"
[windowskeycodes]: ./class-windows-key-codes "WindowsKeyCodes"
[windowskeystrokecommand]: ./class-windows-keystroke-command "WindowsKeystrokeCommand"
[array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array"
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean "boolean"
[promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String "string"
[void]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void"
[any]: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any "any"
