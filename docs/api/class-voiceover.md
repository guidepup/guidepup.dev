---
title: "VoiceOver"
---

**Implements:** [ScreenReader]

A VoiceOver instance can be used to launch and control VoiceOver.

Here's a typical example using a [VoiceOver] instance:

```ts
import { voiceOver } from "@guidepup/guidepup";

(async () => {
  // Start VoiceOver.
  await voiceOver.start();

  // Move to the next item.
  await voiceOver.next();

  // Stop VoiceOver.
  await voiceOver.stop();
})();
```

**Contents:**

- [voiceOver.commanderCommands](./class-voiceover#voiceover-commander-commands)
- [voiceOver.keyboardCommands](./class-voiceover#voiceover-keyboard-commands)
- [voiceOver.act([options])](./class-voiceover#voiceover-act)
- [voiceOver.clearItemTextLog()](./class-voiceover#voiceover-clear-item-text-log)
- [voiceOver.clearSpokenPhraseLog()](./class-voiceover#voiceover-clear-spoken-phrase-log)
- [voiceOver.click([options])](./class-voiceover#voiceover-click)
- [voiceOver.copyLastSpokenPhrase([options])](./class-voiceover#voiceover-copy-last-spoken-phrase)
- [voiceOver.default()](./class-voiceover#voiceover-default)
- [voiceOver.detect()](./class-voiceover#voiceover-detect)
- [voiceOver.interact([options])](./class-voiceover#voiceover-interact)
- [voiceOver.itemText()](./class-voiceover#voiceover-item-text)
- [voiceOver.itemTextLog()](./class-voiceover#voiceover-item-text-log)
- [voiceOver.lastSpokenPhrase()](./class-voiceover#voiceover-last-spoken-phrase)
- [voiceOver.next([options])](./class-voiceover#voiceover-next)
- [voiceOver.perform(command[, options])](./class-voiceover#voiceover-perform)
- [voiceOver.press(key[, options])](./class-voiceover#voiceover-press)
- [voiceOver.previous([options])](./class-voiceover#voiceover-previous)
- [voiceOver.saveLastSpokenPhrase([options])](./class-voiceover#voiceover-save-last-spoken-phrase)
- [voiceOver.spokenPhraseLog()](./class-voiceover#voiceover-spoken-phrase-log)
- [voiceOver.start([options])](./class-voiceover#voiceover-start)
- [voiceOver.stop([options])](./class-voiceover#voiceover-stop)
- [voiceOver.stopInteracting([options])](./class-voiceover#voiceover-stop-interacting)
- [voiceOver.takeCursorScreenshot([options])](./class-voiceover#voiceover-take-cursor-screenshot)
- [voiceOver.type(text[, options])](./class-voiceover#voiceover-type)

## voiceOver.commanderCommands {#voiceover-commander-commands}

Getter for all VoiceOver commander commands.

Use with the VoiceOver `perform` command to invoke a Commander action:

```ts
import { voiceOver } from "@guidepup/guidepup";

(async () => {
  // Start VoiceOver.
  await voiceOver.start();

  // Move down.
  await voiceOver.perform(voiceOver.commanderCommands.MOVE_DOWN);

  // Stop VoiceOver.
  await voiceOver.stop();
})();
```

**Returns:** [VoiceOverCommanderCommands]

## voiceOver.keyboardCommands {#voiceover-keyboard-commands}

Getter for all VoiceOver keyboard commands.

Use with the VoiceOver `perform` command to invoke a keyboard action:

```ts
import { voiceOver } from "@guidepup/guidepup";

(async () => {
  // Start VoiceOver.
  await voiceOver.start();

  // Move to the next item.
  await voiceOver.perform(voiceOver.keyboardCommands.moveToNext);

  // Stop VoiceOver.
  await voiceOver.stop();
})();
```

**Returns:** [voiceOverKeyCodeCommands]

## voiceOver.act([options]) {#voiceover-act}

Perform the default action for the item in the VoiceOver cursor.

Equivalent of executing `VO-Space bar`.

```ts
import { voiceOver } from "@guidepup/guidepup";

(async () => {
  // Start VoiceOver.
  await voiceOver.start();

  // Move to the next item.
  await voiceOver.next();

  // Perform the default action for the item.
  await voiceOver.act();

  // Stop VoiceOver.
  await voiceOver.stop();
})();
```

**Parameters:**

- **Optional:** `options` [CommandOptions] Additional options.

**Returns:** [Promise]&#60;[void]&#62;

## voiceOver.clearItemTextLog() {#voiceover-clear-item-text-log}

Clear the log of all visited item text for this VoiceOver instance.

For VoiceOver this is distinct from `spokenPhraseLog`.

```ts
import { voiceOver } from "@guidepup/guidepup";

(async () => {
  // Start VoiceOver.
  await voiceOver.start();

  // ... perform some commands.

  // Clear the item text log.
  await voiceOver.clearItemTextLog();

  // Stop VoiceOver.
  await voiceOver.stop();
})();
```

**Returns:** [Promise]&#60;[void]&#62;

## voiceOver.clearSpokenPhraseLog() {#voiceover-clear-spoken-phrase-log}

Clear the log of all spoken phrases for this VoiceOver instance.

```ts
import { voiceOver } from "@guidepup/guidepup";

(async () => {
  // Start VoiceOver.
  await voiceOver.start();

  // ... perform some commands.

  // Clear the spoken phrase log.
  await voiceOver.clearSpokenPhraseLog();

  // Stop VoiceOver.
  await voiceOver.stop();
})();
```

**Returns:** [Promise]&#60;[void]&#62;

## voiceOver.click([options]) {#voiceover-click}

Click the mouse.

```ts
import { voiceOver } from "@guidepup/guidepup";

(async () => {
  // Start VoiceOver.
  await voiceOver.start();

  // Left-click the mouse.
  await voiceOver.click();

  // Left-click the mouse using specific options.
  await voiceOver.click({ button: "left", clickCount: 1 });

  // Double-right-click the mouse.
  await voiceOver.click({ button: "right", clickCount: 2 });

  // Stop VoiceOver.
  await voiceOver.stop();
})();
```

**Parameters:**

- **Optional:** `options` [ClickOptions] Click options.

**Returns:** [Promise]&#60;[void]&#62;

## voiceOver.copyLastSpokenPhrase([options]) {#voiceover-copy-last-spoken-phrase}

Copy the last spoken phrase to the Clipboard (also called the "Pasteboard").

This command is specific to the VoiceOver screen reader.

```ts
import { voiceOver } from "@guidepup/guidepup";

(async () => {
  // Start VoiceOver.
  await voiceOver.start();

  // Move to the next item.
  await voiceOver.next();

  // Copy the phrase spoken by VoiceOver from moving to the next item above to
  // the Clipboard.
  await voiceOver.copyLastSpokenPhrase();

  // Stop VoiceOver.
  await voiceOver.stop();
})();
```

**Parameters:**

- **Optional:** `options` [CommandOptions] Additional options.

**Returns:** [Promise]&#60;[void]&#62;

## voiceOver.default() {#voiceover-default}

Detect whether VoiceOver is the default screen reader for the current OS:

- `false` for Windows
- `true` for MacOS
- `false` for Linux

```ts
import { voiceOver } from "@guidepup/guidepup";

(async () => {
  const isVoiceOverDefaultScreenReader = await voiceOver.default();

  console.log(isVoiceOverDefaultScreenReader);
})();
```

**Returns:** [Promise]&#60;[boolean]&#62;

## voiceOver.detect() {#voiceover-detect}

Detect whether VoiceOver is supported for the current OS:

- `false` for Windows
- `true` for MacOS
- `false` for Linux

```ts
import { voiceOver } from "@guidepup/guidepup";

(async () => {
  const isVoiceOverSupportedScreenReader = await voiceOver.detect();

  console.log(isVoiceOverSupportedScreenReader);
})();
```

**Returns:** [Promise]&#60;[boolean]&#62;

## voiceOver.interact([options]) {#voiceover-interact}

Interact with the item under the VoiceOver cursor.

Equivalent of executing `VO-Shift-Down Arrow`.

```ts
import { voiceOver } from "@guidepup/guidepup";

(async () => {
  // Start VoiceOver.
  await voiceOver.start();

  // Move to the next item.
  await voiceOver.next();

  // Interact with the item.
  await voiceOver.interact();

  // Stop VoiceOver.
  await voiceOver.stop();
})();
```

**Parameters:**

- **Optional:** `options` [CommandOptions] Additional options.

**Returns:** [Promise]&#60;[void]&#62;

## voiceOver.itemText() {#voiceover-item-text}

Get the text of the item in the VoiceOver cursor.

```ts
import { voiceOver } from "@guidepup/guidepup";

(async () => {
  // Start VoiceOver.
  await voiceOver.start();

  // Move to the next item.
  await voiceOver.next();

  // Get the text (if any) for the item currently in focus by the VoiceOver
  // cursor.
  const itemText = await voiceOver.itemText();
  console.log(itemText);

  // Stop VoiceOver.
  await voiceOver.stop();
})();
```

**Returns:** [Promise]&#60;[string]&#62; The item's text.

## voiceOver.itemTextLog() {#voiceover-item-text-log}

Get the log of all visited item text for this VoiceOver instance.

```ts
import { voiceOver } from "@guidepup/guidepup";

(async () => {
  // Start VoiceOver.
  await voiceOver.start();

  // Move through several items.
  for (let i = 0; i < 10; i++) {
    await voiceOver.next();
  }

  // Get the text (if any) for all the items visited by the VoiceOver cursor.
  const itemTextLog = await voiceOver.itemTextLog();
  console.log(itemTextLog);

  // Stop VoiceOver.
  await voiceOver.stop();
})();
```

**Returns:** [Promise]&#60;[Array]&#60;[string]&#62;> The item text log.

## voiceOver.lastSpokenPhrase() {#voiceover-last-spoken-phrase}

Get the last spoken phrase.

```ts
import { voiceOver } from "@guidepup/guidepup";

(async () => {
  // Start VoiceOver.
  await voiceOver.start();

  // Move to the next item.
  await voiceOver.next();

  // Get the phrase spoken by VoiceOver from moving to the next item above.
  const lastSpokenPhrase = await voiceOver.lastSpokenPhrase();
  console.log(lastSpokenPhrase);

  // Stop VoiceOver.
  await voiceOver.stop();
})();
```

**Returns:** [Promise]&#60;[string]&#62; The last spoken phrase.

## voiceOver.next([options]) {#voiceover-next}

Move the VoiceOver cursor to the next location.

Equivalent of executing `VO-Right Arrow`.

```ts
import { voiceOver } from "@guidepup/guidepup";

(async () => {
  // Start VoiceOver.
  await voiceOver.start();

  // Move to the next item.
  await voiceOver.next();

  // Stop VoiceOver.
  await voiceOver.stop();
})();
```

**Parameters:**

- **Optional:** `options` [CommandOptions] Additional options.

**Returns:** [Promise]&#60;[void]&#62;

## voiceOver.perform(command[, options]) {#voiceover-perform}

Perform a VoiceOver command.

The command can be a [MacOSKeyCodeCommand], [MacOSKeystrokeCommand], or [VoiceOverCommanderCommands].

```ts
import { voiceOver, VoiceOverCommanderCommands } from "@guidepup/guidepup";

(async () => {
  // Start VoiceOver.
  await voiceOver.start();

  // Type using a custom keystroke command.
  await voiceOver.perform({ characters: "my-username" });

  // Keyboard commands available on the VoiceOver instance.
  await voiceOver.perform(
    voiceOver.keyboardCommands.performDefaultActionForItem
  );

  // Commander commands available on the VoiceOver instance.
  await voiceOver.perform(voiceOver.commanderCommands.MOVE_DOWN);

  // Stop VoiceOver.
  await voiceOver.stop();
})();
```

**Parameters:**

- `command` [MacOSKeyboardCommand] | [VoiceOverCommanderCommands] VoiceOver keyboard command or commander command to execute.
- **Optional:** `options` [CommandOptions] Additional options.

**Returns:** [Promise]&#60;[void]&#62;

## voiceOver.press(key[, options]) {#voiceover-press}

Press a key on the focused item.

`key` can specify the intended [`keyboardEvent.key`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key)
value or a single character to generate the text for. A superset of the `key` values can be found [on the MDN key values page](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values). Examples of the keys are:

<p><kbd>F1</kbd> - <kbd>F20</kbd>, <kbd>Digit0</kbd> - <kbd>Digit9</kbd>, <kbd>KeyA</kbd> - <kbd>KeyZ</kbd>, <kbd>Backquote</kbd>, <kbd>Minus</kbd>, <kbd>Equal</kbd>, <kbd>Backslash</kbd>, <kbd>Backspace</kbd>, <kbd>Tab</kbd>,
<kbd>Delete</kbd>, <kbd>Escape</kbd>, <kbd>ArrowDown</kbd>, <kbd>End</kbd>, <kbd>Enter</kbd>, <kbd>Home</kbd>, <kbd>Insert</kbd>, <kbd>PageDown</kbd>, <kbd>PageUp</kbd>, <kbd>ArrowRight</kbd>, <kbd>ArrowUp</kbd>, etc.</p>

See [MacOSKeyCodes] for the full range of available keys.

Following modification shortcuts are also supported: <kbd>Shift</kbd>, <kbd>Control</kbd>, <kbd>Alt</kbd>, <kbd>Meta</kbd>, <kbd>Command</kbd>.

See [MacOSModifiers] for the full range of available modifiers.

Holding down <kbd>Shift</kbd> will type the text that corresponds to the `key` in the upper case.

If `key` is a single character, it is case-sensitive, so the values <kbd>a</kbd> and <kbd>A</kbd> will generate different respective texts.

Shortcuts such as `key: "Command+f"` or `key: "Command+Shift+f"` are supported as well. When specified with the modifier, modifier is pressed and being held while the subsequent key is being pressed.

```ts
import { voiceOver } from "@guidepup/guidepup";

(async () => {
  // Start VoiceOver.
  await voiceOver.start();

  // Open a find text modal.
  await voiceOver.press("Command+f");

  // Stop VoiceOver.
  await voiceOver.stop();
})();
```

**Parameters:**

- `key` [string] Name of the key to press or a character to generate, such as <kbd>ArrowLeft</kbd> or <kbd>a</kbd>.
- **Optional:** `options` [KeyboardOptions] Additional options.

**Returns:** [Promise]&#60;[void]&#62;

## voiceOver.previous([options]) {#voiceover-previous}

Move the VoiceOver cursor to the previous location.

Equivalent of executing `VO-Left Arrow`.

```ts
import { voiceOver } from "@guidepup/guidepup";

(async () => {
  // Start VoiceOver.
  await voiceOver.start();

  // Move to the previous item.
  await voiceOver.previous();

  // Stop VoiceOver.
  await voiceOver.stop();
})();
```

**Parameters:**

- **Optional:** `options` [CommandOptions] Additional options.

**Returns:** [Promise]&#60;[void]&#62;

## voiceOver.saveLastSpokenPhrase([options]) {#voiceover-save-last-spoken-phrase}

Save the last spoken phrase and the crash log to a file on the desktop for troubleshooting.

This command is specific to the VoiceOver screen reader.

```ts
import { voiceOver } from "@guidepup/guidepup";

(async () => {
  // Start VoiceOver.
  await voiceOver.start();

  // Move to the next item.
  await voiceOver.next();

  // Save the phrase spoken by VoiceOver from moving to the next item above to
  // a file on the desktop.
  await voiceOver.saveLastSpokenPhrase();

  // Stop VoiceOver.
  await voiceOver.stop();
})();
```

**Parameters:**

- **Optional:** `options` [CommandOptions] Additional options.

**Returns:** [Promise]&#60;[void]&#62;

## voiceOver.spokenPhraseLog() {#voiceover-spoken-phrase-log}

Get the log of all spoken phrases for this VoiceOver instance.

```ts
import { voiceOver } from "@guidepup/guidepup";

(async () => {
  // Start VoiceOver.
  await voiceOver.start();

  // Move through several items.
  for (let i = 0; i < 10; i++) {
    await voiceOver.next();
  }

  // Get the phrase spoken by VoiceOver from moving through the items above.
  const spokenPhraseLog = await voiceOver.spokenPhraseLog();
  console.log(spokenPhraseLog);

  // Stop VoiceOver.
  await voiceOver.stop();
})();
```

**Returns:** [Promise]&#60;[Array]&#60;[string]&#62;> The spoken phrase log.

## voiceOver.start([options]) {#voiceover-start}

Turn VoiceOver on.

```ts
import { voiceOver } from "@guidepup/guidepup";

(async () => {
  // Start VoiceOver.
  await voiceOver.start();

  // ... perform some commands.

  // Stop VoiceOver.
  await voiceOver.stop();
})();
```

**Parameters:**

- **Optional:** `options` [CommandOptions] Additional options.

**Returns:** [Promise]&#60;[void]&#62;

## voiceOver.stop([options]) {#voiceover-stop}

Turn VoiceOver off.

```ts
import { voiceOver } from "@guidepup/guidepup";

(async () => {
  // Start VoiceOver.
  await voiceOver.start();

  // ... perform some commands.

  // Stop VoiceOver.
  await voiceOver.stop();
})();
```

**Parameters:**

- **Optional:** `options` [CommandOptions] Additional options.

**Returns:** [Promise]&#60;[void]&#62;

## voiceOver.stopInteracting([options]) {#voiceover-stop-interacting}

Stop interacting with the current item.

Equivalent of executing `VO-Shift-Up Arrow`.

```ts
import { voiceOver } from "@guidepup/guidepup";

(async () => {
  // Start VoiceOver.
  await voiceOver.start();

  // Interact with the item.
  await voiceOver.interact();

  // ... perform some commands.

  // Stop interacting with the item.
  await voiceOver.stopInteracting();

  // Stop VoiceOver.
  await voiceOver.stop();
})();
```

**Parameters:**

- **Optional:** `options` [CommandOptions] Additional options.

**Returns:** [Promise]&#60;[void]&#62;

## voiceOver.takeCursorScreenshot([options]) {#voiceover-take-cursor-screenshot}

Takes a screenshot of the item focussed in the VoiceOver cursor and returns the path to screenshot file.

This command is specific to the VoiceOver screen reader.

```ts
import { voiceOver } from "@guidepup/guidepup";

(async () => {
  // Start VoiceOver.
  await voiceOver.start();

  // Move to the next item.
  await voiceOver.next();

  // Take a screenshot of the item focussed in the VoiceOver cursor.
  const screenshotFile = await voiceOver.takeCursorScreenshot();
  console.log(screenshotFile);

  // Stop VoiceOver.
  await voiceOver.stop();
})();
```

**Parameters:**

- **Optional:** `options` [CommandOptions] Additional options.

**Returns:** [Promise]&#60;[string]&#62; The path to the screenshot file.

## voiceOver.type(text[, options]) {#voiceover-type}

Type text into the focused item.

To press a special key, like <kbd>Control</kbd> or <kbd>ArrowDown</kbd>, use [`voiceOver.press(key[, options])`](./class-voiceover#voiceover-press).

```ts
import { voiceOver } from "@guidepup/guidepup";

(async () => {
  // Start VoiceOver.
  await voiceOver.start();

  // Type a username and key Enter.
  await voiceOver.type("my-username");
  await voiceOver.press("Enter");

  // Stop VoiceOver.
  await voiceOver.stop();
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
[screenreader]: ./class-screenreader "ScreenReader"
[voiceover]: ./class-voiceover "VoiceOver"
[voiceovercommandercommands]: ./class-voiceover-commander-commands "VoiceOverCommanderCommands"
[voiceoverkeycodecommands]: ./class-voiceover-key-code-commands "voiceOverKeyCodeCommands"
[array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array"
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean "boolean"
[promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String "string"
[void]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void"
