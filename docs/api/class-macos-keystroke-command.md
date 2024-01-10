---
title: "MacOSKeystrokeCommand"
---

**Extends:** [KeystrokeCommand]

Object representing a MacOS keystroke command.

For example, use when performing a VoiceOver command:

```ts
import { voiceOver, MacOSModifiers } from "@guidepup/guidepup";

const poundSymbolKeystrokeCommand = {
  characters: "3",
  modifiers: [MacOSModifiers.Alt],
  description: "A pound symbol",
  representation: "#",
};

(async () => {
  // Start VoiceOver.
  await voiceOver.start();

  // Send a '#' keystroke.
  await voiceOver.perform(poundSymbolKeystrokeCommand);

  // Stop VoiceOver.
  await voiceOver.stop();
})();
```

> **Note:** the above is slightly contrived as we could just type a `#` character using:
>
> ```ts
> await voiceOver.type("#");
> ```

**Contents:**

- [macOSKeystrokeCommand.characters](./class-macos-keystroke-command#keystroke-command-characters)
- [macOSKeystrokeCommand.description](./class-macos-keystroke-command#keystroke-command-description)
- [macOSKeystrokeCommand.modifiers](./class-macos-keystroke-command#keystroke-command-modifiers)
- [macOSKeystrokeCommand.representation](./class-macos-keystroke-command#keystroke-command-representation)

## macOSKeystrokeCommand.characters {#keystroke-command-characters}

The character(s) to send.

**Type:** [string]

## macOSKeystrokeCommand.description {#keystroke-command-description}

**Optional:** Description of the action the keystroke performs.

**Type:** [string]

## macOSKeystrokeCommand.modifiers {#keystroke-command-modifiers}

**Optional:** List of modifier keys to press while sending the character(s).

**Type:** [Array]&#60;[MacOSModifiers]&#62;

## macOSKeystrokeCommand.representation {#keystroke-command-representation}

**Optional:** Symbolic representation of the character(s) and modifier keys this command uses.

**Type:** [string]

[keystrokecommand]: ./class-keystroke-command "KeystrokeCommand"
[macosmodifiers]: ./class-macos-modifiers "MacOSModifiers"
[array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String "string"
