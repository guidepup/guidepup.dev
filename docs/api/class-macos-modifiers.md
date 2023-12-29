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

- <kbd>Alt</kbd>
- <kbd>AltLeft</kbd>
- <kbd>AltRight</kbd>
- <kbd>Command</kbd>
- <kbd>CommandLeft</kbd>
- <kbd>CommandRight</kbd>
- <kbd>Control</kbd>
- <kbd>ControlLeft</kbd>
- <kbd>ControlRight</kbd>
- <kbd>Meta</kbd>
- <kbd>Option</kbd>
- <kbd>OptionLeft</kbd>
- <kbd>OptionRight</kbd>
- <kbd>Shift</kbd>
- <kbd>ShiftLeft</kbd>
- <kbd>ShiftRight</kbd>
