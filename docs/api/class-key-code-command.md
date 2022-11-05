---
title: "KeyCodeCommand"
---

**Extends:** [object]

Object representing a key code command.

For example, use when performing a VoiceOver command:

```ts
import { voiceOver, MacOSKeyCodes, MacOSModifiers } from "@guidepup/guidepup";

const moveToNextKeyCodeCommand = {
  keyCode: MacOSKeyCodes.ArrowRight,
  modifiers: [MacOSModifiers.Control, MacOSModifiers.Option],
};

(async () => {
  await voiceOver.start();

  // Move to the next item.
  await voiceOver.perform(moveToNextKeyCodeCommand);
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

- [MacOSKeyCodeCommand]
- [VoiceOverKeyCodeCommands]

**Contents:**

- [keyCodeCommand.keyCode](./class-key-code-command#key-code-command-key-code)
- [keyCodeCommand.modifiers](./class-key-code-command#key-code-command-modifiers)

## keyCodeCommand.keyCode {#key-code-command-key-code}

The key code or key codes to send.

**Type:** &#60;[any] | [Array]<[any]>&#62;

## keyCodeCommand.modifiers {#key-code-command-modifiers}

**Optional:** List of modifier keys to press while sending the key code(s).

**Type:** &#60;[Array]<[string]>&#62;

[macoskeycodecommand]: ./class-macos-key-code-command "MacOSKeyCodeCommand"
[voiceoverkeycodecommands]: ./class-voiceover-key-code-commands "VoiceOverKeyCodeCommands"
[array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array"
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "object"
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "number"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string"
[any]: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any "any"
