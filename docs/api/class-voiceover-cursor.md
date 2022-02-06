---
title: "VoiceOverCursor"
---

**Implements:** [ScreenReaderCursor]

- [voiceOverCursor.act([options])](./class-voiceover-cursor#voiceover-cursor-act)
- [voiceOverCursor.interact([options])](./class-voiceover-cursor#voiceover-cursor-interact)
- [voiceOverCursor.next([options])](./class-voiceover-cursor#voiceover-cursor-next)
- [voiceOverCursor.previous([options])](./class-voiceover-cursor#voiceover-cursor-previous)
- [voiceOverCursor.stopInteracting([options])](./class-voiceover-cursor#voiceover-cursor-stop-interacting)
- [voiceOverCursor.takeScreenshot([options])](./class-voiceover-cursor#voiceover-cursor-take-screenshot)

## voiceOverCursor.act([options]) {#voiceover-cursor-act}

Perform the default action for the item in the VoiceOver cursor.

Equivalent of executing `VO-Space bar`.

**Parameters:**

- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[void]>&#62;

## voiceOverCursor.interact([options]) {#voiceover-cursor-interact}

Interact with the item under the VoiceOver cursor.

Equivalent of executing `VO-Shift-Down Arrow`.

**Parameters:**

- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[void]>&#62;

## voiceOverCursor.next([options]) {#voiceover-cursor-next}

Move the VoiceOver cursor to the next location.

Equivalent of executing `VO-Right Arrow`.

**Parameters:**

- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[void]>&#62;

## voiceOverCursor.previous([options]) {#voiceover-cursor-previous}

Move the VoiceOver cursor to the previous location.

Equivalent of executing `VO-Left Arrow`.

**Parameters:**

- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[void]>&#62;

## voiceOverCursor.stopInteracting([options]) {#voiceover-cursor-stop-interacting}

Stop interacting with the current item.

Equivalent of executing `VO-Shift-Up Arrow`.

**Parameters:**

- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[void]>&#62;

## voiceOverCursor.takeScreenshot([options]) {#voiceover-cursor-take-screenshot}

Takes a screenshot of the VoiceOver cursor and returns the path to screenshot file.

**Parameters:**

- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[string]>&#62; The path to the screenshot file.

[commandoptions]: ./class-command-options "CommandOptions"
[screenreadercursor]: ./class-screenreader-cursor "ScreenReaderCursor"
[promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string"
[void]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void"
