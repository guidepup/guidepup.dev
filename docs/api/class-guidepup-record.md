---
title: "Guidepup Record Library"
---

# Guidepup Record Library

Guidepup Record provides tools for screen recording.

Here's a typical example:

```ts
import { macOSRecord } from "@guidepup/record";

(async () => {
  // Start the screen recording.
  const stopRecording = macOSRecord("./recordings/screenRecording.mov");

  // ... perform some commands.

  // Stop the screen recording.
  stopRecording();
})();
```

**Contents:**

- [macOSRecord](./class-guidepup-record#guidepup-macos-record)
- [windowsRecord](./class-guidepup-record#guidepup-windows-record)

## macOSRecord {#guidepup-macos-record}

**See:** [macOSRecord]

Start a screen recording on MacOS.

## windowsRecord {#guidepup-windows-record}

**See:** [windowsRecord]

Start a screen recording on Windows.

[macosrecord]: ./class-macos-record "macOSRecord"
[windowsrecord]: ./class-windows-record "windowsRecord"
