---
title: "VoiceOverCursor"
---

**Implements:** [ScreenReaderCursor]

Class for VoiceOver cursor operations.

```ts
import { voiceOver } from "@guidepup/guidepup";

const voiceOverCursor = voiceOver.cursor;

// ... perform cursor commands.
```

**Contents:**

- [voiceOverCursor.act([options])](./class-voiceover-cursor#voiceover-cursor-act)
- [voiceOverCursor.interact([options])](./class-voiceover-cursor#voiceover-cursor-interact)
- [voiceOverCursor.next([options])](./class-voiceover-cursor#voiceover-cursor-next)
- [voiceOverCursor.previous([options])](./class-voiceover-cursor#voiceover-cursor-previous)
- [voiceOverCursor.stopInteracting([options])](./class-voiceover-cursor#voiceover-cursor-stop-interacting)
- [voiceOverCursor.takeScreenshot([options])](./class-voiceover-cursor#voiceover-cursor-take-screenshot)

## voiceOverCursor.act([options]) {#voiceover-cursor-act}

Perform the default action for the item in the VoiceOver cursor.

Equivalent of executing `VO-Space bar`.

```ts
import { voiceOver } from "@guidepup/guidepup";

(async () => {
  // Start VoiceOver.
  await voiceOver.start();

  // Move to the next item.
  await voiceOver.next();

  // Perform the default action for the item.
  await voiceOver.cursor.act();

  // Stop VoiceOver.
  await voiceOver.stop();
})();
```

> **Note:** we recommend using the equivalent method on the base VoiceOver class instead of using this method on the VoiceOver cursor class:
>
> ```ts
> await voiceOver.act();
> ```
>
> See [VoiceOver] for further details.

**Parameters:**

- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[void]>&#62;

## voiceOverCursor.interact([options]) {#voiceover-cursor-interact}

Interact with the item under the VoiceOver cursor.

Equivalent of executing `VO-Shift-Down Arrow`.

```ts
import { voiceOver } from "@guidepup/guidepup";

(async () => {
  // Start VoiceOver.
  await voiceOver.start();

  // Move to the next item.
  await voiceOver.next();

  // Interact with the item.
  await voiceOver.cursor.interact();

  // Stop VoiceOver.
  await voiceOver.stop();
})();
```

> **Note:** we recommend using the equivalent method on the base VoiceOver class instead of using this method on the VoiceOver cursor class:
>
> ```ts
> await voiceOver.interact();
> ```
>
> See [VoiceOver] for further details.

**Parameters:**

- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[void]>&#62;

## voiceOverCursor.next([options]) {#voiceover-cursor-next}

Move the VoiceOver cursor to the next location.

Equivalent of executing `VO-Right Arrow`.

```ts
import { voiceOver } from "@guidepup/guidepup";

(async () => {
  // Start VoiceOver.
  await voiceOver.start();

  // Move to the next item.
  await voiceOver.cursor.next();

  // Stop VoiceOver.
  await voiceOver.stop();
})();
```

> **Note:** we recommend using the equivalent method on the base VoiceOver class instead of using this method on the VoiceOver cursor class:
>
> ```ts
> await voiceOver.next();
> ```
>
> See [VoiceOver] for further details.

**Parameters:**

- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[void]>&#62;

## voiceOverCursor.previous([options]) {#voiceover-cursor-previous}

Move the VoiceOver cursor to the previous location.

Equivalent of executing `VO-Left Arrow`.

```ts
import { voiceOver } from "@guidepup/guidepup";

(async () => {
  // Start VoiceOver.
  await voiceOver.start();

  // Move to the previous item.
  await voiceOver.cursor.previous();

  // Stop VoiceOver.
  await voiceOver.stop();
})();
```

> **Note:** we recommend using the equivalent method on the base VoiceOver class instead of using this method on the VoiceOver cursor class:
>
> ```ts
> await voiceOver.previous();
> ```
>
> See [VoiceOver] for further details.

**Parameters:**

- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[void]>&#62;

## voiceOverCursor.stopInteracting([options]) {#voiceover-cursor-stop-interacting}

Stop interacting with the current item.

Equivalent of executing `VO-Shift-Up Arrow`.

```ts
import { voiceOver } from "@guidepup/guidepup";

(async () => {
  // Start VoiceOver.
  await voiceOver.start();

  // Interact with the item.
  await voiceOver.cursor.interact();

  // ... perform some commands.

  // Stop interacting with the item.
  await voiceOver.cursor.stopInteracting();

  // Stop VoiceOver.
  await voiceOver.stop();
})();
```

> **Note:** we recommend using the equivalent method on the base VoiceOver class instead of using this method on the VoiceOver cursor class:
>
> ```ts
> await voiceOver.stopInteracting();
> ```
>
> See [VoiceOver] for further details.

**Parameters:**

- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[void]>&#62;

## voiceOverCursor.takeScreenshot([options]) {#voiceover-cursor-take-screenshot}

Takes a screenshot of the item focussed in the VoiceOver cursor and returns the path to screenshot file.

This command is specific to the VoiceOver screen-reader.

```ts
import { voiceOver } from "@guidepup/guidepup";

(async () => {
  // Start VoiceOver.
  await voiceOver.start();

  // Move to the next item.
  await voiceOver.cursor.next();

  // Take a screenshot of the item focussed in the VoiceOver cursor.
  const screenshotFile = await voiceOver.cursor.takeScreenshot();
  console.log(screenshotFile);

  // Stop VoiceOver.
  await voiceOver.stop();
})();
```

**Parameters:**

- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[string]>&#62; The path to the screenshot file.

[commandoptions]: ./class-command-options "CommandOptions"
[screenreadercursor]: ./class-screenreader-cursor "ScreenReaderCursor"
[voiceover]: ./class-voiceover "VoiceOver"
[promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string"
[void]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "v oid"
