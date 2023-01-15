---
title: "Guidepup Library"
---

# Guidepup Library

Guidepup provides a reliable set of APIs to automate screen-readers through JavaScript.

Current screen reader support:

- VoiceOver for MacOS
- NVDA for Windows ([WIP](https://github.com/guidepup/guidepup/compare/feat/nvda-support))

Here's a typical example:

```ts
import { voiceOver } from "@guidepup/guidepup";

(async () => {
  // Start VoiceOver.
  await voiceOver.start();

  // Move to the next item.
  await voiceOver.next();

  // ... perform some commands.

  // Stop VoiceOver.
  await voiceOver.stop();
})();
```

**Contents:**

- [guidepup.macOSActivate](./class-guidepup#guidepup-macos-activate)
- [guidepup.MacOSApplications](./class-guidepup#guidepup-macos-applications)
- [guidepup.MacOSKeyCodes](./class-guidepup#guidepup-macos-key-codes)
- [guidepup.MacOSModifiers](./class-guidepup#guidepup-macos-modifiers)
- [guidepup.macOSQuit](./class-guidepup#guidepup-macos-quit)
- [guidepup.macOSRecord](./class-guidepup#guidepup-macos-record)
- [guidepup.nvda](./class-guidepup#guidepup-nvda)
- [guidepup.voiceOver](./class-guidepup#guidepup-voiceover)
- [guidepup.VoiceOverCommanderCommands](./class-guidepup#guidepup-voiceover-commander-commands)
- [guidepup.voiceOverKeyCodeCommands](./class-guidepup#guidepup-voiceover-key-code-commands)
- [guidepup.WindowsKeyCodes](./class-guidepup#guidepup-windows-key-codes)
- [guidepup.WindowsModifiers](./class-guidepup#guidepup-windows-modifiers)

## guidepup.macOSActivate {#guidepup-macos-activate}

**Type:** &#60;[macOSActivate]&#62;

Opens a MacOS application if not already open, and focuses the application.

## guidepup.MacOSApplications {#guidepup-macos-applications}

**Type:** &#60;[MacOSApplications]&#62;

Identifiers for standard applications available on MacOS.

## guidepup.MacOSKeyCodes {#guidepup-macos-key-codes}

**Type:** &#60;[MacOSKeyCodes]&#62;

Key codes for MacOS.

## guidepup.MacOSModifiers {#guidepup-macos-modifiers}

**Type:** &#60;[MacOSModifiers]&#62;

Modifier keys for MacOS.

## guidepup.macOSQuit {#guidepup-macos-quit}

**Type:** &#60;[macOSQuit]&#62;

Quits a MacOS application if running.

## guidepup.macOSRecord {#guidepup-macos-record}

**Type:** &#60;[macOSRecord]&#62;

Start a screen recording.

## guidepup.nvda {#guidepup-nvda}

**Type:** &#60;[NVDA]&#62;

This object can be used to launch and control NVDA.

## guidepup.voiceOver {#guidepup-voiceover}

**Type:** &#60;[VoiceOver]&#62;

This object can be used to launch and control VoiceOver.

## guidepup.VoiceOverCommanderCommands {#guidepup-voiceover-commander-commands}

**Type:** &#60;[VoiceOverCommanderCommands]&#62;

[VoiceOver Commander](https://support.apple.com/en-gb/guide/voiceover/cpvoukbcmdr/mac) commands.

## guidepup.voiceOverKeyCodeCommands {#guidepup-voiceover-key-code-commands}

**Type:** &#60;[voiceOverKeyCodeCommands]&#62;

[Key code commands for the VoiceOver screen reader](https://www.apple.com/voiceover/info/guide/_1131.html) on MacOS.

## guidepup.WindowsKeyCodes {#guidepup-windows-key-codes}

**Type:** &#60;[WindowsKeyCodes]&#62;

Key codes for Windows.

## guidepup.WindowsModifiers {#guidepup-windows-modifiers}

**Type:** &#60;[WindowsModifiers]&#62;

Modifier keys for Windows.

[macosactivate]: ./class-macos-activate "macOSActivate"
[macosapplications]: ./class-macos-applications "MacOSApplications"
[macoskeycodes]: ./class-macos-key-codes "MacOSKeyCodes"
[macosmodifiers]: ./class-macos-modifiers "MacOSModifiers"
[macosquit]: ./class-macos-quit "macOSQuit"
[macosrecord]: ./class-macos-record "macOSRecord"
[nvda]: ./class-nvda "NVDA"
[voiceover]: ./class-voiceover "VoiceOver"
[voiceovercommandercommands]: ./class-voiceover-commander-commands "VoiceOverCommanderCommands"
[voiceoverkeycodecommands]: ./class-voiceover-key-code-commands "VoiceOverKeyCodeCommands"
[windowskeycodes]: ./class-windows-key-codes "WindowsKeyCodes"
[windowsmodifiers]: ./class-windows-modifiers "WindowsModifiers"
