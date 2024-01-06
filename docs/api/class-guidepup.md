---
title: "Guidepup Library"
---

# Guidepup Library

Guidepup provides a reliable set of APIs to automate real screen readers through JavaScript.

Guidepup current supports the following screen readers:

- VoiceOver for MacOS
- NVDA for Windows

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

- [macOSActivate](./class-guidepup#guidepup-macos-activate)
- [MacOSApplications](./class-guidepup#guidepup-macos-applications)
- [MacOSKeyCodes](./class-guidepup#guidepup-macos-key-codes)
- [MacOSModifiers](./class-guidepup#guidepup-macos-modifiers)
- [macOSQuit](./class-guidepup#guidepup-macos-quit)
- [macOSRecord](./class-guidepup#guidepup-macos-record)
- [nvda](./class-guidepup#guidepup-nvda)
- [nvdaKeyCodeCommands](./class-guidepup#guidepup-nvda-key-code-commands)
- [voiceOver](./class-guidepup#guidepup-voiceover)
- [VoiceOverCommanderCommands](./class-guidepup#guidepup-voiceover-commander-commands)
- [voiceOverKeyCodeCommands](./class-guidepup#guidepup-voiceover-key-code-commands)
- [windowsOSActivate](./class-guidepup#guidepup-windows-activate)
- [WindowsKeyCodes](./class-guidepup#guidepup-windows-key-codes)
- [WindowsModifiers](./class-guidepup#guidepup-windows-modifiers)
- [windowsRecord](./class-guidepup#guidepup-windows-record)
- [windowsQuit](./class-guidepup#guidepup-windows-quit)

## macOSActivate {#guidepup-macos-activate}

**See:** [macOSActivate]

Opens a MacOS application if not already open, and focuses the application.

## MacOSApplications {#guidepup-macos-applications}

**Type:** [MacOSApplications]

Identifiers for standard applications available on MacOS.

## MacOSKeyCodes {#guidepup-macos-key-codes}

**Type:** [MacOSKeyCodes]

Key codes for MacOS.

## MacOSModifiers {#guidepup-macos-modifiers}

**Type:** [MacOSModifiers]

Modifier keys for MacOS.

## macOSQuit {#guidepup-macos-quit}

**See:** [macOSQuit]

Quits a MacOS application if running.

## macOSRecord {#guidepup-macos-record}

**See:** [macOSRecord]

Start a screen recording.

## nvda {#guidepup-nvda}

**Type:** [NVDA]

This object can be used to launch and control NVDA.

Here's a typical example:

```ts
import { nvda } from "@guidepup/guidepup";

(async () => {
  // Start NVDA.
  await nvda.start();

  // Move to the next item.
  await nvda.next();

  // ... perform some commands.

  // Stop NVDA.
  await nvda.stop();
})();
```

## NVDAKeyCodeCommands {#guidepup-nvda-key-code-commands}

**Type:** [NVDAKeyCodeCommands]

[Key code commands for the NVDA screen reader](https://www.nvaccess.org/files/nvda/releases/2021.2/documentation/keyCommands.html) on Windows.

## voiceOver {#guidepup-voiceover}

**Type:** [VoiceOver]

This object can be used to launch and control VoiceOver.

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

## VoiceOverCommanderCommands {#guidepup-voiceover-commander-commands}

**Type:** [VoiceOverCommanderCommands]

[VoiceOver Commander](https://support.apple.com/en-gb/guide/voiceover/cpvoukbcmdr/mac) commands.

## voiceOverKeyCodeCommands {#guidepup-voiceover-key-code-commands}

**See:** [voiceOverKeyCodeCommands]

[Key code commands for the VoiceOver screen reader](https://www.apple.com/voiceover/info/guide/_1131.html) on MacOS.

## windowsActivate {#guidepup-windows-activate}

**See:** [windowsActivate]

Opens a Windows application if not already open, and focuses the application.

## WindowsKeyCodes {#guidepup-windows-key-codes}

**Type:** [WindowsKeyCodes]

Key codes for Windows.

## WindowsModifiers {#guidepup-windows-modifiers}

**Type:** [WindowsModifiers]

Modifier keys for Windows.

## windowsRecord {#guidepup-windows-record}

**See:** [windowsRecord]

Start a screen recording.

## windowsQuit {#guidepup-windows-quit}

**See:** [windowsQuit]

Quits a Windows application if running.

[macosactivate]: ./class-macos-activate "macOSActivate"
[macosapplications]: ./class-macos-applications "MacOSApplications"
[macoskeycodes]: ./class-macos-key-codes "MacOSKeyCodes"
[macosmodifiers]: ./class-macos-modifiers "MacOSModifiers"
[macosquit]: ./class-macos-quit "macOSQuit"
[macosrecord]: ./class-macos-record "macOSRecord"
[nvda]: ./class-nvda "NVDA"
[nvdakeycodecommands]: ./class-nvda-key-code-commands "NVDAKeyCodeCommands"
[voiceover]: ./class-voiceover "VoiceOver"
[voiceovercommandercommands]: ./class-voiceover-commander-commands "VoiceOverCommanderCommands"
[voiceoverkeycodecommands]: ./class-voiceover-key-code-commands "VoiceOverKeyCodeCommands"
[windowsactivate]: ./class-windows-activate "windowsActivate"
[windowskeycodes]: ./class-windows-key-codes "WindowsKeyCodes"
[windowsmodifiers]: ./class-windows-modifiers "WindowsModifiers"
[windowsrecord]: ./class-windows-record "windowsRecord"
[windowsquit]: ./class-windows-quit "windowsQuit"
