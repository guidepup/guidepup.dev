---
title: "KeystrokeCommand"
---

**Extends:** [object]

Object representing a keystroke command.

For example, use when performing a VoiceOver command:

```ts
import { voiceOver, MacOSModifiers } from "@guidepup/guidepup";

const poundSymbolKeystrokeCommand = {
  characters: "3",
  modifiers: [MacOSModifiers.Alt],
};

(async () => {
  await voiceOver.start();

  // Send a '#' keystroke.
  await voiceOver.perform(poundSymbolKeystrokeCommand);
})();

```
> **Note:** the above is slightly contrived as we could just type a `#` character using:
>
> ```ts
> await voiceOver.type("#")
> ```

See also:

- [MacOSKeystrokeCommand]

**Contents:**

- [keystrokeCommand.characters](./class-keystroke-command#keystroke-command-characters)
- [keystrokeCommand.modifiers](./class-keystroke-command#keystroke-command-modifiers)

## keystrokeCommand.characters {#keystroke-command-characters}

The character(s) to send.

**Type:** &#60;[string]&#62;

## keystrokeCommand.modifiers {#keystroke-command-modifiers}

**Optional:** List of modifier keys to press while sending the character(s).

**Type:** &#60;[Array]<[string]>&#62;

[macoskeystrokecommand]: ./class-macos-keystroke-command "MacOSKeystrokeCommand"
[array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array"
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "object"
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "number"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string"