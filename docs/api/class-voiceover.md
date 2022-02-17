---
title: "VoiceOver"
---

**Implements:** [ScreenReader]

A VoiceOver instance can be used to launch and control VoiceOver.

Here's a typical example using a [VoiceOver] instance:

```ts
const { voiceOver } = require("@guidepup/guidepup");

(async () => {
  await voiceOver.start();
  await voiceOver.next();
  await voiceOver.stop();
})();
```

- [`static` VoiceOver.default()](./class-voiceover#voiceover-default)
- [`static` VoiceOver.detect()](./class-voiceover#voiceover-detect)
- [voiceOver.act([options])](./class-voiceover#voiceover-act)
- [voiceOver.click([options])](./class-voiceover#voiceover-click)
- [voiceOver.interact([options])](./class-voiceover#voiceover-interact)
- [voiceOver.itemText([options])](./class-voiceover#voiceover-item-text)
- [voiceOver.itemTextLog()](./class-voiceover#voiceover-item-text-log)
- [voiceOver.lastSpokenPhrase([options])](./class-voiceover#voiceover-last-spoken-phrase)
- [voiceOver.next([options])](./class-voiceover#voiceover-next)
- [voiceOver.perform(command, [options])](./class-voiceover#voiceover-perform)
- [voiceOver.press(key, [options])](./class-voiceover#voiceover-press)
- [voiceOver.previous([options])](./class-voiceover#voiceover-previous)
- [voiceOver.spokenPhraseLog()](./class-voiceover#voiceover-spoken-phrase-log)
- [voiceOver.start([options])](./class-voiceover#voiceover-start)
- [voiceOver.stop([options])](./class-voiceover#voiceover-stop)
- [voiceOver.stopInteracting([options])](./class-voiceover#voiceover-stop-interacting)
- [voiceOver.type(text[, options])](./class-voiceover#voiceover-type)
- [voiceOver.caption](./class-voiceover#voiceover-caption)
- [voiceOver.commander](./class-voiceover#voiceover-commander)
- [voiceOver.cursor](./class-voiceover#voiceover-cursor)
- [voiceOver.keyboard](./class-voiceover#voiceover-keyboard)
- [voiceOver.mouse](./class-voiceover#voiceover-mouse)

## `static` VoiceOver.default() {#voiceover-default}

Detect whether VoiceOver is the default screen reader for the current OS.

**Returns:** &#60;[Promise]<[boolean]>&#62;

## `static` VoiceOver.detect() {#voiceover-detect}

Detect whether VoiceOver is supported for the current OS.

**Returns:** &#60;[Promise]<[boolean]>&#62;

## voiceOver.act([options]) {#voiceover-act}

Perform the default action for the item in the VoiceOver cursor.

Equivalent of executing `VO-Space bar`.

**Parameters:**

- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[void]>&#62;

## voiceOver.click([options]) {#voiceover-click}

Click the mouse.

**Parameters:**

- **Optional:** `options` &#60;[ClickOptions]&#62; Click options.

**Returns:** &#60;[Promise]<[void]>&#62;

## voiceOver.interact([options]) {#voiceover-interact}

Interact with the item under the VoiceOver cursor.

Equivalent of executing `VO-Shift-Down Arrow`.

**Parameters:**

- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[void]>&#62;

## voiceOver.itemText([options]) {#voiceover-item-text}

Get the text of the item in the VoiceOver cursor.

**Parameters:**

- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[string]>&#62; The item's text.

## voiceOver.itemTextLog() {#voiceover-item-text-log}

Get the log of all visited item text for this VoiceOver instance.

**Returns:** &#60;[Array]<[string]>&#62; The item text log.

## voiceOver.lastSpokenPhrase([options]) {#voiceover-last-spoken-phrase}

Get the last spoken phrase.

**Parameters:**

- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[string]>&#62; The last spoken phrase.

## voiceOver.next([options]) {#voiceover-next}

Move the VoiceOver cursor to the next location.

Equivalent of executing `VO-Right Arrow`.

**Parameters:**

- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[void]>&#62;

## voiceOver.perform(command[, options]) {#voiceover-perform}

Perform a VoiceOver command.

**Parameters:**

- `command` &#60;[MacOSKeyboardCommand] | [VoiceOverCommanderCommands]&#62; VoiceOver keyboard command or commander command to execute.
- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[void]>&#62;

## voiceOver.press(key[, options]) {#voiceover-press}

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
await voiceOver.press("Control+f");
```

**Parameters:**

- `key` &#60;[string]&#62; Name of the key to press or a character to generate, such as `ArrowLeft` or `a`.
- **Optional:** `options` &#60;[KeyboardOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[void]>&#62;

## voiceOver.previous([options]) {#voiceover-previous}

Move the VoiceOver cursor to the previous location.

Equivalent of executing `VO-Left Arrow`.

**Parameters:**

- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[void]>&#62;

## voiceOver.spokenPhraseLog() {#voiceover-spoken-phrase-log}

Get the log of all spoken phrases for this VoiceOver instance.

**Returns:** &#60;[Array]<[string]>&#62; The spoken phrase log.

## voiceOver.start([options]) {#voiceover-start}

Turn VoiceOver on.

**Parameters:**

- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[void]>&#62;

## voiceOver.stop([options]) {#voiceover-stop}

Turn VoiceOver off.

**Parameters:**

- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[void]>&#62;

## voiceOver.stopInteracting([options]) {#voiceover-stop-interacting}

Stop interacting with the current item.

Equivalent of executing `VO-Shift-Up Arrow`.

**Parameters:**

- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[void]>&#62;

## voiceOver.type(text[, options]) {#voiceover-type}

Type text into the focused item.

To press a special key, like `Control` or `ArrowDown`, use [`voiceOver.press(key[, options])`](./class-voiceover#voiceover-press).

```ts
await voiceOver.type("my-username");
await voiceOver.press("Enter");
```

**Parameters:**

- `text` &#60;[string]&#62; Text to type into the focused item.
- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[void]>&#62;

## voiceOver.caption {#voiceover-caption}

VoiceOver caption APIs.

**Type:** &#60;[VoiceOverCaption]&#62;

## voiceOver.commander {#voiceover-commander}

VoiceOver commander APIs.

**Type:** &#60;[VoiceOverCommander]&#62;

## voiceOver.cursor {#voiceover-cursor}

VoiceOver cursor APIs.

**Type:** &#60;[VoiceOverCursor]&#62;

## voiceOver.keyboard {#voiceover-keyboard}

VoiceOver keyboard APIs.

**Type:** &#60;[VoiceOverKeyboard]&#62;

## voiceOver.mouse {#voiceover-mouse}

VoiceOver mouse APIs.

**Type:** &#60;[VoiceOverMouse]&#62;

[clickoptions]: ./class-click-options "ClickOptions"
[commandoptions]: ./class-command-options "CommandOptions"
[keyboardoptions]: ./class-keyboard-options "KeyboardOptions"
[macoskeyboardcommand]: ./class-macos-keyboard-command "MacOSKeyboardCommand"
[screenreader]: ./class-screenreader "ScreenReader"
[voiceover]: ./class-voiceover "VoiceOver"
[voiceovercaption]: ./class-voiceover-caption "VoiceOverCaption"
[voiceovercommander]: ./class-voiceover-commander "VoiceOverCommander"
[voiceovercursor]: ./class-voiceover-cursor "VoiceOverCursor"
[voiceoverkeyboard]: ./class-voiceover-keyboard "VoiceOverKeyboard"
[voiceovermouse]: ./class-voiceover-mouse "VoiceOverMouse"
[voiceovercommandercommands]: ./class-voiceover-commander-commands "VoiceOverCommanderCommands"
[array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array"
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean "boolean"
[promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string"
[void]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void"
