---
title: "WindowsKeystrokeCommand"
---

**Extends:** [KeystrokeCommand]

Object representing a Windows keystroke command.

For example, use when performing a NVDA command:

```ts
import { nvda, WindowsModifiers } from "@guidepup/guidepup";

const exclamationMarkSymbolKeystrokeCommand = {
  characters: "1",
  modifiers: [WindowsModifiers.SHIFT],
  description: "A pound symbol",
  representation: "!",
};

(async () => {
  // Start NVDA.
  await nvda.start();

  // Send a '!' keystroke.
  await nvda.perform(exclamationMarkSymbolKeystrokeCommand);

  // Stop NVDA.
  await nvda.stop();
})();
```

> **Note:** the above is slightly contrived as we could just type a `!` character using:
>
> ```ts
> await nvda.type("!");
> ```

**Contents:**

- [windowsKeystrokeCommand.characters](./class-windows-keystroke-command#keystroke-command-characters)
- [windowsKeystrokeCommand.description](./class-windows-keystroke-command#keystroke-command-description)
- [windowsKeystrokeCommand.modifiers](./class-windows-keystroke-command#keystroke-command-modifiers)
- [windowsKeystrokeCommand.representation](./class-windows-keystroke-command#keystroke-command-representation)

## windowsKeystrokeCommand.characters {#keystroke-command-characters}

The character(s) to send.

**Type:** [string]

## windowsKeystrokeCommand.description {#keystroke-command-description}

**Optional:** Description of the action the keystroke performs.

**Type:** [string]

## windowsKeystrokeCommand.modifiers {#keystroke-command-modifiers}

**Optional:** List of modifier keys to press while sending the character(s).

**Type:** [Array]&#60;[WindowsModifiers]&#62;

## windowsKeystrokeCommand.representation {#keystroke-command-representation}

**Optional:** Symbolic representation of the character(s) and modifier keys this command uses.

**Type:** [string]

[keystrokecommand]: ./class-keystroke-command "KeystrokeCommand"
[windowsmodifiers]: ./class-windows-modifiers "WindowsModifiers"
[array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String "string"
