---
title: What can I test?
description: Explore the screen reader behaviours you can automate with Guidepup.
---

# What can I test?

Guidepup gives you a practical way to test what a screen reader user can do with a page.

You can move through content, operate controls, and assert the announcements that come back from the reader.

That works for a single behaviour or for a complete user journey.

## Configure the screen reader

Control the screen reader environment before and during a test.

- Start and stop the screen reader
- Configure screen reader settings
- Control screen reader modes and behaviour

## Navigate through content

Use screen reader commands to navigate the page.

- Move forwards and backwards through content
- Navigate by headings, links, landmarks and form controls
- Navigate between interactive elements
- Enter and exit interactive content
- Inspect the current screen reader item

See [testing navigation](../screen-reader-testing/testing-navigation) for a focused example of moving through UI and asserting what the reader reports.

## Interact with content

Use the screen reader to operate the interface.

- Activate buttons and links
- Interact with form controls
- Type into inputs
- Navigate and complete forms
- Operate menus, dialogs and other interactive content

See [testing interactions](../screen-reader-testing/testing-interactions) for the shared API patterns.

## Observe what the screen reader communicates

Capture the information presented to the user.

- Inspect the current item's name, role, state and other properties
- Capture the most recently spoken phrase
- Capture the spoken phrase history
- Verify announcements and changes in screen reader output

See [testing announcements](../screen-reader-testing/testing-announcements) for examples of phrase capture and assert patterns.

## Test complete user journeys

Combine navigation, interaction and observation to test complete workflows.

For example:

1. Navigate to a checkout form.
2. Move through the form using screen reader commands.
3. Enter the required information.
4. Submit the form.
5. Navigate to the validation error.
6. Verify that the error is communicated to the user.

The same approach can be used for navigation, search, dialogs, menus, authentication, forms, dynamic content and other workflows in your application.

## Real or Virtual Screen Reader

These behaviours can be tested with real screen readers such as [VoiceOver](../screen-reader-testing/testing-voiceover) and [NVDA](../screen-reader-testing/testing-nvda), or with [Guidepup Virtual Screen Reader](../virtual-screen-reader/introduction).

Use the Virtual Screen Reader when you need fast, isolated tests, and real screen readers when you want higher-fidelity end-to-end coverage.
