---
title: "Guidepup Record Library"
description: Reference the Guidepup Record API for screen reader recording and export.
---

# Guidepup Record Library

Guidepup Record provides tools for screen recording.

Here's a typical example:

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

On Linux, recording requires an X11 display identified by the `DISPLAY` environment variable. Wayland-only sessions are not supported.

**Contents:**

- [linuxRecord](./class-guidepup-record#guidepup-linux-record)
- [macOSRecord](./class-guidepup-record#guidepup-macos-record)
- [record](./class-guidepup-record#guidepup-record)
- [windowsRecord](./class-guidepup-record#guidepup-windows-record)

## linuxRecord {#guidepup-linux-record}

**See:** [linuxRecord]

Start a screen recording on Linux using an X11 display.

## macOSRecord {#guidepup-macos-record}

**See:** [macOSRecord]

Start a screen recording on macOS.

## record {#guidepup-record}

**See:** [record]

Start a screen recording using the recorder for the current operating system.

## windowsRecord {#guidepup-windows-record}

**See:** [windowsRecord]

Start a screen recording on Windows.

[record]: ./class-record "record"
[macosrecord]: ./class-macos-record "macOSRecord"
[windowsrecord]: ./class-windows-record "windowsRecord"
[linuxrecord]: ./class-linux-record "linuxRecord"
