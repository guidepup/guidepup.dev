---
title: "Orca"
description: Reference the Orca automation API in the Guidepup library.
---

**Implements:** [IScreenReader]

An Orca instance can be used to launch and control Orca on Linux. The API is
currently available through the unstable `unstable_orca` export.

Here's a typical example using an [Orca] instance:

```ts
import { unstable_orca } from "@guidepup/guidepup";

(async () => {
  // Start Orca.
  await unstable_orca.start();

  // Move to the next item.
  await unstable_orca.next();

  // Stop Orca.
  await unstable_orca.stop();
})();
```

**Contents:**

- [unstable_orca.keyboardCommands](./class-orca#unstable-orca-keyboard-commands)
- [unstable_orca.name](./class-orca#unstable-orca-name)
- [unstable_orca.version](./class-orca#unstable-orca-version)
- [unstable_orca.act([options])](./class-orca#unstable-orca-act)
- [unstable_orca.capture(action[, options])](./class-orca#unstable-orca-capture)
- [unstable_orca.clearItemTextLog()](./class-orca#unstable-orca-clear-item-text-log)
- [unstable_orca.clearSpokenPhraseLog()](./class-orca#unstable-orca-clear-spoken-phrase-log)
- [unstable_orca.click([options])](./class-orca#unstable-orca-click)
- [unstable_orca.default()](./class-orca#unstable-orca-default)
- [unstable_orca.detect()](./class-orca#unstable-orca-detect)
- [unstable_orca.getSetting(key)](./class-orca#unstable-orca-get-setting)
- [unstable_orca.getSettings()](./class-orca#unstable-orca-get-settings)
- [unstable_orca.interact([options])](./class-orca#unstable-orca-interact)
- [unstable_orca.itemText()](./class-orca#unstable-orca-item-text)
- [unstable_orca.itemTextLog()](./class-orca#unstable-orca-item-text-log)
- [unstable_orca.lastSpokenPhrase()](./class-orca#unstable-orca-last-spoken-phrase)
- [unstable_orca.next([options])](./class-orca#unstable-orca-next)
- [unstable_orca.nextHeading([options])](./class-orca#unstable-orca-next-heading)
- [unstable_orca.nextLandmark([options])](./class-orca#unstable-orca-next-landmark)
- [unstable_orca.nextLink([options])](./class-orca#unstable-orca-next-link)
- [unstable_orca.perform(command[, options])](./class-orca#unstable-orca-perform)
- [unstable_orca.previous([options])](./class-orca#unstable-orca-previous)
- [unstable_orca.previousHeading([options])](./class-orca#unstable-orca-previous-heading)
- [unstable_orca.previousLandmark([options])](./class-orca#unstable-orca-previous-landmark)
- [unstable_orca.previousLink([options])](./class-orca#unstable-orca-previous-link)
- [unstable_orca.press()](./class-orca#unstable-orca-press)
- [unstable_orca.spokenPhraseLog()](./class-orca#unstable-orca-spoken-phrase-log)
- [unstable_orca.start([options])](./class-orca#unstable-orca-start)
- [unstable_orca.stop()](./class-orca#unstable-orca-stop)
- [unstable_orca.stopInteracting([options])](./class-orca#unstable-orca-stop-interacting)
- [unstable_orca.type()](./class-orca#unstable-orca-type)

## unstable_orca.keyboardCommands {#unstable-orca-keyboard-commands}

Getter for the Orca keyboard commands supported by Guidepup.

Use a command with `perform` to invoke it:

```ts
import { unstable_orca } from "@guidepup/guidepup";

(async () => {
  // Start Orca.
  await unstable_orca.start();

  // Move to the next item.
  await unstable_orca.perform(unstable_orca.keyboardCommands.MoveToNextSibling);

  // Stop Orca.
  await unstable_orca.stop();
})();
```

Each command includes its command name, description, keyboard representation,
and Orca service.

See [OrcaKeyCodeCommands] for the available commands.

**Returns:** [OrcaKeyCodeCommands]

## unstable_orca.name {#unstable-orca-name}

Getter for the screen reader name `"Orca"`.

```ts
import { unstable_orca } from "@guidepup/guidepup";

console.log(unstable_orca.name); // "Orca"
```

**Returns:** [string]

## unstable_orca.version {#unstable-orca-version}

Getter for the Orca version.

```ts
import { unstable_orca } from "@guidepup/guidepup";

console.log(unstable_orca.version);
```

**Returns:** [string]

## unstable_orca.act([options]) {#unstable-orca-act}

Perform the default action for the item in the Orca cursor.

Equivalent of executing <kbd>Orca</kbd>+<kbd>Control</kbd>+<kbd>Enter</kbd>.

```ts
import { unstable_orca } from "@guidepup/guidepup";

(async () => {
  await unstable_orca.start();
  await unstable_orca.next();
  await unstable_orca.act();
  await unstable_orca.stop();
})();
```

**Parameters:**

- **Optional:** `options` `Pick<CommandOptions, "capture">` Capture options.

**Returns:** [Promise]&#60;[void]&#62;

## unstable_orca.capture(action[, options]) {#unstable-orca-capture}

Capture Orca output produced while an action runs. The action can be performed
using an external automation tool such as Playwright. The returned capture
contains the action's result and the Orca output associated with the action.

```ts
import { test } from "@playwright/test";
import { unstable_orca } from "@guidepup/guidepup";

test("capture Orca output while clicking a button", async ({ page }) => {
  await unstable_orca.start();

  const capture = await unstable_orca.capture(() =>
    page
      .getByRole("button", {
        name: "Submit",
      })
      .click(),
  );
  console.log(capture);

  await unstable_orca.stop();
});
```

**Parameters:**

- `action` `() => [Promise]&#60;T&#62; | T` The action to perform while
  capturing Orca output.
- **Optional:** `options` `Pick<[CommandOptions], "capture">` Capture options.

**Returns:** [Promise]&#60;[Capture]&#60;T&#62;> The action's result and captured
Orca output.

## unstable_orca.clearItemTextLog() {#unstable-orca-clear-item-text-log}

Clear the log of all spoken phrases for this Orca instance.

For Orca this is the same as `clearSpokenPhraseLog`.

```ts
import { unstable_orca } from "@guidepup/guidepup";

(async () => {
  await unstable_orca.start();
  await unstable_orca.clearItemTextLog();
  await unstable_orca.stop();
})();
```

**Returns:** [Promise]&#60;[void]&#62;

## unstable_orca.clearSpokenPhraseLog() {#unstable-orca-clear-spoken-phrase-log}

Clear the log of all spoken phrases for this Orca instance.

```ts
import { unstable_orca } from "@guidepup/guidepup";

(async () => {
  await unstable_orca.start();
  await unstable_orca.clearSpokenPhraseLog();
  await unstable_orca.stop();
})();
```

**Returns:** [Promise]&#60;[void]&#62;

## unstable_orca.click([options]) {#unstable-orca-click}

Click the mouse.

```ts
import { unstable_orca } from "@guidepup/guidepup";

(async () => {
  await unstable_orca.start();
  await unstable_orca.click({ button: "left", clickCount: 1 });
  await unstable_orca.click({ button: "right", clickCount: 2 });
  await unstable_orca.stop();
})();
```

**Parameters:**

- **Optional:** `options` [ClickOptions] Click options.

**Returns:** [Promise]&#60;[void]&#62;

## unstable_orca.default() {#unstable-orca-default}

Detect whether Orca is the default screen reader for the current OS:

- `false` for Windows
- `false` for macOS
- `true` for Linux

This detects the operating system; it does not check whether Orca is installed.

```ts
import { unstable_orca } from "@guidepup/guidepup";

console.log(unstable_orca.default());
```

**Returns:** [boolean]

## unstable_orca.detect() {#unstable-orca-detect}

Detect whether Orca is supported on the current operating system:

- `false` for Windows
- `false` for macOS
- `true` for Linux

This detects the operating system; it does not check whether Orca is installed.
`start()` will fail if Orca is not installed.

```ts
import { unstable_orca } from "@guidepup/guidepup";

console.log(unstable_orca.detect());
```

**Returns:** [boolean]

## unstable_orca.getSetting(key) {#unstable-orca-get-setting}

Returns the value of a setting for this Orca instance.

```ts
import { unstable_orca } from "@guidepup/guidepup";

(async () => {
  await unstable_orca.start();
  console.log(
    unstable_orca.getSetting("/org/gnome/orca/default/speech/enable"),
  );
  await unstable_orca.stop();
})();
```

**Parameters:**

- `key` [string] The setting name.

**Returns:** [unknown] The setting value.

## unstable_orca.getSettings() {#unstable-orca-get-settings}

Returns all the current settings for this Orca instance.

```ts
import { unstable_orca } from "@guidepup/guidepup";

(async () => {
  await unstable_orca.start();
  console.log(unstable_orca.getSettings());
  await unstable_orca.stop();
})();
```

**Returns:** [Record]&#60;[string], [unknown]&#62; Current settings values.

## unstable_orca.interact([options]) {#unstable-orca-interact}

Interact with the item under the Orca cursor.

Equivalent of executing <kbd>Orca</kbd>+<kbd>Control</kbd>+<kbd>Down Arrow</kbd>.

```ts
import { unstable_orca } from "@guidepup/guidepup";

(async () => {
  await unstable_orca.start();
  await unstable_orca.next();
  await unstable_orca.interact();
  await unstable_orca.stop();
})();
```

**Parameters:**

- **Optional:** `options` `Pick<CommandOptions, "capture">` Capture options.

**Returns:** [Promise]&#60;[void]&#62;

## unstable_orca.itemText() {#unstable-orca-item-text}

Get the text of the item in the Orca cursor.

For Orca this is the same as `lastSpokenPhrase`.

```ts
import { unstable_orca } from "@guidepup/guidepup";

(async () => {
  await unstable_orca.start();
  await unstable_orca.next();
  console.log(await unstable_orca.itemText());
  await unstable_orca.stop();
})();
```

**Returns:** [Promise]&#60;[string]&#62; The item's text.

## unstable_orca.itemTextLog() {#unstable-orca-item-text-log}

Get the log of all visited item text for this Orca instance.

For Orca this is the same as `spokenPhraseLog`.

```ts
import { unstable_orca } from "@guidepup/guidepup";

(async () => {
  await unstable_orca.start();
  for (let i = 0; i < 10; i++) {
    await unstable_orca.next();
  }
  console.log(await unstable_orca.itemTextLog());
  await unstable_orca.stop();
})();
```

**Returns:** [Promise]&#60;[Array]&#60;[string]&#62;> The item text log.

## unstable_orca.lastSpokenPhrase() {#unstable-orca-last-spoken-phrase}

Get the last spoken phrase.

```ts
import { unstable_orca } from "@guidepup/guidepup";

(async () => {
  await unstable_orca.start();
  await unstable_orca.next();
  console.log(await unstable_orca.lastSpokenPhrase());
  await unstable_orca.stop();
})();
```

**Returns:** [Promise]&#60;[string]&#62; The last spoken phrase.

## unstable_orca.next([options]) {#unstable-orca-next}

Move the Orca cursor to the next location.

Equivalent of executing <kbd>Orca</kbd>+<kbd>Control</kbd>+<kbd>Right Arrow</kbd>.

```ts
import { unstable_orca } from "@guidepup/guidepup";

(async () => {
  await unstable_orca.start();
  await unstable_orca.next();
  await unstable_orca.stop();
})();
```

**Parameters:**

- **Optional:** `options` `Pick<CommandOptions, "capture">` Capture options.

**Returns:** [Promise]&#60;[void]&#62;

## unstable_orca.nextHeading([options]) {#unstable-orca-next-heading}

Move the Orca cursor to the next heading.

Equivalent of executing <kbd>H</kbd>.

```ts
import { unstable_orca } from "@guidepup/guidepup";

(async () => {
  await unstable_orca.start();
  await unstable_orca.nextHeading();
  await unstable_orca.stop();
})();
```

**Parameters:**

- **Optional:** `options` `Pick<CommandOptions, "capture">` Capture options.

**Returns:** [Promise]&#60;[void]&#62;

## unstable_orca.nextLandmark([options]) {#unstable-orca-next-landmark}

Move the Orca cursor to the next landmark.

Equivalent of executing <kbd>D</kbd>.

```ts
import { unstable_orca } from "@guidepup/guidepup";

(async () => {
  await unstable_orca.start();
  await unstable_orca.nextLandmark();
  await unstable_orca.stop();
})();
```

**Parameters:**

- **Optional:** `options` `Pick<CommandOptions, "capture">` Capture options.

**Returns:** [Promise]&#60;[void]&#62;

## unstable_orca.nextLink([options]) {#unstable-orca-next-link}

Move the Orca cursor to the next link.

Equivalent of executing <kbd>K</kbd>.

```ts
import { unstable_orca } from "@guidepup/guidepup";

(async () => {
  await unstable_orca.start();
  await unstable_orca.nextLink();
  await unstable_orca.stop();
})();
```

**Parameters:**

- **Optional:** `options` `Pick<CommandOptions, "capture">` Capture options.

**Returns:** [Promise]&#60;[void]&#62;

## unstable_orca.perform(command[, options]) {#unstable-orca-perform}

Perform an Orca keyboard command.

The command can be any `OrcaKeyCodeCommand` exposed through
[OrcaKeyCodeCommands], available as `unstable_orca.keyboardCommands` or the
`orcaKeyCodeCommands` export.

```ts
import { unstable_orca } from "@guidepup/guidepup";

(async () => {
  await unstable_orca.start();
  await unstable_orca.perform(unstable_orca.keyboardCommands.MoveToNextSibling);
  await unstable_orca.stop();
})();
```

**Parameters:**

- `command` `OrcaKeyCodeCommand` Orca keyboard command.
- **Optional:** `options` `Pick<CommandOptions, "capture">` Capture options.

**Returns:** [Promise]&#60;[void]&#62;

## unstable_orca.previous([options]) {#unstable-orca-previous}

Move the Orca cursor to the previous location.

Equivalent of executing <kbd>Orca</kbd>+<kbd>Control</kbd>+<kbd>Left Arrow</kbd>.

```ts
import { unstable_orca } from "@guidepup/guidepup";

(async () => {
  await unstable_orca.start();
  await unstable_orca.previous();
  await unstable_orca.stop();
})();
```

**Parameters:**

- **Optional:** `options` `Pick<CommandOptions, "capture">` Capture options.

**Returns:** [Promise]&#60;[void]&#62;

## unstable_orca.previousHeading([options]) {#unstable-orca-previous-heading}

Move the Orca cursor to the previous heading.

Equivalent of executing <kbd>Shift</kbd>+<kbd>H</kbd>.

```ts
import { unstable_orca } from "@guidepup/guidepup";

(async () => {
  await unstable_orca.start();
  await unstable_orca.previousHeading();
  await unstable_orca.stop();
})();
```

**Parameters:**

- **Optional:** `options` `Pick<CommandOptions, "capture">` Capture options.

**Returns:** [Promise]&#60;[void]&#62;

## unstable_orca.previousLandmark([options]) {#unstable-orca-previous-landmark}

Move the Orca cursor to the previous landmark.

Equivalent of executing <kbd>Shift</kbd>+<kbd>D</kbd>.

```ts
import { unstable_orca } from "@guidepup/guidepup";

(async () => {
  await unstable_orca.start();
  await unstable_orca.previousLandmark();
  await unstable_orca.stop();
})();
```

**Parameters:**

- **Optional:** `options` `Pick<CommandOptions, "capture">` Capture options.

**Returns:** [Promise]&#60;[void]&#62;

## unstable_orca.previousLink([options]) {#unstable-orca-previous-link}

Move the Orca cursor to the previous link.

Equivalent of executing <kbd>Shift</kbd>+<kbd>K</kbd>.

```ts
import { unstable_orca } from "@guidepup/guidepup";

(async () => {
  await unstable_orca.start();
  await unstable_orca.previousLink();
  await unstable_orca.stop();
})();
```

**Parameters:**

- **Optional:** `options` `Pick<CommandOptions, "capture">` Capture options.

**Returns:** [Promise]&#60;[void]&#62;

## unstable_orca.press() {#unstable-orca-press}

`press` is part of the shared screen reader API, but it is not currently
implemented for Orca. Calling it throws an error.

## unstable_orca.spokenPhraseLog() {#unstable-orca-spoken-phrase-log}

Get the log of all spoken phrases for this Orca instance.

```ts
import { unstable_orca } from "@guidepup/guidepup";

(async () => {
  await unstable_orca.start();
  for (let i = 0; i < 10; i++) {
    await unstable_orca.next();
  }
  console.log(await unstable_orca.spokenPhraseLog());
  await unstable_orca.stop();
})();
```

**Returns:** [Promise]&#60;[Array]&#60;[string]&#62;> The spoken phrase log.

## unstable_orca.start([options]) {#unstable-orca-start}

Turn Orca on. Orca must be installed on Linux.

By default, `capture` is set to `"initial"`: it captures the first page of
output, but not subsequent content. Set `capture` to `true` for full capture or
`false` to disable capture.

```ts
import { unstable_orca } from "@guidepup/guidepup";

(async () => {
  await unstable_orca.start();
  // ... perform some commands.
  await unstable_orca.stop();
})();
```

**Parameters:**

- **Optional:** `options` `Pick<StartOptions, "capture" | "settings">` Capture
  and screen reader settings options.

**Returns:** [Promise]&#60;[void]&#62;

## unstable_orca.stop() {#unstable-orca-stop}

Turn Orca off.

```ts
import { unstable_orca } from "@guidepup/guidepup";

(async () => {
  await unstable_orca.start();
  // ... perform some commands.
  await unstable_orca.stop();
})();
```

**Returns:** [Promise]&#60;[void]&#62;

## unstable_orca.stopInteracting([options]) {#unstable-orca-stop-interacting}

Stop interacting with the current item under the Orca cursor.

Equivalent of executing <kbd>Orca</kbd>+<kbd>Control</kbd>+<kbd>Up Arrow</kbd>.

```ts
import { unstable_orca } from "@guidepup/guidepup";

(async () => {
  await unstable_orca.start();
  await unstable_orca.next();
  await unstable_orca.stopInteracting();
  await unstable_orca.stop();
})();
```

**Parameters:**

- **Optional:** `options` `Pick<CommandOptions, "capture">` Capture options.

**Returns:** [Promise]&#60;[void]&#62;

## unstable_orca.type() {#unstable-orca-type}

`type` is part of the shared screen reader API, but it is not currently
implemented for Orca. Calling it throws an error.

[clickoptions]: ./class-click-options "ClickOptions"
[capture]: ./class-capture "Capture"
[commandoptions]: ./class-command-options "CommandOptions"
[iscreenreader]: ./class-iscreenreader "IScreenReader"
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
