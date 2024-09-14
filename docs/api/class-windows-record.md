---
title: "windowsRecord"
---

**Contents:**

- [`windowsRecord(filePath)`](./class-windows-record#windows-record)

## windowsRecord(filePath) {#windows-record}

Start a screen recording on Windows.

```ts
import { windowsRecord } from "@guidepup/record";

(async () => {
  // Start the screen recording.
  const stopRecording = windowsRecord("./recordings/screenRecording.mp4");

  // ... perform some commands.

  // Stop the screen recording.
  stopRecording();
})();
```

**Parameters:**

- `filepath` [string] The file path to save the screen recording to.

**Returns:** [Function] A function to stop the screen recording.

[function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String "string"
