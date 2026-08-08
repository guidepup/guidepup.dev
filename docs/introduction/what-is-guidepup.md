---
title: What is Guidepup?
description: Automate real screen reader interactions and test accessibility from the user's perspective.
---

# What is Guidepup?

Guidepup is a screen reader automation library for testing.

It lets you control screen readers such as [VoiceOver](../screen-reader-testing/testing-voiceover) and [NVDA](../screen-reader-testing/testing-nvda) from automated tests, navigate web pages with screen reader commands, interact with content, and assert what a screen reader user experiences.

That makes screen reader behaviour testable as part of your automated test suite.

## Accessibility testing beyond the DOM

Traditional accessibility automation primarily evaluates the underlying page structure.

For example, tools can detect that a button has no accessible name:

```html
<button class="cart-icon"></button>
```

Or that a page contains invalid ARIA.

These checks are valuable, but they don't tell you what happens when someone actually uses the interface with a screen reader.

A screen reader user experiences something more like:

1. Open page
2. Navigate to the shopping cart
3. Hear "Shopping cart, button"
4. Activate the button
5. Navigate to the cart contents
6. Hear "Your cart is empty"

Guidepup lets you automate these interactions and assertions.

## Test the experience, not just the markup

Guidepup operates at a different layer from static accessibility analysis:

- DOM / ARIA
- Accessibility tree
- Operating System accessibility APIs
- Screen reader
- User

Traditional accessibility tools can inspect the DOM and accessibility tree. Guidepup goes further by interacting with the page through a screen reader and testing the resulting experience.

This means you can test not only whether an interface is technically accessible, but whether a screen reader user can actually navigate and interact with it.

Instead of only asking:

> _"Does this element have the right attributes?"_

You can test:

> _"Can a screen reader user navigate to this element, understand it, and interact with it?"_
