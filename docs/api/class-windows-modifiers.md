---
title: "WindowsModifiers"
---

Modifier keys for Windows.

For example, use when performing a NVDA command:

```ts
import { nvda, WindowsKeyCodes, WindowsModifiers } from "@guidepup/guidepup";

const reportBatteryStatusKeyCodeCommand: {
  keyCode: [...KeyCodes.Insert, KeyCodes.B];
  modifiers: [Modifiers.Shift];
};

(async () => {
  // Start VoiceOver.
  await voiceOver.start();

  // Report battery status.
  await voiceOver.perform(reportBatteryStatusKeyCodeCommand);

  // Stop VoiceOver.
  await voiceOver.stop();
})();
```

List of all modifier accessors:

- `Alt`
- `Control`
- `Shift`
