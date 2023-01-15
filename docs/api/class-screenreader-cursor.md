---
title: "ScreenReaderCursor"
---

Base interface for screen reader cursor classes.

See also:

- [VoiceOverCursor]

**Contents:**

- [screenReaderCursor.act([options])](./class-screenreader-cursor#screenreader-cursor-act)
- [screenReaderCursor.interact([options])](./class-screenreader-cursor#screenreader-cursor-interact)
- [screenReaderCursor.next([options])](./class-screenreader-cursor#screenreader-cursor-next)
- [screenReaderCursor.previous([options])](./class-screenreader-cursor#screenreader-cursor-previous)
- [screenReaderCursor.stopInteracting([options])](./class-screenreader-cursor#screenreader-cursor-stop-interacting)

## screenReaderCursor.act([options]) {#screenreader-cursor-act}

Perform the default action for the item in the screen reader cursor.

**Parameters:**

- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[void]>&#62;

## screenReaderCursor.interact([options]) {#screenreader-cursor-interact}

Interact with the item under the screen reader cursor.

**Parameters:**

- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[void]>&#62;

## screenReaderCursor.next([options]) {#screenreader-cursor-next}

Move the screen reader cursor to the next location.

**Parameters:**

- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[void]>&#62;

## screenReaderCursor.previous([options]) {#screenreader-cursor-previous}

Move the screen reader cursor to the previous location.

**Parameters:**

- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[void]>&#62;

## screenReaderCursor.stopInteracting([options]) {#screenreader-cursor-stop-interacting}

Stop interacting with the current item.

**Parameters:**

- **Optional:** `options` &#60;[CommandOptions]&#62; Additional options.

**Returns:** &#60;[Promise]<[void]>&#62;

[commandoptions]: ./class-command-options "CommandOptions"
[voiceovercursor]: ./class-voiceover-cursor "VoiceOverCursor"
[promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise"
[void]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined "void"
