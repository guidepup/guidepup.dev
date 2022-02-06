---
title: "ScreenReader"
---

Base interface for screen-reader classes such as [VoiceOver].

- [`static` ScreenReader.default()](./class-screenreader#screenreader-default)
- [`static` ScreenReader.detect()](./class-screenreader#screenreader-detect)
- [screenReader.act([options])](./class-screenreader#screenreader-act)
- [screenReader.click([options])](./class-screenreader#screenreader-click)
- [screenReader.interact([options])](./class-screenreader#screenreader-interact)
- [screenReader.itemText([options])](./class-screenreader#screenreader-item-text)
- [screenReader.itemTextLog()](./class-screenreader#screenreader-item-text-log)
- [screenReader.lastSpokenPhrase([options])](./class-screenreader#screenreader-last-spoken-phrase)
- [screenReader.next([options])](./class-screenreader#screenreader-next)
- [screenReader.perform(command, [options])](./class-screenreader#screenreader-perform)
- [screenReader.press(key, [options])](./class-screenreader#screenreader-press)
- [screenReader.previous([options])](./class-screenreader#screenreader-previous)
- [screenReader.spokenPhraseLog()](./class-screenreader#screenreader-spoken-phrase-log)
- [screenReader.start([options])](./class-screenreader#screenreader-start)
- [screenReader.stop([options])](./class-screenreader#screenreader-stop)
- [screenReader.stopInteracting([options])](./class-screenreader#screenreader-stop-interacting)
- [screenReader.type(text[, options])](./class-screenreader#screenreader-type)
- [screenReader.caption](./class-screenreader#screenreader-caption)
- [screenReader.commander](./class-screenreader#screenreader-commander)
- [screenReader.cursor](./class-screenreader#screenreader-cursor)
- [screenReader.keyboard](./class-screenreader#screenreader-keyboard)
- [screenReader.mouse](./class-screenreader#screenreader-mouse)

## `static` ScreenReader.default() {#screenreader-default}

Detect whether the screen-reader is the default screen reader for the current OS.

**Returns:** &#60;[Promise]<[boolean]>&#62;

## `static` ScreenReader.detect() {#screenreader-detect}

Detect whether the screen-reader is supported for the current OS.

**Returns:** &#60;[Promise]<[boolean]>&#62;

## screenReader.act([options]) {#screenreader-act}

Perform the default action for the item in the screen-reader cursor.

**Parameters:**

- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[void]>&#62;

## screenReader.click([options]) {#screenreader-click}

Click the mouse.

**Parameters:**

- **Optional:** `options` &#60;[ClickOptions]&#62; Click options.

**Returns:** &#60;[Promise]<[void]>&#62;

## screenReader.interact([options]) {#screenreader-interact}

Interact with the item under the screen-reader cursor.

**Parameters:**

- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[void]>&#62;

## screenReader.itemText([options]) {#screenreader-item-text}

Get the text of the item in the screen-reader cursor.

**Parameters:**

- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[string]>&#62; The item's text.

## screenReader.itemTextLog() {#screenreader-item-text-log}

Get the log of all visited item text for this screen-reader instance.

**Returns:** &#60;[Array]<[string]>&#62; The item text log.

## screenReader.lastSpokenPhrase([options]) {#screenreader-last-spoken-phrase}

Get the last spoken phrase.

**Parameters:**

- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[string]>&#62; The last spoken phrase.

## screenReader.next([options]) {#screenreader-next}

Move the screen-reader cursor to the next location.

**Parameters:**

- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[void]>&#62;

## screenReader.perform(command[, options]) {#screenreader-perform}

Perform a screen-reader command.

**Parameters:**

- `command` &#60;[any]&#62; Screen-reader command to execute.
- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[void]>&#62;

## screenReader.press(key[, options]) {#screenreader-press}

Press a key on the focused item.

`key` can specify the intended [`keyboardEvent.key`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key)
value or a single character to generate the text for. A superset of the `key` values can be found
[on the MDN key values page](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values). Examples of the keys are:

`F1` - `F20`, `Digit0` - `Digit9`, `KeyA` - `KeyZ`, `Backquote`, `Minus`, `Equal`, `Backslash`, `Backspace`, `Tab`,
`Delete`, `Escape`, `ArrowDown`, `End`, `Enter`, `Home`, `Insert`, `PageDown`, `PageUp`, `ArrowRight`, `ArrowUp`, etc.

Following modification shortcuts are also supported: `Shift`, `Control`, `Alt`, `Meta`.

Holding down `Shift` will type the text that corresponds to the `key` in the upper case.

If `key` is a single character, it is case-sensitive, so the values `a` and `A` will generate different respective
texts.

Shortcuts such as `key: "Control+f"` or `key: "Control+Shift+f"` are supported as well. When specified with the
modifier, modifier is pressed and being held while the subsequent key is being pressed.

```ts
await screenReader.press("Control+f");
```

**Parameters:**

- `key` &#60;[string]&#62; Name of the key to press or a character to generate, such as `ArrowLeft` or `a`.
- **Optional:** `options` &#60;[KeyboardOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[void]>&#62;

## screenReader.previous([options]) {#screenreader-previous}

Move the screen-reader cursor to the previous location.

**Parameters:**

- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[void]>&#62;

## screenReader.spokenPhraseLog() {#screenreader-spoken-phrase-log}

Get the log of all spoken phrases for this screen-reader instance.

**Returns:** &#60;[Array]<[string]>&#62; The spoken phrase log.

## screenReader.start([options]) {#screenreader-start}

Turn the screen-reader on.

**Parameters:**

- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[void]>&#62;

## screenReader.stop([options]) {#screenreader-stop}

Turn the screen-reader off.

**Parameters:**

- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[void]>&#62;

## screenReader.stopInteracting([options]) {#screenreader-stop-interacting}

Stop interacting with the current item.

**Parameters:**

- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[void]>&#62;

## screenReader.type(text[, options]) {#screenreader-type}

Type text into the focused item.

To press a special key, like `Control` or `ArrowDown`, use [`screenReader.press(key[, options])`](./class-screenreader#screenreader-press).

```ts
await screenReader.type("my-username");
await screenReader.press("Enter");
```

**Parameters:**

- `text` &#60;[string]&#62; Text to type into the focused item.
- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[void]>&#62;

## screenReader.caption {#screenreader-caption}

Screen-reader caption APIs.

**Type:** &#60;[ScreenReaderCaption]&#62;

## screenReader.cursor {#screenreader-cursor}

Screen-reader cursor APIs.

**Type:** &#60;[ScreenReaderCursor]&#62;

## screenReader.keyboard {#screenreader-keyboard}

Screen-reader keyboard APIs.

**Type:** &#60;[ScreenReaderKeyboard]&#62;

## screenReader.mouse {#screenreader-mouse}

Screen-reader mouse APIs.

**Type:** &#60;[ScreenReaderMouse]&#62;

[clickoptions]: ./class-click-options "ClickOptions"
[commandoptions]: ./class-command-options "CommandOptions"
[keyboardoptions]: ./class-keyboard-options "KeyboardOptions"
[macoskeyboardcommand]: ./class-macos-keyboard-command "MacOSKeyboardCommand"
[screenreader]: ./class-screenreader "ScreenReader"
[screenreadercaption]: ./class-screenreader-caption "ScreenReaderCaption"
[screenreadercursor]: ./class-screenreader-cursor "ScreenReaderCursor"
[screenreaderkeyboard]: ./class-screenreader-keyboard "ScreenReaderKeyboard"
[screenreadermouse]: ./class-screenreader-mouse "ScreenReaderMouse"
[voiceover]: ./class-voiceover "VoiceOver"
[array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array"
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean "boolean"
[promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string"
[void]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void"
[any]: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any "any"
