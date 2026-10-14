---
title: "linuxRecord"
description: Record screen reader sessions on Linux.
---

**Contents:**

- [`linuxRecord(filepath)`](./class-linux-record#linux-record)

## linuxRecord(filepath) {#linux-record}

Start a screen recording on Linux using an X11 display. The `DISPLAY` environment variable must identify the display. Wayland-only sessions are not supported.

```ts
import { linuxRecord } from "@guidepup/record";

(async () => {
  // Start the screen recording.
  const stopRecording = linuxRecord("./recordings/screenRecording.mp4");

  // ... perform some commands.

  // Stop and finalize the screen recording.
  await stopRecording();
})();
```

**Parameters:**

- `filepath` [string] The file path to save the screen recording to.

**Returns:** [Function] An async function returning `Promise<void>` that stops and finalizes the screen recording.

[function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String "string"
