---
title: "ClickOptions"
---

**Extends:** [CommandOptions]

Options for click operations.

For example, use with the VoiceOver mouse cursor:

```ts
import { voiceOver } from "@guidepup/guidepup";

(async () => {
  // Start VoiceOver.
  await voiceOver.start();

  // Left-click the mouse.
  await voiceOver.click();

  // Left-click the mouse using specific options.
  await voiceOver.click({ button: "left", clickCount: 1 });

  // Double-right-click the mouse.
  await voiceOver.click({ button: "right", clickCount: 2 });

  // Stop VoiceOver.
  await voiceOver.stop();
})();
```

**Contents:**

- [clickOptions.button](./class-click-options#click-options-button)
- [clickOptions.clickCount](./class-click-options#click-options-lick-count)

## clickOptions.button {#click-options-button}

**Optional:** Mouse button to click. One of: `"left"`, `"right"`. Defaults to `"left"` if not provided.

**Type:** &#60;[string]&#62;

## clickOptions.clickCount {#click-options-click-count}

**Optional:** Number of times to click the mouse. One of: `1`, `2`, `3`. Defaults to `1` if not provided.

**Type:** &#60;[number]&#62;

[commandoptions]: ./class-command-options "CommandOptions"
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number "number"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String "string"
