---
title: "MacOSKeyCodeCommand"
---

**Extends:** [KeyCodeCommand]

- [macOSKeyCodeCommand.description](./class-macos-key-code-command#key-code-command-description)
- [macOSKeyCodeCommand.keyCode](./class-macos-key-code-command#key-code-command-key-code)
- [macOSKeyCodeCommand.modifiers](./class-macos-key-code-command#key-code-command-modifiers)
- [macOSKeyCodeCommand.representation](./class-macos-key-code-command#key-code-command-representation)

## macOSKeyCodeCommand.description {#key-code-command-description}

**Optional:** Description of the action the key code performs.

**Type:** &#60;[string]&#62;

## macOSKeyCodeCommand.keyCode {#key-code-command-key-code}

The key code or key codes to send.

**Type:** &#60;[number] | [Array]<[number]>&#62;

## macOSKeyCodeCommand.modifiers {#key-code-command-modifiers}

**Optional:** List of modifier keys to press while sending the key code(s).

**Type:** &#60;[Array]<[MacOSModifiers]>&#62;

## macOSKeyCodeCommand.representation {#key-code-command-representation}

**Optional:** Symbolic representation of the key code(s) and modifier keys this command uses.

**Type:** &#60;[string]&#62;

[keycodecommand]: ./class-key-code-command "KeyCodeCommand"
[macosmodifiers]: ./class-macos-modifiers "MacOSModifiers"
[array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array"
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "number"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string"
