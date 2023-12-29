---
title: "MacOSKeyCodeCommand"
---

**Extends:** [KeyCodeCommand]

Object representing a MacOS key code command.

For example, use when performing a VoiceOver command:

```ts
import { voiceOver, MacOSKeyCodes, MacOSModifiers } from "@guidepup/guidepup";

const moveToNextKeyCodeCommand = {
  keyCode: MacOSKeyCodes.ArrowRight,
  modifiers: [MacOSModifiers.Control, MacOSModifiers.Option],
  description: "Move to next",
  representation: "VO-Right Arrow",
};

(async () => {
  // Start VoiceOver.
  await voiceOver.start();

  // Move to the next item.
  await voiceOver.perform(moveToNextKeyCodeCommand);

  // Stop VoiceOver.
  await voiceOver.stop();
})();
```

> **Note:** Guidepup provides a number of utility key codes meaning you shouldn't need to construct your own too often! For example, see [VoiceOverKeyCodeCommands] for all VoiceOver key codes.
>
> The above example is also slightly contrived as we could just use the convenience method for moving to the next item!
>
> ```ts
> await voiceOver.next();
> ```

See also:

- [VoiceOverKeyCodeCommands]

**Contents:**

- [macOSKeyCodeCommand.description](./class-macos-key-code-command#key-code-command-description)
- [macOSKeyCodeCommand.keyCode](./class-macos-key-code-command#key-code-command-key-code)
- [macOSKeyCodeCommand.modifiers](./class-macos-key-code-command#key-code-command-modifiers)
- [macOSKeyCodeCommand.representation](./class-macos-key-code-command#key-code-command-representation)

## macOSKeyCodeCommand.description {#key-code-command-description}

**Optional:** Description of the action the key code performs.

**Type:** [string]

## macOSKeyCodeCommand.keyCode {#key-code-command-key-code}

The key code or key codes to send. See [MacOSKeyCodes] for available key codes.

**Type:** [number] | [Array]<[number]>

## macOSKeyCodeCommand.modifiers {#key-code-command-modifiers}

**Optional:** List of modifier keys to press while sending the key code(s).

**Type:** [Array]<[MacOSModifiers]>

## macOSKeyCodeCommand.representation {#key-code-command-representation}

**Optional:** Symbolic representation of the key code(s) and modifier keys this command uses.

**Type:** [string]

[keycodecommand]: ./class-key-code-command "KeyCodeCommand"
[macoskeycodes]: ./class-macos-key-codes "MacOSKeyCodes"
[macosmodifiers]: ./class-macos-modifiers "MacOSModifiers"
[voiceoverkeycodecommands]: ./class-voiceover-key-code-commands "VoiceOverKeyCodeCommands"
[array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array"
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number "number"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String "string"
