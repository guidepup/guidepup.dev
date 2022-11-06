---
title: "macOSRecord"
---

**Contents:**

- [`macOSRecord(filePath)`](./class-macos-record#macos-record)

## macOSRecord(filePath) {#macos-record}

Start a screen recording on MacOS.

```ts
import { macOSRecord } from "@guidepup/guidepup";

(async () => {
  // Start the screen recording.
  const stopRecording = macOSRecord("./recordings/screenRecording.mov");

  // ... perform some commands.

  // Stop the screen recording.
  stopRecording();
})();
```

**Parameters:**

- `filepath` &#60;[string]&#62; The file path to save the screen recording to.

**Returns:** &#60;[Function]&#62; A function to stop the screen recording.

[function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string"
