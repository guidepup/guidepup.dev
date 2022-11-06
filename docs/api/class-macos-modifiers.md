---
title: "MacOSModifiers"
---

Modifier keys for MacOS.

For example, use when performing a VoiceOver command:

```ts
import { voiceOver, MacOSKeyCodes, MacOSModifiers } from "@guidepup/guidepup";

const moveToNextKeyCodeCommand = {
  keyCode: MacOSKeyCodes.ArrowRight,
  modifiers: [MacOSModifiers.Control, MacOSModifiers.Option],
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

List of all modifier accessors:

- `Alt`
- `AltLeft`
- `AltRight`
- `Command`
- `CommandLeft`
- `CommandRight`
- `Control`
- `ControlLeft`
- `ControlRight`
- `Meta`
- `Option`
- `OptionLeft`
- `OptionRight`
- `Shift`
- `ShiftLeft`
- `ShiftRight`
