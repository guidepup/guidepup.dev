---
title: "MacOSKeyCodes"
---

Key codes for MacOS.

For example, use when performing a VoiceOver command:

```ts
import { voiceOver, MacOSKeyCodes, MacOSModifiers } from "@guidepup/guidepup";

const moveToNextKeyCodeCommand = {
  keyCode: MacOSKeyCodes.ArrowRight,
  modifiers: [MacOSModifiers.Control, MacOSModifiers.Option],
};

(async () => {
  // Start VoiceOver.
  await voiceOver.start();

  // Move to the next item.
  await voiceOver.perform(moveToNextKeyCodeCommand);

  // Stop VoiceOver.
  await voiceOver.stop();
})();
```

List of all key code accessors:

- <kbd>Add</kbd>
- <kbd>Alt</kbd>
- <kbd>AltLeft</kbd>
- <kbd>AltRight</kbd>
- <kbd>ArrowDown</kbd>
- <kbd>ArrowLeft</kbd>
- <kbd>ArrowRight</kbd>
- <kbd>ArrowUp</kbd>
- <kbd>Backslash</kbd>
- <kbd>Backspace</kbd>
- <kbd>Backtick</kbd>
- <kbd>CapsLock</kbd>
- <kbd>Clear</kbd>
- <kbd>Comma</kbd>
- <kbd>Command</kbd>
- <kbd>CommandLeft</kbd>
- <kbd>CommandRight</kbd>
- <kbd>Control</kbd>
- <kbd>ControlLeft</kbd>
- <kbd>ControlRight</kbd>
- <kbd>Dash</kbd>
- <kbd>Decimal</kbd>
- <kbd>Delete</kbd>
- <kbd>Digit0</kbd>
- <kbd>Digit1</kbd>
- <kbd>Digit2</kbd>
- <kbd>Digit3</kbd>
- <kbd>Digit4</kbd>
- <kbd>Digit5</kbd>
- <kbd>Digit6</kbd>
- <kbd>Digit7</kbd>
- <kbd>Digit8</kbd>
- <kbd>Digit9</kbd>
- <kbd>Divide</kbd>
- <kbd>Down</kbd>
- <kbd>End</kbd>
- <kbd>Enter</kbd>
- <kbd>Equals</kbd>
- <kbd>Escape</kbd>
- <kbd>F1</kbd>
- <kbd>F2</kbd>
- <kbd>F3</kbd>
- <kbd>F4</kbd>
- <kbd>F5</kbd>
- <kbd>F6</kbd>
- <kbd>F7</kbd>
- <kbd>F8</kbd>
- <kbd>F9</kbd>
- <kbd>F10</kbd>
- <kbd>F11</kbd>
- <kbd>F12</kbd>
- <kbd>F13</kbd>
- <kbd>F14</kbd>
- <kbd>F15</kbd>
- <kbd>F16</kbd>
- <kbd>F17</kbd>
- <kbd>F18</kbd>
- <kbd>F19</kbd>
- <kbd>F20</kbd>
- <kbd>Fn</kbd>
- <kbd>ForwardDelete</kbd>
- <kbd>ForwardSlash</kbd>
- <kbd>FullStop</kbd>
- <kbd>Help</kbd>
- <kbd>Home</kbd>
- <kbd>Insert</kbd>
- <kbd>KeyA</kbd>
- <kbd>KeyB</kbd>
- <kbd>KeyC</kbd>
- <kbd>KeyD</kbd>
- <kbd>KeyE</kbd>
- <kbd>KeyF</kbd>
- <kbd>KeyG</kbd>
- <kbd>KeyH</kbd>
- <kbd>KeyI</kbd>
- <kbd>KeyJ</kbd>
- <kbd>KeyK</kbd>
- <kbd>KeyL</kbd>
- <kbd>KeyM</kbd>
- <kbd>KeyN</kbd>
- <kbd>KeyO</kbd>
- <kbd>KeyP</kbd>
- <kbd>KeyQ</kbd>
- <kbd>KeyR</kbd>
- <kbd>KeyS</kbd>
- <kbd>KeyT</kbd>
- <kbd>KeyU</kbd>
- <kbd>KeyV</kbd>
- <kbd>KeyW</kbd>
- <kbd>KeyX</kbd>
- <kbd>KeyY</kbd>
- <kbd>KeyZ</kbd>
- <kbd>Left</kbd>
- <kbd>LeftSquareBracket</kbd>
- <kbd>LineFeed</kbd>
- <kbd>Meta</kbd>
- <kbd>Minus</kbd>
- <kbd>Multiply</kbd>
- <kbd>Mute</kbd>
- <kbd>Option</kbd>
- <kbd>OptionLeft</kbd>
- <kbd>OptionRight</kbd>
- <kbd>PageDown</kbd>
- <kbd>PageUp</kbd>
- <kbd>Period</kbd>
- <kbd>Return</kbd>
- <kbd>Right</kbd>
- <kbd>RightSquareBracket</kbd>
- <kbd>SectionSign</kbd>
- <kbd>SemiColon</kbd>
- <kbd>Shift</kbd>
- <kbd>ShiftLeft</kbd>
- <kbd>ShiftRight</kbd>
- <kbd>SingleQuote</kbd>
- <kbd>Space</kbd>
- <kbd>Spacebar</kbd>
- <kbd>Subtract</kbd>
- <kbd>Tab</kbd>
- <kbd>Up</kbd>
- <kbd>VolumeDown</kbd>
- <kbd>VolumeUp</kbd>
- <kbd>&nbsp;</kbd> (space)
- <kbd>'</kbd>
- <kbd>,</kbd>
- <kbd>-</kbd>
- <kbd>.</kbd>
- <kbd>/</kbd>
- <kbd>;</kbd>
- <kbd>=</kbd>
- <kbd>[</kbd>
- <kbd>&#92;</kbd>
- <kbd>]</kbd>
- <kbd>`</kbd>
- <kbd>A</kbd>
- <kbd>B</kbd>
- <kbd>C</kbd>
- <kbd>D</kbd>
- <kbd>E</kbd>
- <kbd>F</kbd>
- <kbd>G</kbd>
- <kbd>H</kbd>
- <kbd>I</kbd>
- <kbd>J</kbd>
- <kbd>K</kbd>
- <kbd>L</kbd>
- <kbd>M</kbd>
- <kbd>N</kbd>
- <kbd>O</kbd>
- <kbd>P</kbd>
- <kbd>Q</kbd>
- <kbd>R</kbd>
- <kbd>S</kbd>
- <kbd>T</kbd>
- <kbd>U</kbd>
- <kbd>V</kbd>
- <kbd>W</kbd>
- <kbd>X</kbd>
- <kbd>Y</kbd>
- <kbd>Z</kbd>
- <kbd>a</kbd>
- <kbd>b</kbd>
- <kbd>c</kbd>
- <kbd>d</kbd>
- <kbd>e</kbd>
- <kbd>f</kbd>
- <kbd>g</kbd>
- <kbd>h</kbd>
- <kbd>i</kbd>
- <kbd>j</kbd>
- <kbd>k</kbd>
- <kbd>l</kbd>
- <kbd>m</kbd>
- <kbd>n</kbd>
- <kbd>o</kbd>
- <kbd>p</kbd>
- <kbd>q</kbd>
- <kbd>r</kbd>
- <kbd>s</kbd>
- <kbd>t</kbd>
- <kbd>u</kbd>
- <kbd>v</kbd>
- <kbd>w</kbd>
- <kbd>x</kbd>
- <kbd>y</kbd>
- <kbd>z</kbd>
