---
title: "VoiceOverMouse"
---

**Implements:** [ScreenReaderMouse]

Class for VoiceOver mouse operations.

```ts
import { voiceOver } from "@guidepup/guidepup";

const voiceOverMouse = voiceOver.mouse;

// ... perform mouse commands.
```

**Contents:**

- [voiceOverMouse.click([options])](./class-voiceover-mouse#voiceover-mouse-click)

## voiceOverMouse.click([options]) {#voiceover-mouse-click}

Click the mouse.

```ts
import { voiceOver } from "@guidepup/guidepup";

(async () => {
  // Start VoiceOver.
  await voiceOver.start();

  // Left-click the mouse.
  await voiceOver.mouse.click();

  // Left-click the mouse using specific options.
  await voiceOver.mouse.click({ button: "left", clickCount: 1 });

  // Double-right-click the mouse.
  await voiceOver.mouse.click({ button: "right", clickCount: 2 });

  // Stop VoiceOver.
  await voiceOver.stop();
})();
```

> **Note:** we recommend using the equivalent method on the base VoiceOver class instead of using this method on the VoiceOver mouse class:
>
> ```ts
> await voiceOver.click();
> ```
>
> See [VoiceOver] for further details.

**Parameters:**

- **Optional:** `options` &#60;[ClickOptions]&#62; Click options.

**Returns:** &#60;[Promise]<[void]>&#62;

[clickoptions]: ./class-click-options "ClickOptions"
[screenreadermouse]: ./class-screenreader-mouse "ScreenReaderMouse"
[voiceover]: ./class-voiceover "VoiceOver"
[promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise"
[void]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void"
