---
title: "KeyboardOptions"
---

**Extends:** [CommandOptions]

Options for keyboard operations.

For example, use with the VoiceOver keyboard:

```ts
import { voiceOver, MacOSApplications } from "@guidepup/guidepup";

const safariKeyboardOptions = {
  application: MacOSApplications.Safari,
};

(async () => {
  // Start VoiceOver
  await voiceOver.start();

  // Enter a username on Safari.
  await voiceOver.type("my-username", safariKeyboardOptions);
  await voiceOver.press("Enter", safariKeyboardOptions);

  // Stop VoiceOver.
  await voiceOver.stop();
})();
```

**Contents:**

- [keyboardOptions.application](./class-keyboard-options#keyboard-options-application)

## keyboardOptions.application {#keyboard-options-application}

**Optional:** Identifier for target application. If not provided, the current focused application will be targeted.

**Type:** &#60;[string]&#62;

See also:

- [MacOSApplications]

[commandoptions]: ./class-command-options "CommandOptions"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String "string"
[macosapplications]: ./class-macos-applications "MacOSApplications"
