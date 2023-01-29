---
title: "WindowsKeyCodeCommand"
---

**Extends:** [KeyCodeCommand]

Object representing a Windows key code command.

For example, use when performing a NVDA command:

```ts
import { nvda, WindowsKeyCodes, WindowsModifiers } from "@guidepup/guidepup";

const reportBatteryStatusKeyCodeCommand = {
  keyCode: [WindowsKeyCodes.Insert, WindowsKeyCodes.B],
  modifiers: [WindowsModifiers.Shift],
  description:
    "Reports the battery status i.e. whether AC power is in use or the current charge percentage.",
  representation: "NVDA-Shift-B",
};

(async () => {
  // Start NVDA.
  await nvda.start();

  // Move to the next item.
  await nvda.perform(moveToNextKeyCodeCommand);

  // Stop NVDA.
  await nvda.stop();
})();
```

> **Note:** Guidepup provides a number of utility key codes meaning you shouldn't need to construct your own too often! For example, see [NVDAKeyCodeCommands] for all NVDA key codes.
>
> The above example is also slightly contrived as we could just use the convenience command getter!
>
> ```ts
> await nvda.perform(nvda.keyboardCommands.reportBatteryStatus);
> ```

See also:

- [NVDAKeyCodeCommands]

**Contents:**

- [windowsKeyCodeCommand.description](./class-windows-key-code-command#key-code-command-description)
- [windowsKeyCodeCommand.keyCode](./class-windows-key-code-command#key-code-command-key-code)
- [windowsKeyCodeCommand.modifiers](./class-windows-key-code-command#key-code-command-modifiers)
- [windowsKeyCodeCommand.representation](./class-windows-key-code-command#key-code-command-representation)

## windowsKeyCodeCommand.description {#key-code-command-description}

**Optional:** Description of the action the key code performs.

**Type:** &#60;[string]&#62;

## windowsKeyCodeCommand.keyCode {#key-code-command-key-code}

The key code or key codes to send. See [WindowsKeyCodes] for available key codes.

**Type:** &#60;[object] | [Array]<[object]>&#62;

## windowsKeyCodeCommand.modifiers {#key-code-command-modifiers}

**Optional:** List of modifier keys to press while sending the key code(s).

**Type:** &#60;[Array]<[WindowsModifiers]>&#62;

## windowsKeyCodeCommand.representation {#key-code-command-representation}

**Optional:** Symbolic representation of the key code(s) and modifier keys this command uses.

**Type:** &#60;[string]&#62;

[keycodecommand]: ./class-key-code-command "KeyCodeCommand"
[windowskeycodes]: ./class-windows-key-codes "WindowsKeyCodes"
[windowsmodifiers]: ./class-windows-modifiers "WindowsModifiers"
[nvdakeycodecommands]: ./class-nvda-key-code-commands "NVDAKeyCodeCommands"
[array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array"
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "object"
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "number"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string"
