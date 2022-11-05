---
title: "VoiceOverKeyboard"
---

**Implements:** [ScreenReaderKeyboard]

**Contents:**

- [voiceOverKeyboard.perform(command, [options])](./class-voiceover-keyboard#voiceover-keyboard-perform)
- [voiceOverKeyboard.press(key, [options])](./class-voiceover-keyboard#voiceover-keyboard-press)
- [voiceOverKeyboard.type(text[, options])](./class-voiceover-keyboard#voiceover-keyboard-type)
- [voiceOverKeyboard.commands](./class-voiceover-keyboard#voiceover-keyboard-commands)

## voiceOverKeyboard.perform(command[, options]) {#voiceover-keyboard-perform}

Perform a VoiceOver keyboard command.

**Parameters:**

- `command` &#60;[MacOSKeyboardCommand]&#62; VoiceOver command to execute.
- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[void]>&#62;

## voiceOverKeyboard.press(key[, options]) {#voiceover-keyboard-press}

Press a key on the focused item.

`key` can specify the intended [`keyboardEvent.key`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key)
value or a single character to generate the text for. A superset of the `key` values can be found
[on the MDN key values page](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values). Examples of the keys are:

`F1` - `F20`, `Digit0` - `Digit9`, `KeyA` - `KeyZ`, `Backquote`, `Minus`, `Equal`, `Backslash`, `Backspace`, `Tab`,
`Delete`, `Escape`, `ArrowDown`, `End`, `Enter`, `Home`, `Insert`, `PageDown`, `PageUp`, `ArrowRight`, `ArrowUp`, etc.

See [MacOSKeyCodes] for the full range of available keys.

Following modification shortcuts are also supported: `Shift`, `Control`, `Alt`, `Meta`, `Command`.

See [MacOSModifiers] for the full range of available modifiers.

Holding down `Shift` will type the text that corresponds to the `key` in the upper case.

If `key` is a single character, it is case-sensitive, so the values `a` and `A` will generate different respective
texts.

Shortcuts such as `key: "Control+f"` or `key: "Control+Shift+f"` are supported as well. When specified with the
modifier, modifier is pressed and being held while the subsequent key is being pressed.

```ts
await voiceOverKeyboard.press("Control+f");
```

**Parameters:**

- `key` &#60;[string]&#62; Name of the key to press or a character to generate, such as `ArrowLeft` or `a`.
- **Optional:** `options` &#60;[KeyboardOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[void]>&#62;

## voiceOverKeyboard.type(text[, options]) {#voiceover-keyboard-type}

Type text into the focused item.

To press a special key, like `Control` or `ArrowDown`, use [`voiceOverKeyboard.press(key[, options])`](./class-voiceover-keyboard#voiceover-keyboard-press).

```ts
await voiceOverKeyboard.type("my-username");
await voiceOverKeyboard.press("Enter");
```

**Parameters:**

- `text` &#60;[string]&#62; Text to type into the focused item.
- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[void]>&#62;

## voiceOverKeyboard.commands {#voiceover-keyboard-commands}

VoiceOver keyboard commands.

**Returns:** &#60;[voiceOverKeyCodeCommands]&#62;

[commandoptions]: ./class-command-options "CommandOptions"
[keyboardoptions]: ./class-keyboard-options "KeyboardOptions"
[macoskeycodecommand]: ./class-macos-key-code-command "MacOSKeyCodeCommand"
[macoskeycodes]: ./class-macos-key-codes "MacOSKeyCodes"
[macoskeyboardcommand]: ./class-macos-keyboard-command "MacOSKeyboardCommand"
[macosmodifiers]: ./class-macos-modifiers "MacOSModifiers"
[screenreaderkeyboard]: ./class-screenreader-keyboard "ScreenReaderKeyboard"
[voiceoverkeycodecommands]: ./class-voiceover-key-code-commands "voiceOverKeyCodeCommands"
[promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string"
[void]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void"
[record]: https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type "Record"
