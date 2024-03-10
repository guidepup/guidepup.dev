---
title: Support Matrix
description: Guidepup's support matrix for VoiceOver on MacOS and NVDA on Windows
---

Guidepup current supports the following screen readers:

- **VoiceOver** for MacOS
- **NVDA** for Windows
- **Virtual Screen Reader** for DOM environments (when using the `@guidepup/virtual-screen-reader` package)

## VoiceOver

[VoiceOver](https://support.apple.com/en-gb/guide/voiceover-guide/welcome/web) is an advanced screen-reading technology integrated into the Mac OS X operating system. VoiceOver enables users with visual disabilities to control their computer using a rich set of keyboard commands and gestures. This chapter provides an overview of VoiceOver and key topics such as the VoiceOver cursor and current focus, keyboard shortcuts, and using function keys on some keyboards.

To learn VoiceOver commands please refer to the following popular guides:

- [Apple VoiceOver Appendix A. Commands and Gestures](https://www.apple.com/voiceover/info/guide/_1131.html)
- [Deque University VoiceOver Keyboard Shortcuts on a Mac](https://dequeuniversity.com/screenreaders/voiceover-keyboard-shortcuts)

## NVDA

[NVDA](https://github.com/nvaccess/nvda) allows blind and vision impaired people to access and interact with the Windows operating system and many third party applications.

Please refer to the [NVDA User Guide system requirements](https://www.nvaccess.org/files/nvda/documentation/userGuide.html?#SystemRequirements) to ensure your system can support the application.

To learn NVDA commands please refer to the following popular guides:

- [NVDA 2021.2 Commands Quick Reference](https://www.nvaccess.org/files/nvda/releases/2021.2/documentation/keyCommands.html)
- [WebAIM Keyboard Shortcuts for NVDA](https://webaim.org/resources/shortcuts/nvda)
- [Deque University NVDA Keyboard Shortcuts](https://dequeuniversity.com/screenreaders/nvda-keyboard-shortcuts)

## Virtual Screen Reader

The Guidepup [Virtual Screen Reader](https://github.com/guidepup/virtual-screen-reader) is a headless screen reader for unit test automation.

- **Mirrors Screen Reader Functionality** - simulate and assert on what users can do when using screen readers.
- **Test Framework Agnostic** - run with Jest, Vitest, Web Test Runner, in Storybook, as an independent script, no vendor lock-in.
- **UI Framework Agnostic** - want to use React, Vue, Solid, Svelte, etc.? All good here! Works with any UI framework, and plays nicely with the [Testing Library](https://testing-library.com/) suite.
- **Fast Feedback** - avoid the cumbersome overhead of running an e2e test with a real screen reader by running virtually over the provided DOM.

> <svg style={{ display:"inline-block", fill: "#fff", verticalAlign: "text-bottom", marginRight: "0.5rem" }} viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v9.5A1.75 1.75 0 0 1 14.25 13H8.06l-2.573 2.573A1.458 1.458 0 0 1 3 14.543V13H1.75A1.75 1.75 0 0 1 0 11.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25Zm7 2.25v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg> **Important**
>
> This package should not replace but augment your screen reader testing, there is no substitute for testing with real screen readers and with real users.
