---
title: "record"
description: Automatically select a screen recorder for the current platform.
---

**Contents:**

- [`record(filepath)`](./class-record#record)

## record(filepath) {#record}

Start a screen recording using the recorder for the current operating system. Recording is supported on macOS, Windows, and Linux. On Linux, an X11 display must be identified by the `DISPLAY` environment variable; Wayland-only sessions are not supported. An error is thrown on unsupported operating systems.

```ts
import { record } from "@guidepup/record";

(async () => {
  // Start the screen recording.
  const stopRecording = record("./recordings/screenRecording.mp4");

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
