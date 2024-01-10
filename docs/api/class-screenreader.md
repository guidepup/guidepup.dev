---
title: "ScreenReader"
---

Abstract base interface for screen reader classes.

See also:

- [NVDA]
- [VoiceOver]

**Contents:**

- [screenReader.act([options])](./class-screenreader#screenreader-act)
- [nvda.clearItemTextLog()](./class-screenreader#screenreader-clear-item-text-log)
- [nvda.clearSpokenPhraseLog()](./class-screenreader#screenreader-clear-spoken-phrase-log)
- [screenReader.click([options])](./class-screenreader#screenreader-click)
- [ScreenReader.default()](./class-screenreader#screenreader-default)
- [ScreenReader.detect()](./class-screenreader#screenreader-detect)
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

## screenReader.act([options]) {#screenreader-act}

Perform the default action for the item in the screen reader cursor.

**Parameters:**

- **Optional:** `options` [CommandOptions] Additional options.

**Returns:** [Promise]&#60;[void]&#62;

## screenReader.clearItemTextLog() {#screenreader-clear-item-text-log}

Clear the log of all visited item text for this screen reader instance.

**Returns:** [Promise]&#60;[void]&#62;

## screenReader.clearSpokenPhraseLog() {#screenreader-clear-spoken-phrase-log}

Clear the log of all spoken phrases for this screen reader instance.

**Returns:** [Promise]&#60;[void]&#62;

## screenReader.click([options]) {#screenreader-click}

Click the mouse.

**Parameters:**

- **Optional:** `options` [ClickOptions] Click options.

**Returns:** [Promise]&#60;[void]&#62;

## ScreenReader.default() {#screenreader-default}

Detect whether the screen reader is the default screen reader for the current OS.

**Returns:** [Promise]&#60;[boolean]&#62;

## ScreenReader.detect() {#screenreader-detect}

Detect whether the screen reader is supported for the current OS.

**Returns:** [Promise]&#60;[boolean]&#62;

## screenReader.interact([options]) {#screenreader-interact}

Interact with the item under the screen reader cursor.

**Parameters:**

- **Optional:** `options` [CommandOptions] Additional options.

**Returns:** [Promise]&#60;[void]&#62;

## screenReader.itemText() {#screenreader-item-text}

Get the text of the item in the screen reader cursor.

**Returns:** [Promise]&#60;[string]&#62; The item's text.

## screenReader.itemTextLog() {#screenreader-item-text-log}

Get the log of all visited item text for this screen reader instance.

**Returns:** [Promise]&#60;[Array]&#60;[string]&#62;> The item text log.

## screenReader.lastSpokenPhrase() {#screenreader-last-spoken-phrase}

Get the last spoken phrase.

**Returns:** [Promise]&#60;[string]&#62; The last spoken phrase.

## screenReader.next([options]) {#screenreader-next}

Move the screen reader cursor to the next location.

**Parameters:**

- **Optional:** `options` [CommandOptions] Additional options.

**Returns:** [Promise]&#60;[void]&#62;

## screenReader.perform(command[, options]) {#screenreader-perform}

Perform a screen reader command.

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

**Parameters:**

- `key` [string] Name of the key to press or a character to generate, such as <kbd>ArrowLeft</kbd> or <kbd>a</kbd>.
- **Optional:** `options` [KeyboardOptions] Additional options.

**Returns:** [Promise]&#60;[void]&#62;

## screenReader.previous([options]) {#screenreader-previous}

Move the screen reader cursor to the previous location.

**Parameters:**

- **Optional:** `options` [CommandOptions] Additional options.

**Returns:** [Promise]&#60;[void]&#62;

## screenReader.spokenPhraseLog() {#screenreader-spoken-phrase-log}

Get the log of all spoken phrases for this screen reader instance.

**Returns:** [Promise]&#60;[Array]&#60;[string]&#62;> The spoken phrase log.

## screenReader.start([options]) {#screenreader-start}

Turn the screen reader on.

**Parameters:**

- **Optional:** `options` [CommandOptions] Additional options.

**Returns:** [Promise]&#60;[void]&#62;

## screenReader.stop([options]) {#screenreader-stop}

Turn the screen reader off.

**Parameters:**

- **Optional:** `options` [CommandOptions] Additional options.

**Returns:** [Promise]&#60;[void]&#62;

## screenReader.stopInteracting([options]) {#screenreader-stop-interacting}

Stop interacting with the current item.

**Parameters:**

- **Optional:** `options` [CommandOptions] Additional options.

**Returns:** [Promise]&#60;[void]&#62;

## screenReader.type(text[, options]) {#screenreader-type}

Type text into the focused item.

To press a special key, like <kbd>Control</kbd> or <kbd>ArrowDown</kbd>, use [`screenReader.press(key[, options])`](./class-screenreader#screenreader-press).

**Parameters:**

- `text` [string] Text to type into the focused item.
- **Optional:** `options` [CommandOptions] Additional options.

**Returns:** [Promise]&#60;[void]&#62;

[clickoptions]: ./class-click-options "ClickOptions"
[commandoptions]: ./class-command-options "CommandOptions"
[keyboardoptions]: ./class-keyboard-options "KeyboardOptions"
[macoskeyboardcommand]: ./class-macos-keyboard-command "MacOSKeyboardCommand"
[nvda]: ./class-nvda "NVDA"
[screenreader]: ./class-screenreader "ScreenReader"
[voiceover]: ./class-voiceover "VoiceOver"
[array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array"
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean "boolean"
[promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String "string"
[void]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void"
[any]: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any "any"
