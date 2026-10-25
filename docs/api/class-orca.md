---
title: "Orca"
description: Reference the Orca automation API in the Guidepup library.
---

**Implements:** [IScreenReader]

An Orca instance can be used to launch and control Orca on Linux.

Here's a typical example using an [Orca] instance:

```ts
import { orca } from "@guidepup/guidepup";

(async () => {
  // Start Orca.
  await orca.start();

  // Move to the next item.
  await orca.next();

  // Stop Orca.
  await orca.stop();
})();
```

**Contents:**

- [orca.keyboardCommands](./class-orca#orca-keyboard-commands)
- [orca.name](./class-orca#orca-name)
- [orca.version](./class-orca#orca-version)
- [orca.act([options])](./class-orca#orca-act)
- [orca.capture(action[, options])](./class-orca#orca-capture)
- [orca.clearItemTextLog()](./class-orca#orca-clear-item-text-log)
- [orca.clearSpokenPhraseLog()](./class-orca#orca-clear-spoken-phrase-log)
- [orca.click([options])](./class-orca#orca-click)
- [orca.default()](./class-orca#orca-default)
- [orca.detect()](./class-orca#orca-detect)
- [orca.getSetting(key)](./class-orca#orca-get-setting)
- [orca.getSettings()](./class-orca#orca-get-settings)
- [orca.interact([options])](./class-orca#orca-interact)
- [orca.itemText()](./class-orca#orca-item-text)
- [orca.itemTextLog()](./class-orca#orca-item-text-log)
- [orca.lastSpokenPhrase()](./class-orca#orca-last-spoken-phrase)
- [orca.next([options])](./class-orca#orca-next)
- [orca.nextHeading([options])](./class-orca#orca-next-heading)
- [orca.nextLandmark([options])](./class-orca#orca-next-landmark)
- [orca.nextLink([options])](./class-orca#orca-next-link)
- [orca.perform(command[, options])](./class-orca#orca-perform)
- [orca.press(key[, options])](./class-orca#orca-press)
- [orca.previous([options])](./class-orca#orca-previous)
- [orca.previousHeading([options])](./class-orca#orca-previous-heading)
- [orca.previousLandmark([options])](./class-orca#orca-previous-landmark)
- [orca.previousLink([options])](./class-orca#orca-previous-link)
- [orca.spokenPhraseLog()](./class-orca#orca-spoken-phrase-log)
- [orca.start([options])](./class-orca#orca-start)
- [orca.stop()](./class-orca#orca-stop)
- [orca.stopInteracting([options])](./class-orca#orca-stop-interacting)
- [orca.type(text[, options])](./class-orca#orca-type)

## orca.keyboardCommands {#orca-keyboard-commands}

Getter for the Orca keyboard commands supported by Guidepup.

Use a command with `perform` to invoke it:

```ts
import { orca } from "@guidepup/guidepup";

(async () => {
  // Start Orca.
  await orca.start();

  // Move to the next item.
  await orca.perform(orca.keyboardCommands.MoveToNextSibling);

  // Stop Orca.
  await orca.stop();
})();
```

Each command includes its command name, description, keyboard representation,
and Orca service.

See [OrcaKeyCodeCommands] for the available commands.

**Returns:** [OrcaKeyCodeCommands]

## orca.name {#orca-name}

Getter for the screen reader name `"Orca"`.

```ts
import { orca } from "@guidepup/guidepup";

console.log(orca.name); // "Orca"
```

**Returns:** [string]

## orca.version {#orca-version}

Getter for the Orca version.

```ts
import { orca } from "@guidepup/guidepup";

console.log(orca.version);
```

**Returns:** [string]

## orca.act([options]) {#orca-act}

Perform the default action for the item in the Orca cursor.

Equivalent of executing <kbd>Orca</kbd>+<kbd>Control</kbd>+<kbd>Enter</kbd>.

```ts
import { orca } from "@guidepup/guidepup";

(async () => {
  await orca.start();
  await orca.next();
  await orca.act();
  await orca.stop();
})();
```

**Parameters:**

- **Optional:** `options` `Pick<CommandOptions, "capture">` Capture options.

**Returns:** [Promise]&#60;[void]&#62;

## orca.capture(action[, options]) {#orca-capture}

Capture Orca output produced while an action runs. The action can be performed
using an external automation tool such as Playwright. The returned capture
contains the action's result and the Orca output associated with the action.

```ts
import { test } from "@playwright/test";
import { orca } from "@guidepup/guidepup";

test("capture Orca output while clicking a button", async ({ page }) => {
  await orca.start();

  const capture = await orca.capture(() =>
    page
      .getByRole("button", {
        name: "Submit",
      })
      .click(),
  );
  console.log(capture);

  await orca.stop();
});
```

**Parameters:**

- `action` () => [Promise]&#60;T&#62; | T The action to perform while
  capturing Orca output.
- **Optional:** `options` Pick&#60;[CommandOptions], "capture"&#62; Capture options.

**Returns:** [Promise]&#60;[Capture]&#60;T&#62;> The action's result and captured
Orca output.

## orca.clearItemTextLog() {#orca-clear-item-text-log}

Clear the log of all spoken phrases for this Orca instance.

For Orca this is the same as `clearSpokenPhraseLog`.

```ts
import { orca } from "@guidepup/guidepup";

(async () => {
  await orca.start();
  await orca.clearItemTextLog();
  await orca.stop();
})();
```

**Returns:** [Promise]&#60;[void]&#62;

## orca.clearSpokenPhraseLog() {#orca-clear-spoken-phrase-log}

Clear the log of all spoken phrases for this Orca instance.

```ts
import { orca } from "@guidepup/guidepup";

(async () => {
  await orca.start();
  await orca.clearSpokenPhraseLog();
  await orca.stop();
})();
```

**Returns:** [Promise]&#60;[void]&#62;

## orca.click([options]) {#orca-click}

Click the mouse.

```ts
import { orca } from "@guidepup/guidepup";

(async () => {
  await orca.start();
  await orca.click({ button: "left", clickCount: 1 });
  await orca.click({ button: "right", clickCount: 2 });
  await orca.stop();
})();
```

**Parameters:**

- **Optional:** `options` [ClickOptions] Click options.

**Returns:** [Promise]&#60;[void]&#62;

## orca.default() {#orca-default}

Detect whether Orca is the default screen reader for the current OS:

- `false` for Windows
- `false` for macOS
- `true` for Linux

This detects the operating system; it does not check whether Orca is installed.

```ts
import { orca } from "@guidepup/guidepup";

console.log(orca.default());
```

**Returns:** [boolean]

## orca.detect() {#orca-detect}

Detect whether Orca is supported on the current operating system:

- `false` for Windows
- `false` for macOS
- `true` for Linux

This detects the operating system; it does not check whether Orca is installed.
`start()` will fail if Orca is not installed.

```ts
import { orca } from "@guidepup/guidepup";

console.log(orca.detect());
```

**Returns:** [boolean]

## orca.getSetting(key) {#orca-get-setting}

Returns the value of a setting for this Orca instance.

```ts
import { orca } from "@guidepup/guidepup";

(async () => {
  await orca.start();
  console.log(orca.getSetting("/org/gnome/orca/default/speech/enable"));
  await orca.stop();
})();
```

**Parameters:**

- `key` [string] The setting name.

**Returns:** [unknown] The setting value.

## orca.getSettings() {#orca-get-settings}

Returns all the current settings for this Orca instance.

```ts
import { orca } from "@guidepup/guidepup";

(async () => {
  await orca.start();
  console.log(orca.getSettings());
  await orca.stop();
})();
```

**Returns:** [Record]&#60;[string], [unknown]&#62; Current settings values.

## orca.interact([options]) {#orca-interact}

Interact with the item under the Orca cursor.

Equivalent of executing <kbd>Orca</kbd>+<kbd>Control</kbd>+<kbd>Down Arrow</kbd>.

```ts
import { orca } from "@guidepup/guidepup";

(async () => {
  await orca.start();
  await orca.next();
  await orca.interact();
  await orca.stop();
})();
```

**Parameters:**

- **Optional:** `options` `Pick<CommandOptions, "capture">` Capture options.

**Returns:** [Promise]&#60;[void]&#62;

## orca.itemText() {#orca-item-text}

Get the text of the item in the Orca cursor.

For Orca this is the same as `lastSpokenPhrase`.

```ts
import { orca } from "@guidepup/guidepup";

(async () => {
  await orca.start();
  await orca.next();
  console.log(await orca.itemText());
  await orca.stop();
})();
```

**Returns:** [Promise]&#60;[string]&#62; The item's text.

## orca.itemTextLog() {#orca-item-text-log}

Get the log of all visited item text for this Orca instance.

For Orca this is the same as `spokenPhraseLog`.

```ts
import { orca } from "@guidepup/guidepup";

(async () => {
  await orca.start();
  for (let i = 0; i < 10; i++) {
    await orca.next();
  }
  console.log(await orca.itemTextLog());
  await orca.stop();
})();
```

**Returns:** [Promise]&#60;[Array]&#60;[string]&#62;> The item text log.

## orca.lastSpokenPhrase() {#orca-last-spoken-phrase}

Get the last spoken phrase.

```ts
import { orca } from "@guidepup/guidepup";

(async () => {
  await orca.start();
  await orca.next();
  console.log(await orca.lastSpokenPhrase());
  await orca.stop();
})();
```

**Returns:** [Promise]&#60;[string]&#62; The last spoken phrase.

## orca.next([options]) {#orca-next}

Move the Orca cursor to the next location.

Equivalent of executing <kbd>Orca</kbd>+<kbd>Control</kbd>+<kbd>Right Arrow</kbd>.

```ts
import { orca } from "@guidepup/guidepup";

(async () => {
  await orca.start();
  await orca.next();
  await orca.stop();
})();
```

**Parameters:**

- **Optional:** `options` `Pick<CommandOptions, "capture">` Capture options.

**Returns:** [Promise]&#60;[void]&#62;

## orca.nextHeading([options]) {#orca-next-heading}

Move the Orca cursor to the next heading.

Equivalent of executing <kbd>H</kbd>.

```ts
import { orca } from "@guidepup/guidepup";

(async () => {
  await orca.start();
  await orca.nextHeading();
  await orca.stop();
})();
```

**Parameters:**

- **Optional:** `options` `Pick<CommandOptions, "capture">` Capture options.

**Returns:** [Promise]&#60;[void]&#62;

## orca.nextLandmark([options]) {#orca-next-landmark}

Move the Orca cursor to the next landmark.

Equivalent of executing <kbd>D</kbd>.

```ts
import { orca } from "@guidepup/guidepup";

(async () => {
  await orca.start();
  await orca.nextLandmark();
  await orca.stop();
})();
```

**Parameters:**

- **Optional:** `options` `Pick<CommandOptions, "capture">` Capture options.

**Returns:** [Promise]&#60;[void]&#62;

## orca.nextLink([options]) {#orca-next-link}

Move the Orca cursor to the next link.

Equivalent of executing <kbd>K</kbd>.

```ts
import { orca } from "@guidepup/guidepup";

(async () => {
  await orca.start();
  await orca.nextLink();
  await orca.stop();
})();
```

**Parameters:**

- **Optional:** `options` `Pick<CommandOptions, "capture">` Capture options.

**Returns:** [Promise]&#60;[void]&#62;

## orca.perform(command[, options]) {#orca-perform}

Perform an Orca keyboard command.

The command can be any `OrcaKeyCodeCommand` exposed through
[OrcaKeyCodeCommands], available as `orca.keyboardCommands` or the
`orcaKeyCodeCommands` export.

```ts
import { orca } from "@guidepup/guidepup";

(async () => {
  await orca.start();
  await orca.perform(orca.keyboardCommands.MoveToNextSibling);
  await orca.stop();
})();
```

**Parameters:**

- `command` `OrcaKeyCodeCommand` Orca keyboard command.
- **Optional:** `options` `Pick<CommandOptions, "capture">` Capture options.

**Returns:** [Promise]&#60;[void]&#62;

## orca.press(key[, options]) {#orca-press}

Press a key on the focused item.

`key` can specify the intended [keyboardEvent.key](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key)
value or a single character to generate the text for. A superset of the `key` values can be found [on the MDN key values page](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values). Examples of the keys are:

<p><kbd>F1</kbd> - <kbd>F20</kbd>, <kbd>Digit0</kbd> - <kbd>Digit9</kbd>, <kbd>KeyA</kbd> - <kbd>KeyZ</kbd>, <kbd>Backquote</kbd>, <kbd>Minus</kbd>, <kbd>Equal</kbd>, <kbd>Backslash</kbd>, <kbd>Backspace</kbd>, <kbd>Tab</kbd>,
<kbd>Delete</kbd>, <kbd>Escape</kbd>, <kbd>ArrowDown</kbd>, <kbd>End</kbd>, <kbd>Enter</kbd>, <kbd>Home</kbd>, <kbd>Insert</kbd>, <kbd>PageDown</kbd>, <kbd>PageUp</kbd>, <kbd>ArrowRight</kbd>, <kbd>ArrowUp</kbd>, etc.</p>

See [LinuxKeyCodes] for the full range of available keys.

Following modification shortcuts are also supported: <kbd>Shift</kbd>, <kbd>Control</kbd>, <kbd>Alt</kbd>, <kbd>Meta</kbd>.

See [LinuxModifiers] for the full range of available modifiers.

Holding down <kbd>Shift</kbd> will type the text that corresponds to the `key` in the upper case.

If `key` is a single character, it is case-sensitive, so the values <kbd>a</kbd> and <kbd>A</kbd> will generate different respective texts.

Shortcuts such as `key: "Control+f"` or `key: "Control+Shift+f"` are supported as well. When specified with the modifier, modifier is pressed and being held while the subsequent key is being pressed.

```ts
import { orca } from "@guidepup/guidepup";

(async () => {
  // Start Orca.
  await orca.start();

  // Open a find text modal.
  await orca.press("Control+f");

  // Stop Orca.
  await orca.stop();
})();
```

**Parameters:**

- `key` [string] Name of the key to press or a character to generate, such as <kbd>ArrowLeft</kbd> or <kbd>a</kbd>.
- **Optional:** `options` `Pick<CommandOptions, "capture">` Capture options.

**Returns:** [Promise]&#60;[void]&#62;

## orca.previous([options]) {#orca-previous}

Move the Orca cursor to the previous location.

Equivalent of executing <kbd>Orca</kbd>+<kbd>Control</kbd>+<kbd>Left Arrow</kbd>.

```ts
import { orca } from "@guidepup/guidepup";

(async () => {
  await orca.start();
  await orca.previous();
  await orca.stop();
})();
```

**Parameters:**

- **Optional:** `options` `Pick<CommandOptions, "capture">` Capture options.

**Returns:** [Promise]&#60;[void]&#62;

## orca.previousHeading([options]) {#orca-previous-heading}

Move the Orca cursor to the previous heading.

Equivalent of executing <kbd>Shift</kbd>+<kbd>H</kbd>.

```ts
import { orca } from "@guidepup/guidepup";

(async () => {
  await orca.start();
  await orca.previousHeading();
  await orca.stop();
})();
```

**Parameters:**

- **Optional:** `options` `Pick<CommandOptions, "capture">` Capture options.

**Returns:** [Promise]&#60;[void]&#62;

## orca.previousLandmark([options]) {#orca-previous-landmark}

Move the Orca cursor to the previous landmark.

Equivalent of executing <kbd>Shift</kbd>+<kbd>D</kbd>.

```ts
import { orca } from "@guidepup/guidepup";

(async () => {
  await orca.start();
  await orca.previousLandmark();
  await orca.stop();
})();
```

**Parameters:**

- **Optional:** `options` `Pick<CommandOptions, "capture">` Capture options.

**Returns:** [Promise]&#60;[void]&#62;

## orca.previousLink([options]) {#orca-previous-link}

Move the Orca cursor to the previous link.

Equivalent of executing <kbd>Shift</kbd>+<kbd>K</kbd>.

```ts
import { orca } from "@guidepup/guidepup";

(async () => {
  await orca.start();
  await orca.previousLink();
  await orca.stop();
})();
```

**Parameters:**

- **Optional:** `options` `Pick<CommandOptions, "capture">` Capture options.

**Returns:** [Promise]&#60;[void]&#62;

## orca.spokenPhraseLog() {#orca-spoken-phrase-log}

Get the log of all spoken phrases for this Orca instance.

```ts
import { orca } from "@guidepup/guidepup";

(async () => {
  await orca.start();
  for (let i = 0; i < 10; i++) {
    await orca.next();
  }
  console.log(await orca.spokenPhraseLog());
  await orca.stop();
})();
```

**Returns:** [Promise]&#60;[Array]&#60;[string]&#62;> The spoken phrase log.

## orca.start([options]) {#orca-start}

Turn Orca on. Orca must be installed on Linux.

By default, `capture` is set to `"initial"`: it captures the first page of
output, but not subsequent content. Set `capture` to `true` for full capture or
`false` to disable capture.

```ts
import { orca } from "@guidepup/guidepup";

(async () => {
  await orca.start();
  // ... perform some commands.
  await orca.stop();
})();
```

**Parameters:**

- **Optional:** `options` `Pick<StartOptions, "capture" | "settings">` Capture
  and screen reader settings options.

**Returns:** [Promise]&#60;[void]&#62;

## orca.stop() {#orca-stop}

Turn Orca off.

```ts
import { orca } from "@guidepup/guidepup";

(async () => {
  await orca.start();
  // ... perform some commands.
  await orca.stop();
})();
```

**Returns:** [Promise]&#60;[void]&#62;

## orca.stopInteracting([options]) {#orca-stop-interacting}

Stop interacting with the current item under the Orca cursor.

Equivalent of executing <kbd>Orca</kbd>+<kbd>Control</kbd>+<kbd>Up Arrow</kbd>.

```ts
import { orca } from "@guidepup/guidepup";

(async () => {
  await orca.start();
  await orca.next();
  await orca.stopInteracting();
  await orca.stop();
})();
```

**Parameters:**

- **Optional:** `options` `Pick<CommandOptions, "capture">` Capture options.

**Returns:** [Promise]&#60;[void]&#62;

## orca.type(text[, options]) {#orca-type}

Type text into the focused item.

To press a special key, like <kbd>Control</kbd> or <kbd>ArrowDown</kbd>, use [`orca.press(key[, options])`](./class-orca#orca-press).

Each character is typed separately. As a result, `lastSpokenPhrase()` returns the phrase for the final character; use `spokenPhraseLog()` to access output for the complete string.

```ts
import { orca } from "@guidepup/guidepup";

(async () => {
  // Start Orca.
  await orca.start();

  // Type a username and key Enter.
  await orca.type("my-username");
  await orca.press("Enter");

  // Stop Orca.
  await orca.stop();
})();
```

**Parameters:**

- `text` [string] Text to type into the focused item.
- **Optional:** `options` `Pick<CommandOptions, "capture">` Capture options.

**Returns:** [Promise]&#60;[void]&#62;

[clickoptions]: ./class-click-options "ClickOptions"
[capture]: ./class-capture "Capture"
[commandoptions]: ./class-command-options "CommandOptions"
[iscreenreader]: ./class-iscreenreader "IScreenReader"
[linuxkeycodes]: ./class-linux-key-codes "LinuxKeyCodes"
[linuxmodifiers]: ./class-linux-modifiers "LinuxModifiers"
[orcakeycodecommands]: ./class-orca-key-code-commands "OrcaKeyCodeCommands"
[orca]: ./class-orca "Orca"
[pick]: https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys "Pick"
[startoptions]: ./class-start-options "StartOptions"
[array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array"
[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean "boolean"
[promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise"
[record]: https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type "Record"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String "string"
[unknown]: https://www.typescriptlang.org/docs/handbook/2/functions.html#unknown "unknown"
[void]: https://www.typescriptlang.org/docs/handbook/2/functions.html#void "void"
