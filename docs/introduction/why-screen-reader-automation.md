---
title: Why screen reader automation?
description: Understand why screen reader behaviour needs to be tested as part of an automated accessibility strategy.
---

# Why screen reader automation?

Automated accessibility testing can catch many problems before they reach users. But some accessibility behaviour only becomes apparent when an interface is actually used with a screen reader.

A page can have the expected DOM, ARIA and accessibility tree while still providing a poor experience when navigated with a screen reader.

## Screen reader behaviour can regress

Changes to an application can affect how a screen reader user experiences it:

- Navigation order can change
- Focus can move unexpectedly
- Controls can become difficult to find or operate
- Dynamic content may not be announced
- Changes to accessible names, roles or states can alter what users hear
- Previously usable workflows can become impossible to complete

These changes are not always captured by static accessibility checks.

## Manual testing does not scale

Screen reader testing has traditionally relied on manually operating VoiceOver, NVDA, or another screen reader.

Manual testing remains essential, but repeatedly checking the same workflows by hand is time-consuming and makes it difficult to detect regressions continuously.

Screen reader automation makes those workflows repeatable.

A test can navigate, interact with and observe a screen reader in the same way each time it runs. This makes screen reader behaviour something that can be checked alongside the rest of your automated tests.

## Test the behaviours that matter

The goal is not to automate every aspect of accessibility.

Instead, automate the screen reader behaviours that are important to your application and would otherwise need to be repeatedly checked manually.
