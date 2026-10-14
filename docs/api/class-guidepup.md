---
title: "Guidepup Library"
description: Overview of the Guidepup library and its real screen reader automation APIs.
---

# Guidepup Library

Guidepup provides a reliable set of APIs to automate real screen readers through JavaScript.

Guidepup currently supports the following screen readers:

- VoiceOver for macOS
- NVDA for Windows
- Orca for Linux (through the preview `unstable_orca` API)

Here's a typical example:

```ts
import { screenReader } from "@guidepup/guidepup";

(async () => {
  // Start the default screen reader for your OS.
  await screenReader.start();

  // Move to the next item.
  await screenReader.next();

  // ... perform some commands.

  // Stop the default screen reader for your OS.
  await screenReader.stop();
})();
```

**Contents:**

- [macOSActivate](./class-guidepup#guidepup-macos-activate)
- [macOSActivateId](./class-guidepup#guidepup-macos-activate-id)
- [MacOSApplications](./class-guidepup#guidepup-macos-applications)
- [MacOSKeyCodes](./class-guidepup#guidepup-macos-key-codes)
- [MacOSModifiers](./class-guidepup#guidepup-macos-modifiers)
- [macOSQuit](./class-guidepup#guidepup-macos-quit)
- [nvda](./class-guidepup#guidepup-nvda)
- [nvdaKeyCodeCommands](./class-guidepup#guidepup-nvda-key-code-commands)
- [OrcaKeyCodeCommand](./class-guidepup#guidepup-orca-key-code-command)
- [orcaKeyCodeCommands](./class-guidepup#guidepup-orca-key-code-commands)
- [screenReader](./class-guidepup#guidepup-screenreader)
- [unstable_orca](./class-guidepup#guidepup-unstable-orca)
- [voiceOver](./class-guidepup#guidepup-voiceover)
- [VoiceOverCommanderCommands](./class-guidepup#guidepup-voiceover-commander-commands)
- [voiceOverKeyCodeCommands](./class-guidepup#guidepup-voiceover-key-code-commands)
- [windowsOSActivate](./class-guidepup#guidepup-windows-activate)
- [WindowsKeyCodes](./class-guidepup#guidepup-windows-key-codes)
- [WindowsModifiers](./class-guidepup#guidepup-windows-modifiers)
- [windowsQuit](./class-guidepup#guidepup-windows-quit)

## macOSActivate {#guidepup-macos-activate}

**See:** [macOSActivate]

Opens a macOS application if not already open, and focuses the application.

## macOSActivateId {#guidepup-macos-activate-id}

**See:** [macOSActivateId]

Opens a macOS application from it's ID, if not already open, and focuses the application.

## MacOSApplications {#guidepup-macos-applications}

**Type:** [MacOSApplications]

Identifiers for standard applications available on macOS.

## MacOSKeyCodes {#guidepup-macos-key-codes}

**Type:** [MacOSKeyCodes]

Key codes for macOS.

## MacOSModifiers {#guidepup-macos-modifiers}

**Type:** [MacOSModifiers]

Modifier keys for macOS.

## macOSQuit {#guidepup-macos-quit}

**See:** [macOSQuit]

Quits a macOS application if running.

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

## OrcaKeyCodeCommand {#guidepup-orca-key-code-command}

**Type:** [OrcaKeyCodeCommand]

The type of an Orca keyboard command supported by Guidepup.

## orcaKeyCodeCommands {#guidepup-orca-key-code-commands}

**Type:** [OrcaKeyCodeCommands]

Keyboard commands supported by Guidepup for the Orca screen reader on Linux.

## screenReader {#guidepup-screenreader}

**Type:** [ScreenReader]

This object can be used to launch and control the default screen reader for your environment.

Here's a typical example:

```ts
import { screenReader } from "@guidepup/guidepup";

(async () => {
  // Start the screen reader.
  await screenReader.start();

  // Move to the next item.
  await screenReader.next();

  // ... perform some commands.

  // Stop the screen reader.
  await screenReader.stop();
})();
```

## unstable_orca {#guidepup-unstable-orca}

**Type:** [Orca]

This object can be used to launch and control Orca on Linux. This API is currently in preview.

Here's a typical example:

```ts
import { unstable_orca } from "@guidepup/guidepup";

(async () => {
  // Start Orca.
  await unstable_orca.start();

  // Move to the next item.
  await unstable_orca.next();

  // ... perform some commands.

  // Stop Orca.
  await unstable_orca.stop();
})();
```

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

[Key code commands for the VoiceOver screen reader](https://www.apple.com/voiceover/info/guide/_1131.html) on macOS.

## windowsActivate {#guidepup-windows-activate}

**See:** [windowsActivate]

Opens a Windows application if not already open, and focuses the application.

## WindowsKeyCodes {#guidepup-windows-key-codes}

**Type:** [WindowsKeyCodes]

Key codes for Windows.

## WindowsModifiers {#guidepup-windows-modifiers}

**Type:** [WindowsModifiers]

Modifier keys for Windows.

## windowsQuit {#guidepup-windows-quit}

**See:** [windowsQuit]

Quits a Windows application if running.

[macosactivate]: ./class-macos-activate "macOSActivate"
[macosapplications]: ./class-macos-applications "MacOSApplications"
[macoskeycodes]: ./class-macos-key-codes "MacOSKeyCodes"
[macosmodifiers]: ./class-macos-modifiers "MacOSModifiers"
[macosquit]: ./class-macos-quit "macOSQuit"
[nvda]: ./class-nvda "NVDA"
[nvdakeycodecommands]: ./class-nvda-key-code-commands "NVDAKeyCodeCommands"
[orcakeycodecommand]: ./class-orca-key-code-command "OrcaKeyCodeCommand"
[orcakeycodecommands]: ./class-orca-key-code-commands "OrcaKeyCodeCommands"
[orca]: ./class-orca "Orca"
[screenreader]: ./class-screenreader "ScreenReader"
[voiceover]: ./class-voiceover "VoiceOver"
[voiceovercommandercommands]: ./class-voiceover-commander-commands "VoiceOverCommanderCommands"
[voiceoverkeycodecommands]: ./class-voiceover-key-code-commands "VoiceOverKeyCodeCommands"
[windowsactivate]: ./class-windows-activate "windowsActivate"
[windowskeycodes]: ./class-windows-key-codes "WindowsKeyCodes"
[windowsmodifiers]: ./class-windows-modifiers "WindowsModifiers"
[windowsquit]: ./class-windows-quit "windowsQuit"
