---
title: "ScreenReaderKeyboard"
---

Base interface for screen reader keyboard classes.

See also:

- [VoiceOverKeyboard]

**Contents:**

- [screenReaderKeyboard.perform(command, [options])](./class-screenreader-keyboard#screenreader-keyboard-perform)
- [screenReaderKeyboard.press(key, [options])](./class-screenreader-keyboard#screenreader-keyboard-press)
- [screenReaderKeyboard.type(text[, options])](./class-screenreader-keyboard#screenreader-keyboard-type)
- [screenReaderKeyboard.commands](./class-screenreader-keyboard#screenreader-keyboard-commands)

## screenReaderKeyboard.perform(command[, options]) {#screenreader-keyboard-perform}

Perform a screen reader keyboard command.

**Parameters:**

- `command` &#60;[KeyboardCommand]&#62; Screen reader command to execute.
- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[void]>&#62;

## screenReaderKeyboard.press(key[, options]) {#screenreader-keyboard-press}

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
await screenReaderKeyboard.press("Control+f");
```

**Parameters:**

- `key` &#60;[string]&#62; Name of the key to press or a character to generate, such as `ArrowLeft` or `a`.
- **Optional:** `options` &#60;[KeyboardOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[void]>&#62;

## screenReaderKeyboard.type(text[, options]) {#screenreader-keyboard-type}

Type text into the focused item.

To press a special key, like `Control` or `ArrowDown`, use [`screenReaderKeyboard.press(key[, options])`](./class-screenreader-keyboard#screenreader-keyboard-press).

```ts
await screenReaderKeyboard.type("my-username");
await screenReaderKeyboard.press("Enter");
```

**Parameters:**

- `text` &#60;[string]&#62; Text to type into the focused item.
- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[void]>&#62;

## screenReaderKeyboard.commands {#screenreader-keyboard-commands}

Screen reader keyboard commands.

**Returns:** &#60;[Record]<[string], [KeyboardCommand]>&#62;

[commandoptions]: ./class-command-options "CommandOptions"
[keyboardcommand]: ./class-keyboard-command "KeyboardCommand"
[keyboardoptions]: ./class-keyboard-options "KeyboardOptions"
[voiceoverkeyboard]: ./class-voiceover-keyboard "VoiceOverKeyboard"
[promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string"
[void]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void"
[record]: https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type "Record"
