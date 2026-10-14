---
title: "macOSRecord"
description: Record Guidepup VoiceOver sessions on macOS.
---

**Contents:**

- [`macOSRecord(filepath)`](./class-macos-record#macos-record)

## macOSRecord(filepath) {#macos-record}

Start a screen recording on macOS.

```ts
import { macOSRecord } from "@guidepup/record";

(async () => {
  // Start the screen recording.
  const stopRecording = macOSRecord("./recordings/screenRecording.mov");

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
