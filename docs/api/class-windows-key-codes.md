---
title: "WindowsKeyCodes"
---

Key codes for Windows.

For example, use when performing a NVDA command:

```ts
import { nvda, WindowsKeyCodes } from "@guidepup/guidepup";

const moveToNextKeyCodeCommand = {
  keyCode: WindowsKeyCodes.ArrowDown,
};

(async () => {
  // Start NVDA.
  await nvda.start();

  // Move to the next item.
  await nvda.perform(moveToNextKeyCodeCommand);

  // Stop NVDA.
  await nvda.stop();
})();
```

List of all key code accessors:

- <kbd>Alt</kbd>
- <kbd>AltLeft</kbd>
- <kbd>AltRight</kbd>
- <kbd>Application</kbd>
- <kbd>ArrowDown</kbd>
- <kbd>ArrowLeft</kbd>
- <kbd>ArrowRight</kbd>
- <kbd>ArrowUp</kbd>
- <kbd>Backslash</kbd>
- <kbd>Backspace</kbd>
- <kbd>Backtick</kbd>
- <kbd>Break</kbd>
- <kbd>CapsLock</kbd>
- <kbd>Caret</kbd>
- <kbd>Clear</kbd>
- <kbd>Comma</kbd>
- <kbd>Control</kbd>
- <kbd>ControlLeft</kbd>
- <kbd>Dash</kbd>
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
- <kbd>Down</kbd>
- <kbd>End</kbd>
- <kbd>Enter</kbd>
- <kbd>Equals</kbd>
- <kbd>Escape</kbd>
- <kbd>Exclamation</kbd>
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
- <kbd>ForwardDelete</kbd>
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
- <kbd>Minus</kbd>
- <kbd>NumPad0</kbd>
- <kbd>NumPad1</kbd>
- <kbd>NumPad2</kbd>
- <kbd>NumPad3</kbd>
- <kbd>NumPad4</kbd>
- <kbd>NumPad5</kbd>
- <kbd>NumPad6</kbd>
- <kbd>NumPad7</kbd>
- <kbd>NumPad8</kbd>
- <kbd>NumPad9</kbd>
- <kbd>NumPadDelete</kbd>
- <kbd>NumPadDivide</kbd>
- <kbd>NumPadEnter</kbd>
- <kbd>NumPadMinus</kbd>
- <kbd>NumPadMultiply</kbd>
- <kbd>NumPadPlus</kbd>
- <kbd>Numlock</kbd>
- <kbd>Nvda</kbd>
- <kbd>PageDown</kbd>
- <kbd>PageUp</kbd>
- <kbd>Pause</kbd>
- <kbd>Period</kbd>
- <kbd>Plus</kbd>
- <kbd>PrintScreen</kbd>
- <kbd>Right</kbd>
- <kbd>RightSquareBracket</kbd>
- <kbd>ScrollLock</kbd>
- <kbd>Shift</kbd>
- <kbd>ShiftLeft</kbd>
- <kbd>SingleQuote</kbd>
- <kbd>Space</kbd>
- <kbd>Spacebar</kbd>
- <kbd>Tab</kbd>
- <kbd>Tilde</kbd>
- <kbd>Up</kbd>
- <kbd>Windows</kbd>
- <kbd>&nbsp;</kbd> (space)
- <kbd>'</kbd>
- <kbd>,</kbd>
- <kbd>-</kbd>
- <kbd>.</kbd>
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
