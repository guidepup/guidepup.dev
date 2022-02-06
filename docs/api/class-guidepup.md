---
title: "Guidepup Library"
---

# Guidepup Library

Guidepup provides a reliable set of APIs to automate screen-readers through JavaScript.

Here's a typical example:

```ts
const { VoiceOver } = require("@guidepup/guidepup");

(async () => {
  const vo = new VoiceOver();
  await vo.start();
  await vo.next();
  // other actions...
  await vo.stop();
})();
```

- [guidepup.macOSActivate](./class-guidepup#guidepup-macos-activate)
- [guidepup.MacOSApplications](./class-guidepup#guidepup-macos-applications)
- [guidepup.MacOSKeyCodes](./class-guidepup#guidepup-macos-key-codes)
- [guidepup.MacOSModifiers](./class-guidepup#guidepup-macos-modifiers)
- [guidepup.macOSQuit](./class-guidepup#guidepup-macos-quit)
- [guidepup.VoiceOverCommanderCommands](./class-guidepup#guidepup-voiceover-commander-commands)
- [guidepup.voiceOverKeyCodeCommands](./class-guidepup#guidepup-voiceover-key-code-commands)
- [guidepup.VoiceOver](./class-guidepup#guidepup-voiceover)

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

## guidepup.VoiceOverCommanderCommands {#guidepup-voiceover-commander-commands}

**Type:** &#60;[VoiceOverCommanderCommands]&#62;

[VoiceOver Commander](https://support.apple.com/en-gb/guide/voiceover/cpvoukbcmdr/mac) commands.

## guidepup.voiceOverKeyCodeCommands {#guidepup-voiceover-key-code-commands}

**Type:** &#60;[voiceOverKeyCodeCommands]&#62;

[Key code commands for the VoiceOver screen-reader](https://www.apple.com/voiceover/info/guide/_1131.html) on MacOS.

## guidepup.VoiceOver {#guidepup-voiceover}

**Type:** &#60;[VoiceOver]&#62;

This class can be used to launch VoiceOver.

[macosactivate]: ./class-macos-activate "macOSActivate"
[macosapplications]: ./class-macos-applications "MacOSApplications"
[macoskeycodes]: ./class-macos-key-codes "MacOSKeyCodes"
[macosmodifiers]: ./class-macos-modifiers "MacOSModifiers"
[macosquit]: ./class-macos-quit "macOSQuit"
[voiceovercommandercommands]: ./class-voiceover-commander-commands "VoiceOverCommanderCommands"
[voiceoverkeycodecommands]: ./class-voiceover-key-code-commands "VoiceOverKeyCodeCommands"
[voiceover]: ./class-voiceover "VoiceOver"
