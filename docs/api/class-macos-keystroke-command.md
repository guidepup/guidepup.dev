---
title: "MacOSKeystrokeCommand"
---

**Extends:** [KeystrokeCommand]

- [macOSKeystrokeCommand.characters](./class-macos-keystroke-command#keystroke-command-characters)
- [macOSKeystrokeCommand.description](./class-macos-keystroke-command#keystroke-command-description)
- [macOSKeystrokeCommand.modifiers](./class-macos-keystroke-command#keystroke-command-modifiers)
- [macOSKeystrokeCommand.representation](./class-macos-keystroke-command#keystroke-command-representation)

## macOSKeystrokeCommand.characters {#keystroke-command-characters}

The character(s) to send.

**Type:** &#60;[number] | [Array]<[number]>&#62;

## macOSKeystrokeCommand.description {#keystroke-command-description}

**Optional:** Description of the action the keystroke performs.

**Type:** &#60;[string]&#62;

## macOSKeystrokeCommand.modifiers {#keystroke-command-modifiers}

**Optional:** List of modifier keys to press while sending the character(s).

**Type:** &#60;[Array]<[MacOSModifiers]>&#62;

## macOSKeystrokeCommand.representation {#keystroke-command-representation}

**Optional:** Symbolic representation of the character(s) and modifier keys this command uses.

**Type:** &#60;[string]&#62;

[keystrokecommand]: ./class-keystroke-command "KeystrokeCommand"
[macosmodifiers]: ./class-macos-modifiers "MacOSModifiers"
[array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array"
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "number"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string"
