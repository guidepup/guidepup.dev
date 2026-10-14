---
title: "windowsRecord"
description: Record Guidepup NVDA automation sessions on Windows.
---

**Contents:**

- [`windowsRecord(filepath)`](./class-windows-record#windows-record)

## windowsRecord(filepath) {#windows-record}

Start a screen recording on Windows.

```ts
import { windowsRecord } from "@guidepup/record";

(async () => {
  // Start the screen recording.
  const stopRecording = windowsRecord("./recordings/screenRecording.mp4");

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
