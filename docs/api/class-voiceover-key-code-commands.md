---
title: "voiceOverKeyCodeCommands"
---

**Extends:** [object]

**Implements:** [Record]<[string], [MacOSKeyCodeCommand]>

[Key code commands for the VoiceOver screen reader](https://www.apple.com/voiceover/info/guide/_1131.html) on MacOS.

Use with the VoiceOver `perform` to invoke the key code command:

```ts
import { voiceOver, voiceOverKeyCodeCommands } from "@guidepup/guidepup";

(async () => {
  // Start VoiceOver.
  await voiceOver.start();

  // Move to the next item.
  await voiceOver.perform(voiceOver.keyboardCommands.moveToNext);

  // Stop VoiceOver.
  await voiceOver.stop();
})();
```

**Contents:**

- [voiceOverKeyCodeCommands.start](./class-voiceover-key-code-commands#key-code-commands-start)
- [voiceOverKeyCodeCommands.quit](./class-voiceover-key-code-commands#key-code-commands-quit)
- [voiceOverKeyCodeCommands.toggleLock](./class-voiceover-key-code-commands#key-code-commands-togglelock)
- [voiceOverKeyCodeCommands.openVoiceOverUtility](./class-voiceover-key-code-commands#key-code-commands-openvoiceoverutility)
- [voiceOverKeyCodeCommands.openVoiceOverHelpMenu](./class-voiceover-key-code-commands#key-code-commands-openvoiceoverhelpmenu)
- [voiceOverKeyCodeCommands.openVoiceOverQuickStart](./class-voiceover-key-code-commands#key-code-commands-openvoiceoverquickstart)
- [voiceOverKeyCodeCommands.openVoiceOverOnlineHelp](./class-voiceover-key-code-commands#key-code-commands-openvoiceoveronlinehelp)
- [voiceOverKeyCodeCommands.startKeyboardHelp](./class-voiceover-key-code-commands#key-code-commands-startkeyboardhelp)
- [voiceOverKeyCodeCommands.hearItemDescription](./class-voiceover-key-code-commands#key-code-commands-hearitemdescription)
- [voiceOverKeyCodeCommands.openCommandsMenu](./class-voiceover-key-code-commands#key-code-commands-opencommandsmenu)
- [voiceOverKeyCodeCommands.openFindMenu](./class-voiceover-key-code-commands#key-code-commands-openfindmenu)
- [voiceOverKeyCodeCommands.stopAction](./class-voiceover-key-code-commands#key-code-commands-stopaction)
- [voiceOverKeyCodeCommands.ignoreNextKeyCombination](./class-voiceover-key-code-commands#key-code-commands-ignorenextkeycombination)
- [voiceOverKeyCodeCommands.openVerbosityRotor](./class-voiceover-key-code-commands#key-code-commands-openverbosityrotor)
- [voiceOverKeyCodeCommands.magnifyItem](./class-voiceover-key-code-commands#key-code-commands-magnifyitem)
- [voiceOverKeyCodeCommands.shrinkItem](./class-voiceover-key-code-commands#key-code-commands-shrinkitem)
- [voiceOverKeyCodeCommands.toggleVoiceOverCursorAndPanels](./class-voiceover-key-code-commands#key-code-commands-togglevoiceovercursorandpanels)
- [voiceOverKeyCodeCommands.toggleCaptionPanel](./class-voiceover-key-code-commands#key-code-commands-togglecaptionpanel)
- [voiceOverKeyCodeCommands.resizeOrMoveCaptionPanel](./class-voiceover-key-code-commands#key-code-commands-resizeormovecaptionpanel)
- [voiceOverKeyCodeCommands.toggleBraillePanel](./class-voiceover-key-code-commands#key-code-commands-togglebraillepanel)
- [voiceOverKeyCodeCommands.resizeOrMoveBraillePanel](./class-voiceover-key-code-commands#key-code-commands-resizeormovebraillepanel)
- [voiceOverKeyCodeCommands.tileVisuals](./class-voiceover-key-code-commands#key-code-commands-tilevisuals)
- [voiceOverKeyCodeCommands.toggleKeyboardCommander](./class-voiceover-key-code-commands#key-code-commands-togglekeyboardcommander)
- [voiceOverKeyCodeCommands.toggleScreenCurtain](./class-voiceover-key-code-commands#key-code-commands-togglescreencurtain)
- [voiceOverKeyCodeCommands.cycleRightThroughSpeechSettings](./class-voiceover-key-code-commands#key-code-commands-cyclerightthroughspeechsettings)
- [voiceOverKeyCodeCommands.cycleLeftThroughSpeechSettings](./class-voiceover-key-code-commands#key-code-commands-cycleleftthroughspeechsettings)
- [voiceOverKeyCodeCommands.changeUpCurrentSpeechSettings](./class-voiceover-key-code-commands#key-code-commands-changeupcurrentspeechsettings)
- [voiceOverKeyCodeCommands.changeDownCurrentSpeechSettings](./class-voiceover-key-code-commands#key-code-commands-changedowncurrentspeechsettings)
- [voiceOverKeyCodeCommands.pressAndReleaseMouse](./class-voiceover-key-code-commands#key-code-commands-pressandreleasemouse)
- [voiceOverKeyCodeCommands.interactWithItem](./class-voiceover-key-code-commands#key-code-commands-interactwithitem)
- [voiceOverKeyCodeCommands.stopInteractingWithItem](./class-voiceover-key-code-commands#key-code-commands-stopinteractingwithitem)
- [voiceOverKeyCodeCommands.performDefaultActionForItem](./class-voiceover-key-code-commands#key-code-commands-performdefaultactionforitem)
- [voiceOverKeyCodeCommands.selectItem](./class-voiceover-key-code-commands#key-code-commands-selectitem)
- [voiceOverKeyCodeCommands.selectMultipleItems](./class-voiceover-key-code-commands#key-code-commands-selectmultipleitems)
- [voiceOverKeyCodeCommands.toggleStickyMouse](./class-voiceover-key-code-commands#key-code-commands-togglestickymouse)
- [voiceOverKeyCodeCommands.doubleClick](./class-voiceover-key-code-commands#key-code-commands-doubleclick)
- [voiceOverKeyCodeCommands.toggleDisclosureTriangle](./class-voiceover-key-code-commands#key-code-commands-toggledisclosuretriangle)
- [voiceOverKeyCodeCommands.readTableRow](./class-voiceover-key-code-commands#key-code-commands-readtablerow)
- [voiceOverKeyCodeCommands.readTableColumn](./class-voiceover-key-code-commands#key-code-commands-readtablecolumn)
- [voiceOverKeyCodeCommands.readTableColumnHeader](./class-voiceover-key-code-commands#key-code-commands-readtablecolumnheader)
- [voiceOverKeyCodeCommands.readTableRowAndColumnNumbers](./class-voiceover-key-code-commands#key-code-commands-readtablerowandcolumnnumbers)
- [voiceOverKeyCodeCommands.sortTableColumn](./class-voiceover-key-code-commands#key-code-commands-sorttablecolumn)
- [voiceOverKeyCodeCommands.interactWithScrollbars](./class-voiceover-key-code-commands#key-code-commands-interactwithscrollbars)
- [voiceOverKeyCodeCommands.resizeObject](./class-voiceover-key-code-commands#key-code-commands-resizeobject)
- [voiceOverKeyCodeCommands.moveObject](./class-voiceover-key-code-commands#key-code-commands-moveobject)
- [voiceOverKeyCodeCommands.moveUp](./class-voiceover-key-code-commands#key-code-commands-moveup)
- [voiceOverKeyCodeCommands.moveDown](./class-voiceover-key-code-commands#key-code-commands-movedown)
- [voiceOverKeyCodeCommands.moveToPrevious](./class-voiceover-key-code-commands#key-code-commands-movetoprevious)
- [voiceOverKeyCodeCommands.moveToNext](./class-voiceover-key-code-commands#key-code-commands-movetonext)
- [voiceOverKeyCodeCommands.moveToVisibleAreaTop](./class-voiceover-key-code-commands#key-code-commands-movetovisibleareatop)
- [voiceOverKeyCodeCommands.moveToVisibleAreaBottom](./class-voiceover-key-code-commands#key-code-commands-movetovisibleareabottom)
- [voiceOverKeyCodeCommands.moveToAreaTop](./class-voiceover-key-code-commands#key-code-commands-movetoareatop)
- [voiceOverKeyCodeCommands.moveToAreaBottom](./class-voiceover-key-code-commands#key-code-commands-movetoareabottom)
- [voiceOverKeyCodeCommands.moveToFirst](./class-voiceover-key-code-commands#key-code-commands-movetofirst)
- [voiceOverKeyCodeCommands.moveToLast](./class-voiceover-key-code-commands#key-code-commands-movetolast)
- [voiceOverKeyCodeCommands.moveToFrontWindow](./class-voiceover-key-code-commands#key-code-commands-movetofrontwindow)
- [voiceOverKeyCodeCommands.closeWindow](./class-voiceover-key-code-commands#key-code-commands-closewindow)
- [voiceOverKeyCodeCommands.openItemChooser](./class-voiceover-key-code-commands#key-code-commands-openitemchooser)
- [voiceOverKeyCodeCommands.moveToDock](./class-voiceover-key-code-commands#key-code-commands-movetodock)
- [voiceOverKeyCodeCommands.moveToDesktop](./class-voiceover-key-code-commands#key-code-commands-movetodesktop)
- [voiceOverKeyCodeCommands.moveToMenuBar](./class-voiceover-key-code-commands#key-code-commands-movetomenubar)
- [voiceOverKeyCodeCommands.moveToFirstStatusMenuInMenuBar](./class-voiceover-key-code-commands#key-code-commands-movetofirststatusmenuinmenubar)
- [voiceOverKeyCodeCommands.openSpotlightMenu](./class-voiceover-key-code-commands#key-code-commands-openspotlightmenu)
- [voiceOverKeyCodeCommands.openShortcutMenu](./class-voiceover-key-code-commands#key-code-commands-openshortcutmenu)
- [voiceOverKeyCodeCommands.jumpToLinkedItem](./class-voiceover-key-code-commands#key-code-commands-jumptolinkeditem)
- [voiceOverKeyCodeCommands.toggleCursorTrackingOptions](./class-voiceover-key-code-commands#key-code-commands-togglecursortrackingoptions)
- [voiceOverKeyCodeCommands.moveCursorToKeyboardFocus](./class-voiceover-key-code-commands#key-code-commands-movecursortokeyboardfocus)
- [voiceOverKeyCodeCommands.moveKeyboardFocusToCursor](./class-voiceover-key-code-commands#key-code-commands-movekeyboardfocustocursor)
- [voiceOverKeyCodeCommands.moveCursorToMouseFocus](./class-voiceover-key-code-commands#key-code-commands-movecursortomousefocus)
- [voiceOverKeyCodeCommands.moveMouseFocusToCursor](./class-voiceover-key-code-commands#key-code-commands-movemousefocustocursor)
- [voiceOverKeyCodeCommands.jumpCommand](./class-voiceover-key-code-commands#key-code-commands-jumpcommand)
- [voiceOverKeyCodeCommands.jumpToTopEdge](./class-voiceover-key-code-commands#key-code-commands-jumptotopedge)
- [voiceOverKeyCodeCommands.jumpToRightEdge](./class-voiceover-key-code-commands#key-code-commands-jumptorightedge)
- [voiceOverKeyCodeCommands.jumpToBottomEdge](./class-voiceover-key-code-commands#key-code-commands-jumptobottomedge)
- [voiceOverKeyCodeCommands.jumpToLeftEdge](./class-voiceover-key-code-commands#key-code-commands-jumptoleftedge)
- [voiceOverKeyCodeCommands.jumpToTopVisibleEdge](./class-voiceover-key-code-commands#key-code-commands-jumptotopvisibleedge)
- [voiceOverKeyCodeCommands.jumpToRightVisibleEdge](./class-voiceover-key-code-commands#key-code-commands-jumptorightvisibleedge)
- [voiceOverKeyCodeCommands.jumpToBottomVisibleEdge](./class-voiceover-key-code-commands#key-code-commands-jumptobottomvisibleedge)
- [voiceOverKeyCodeCommands.jumpToLeftVisibleEdge](./class-voiceover-key-code-commands#key-code-commands-jumptoleftvisibleedge)
- [voiceOverKeyCodeCommands.jumpBeforeSplitter](./class-voiceover-key-code-commands#key-code-commands-jumpbeforesplitter)
- [voiceOverKeyCodeCommands.jumpAfterSplitter](./class-voiceover-key-code-commands#key-code-commands-jumpaftersplitter)
- [voiceOverKeyCodeCommands.findText](./class-voiceover-key-code-commands#key-code-commands-findtext)
- [voiceOverKeyCodeCommands.navigateUp](./class-voiceover-key-code-commands#key-code-commands-navigateup)
- [voiceOverKeyCodeCommands.cycleRightThroughNavigationSettings](./class-voiceover-key-code-commands#key-code-commands-cyclerightthroughnavigationsettings)
- [voiceOverKeyCodeCommands.navigateDown](./class-voiceover-key-code-commands#key-code-commands-navigatedown)
- [voiceOverKeyCodeCommands.cycleLeftThroughNavigationSettings](./class-voiceover-key-code-commands#key-code-commands-cycleleftthroughnavigationsettings)
- [voiceOverKeyCodeCommands.toggleHotSpot1](./class-voiceover-key-code-commands#key-code-commands-togglehotspot1)
- [voiceOverKeyCodeCommands.toggleHotSpot2](./class-voiceover-key-code-commands#key-code-commands-togglehotspot2)
- [voiceOverKeyCodeCommands.toggleHotSpot3](./class-voiceover-key-code-commands#key-code-commands-togglehotspot3)
- [voiceOverKeyCodeCommands.toggleHotSpot4](./class-voiceover-key-code-commands#key-code-commands-togglehotspot4)
- [voiceOverKeyCodeCommands.toggleHotSpot5](./class-voiceover-key-code-commands#key-code-commands-togglehotspot5)
- [voiceOverKeyCodeCommands.toggleHotSpot6](./class-voiceover-key-code-commands#key-code-commands-togglehotspot6)
- [voiceOverKeyCodeCommands.toggleHotSpot7](./class-voiceover-key-code-commands#key-code-commands-togglehotspot7)
- [voiceOverKeyCodeCommands.toggleHotSpot8](./class-voiceover-key-code-commands#key-code-commands-togglehotspot8)
- [voiceOverKeyCodeCommands.toggleHotSpot9](./class-voiceover-key-code-commands#key-code-commands-togglehotspot9)
- [voiceOverKeyCodeCommands.toggleHotSpot0](./class-voiceover-key-code-commands#key-code-commands-togglehotspot0)
- [voiceOverKeyCodeCommands.jumpToHotSpot1](./class-voiceover-key-code-commands#key-code-commands-jumptohotspot1)
- [voiceOverKeyCodeCommands.jumpToHotSpot2](./class-voiceover-key-code-commands#key-code-commands-jumptohotspot2)
- [voiceOverKeyCodeCommands.jumpToHotSpot3](./class-voiceover-key-code-commands#key-code-commands-jumptohotspot3)
- [voiceOverKeyCodeCommands.jumpToHotSpot4](./class-voiceover-key-code-commands#key-code-commands-jumptohotspot4)
- [voiceOverKeyCodeCommands.jumpToHotSpot5](./class-voiceover-key-code-commands#key-code-commands-jumptohotspot5)
- [voiceOverKeyCodeCommands.jumpToHotSpot6](./class-voiceover-key-code-commands#key-code-commands-jumptohotspot6)
- [voiceOverKeyCodeCommands.jumpToHotSpot7](./class-voiceover-key-code-commands#key-code-commands-jumptohotspot7)
- [voiceOverKeyCodeCommands.jumpToHotSpot8](./class-voiceover-key-code-commands#key-code-commands-jumptohotspot8)
- [voiceOverKeyCodeCommands.jumpToHotSpot9](./class-voiceover-key-code-commands#key-code-commands-jumptohotspot9)
- [voiceOverKeyCodeCommands.jumpToHotSpot0](./class-voiceover-key-code-commands#key-code-commands-jumptohotspot0)
- [voiceOverKeyCodeCommands.describeHotSpot1](./class-voiceover-key-code-commands#key-code-commands-describehotspot1)
- [voiceOverKeyCodeCommands.describeHotSpot2](./class-voiceover-key-code-commands#key-code-commands-describehotspot2)
- [voiceOverKeyCodeCommands.describeHotSpot3](./class-voiceover-key-code-commands#key-code-commands-describehotspot3)
- [voiceOverKeyCodeCommands.describeHotSpot4](./class-voiceover-key-code-commands#key-code-commands-describehotspot4)
- [voiceOverKeyCodeCommands.describeHotSpot5](./class-voiceover-key-code-commands#key-code-commands-describehotspot5)
- [voiceOverKeyCodeCommands.describeHotSpot6](./class-voiceover-key-code-commands#key-code-commands-describehotspot6)
- [voiceOverKeyCodeCommands.describeHotSpot7](./class-voiceover-key-code-commands#key-code-commands-describehotspot7)
- [voiceOverKeyCodeCommands.describeHotSpot8](./class-voiceover-key-code-commands#key-code-commands-describehotspot8)
- [voiceOverKeyCodeCommands.describeHotSpot9](./class-voiceover-key-code-commands#key-code-commands-describehotspot9)
- [voiceOverKeyCodeCommands.describeHotSpot0](./class-voiceover-key-code-commands#key-code-commands-describehotspot0)
- [voiceOverKeyCodeCommands.monitorHotSpot1](./class-voiceover-key-code-commands#key-code-commands-monitorhotspot1)
- [voiceOverKeyCodeCommands.monitorHotSpot2](./class-voiceover-key-code-commands#key-code-commands-monitorhotspot2)
- [voiceOverKeyCodeCommands.monitorHotSpot3](./class-voiceover-key-code-commands#key-code-commands-monitorhotspot3)
- [voiceOverKeyCodeCommands.monitorHotSpot4](./class-voiceover-key-code-commands#key-code-commands-monitorhotspot4)
- [voiceOverKeyCodeCommands.monitorHotSpot5](./class-voiceover-key-code-commands#key-code-commands-monitorhotspot5)
- [voiceOverKeyCodeCommands.monitorHotSpot6](./class-voiceover-key-code-commands#key-code-commands-monitorhotspot6)
- [voiceOverKeyCodeCommands.monitorHotSpot7](./class-voiceover-key-code-commands#key-code-commands-monitorhotspot7)
- [voiceOverKeyCodeCommands.monitorHotSpot8](./class-voiceover-key-code-commands#key-code-commands-monitorhotspot8)
- [voiceOverKeyCodeCommands.monitorHotSpot9](./class-voiceover-key-code-commands#key-code-commands-monitorhotspot9)
- [voiceOverKeyCodeCommands.monitorHotSpot0](./class-voiceover-key-code-commands#key-code-commands-monitorhotspot0)
- [voiceOverKeyCodeCommands.jumpToParentFolder](./class-voiceover-key-code-commands#key-code-commands-jumptoparentfolder)
- [voiceOverKeyCodeCommands.hearApplicationSummary](./class-voiceover-key-code-commands#key-code-commands-hearapplicationsummary)
- [voiceOverKeyCodeCommands.openApplicationChooser](./class-voiceover-key-code-commands#key-code-commands-openapplicationchooser)
- [voiceOverKeyCodeCommands.hearWindowSummary](./class-voiceover-key-code-commands#key-code-commands-hearwindowsummary)
- [voiceOverKeyCodeCommands.openWindowChooser](./class-voiceover-key-code-commands#key-code-commands-openwindowchooser)
- [voiceOverKeyCodeCommands.describeItem](./class-voiceover-key-code-commands#key-code-commands-describeitem)
- [voiceOverKeyCodeCommands.describeItemSize](./class-voiceover-key-code-commands#key-code-commands-describeitemsize)
- [voiceOverKeyCodeCommands.describeItemPosition](./class-voiceover-key-code-commands#key-code-commands-describeitemposition)
- [voiceOverKeyCodeCommands.describeItemWithKeyboardFocus](./class-voiceover-key-code-commands#key-code-commands-describeitemwithkeyboardfocus)
- [voiceOverKeyCodeCommands.describeLocationOfInsertionPoint](./class-voiceover-key-code-commands#key-code-commands-describelocationofinsertionpoint)
- [voiceOverKeyCodeCommands.describeItemUnderMouseCursor](./class-voiceover-key-code-commands#key-code-commands-describeitemundermousecursor)
- [voiceOverKeyCodeCommands.describeLocationOfMouseInCoordinates](./class-voiceover-key-code-commands#key-code-commands-describelocationofmouseincoordinates)
- [voiceOverKeyCodeCommands.describeLocationOfMouse](./class-voiceover-key-code-commands#key-code-commands-describelocationofmouse)
- [voiceOverKeyCodeCommands.describeSelectedItem](./class-voiceover-key-code-commands#key-code-commands-describeselecteditem)
- [voiceOverKeyCodeCommands.readEverythingInCursor](./class-voiceover-key-code-commands#key-code-commands-readeverythingincursor)
- [voiceOverKeyCodeCommands.readEverythingInWindow](./class-voiceover-key-code-commands#key-code-commands-readeverythinginwindow)
- [voiceOverKeyCodeCommands.repeatLastSpokenPhrase](./class-voiceover-key-code-commands#key-code-commands-repeatlastspokenphrase)
- [voiceOverKeyCodeCommands.copyLastSpokenPhraseToClipboard](./class-voiceover-key-code-commands#key-code-commands-copylastspokenphrasetoclipboard)
- [voiceOverKeyCodeCommands.saveLastSpokenPhraseToDesktop](./class-voiceover-key-code-commands#key-code-commands-savelastspokenphrasetodesktop)
- [voiceOverKeyCodeCommands.find](./class-voiceover-key-code-commands#key-code-commands-find)
- [voiceOverKeyCodeCommands.findNextSearchedText](./class-voiceover-key-code-commands#key-code-commands-findnextsearchedtext)
- [voiceOverKeyCodeCommands.findPreviousSearchedText](./class-voiceover-key-code-commands#key-code-commands-findprevioussearchedtext)
- [voiceOverKeyCodeCommands.findNextList](./class-voiceover-key-code-commands#key-code-commands-findnextlist)
- [voiceOverKeyCodeCommands.findPreviousList](./class-voiceover-key-code-commands#key-code-commands-findpreviouslist)
- [voiceOverKeyCodeCommands.findNextBoldText](./class-voiceover-key-code-commands#key-code-commands-findnextboldtext)
- [voiceOverKeyCodeCommands.findPreviousBoldText](./class-voiceover-key-code-commands#key-code-commands-findpreviousboldtext)
- [voiceOverKeyCodeCommands.findNextStyleChange](./class-voiceover-key-code-commands#key-code-commands-findnextstylechange)
- [voiceOverKeyCodeCommands.findPreviousStyleChange](./class-voiceover-key-code-commands#key-code-commands-findpreviousstylechange)
- [voiceOverKeyCodeCommands.findNextItalicText](./class-voiceover-key-code-commands#key-code-commands-findnextitalictext)
- [voiceOverKeyCodeCommands.findPreviousItalicText](./class-voiceover-key-code-commands#key-code-commands-findpreviousitalictext)
- [voiceOverKeyCodeCommands.findNextColorChange](./class-voiceover-key-code-commands#key-code-commands-findnextcolorchange)
- [voiceOverKeyCodeCommands.findPreviousColorChange](./class-voiceover-key-code-commands#key-code-commands-findpreviouscolorchange)
- [voiceOverKeyCodeCommands.findNextFontChange](./class-voiceover-key-code-commands#key-code-commands-findnextfontchange)
- [voiceOverKeyCodeCommands.findPreviousFontChange](./class-voiceover-key-code-commands#key-code-commands-findpreviousfontchange)
- [voiceOverKeyCodeCommands.findNextTable](./class-voiceover-key-code-commands#key-code-commands-findnexttable)
- [voiceOverKeyCodeCommands.findPreviousTable](./class-voiceover-key-code-commands#key-code-commands-findprevioustable)
- [voiceOverKeyCodeCommands.findNextUnderlinedText](./class-voiceover-key-code-commands#key-code-commands-findnextunderlinedtext)
- [voiceOverKeyCodeCommands.findPreviousUnderlinedText](./class-voiceover-key-code-commands#key-code-commands-findpreviousunderlinedtext)
- [voiceOverKeyCodeCommands.findNextControl](./class-voiceover-key-code-commands#key-code-commands-findnextcontrol)
- [voiceOverKeyCodeCommands.findPreviousControl](./class-voiceover-key-code-commands#key-code-commands-findpreviouscontrol)
- [voiceOverKeyCodeCommands.findNextDifferentItem](./class-voiceover-key-code-commands#key-code-commands-findnextdifferentitem)
- [voiceOverKeyCodeCommands.findPreviousDifferentItem](./class-voiceover-key-code-commands#key-code-commands-findpreviousdifferentitem)
- [voiceOverKeyCodeCommands.findNextItemWithSameTypeAsCurrentItem](./class-voiceover-key-code-commands#key-code-commands-findnextitemwithsametypeascurrentitem)
- [voiceOverKeyCodeCommands.findPreviousItemWithSameTypeAsCurrentItem](./class-voiceover-key-code-commands#key-code-commands-findpreviousitemwithsametypeascurrentitem)
- [voiceOverKeyCodeCommands.findNextGraphic](./class-voiceover-key-code-commands#key-code-commands-findnextgraphic)
- [voiceOverKeyCodeCommands.findPreviousGraphic](./class-voiceover-key-code-commands#key-code-commands-findpreviousgraphic)
- [voiceOverKeyCodeCommands.findNextHeading](./class-voiceover-key-code-commands#key-code-commands-findnextheading)
- [voiceOverKeyCodeCommands.findPreviousHeading](./class-voiceover-key-code-commands#key-code-commands-findpreviousheading)
- [voiceOverKeyCodeCommands.findNextLink](./class-voiceover-key-code-commands#key-code-commands-findnextlink)
- [voiceOverKeyCodeCommands.findPreviousLink](./class-voiceover-key-code-commands#key-code-commands-findpreviouslink)
- [voiceOverKeyCodeCommands.findNextHeadingOfSameLevel](./class-voiceover-key-code-commands#key-code-commands-findnextheadingofsamelevel)
- [voiceOverKeyCodeCommands.findPreviousHeadingOfSameLevel](./class-voiceover-key-code-commands#key-code-commands-findpreviousheadingofsamelevel)
- [voiceOverKeyCodeCommands.findNextPlainText](./class-voiceover-key-code-commands#key-code-commands-findnextplaintext)
- [voiceOverKeyCodeCommands.findPreviousPlainText](./class-voiceover-key-code-commands#key-code-commands-findpreviousplaintext)
- [voiceOverKeyCodeCommands.findNextVisitedLink](./class-voiceover-key-code-commands#key-code-commands-findnextvisitedlink)
- [voiceOverKeyCodeCommands.findPreviousVisitedLink](./class-voiceover-key-code-commands#key-code-commands-findpreviousvisitedlink)
- [voiceOverKeyCodeCommands.findNextMisspelledWord](./class-voiceover-key-code-commands#key-code-commands-findnextmisspelledword)
- [voiceOverKeyCodeCommands.findPreviousMisspelledWord](./class-voiceover-key-code-commands#key-code-commands-findpreviousmisspelledword)
- [voiceOverKeyCodeCommands.readAllText](./class-voiceover-key-code-commands#key-code-commands-readalltext)
- [voiceOverKeyCodeCommands.selectAllText](./class-voiceover-key-code-commands#key-code-commands-selectalltext)
- [voiceOverKeyCodeCommands.toggleTextSelection](./class-voiceover-key-code-commands#key-code-commands-toggletextselection)
- [voiceOverKeyCodeCommands.speakTextAttributes](./class-voiceover-key-code-commands#key-code-commands-speaktextattributes)
- [voiceOverKeyCodeCommands.readParagraph](./class-voiceover-key-code-commands#key-code-commands-readparagraph)
- [voiceOverKeyCodeCommands.readNextParagraph](./class-voiceover-key-code-commands#key-code-commands-readnextparagraph)
- [voiceOverKeyCodeCommands.readPreviousParagraph](./class-voiceover-key-code-commands#key-code-commands-readpreviousparagraph)
- [voiceOverKeyCodeCommands.readSentence](./class-voiceover-key-code-commands#key-code-commands-readsentence)
- [voiceOverKeyCodeCommands.readNextSentence](./class-voiceover-key-code-commands#key-code-commands-readnextsentence)
- [voiceOverKeyCodeCommands.readPreviousSentence](./class-voiceover-key-code-commands#key-code-commands-readprevioussentence)
- [voiceOverKeyCodeCommands.readLine](./class-voiceover-key-code-commands#key-code-commands-readline)
- [voiceOverKeyCodeCommands.readNextLine](./class-voiceover-key-code-commands#key-code-commands-readnextline)
- [voiceOverKeyCodeCommands.readPreviousLine](./class-voiceover-key-code-commands#key-code-commands-readpreviousline)
- [voiceOverKeyCodeCommands.readWord](./class-voiceover-key-code-commands#key-code-commands-readword)
- [voiceOverKeyCodeCommands.readWordSpelled](./class-voiceover-key-code-commands#key-code-commands-readwordspelled)
- [voiceOverKeyCodeCommands.readWordPhonetically](./class-voiceover-key-code-commands#key-code-commands-readwordphonetically)
- [voiceOverKeyCodeCommands.readNextWord](./class-voiceover-key-code-commands#key-code-commands-readnextword)
- [voiceOverKeyCodeCommands.readPreviousWord](./class-voiceover-key-code-commands#key-code-commands-readpreviousword)
- [voiceOverKeyCodeCommands.readCharacter](./class-voiceover-key-code-commands#key-code-commands-readcharacter)
- [voiceOverKeyCodeCommands.readCharacterPhonetically](./class-voiceover-key-code-commands#key-code-commands-readcharacterphonetically)
- [voiceOverKeyCodeCommands.readNextCharacter](./class-voiceover-key-code-commands#key-code-commands-readnextcharacter)
- [voiceOverKeyCodeCommands.readPreviousCharacter](./class-voiceover-key-code-commands#key-code-commands-readpreviouscharacter)
- [voiceOverKeyCodeCommands.moveToFirstVisibleWord](./class-voiceover-key-code-commands#key-code-commands-movetofirstvisibleword)
- [voiceOverKeyCodeCommands.moveToLastVisibleWord](./class-voiceover-key-code-commands#key-code-commands-movetolastvisibleword)
- [voiceOverKeyCodeCommands.moveToBeginningOfText](./class-voiceover-key-code-commands#key-code-commands-movetobeginningoftext)
- [voiceOverKeyCodeCommands.moveToEndOfText](./class-voiceover-key-code-commands#key-code-commands-movetoendoftext)
- [voiceOverKeyCodeCommands.readCurrentWordAndCharacter](./class-voiceover-key-code-commands#key-code-commands-readcurrentwordandcharacter)
- [voiceOverKeyCodeCommands.readNumberOfLines](./class-voiceover-key-code-commands#key-code-commands-readnumberoflines)
- [voiceOverKeyCodeCommands.moveToNextColumn](./class-voiceover-key-code-commands#key-code-commands-movetonextcolumn)
- [voiceOverKeyCodeCommands.moveToPreviousColumn](./class-voiceover-key-code-commands#key-code-commands-movetopreviouscolumn)
- [voiceOverKeyCodeCommands.moveToNextFrame](./class-voiceover-key-code-commands#key-code-commands-movetonextframe)
- [voiceOverKeyCodeCommands.moveToPreviousFrame](./class-voiceover-key-code-commands#key-code-commands-movetopreviousframe)
- [voiceOverKeyCodeCommands.moveToNextAutoWebSpot](./class-voiceover-key-code-commands#key-code-commands-movetonextautowebspot)
- [voiceOverKeyCodeCommands.moveToPreviousAutoWebSpot](./class-voiceover-key-code-commands#key-code-commands-movetopreviousautowebspot)
- [voiceOverKeyCodeCommands.moveToNextWebSpot](./class-voiceover-key-code-commands#key-code-commands-movetonextwebspot)
- [voiceOverKeyCodeCommands.moveToPreviousWebSpot](./class-voiceover-key-code-commands#key-code-commands-movetopreviouswebspot)
- [voiceOverKeyCodeCommands.openWebItemRotor](./class-voiceover-key-code-commands#key-code-commands-openwebitemrotor)
- [voiceOverKeyCodeCommands.readFromBeginningToCurrent](./class-voiceover-key-code-commands#key-code-commands-readfrombeginningtocurrent)
- [voiceOverKeyCodeCommands.readLinkAddress](./class-voiceover-key-code-commands#key-code-commands-readlinkaddress)
- [voiceOverKeyCodeCommands.readWebpageStatistics](./class-voiceover-key-code-commands#key-code-commands-readwebpagestatistics)
- [voiceOverKeyCodeCommands.removeWebSpot](./class-voiceover-key-code-commands#key-code-commands-removewebspot)
- [voiceOverKeyCodeCommands.setWebSpot](./class-voiceover-key-code-commands#key-code-commands-setwebspot)
- [voiceOverKeyCodeCommands.setSweetSpot](./class-voiceover-key-code-commands#key-code-commands-setsweetspot)
- [voiceOverKeyCodeCommands.toggleGroupingItemsWithinTable](./class-voiceover-key-code-commands#key-code-commands-togglegroupingitemswithintable)

## voiceOverKeyCodeCommands.start {#key-code-commands-start}

Start VoiceOver.

Equivalent of executing `Command-F5`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.quit {#key-code-commands-quit}

Quit VoiceOver.

Equivalent of executing `Command-F5`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.toggleLock {#key-code-commands-togglelock}

Lock and unlock the VO (Control and Option) keys.

Equivalent of executing `VO-;`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.openVoiceOverUtility {#key-code-commands-openvoiceoverutility}

Open VoiceOver Utility.

Equivalent of executing `VO-F8`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.openVoiceOverHelpMenu {#key-code-commands-openvoiceoverhelpmenu}

Open the VoiceOver Help menu.

Equivalent of executing `VO-H`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.openVoiceOverQuickStart {#key-code-commands-openvoiceoverquickstart}

Open the VoiceOver Quick Start.

Equivalent of executing `VO-Command-F8`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.openVoiceOverOnlineHelp {#key-code-commands-openvoiceoveronlinehelp}

Open VoiceOver online help.

Equivalent of executing `VO-Shift-/`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.startKeyboardHelp {#key-code-commands-startkeyboardhelp}

Start keyboard help.

Equivalent of executing `VO-K`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.hearItemDescription {#key-code-commands-hearitemdescription}

Hear a description of the item in the VoiceOver cursor.

Equivalent of executing `VO-Shift-N`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.openCommandsMenu {#key-code-commands-opencommandsmenu}

Open the Commands menu.

Equivalent of executing `VO-H-H`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.openFindMenu {#key-code-commands-openfindmenu}

Open the Find menu.

Equivalent of executing `VO-Shift-F`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.stopAction {#key-code-commands-stopaction}

Close a menu or rotor, stop an action, or exit a mode.

Equivalent of executing `Escape`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.ignoreNextKeyCombination {#key-code-commands-ignorenextkeycombination}

Tell VoiceOver to ignore the next key combination you press.

Equivalent of executing `VO-Tab`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.openVerbosityRotor {#key-code-commands-openverbosityrotor}

Open the verbosity rotor.

Equivalent of executing `VO-V`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.magnifyItem {#key-code-commands-magnifyitem}

Magnify the item in the VoiceOver cursor.

Equivalent of executing `VO-}`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.shrinkItem {#key-code-commands-shrinkitem}

Shrink the item in the VoiceOver cursor.

Equivalent of executing `VO-{`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.toggleVoiceOverCursorAndPanels {#key-code-commands-togglevoiceovercursorandpanels}

Temporarily hide or show the VoiceOver cursor and the caption or braille panels.

Equivalent of executing `VO-F11`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.toggleCaptionPanel {#key-code-commands-togglecaptionpanel}

Hide or show the caption panel only.

Equivalent of executing `VO-Command-F10`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.resizeOrMoveCaptionPanel {#key-code-commands-resizeormovecaptionpanel}

Resize or move the caption panel.

Equivalent of executing `VO-Shift-F10`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.toggleBraillePanel {#key-code-commands-togglebraillepanel}

Hide or show the braille panel only.

Equivalent of executing `VO-Command-F9`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.resizeOrMoveBraillePanel {#key-code-commands-resizeormovebraillepanel}

Resize or move the braille panel.

Equivalent of executing `VO-Shift-F9`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.tileVisuals {#key-code-commands-tilevisuals}

Tile visuals (dim the screen, highlight the caption or braille panel, and show the item in the VoiceOver cursor in the center of the screen)..

Equivalent of executing `VO-F10`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.toggleKeyboardCommander {#key-code-commands-togglekeyboardcommander}

Enable or disable the Keyboard Commander.

Equivalent of executing `VO-Shift-K`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.toggleScreenCurtain {#key-code-commands-togglescreencurtain}

Turn the screen black (screen curtain).

Equivalent of executing `VO-Shift-F11`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.cycleRightThroughSpeechSettings {#key-code-commands-cyclerightthroughspeechsettings}

Cycle through speech settings (rate, pitch, volume, intonation, voice).

Equivalent of executing `VO-Command-Shift-Right Arrow`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.cycleLeftThroughSpeechSettings {#key-code-commands-cycleleftthroughspeechsettings}

Cycle through speech settings (rate, pitch, volume, intonation, voice).

Equivalent of executing `VO-Command-Shift-Left Arrow`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.changeUpCurrentSpeechSettings {#key-code-commands-changeupcurrentspeechsettings}

Change the current speech setting (rate, pitch, volume, intonation, voice).

Equivalent of executing `VO-Command-Shift-Up Arrow`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.changeDownCurrentSpeechSettings {#key-code-commands-changedowncurrentspeechsettings}

Change the current speech setting (rate, pitch, volume, intonation, voice).

Equivalent of executing `VO-Command-Shift-Down Arrow`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.pressAndReleaseMouse {#key-code-commands-pressandreleasemouse}

Press and release mouse button.

Equivalent of executing `VO-Shift-Space bar`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.interactWithItem {#key-code-commands-interactwithitem}

Interact with an item.

Equivalent of executing `VO-Shift-Down Arrow`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.stopInteractingWithItem {#key-code-commands-stopinteractingwithitem}

Stop interacting with an item.

Equivalent of executing `VO-Shift-Up Arrow`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.performDefaultActionForItem {#key-code-commands-performdefaultactionforitem}

Perform the default action for the item in the VoiceOver cursor.

Equivalent of executing `VO-Space bar`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.selectItem {#key-code-commands-selectitem}

Select a menu or list item.

Equivalent of executing `VO-Return`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.selectMultipleItems {#key-code-commands-selectmultipleitems}

Select multiple items.

Equivalent of executing `VO-Command-Space bar`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.toggleStickyMouse {#key-code-commands-togglestickymouse}

Perform a sticky mouse down or mouse up (for use when dragging an item from one location to drop in another location).

Equivalent of executing `VO-Command-Shift-Space bar`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.doubleClick {#key-code-commands-doubleclick}

Click the item under the mouse cursor.

Equivalent of executing `VO-Shift-Space bar-Space bar`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.toggleDisclosureTriangle {#key-code-commands-toggledisclosuretriangle}

Open or close a disclosure triangle.

Equivalent of executing `VO-\`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.readTableRow {#key-code-commands-readtablerow}

Read a row in a table.

Equivalent of executing `VO-R`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.readTableColumn {#key-code-commands-readtablecolumn}

Read a column in a table.

Equivalent of executing `VO-C-C`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.readTableColumnHeader {#key-code-commands-readtablecolumnheader}

Read the column header in a table.

Equivalent of executing `VO-C`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.readTableRowAndColumnNumbers {#key-code-commands-readtablerowandcolumnnumbers}

Read row and column numbers in a table.

Equivalent of executing `VO-Shift-T`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.sortTableColumn {#key-code-commands-sorttablecolumn}

Sort a column in a table.

Equivalent of executing `VO-|`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.interactWithScrollbars {#key-code-commands-interactwithscrollbars}

Interact with scroll bars.

Equivalent of executing `VO-Shift-S`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.resizeObject {#key-code-commands-resizeobject}

Resize a window or an object.

Equivalent of executing `VO-~`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.moveObject {#key-code-commands-moveobject}

Move a window or an object.

Equivalent of executing `VO-``.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.moveUp {#key-code-commands-moveup}

Move up.

Equivalent of executing `VO-Up Arrow`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.moveDown {#key-code-commands-movedown}

Move down.

Equivalent of executing `VO-Down Arrow`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.moveToPrevious {#key-code-commands-movetoprevious}

Move to previous.

Equivalent of executing `VO-Left Arrow`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.moveToNext {#key-code-commands-movetonext}

Move to next.

Equivalent of executing `VO-Right Arrow`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.moveToVisibleAreaTop {#key-code-commands-movetovisibleareatop}

Move to the top of the visible area (such as a window or text area) where the VoiceOver cursor is located.

Equivalent of executing `VO-Home`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.moveToVisibleAreaBottom {#key-code-commands-movetovisibleareabottom}

Move to the bottom of the visible area (such as a window or text area) where the VoiceOver cursor is located.

Equivalent of executing `VO-End`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.moveToAreaTop {#key-code-commands-movetoareatop}

Move to the top of the area (such as a window or text area) where the VoiceOver cursor is located, scrolling if necessary.

Equivalent of executing `VO-Shift-Home`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.moveToAreaBottom {#key-code-commands-movetoareabottom}

Move to the bottom of the area (such as a window or text area) where the VoiceOver cursor is located, scrolling if necessary.

Equivalent of executing `VO-Shift-End`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.moveToFirst {#key-code-commands-movetofirst}

Move to the top of a window, the first item in the Dock, or the first item on your desktop, depending on your location.

Equivalent of executing `VO-Command-Home`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.moveToLast {#key-code-commands-movetolast}

Move to the lower-right corner of a window, the last item in the Dock, or the last item on your desktop, depending on your location.

Equivalent of executing `VO-Command-End`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.moveToFrontWindow {#key-code-commands-movetofrontwindow}

Move to the front the window where the VoiceOver cursor is located and make it active.

Equivalent of executing `VO-Shift-F2`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.closeWindow {#key-code-commands-closewindow}

Close the window where the VoiceOver cursor is located.

Equivalent of executing `VO-Command-F2`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.openItemChooser {#key-code-commands-openitemchooser}

Open the Item Chooser.

Equivalent of executing `VO-I`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.moveToDock {#key-code-commands-movetodock}

Move to the desktop.

Equivalent of executing `VO-D`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.moveToDesktop {#key-code-commands-movetodesktop}

Move to the desktop.

Equivalent of executing `VO-D`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.moveToMenuBar {#key-code-commands-movetomenubar}

Move to the menu bar.

Equivalent of executing `VO-M`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.moveToFirstStatusMenuInMenuBar {#key-code-commands-movetofirststatusmenuinmenubar}

Move to the first status menu in the menu bar.

Equivalent of executing `VO-M-M`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.openSpotlightMenu {#key-code-commands-openspotlightmenu}

Open the Spotlight menu.

Equivalent of executing `VO-M-M-M`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.openShortcutMenu {#key-code-commands-openshortcutmenu}

Open a shortcut menu.

Equivalent of executing `VO-Shift-J`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.jumpToLinkedItem {#key-code-commands-jumptolinkeditem}

Jump to a linked item (for example, from a Mail message in the Inbox to its message text).

Equivalent of executing `VO-J`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.toggleCursorTrackingOptions {#key-code-commands-togglecursortrackingoptions}

Temporarily disable or enable the cursor tracking options you selected in VoiceOver Utility. The command doesn't change the settings in VoiceOver Utility..

Equivalent of executing `VO-Shift-F3`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.moveCursorToKeyboardFocus {#key-code-commands-movecursortokeyboardfocus}

Move VoiceOver cursor to keyboard focus.

Equivalent of executing `VO-Shift-F4`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.moveKeyboardFocusToCursor {#key-code-commands-movekeyboardfocustocursor}

Move keyboard focus to VoiceOver cursor.

Equivalent of executing `VO-Command-F4`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.moveCursorToMouseFocus {#key-code-commands-movecursortomousefocus}

Move VoiceOver cursor to mouse cursor.

Equivalent of executing `VO-Shift-F5`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.moveMouseFocusToCursor {#key-code-commands-movemousefocustocursor}

Move mouse cursor to VoiceOver cursor.

Equivalent of executing `VO-Command-F5`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.jumpCommand {#key-code-commands-jumpcommand}

Jump command.

Equivalent of executing `VO-Shift-J`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.jumpToTopEdge {#key-code-commands-jumptotopedge}

Jump to the top edge of an area. Used with jump command.

Equivalent of executing `VO-Shift-Up Arrow`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.jumpToRightEdge {#key-code-commands-jumptorightedge}

Jump to the right edge of an area. Used with jump command.

Equivalent of executing `VO-Shift-Right Arrow`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.jumpToBottomEdge {#key-code-commands-jumptobottomedge}

Jump to the bottom edge of an area. Used with jump command.

Equivalent of executing `VO-Shift-Down Arrow`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.jumpToLeftEdge {#key-code-commands-jumptoleftedge}

Jump to the left edge of an area. Used with jump command.

Equivalent of executing `VO-Shift-Left Arrow`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.jumpToTopVisibleEdge {#key-code-commands-jumptotopvisibleedge}

Jump to the top visible edge of an area. Used with jump command.

Equivalent of executing `VO-Up Arrow`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.jumpToRightVisibleEdge {#key-code-commands-jumptorightvisibleedge}

Jump to the right visible edge of an area. Used with jump command.

Equivalent of executing `VO-Right Arrow`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.jumpToBottomVisibleEdge {#key-code-commands-jumptobottomvisibleedge}

Jump to the bottom visible edge of an area. Used with jump command.

Equivalent of executing `VO-Down Arrow`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.jumpToLeftVisibleEdge {#key-code-commands-jumptoleftvisibleedge}

Jump to the left visible edge of an area. Used with jump command.

Equivalent of executing `VO-Left Arrow`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.jumpBeforeSplitter {#key-code-commands-jumpbeforesplitter}

Jump to the area that precedes a horizontal or vertical splitter.

Equivalent of executing `VO-[`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.jumpAfterSplitter {#key-code-commands-jumpaftersplitter}

Jump to the area that follows a horizontal or vertical splitter.

Equivalent of executing `VO-]`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.findText {#key-code-commands-findtext}

Find text.

Equivalent of executing `VO-F`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.navigateUp {#key-code-commands-navigateup}

Navigate in given direction, wrapping when necessary.

Equivalent of executing `VO-Command-Up Arrow`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.cycleRightThroughNavigationSettings {#key-code-commands-cyclerightthroughnavigationsettings}

Cycle through navigation settings (Headings, Form Controls, Landmarks, etc.).

Equivalent of executing `VO-Command-Right Arrow`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.navigateDown {#key-code-commands-navigatedown}

Navigate in given direction, wrapping when necessary.

Equivalent of executing `VO-Command-Down Arrow`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.cycleLeftThroughNavigationSettings {#key-code-commands-cycleleftthroughnavigationsettings}

Cycle through navigation settings (Headings, Form Controls, Landmarks, etc.).

Equivalent of executing `VO-Command-Left Arrow`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.toggleHotSpot1 {#key-code-commands-togglehotspot1}

Toggle hot spot 1.

Equivalent of executing `VO-Shift-1`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.toggleHotSpot2 {#key-code-commands-togglehotspot2}

Toggle hot spot 2.

Equivalent of executing `VO-Shift-2`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.toggleHotSpot3 {#key-code-commands-togglehotspot3}

Toggle hot spot 3.

Equivalent of executing `VO-Shift-3`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.toggleHotSpot4 {#key-code-commands-togglehotspot4}

Toggle hot spot 4.

Equivalent of executing `VO-Shift-4`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.toggleHotSpot5 {#key-code-commands-togglehotspot5}

Toggle hot spot 5.

Equivalent of executing `VO-Shift-5`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.toggleHotSpot6 {#key-code-commands-togglehotspot6}

Toggle hot spot 6.

Equivalent of executing `VO-Shift-6`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.toggleHotSpot7 {#key-code-commands-togglehotspot7}

Toggle hot spot 7.

Equivalent of executing `VO-Shift-7`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.toggleHotSpot8 {#key-code-commands-togglehotspot8}

Toggle hot spot 8.

Equivalent of executing `VO-Shift-8`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.toggleHotSpot9 {#key-code-commands-togglehotspot9}

Toggle hot spot 9.

Equivalent of executing `VO-Shift-9`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.toggleHotSpot0 {#key-code-commands-togglehotspot0}

Toggle hot spot 0.

Equivalent of executing `VO-Shift-0`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.jumpToHotSpot1 {#key-code-commands-jumptohotspot1}

Jump to hot spot 1.

Equivalent of executing `VO-1`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.jumpToHotSpot2 {#key-code-commands-jumptohotspot2}

Jump to hot spot 2.

Equivalent of executing `VO-2`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.jumpToHotSpot3 {#key-code-commands-jumptohotspot3}

Jump to hot spot 3.

Equivalent of executing `VO-3`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.jumpToHotSpot4 {#key-code-commands-jumptohotspot4}

Jump to hot spot 4.

Equivalent of executing `VO-4`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.jumpToHotSpot5 {#key-code-commands-jumptohotspot5}

Jump to hot spot 5.

Equivalent of executing `VO-5`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.jumpToHotSpot6 {#key-code-commands-jumptohotspot6}

Jump to hot spot 6.

Equivalent of executing `VO-6`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.jumpToHotSpot7 {#key-code-commands-jumptohotspot7}

Jump to hot spot 7.

Equivalent of executing `VO-7`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.jumpToHotSpot8 {#key-code-commands-jumptohotspot8}

Jump to hot spot 8.

Equivalent of executing `VO-8`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.jumpToHotSpot9 {#key-code-commands-jumptohotspot9}

Jump to hot spot 9.

Equivalent of executing `VO-9`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.jumpToHotSpot0 {#key-code-commands-jumptohotspot0}

Jump to hot spot 0.

Equivalent of executing `VO-0`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.describeHotSpot1 {#key-code-commands-describehotspot1}

Hear a description of hot spot 1.

Equivalent of executing `VO-Command-1`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.describeHotSpot2 {#key-code-commands-describehotspot2}

Hear a description of hot spot 2.

Equivalent of executing `VO-Command-2`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.describeHotSpot3 {#key-code-commands-describehotspot3}

Hear a description of hot spot 3.

Equivalent of executing `VO-Command-3`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.describeHotSpot4 {#key-code-commands-describehotspot4}

Hear a description of hot spot 4.

Equivalent of executing `VO-Command-4`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.describeHotSpot5 {#key-code-commands-describehotspot5}

Hear a description of hot spot 5.

Equivalent of executing `VO-Command-5`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.describeHotSpot6 {#key-code-commands-describehotspot6}

Hear a description of hot spot 6.

Equivalent of executing `VO-Command-6`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.describeHotSpot7 {#key-code-commands-describehotspot7}

Hear a description of hot spot 7.

Equivalent of executing `VO-Command-7`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.describeHotSpot8 {#key-code-commands-describehotspot8}

Hear a description of hot spot 8.

Equivalent of executing `VO-Command-8`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.describeHotSpot9 {#key-code-commands-describehotspot9}

Hear a description of hot spot 9.

Equivalent of executing `VO-Command-9`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.describeHotSpot0 {#key-code-commands-describehotspot0}

Hear a description of hot spot 0.

Equivalent of executing `VO-Command-0`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.monitorHotSpot1 {#key-code-commands-monitorhotspot1}

Monitor hot spot 1.

Equivalent of executing `VO-Command-Shift-1`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.monitorHotSpot2 {#key-code-commands-monitorhotspot2}

Monitor hot spot 2.

Equivalent of executing `VO-Command-Shift-2`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.monitorHotSpot3 {#key-code-commands-monitorhotspot3}

Monitor hot spot 3.

Equivalent of executing `VO-Command-Shift-3`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.monitorHotSpot4 {#key-code-commands-monitorhotspot4}

Monitor hot spot 4.

Equivalent of executing `VO-Command-Shift-4`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.monitorHotSpot5 {#key-code-commands-monitorhotspot5}

Monitor hot spot 5.

Equivalent of executing `VO-Command-Shift-5`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.monitorHotSpot6 {#key-code-commands-monitorhotspot6}

Monitor hot spot 6.

Equivalent of executing `VO-Command-Shift-6`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.monitorHotSpot7 {#key-code-commands-monitorhotspot7}

Monitor hot spot 7.

Equivalent of executing `VO-Command-Shift-7`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.monitorHotSpot8 {#key-code-commands-monitorhotspot8}

Monitor hot spot 8.

Equivalent of executing `VO-Command-Shift-8`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.monitorHotSpot9 {#key-code-commands-monitorhotspot9}

Monitor hot spot 9.

Equivalent of executing `VO-Command-Shift-9`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.monitorHotSpot0 {#key-code-commands-monitorhotspot0}

Monitor hot spot 0.

Equivalent of executing `VO-Command-Shift-0`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.jumpToParentFolder {#key-code-commands-jumptoparentfolder}

Jump back to a parent folder.

Equivalent of executing `VO-Command-\`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.hearApplicationSummary {#key-code-commands-hearapplicationsummary}

Hear the application summary.

Equivalent of executing `VO-F1`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.openApplicationChooser {#key-code-commands-openapplicationchooser}

Open the Application Chooser.

Equivalent of executing `VO-F1-F1`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.hearWindowSummary {#key-code-commands-hearwindowsummary}

Hear the window summary.

Equivalent of executing `VO-F2`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.openWindowChooser {#key-code-commands-openwindowchooser}

Open the Window Chooser .

Equivalent of executing `VO-F2-F2`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.describeItem {#key-code-commands-describeitem}

Describe the item in the VoiceOver cursor.

Equivalent of executing `VO-F3`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.describeItemSize {#key-code-commands-describeitemsize}

Describe the size of the item in the VoiceOver cursor.

Equivalent of executing `VO-Command-F3`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.describeItemPosition {#key-code-commands-describeitemposition}

Describe the position of the item in the VoiceOver cursor.

Equivalent of executing `VO-Command-F3-F3`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.describeItemWithKeyboardFocus {#key-code-commands-describeitemwithkeyboardfocus}

Describe the item that has the keyboard focus.

Equivalent of executing `VO-F4`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.describeLocationOfInsertionPoint {#key-code-commands-describelocationofinsertionpoint}

Describe the location of the insertion point (from upper-left corner of screen).

Equivalent of executing `VO-F4-F4`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.describeItemUnderMouseCursor {#key-code-commands-describeitemundermousecursor}

Describe the item under the mouse cursor.

Equivalent of executing `VO-F5`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.describeLocationOfMouseInCoordinates {#key-code-commands-describelocationofmouseincoordinates}

Describe the location of the mouse in x, y coordinates (from upper-left corner of screen).

Equivalent of executing `VO-F5-F5`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.describeLocationOfMouse {#key-code-commands-describelocationofmouse}

Describe the location of the mouse (from upper-left corner of window).

Equivalent of executing `VO-F5-F5-F5`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.describeSelectedItem {#key-code-commands-describeselecteditem}

Describe the selected item.

Equivalent of executing `VO-F6`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.readEverythingInCursor {#key-code-commands-readeverythingincursor}

Read everything in the VoiceOver cursor.

Equivalent of executing `VO-A`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.readEverythingInWindow {#key-code-commands-readeverythinginwindow}

Read everything visible in the window or the Dock, or on your desktop, depending on your location.

Equivalent of executing `VO-Shift-W`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.repeatLastSpokenPhrase {#key-code-commands-repeatlastspokenphrase}

Repeat the last spoken phrase.

Equivalent of executing `VO-Z`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.copyLastSpokenPhraseToClipboard {#key-code-commands-copylastspokenphrasetoclipboard}

Copy the last spoken phrase to the Clipboard (also called the "Pasteboard").

Equivalent of executing `VO-Shift-C`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.saveLastSpokenPhraseToDesktop {#key-code-commands-savelastspokenphrasetodesktop}

Save the last spoken phrase and the crash log to a file on the desktop for troubleshooting.

Equivalent of executing `VO-Shift-Z`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.find {#key-code-commands-find}

Find.

Equivalent of executing `VO-F`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.findNextSearchedText {#key-code-commands-findnextsearchedtext}

Find the next searched text.

Equivalent of executing `VO-G`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.findPreviousSearchedText {#key-code-commands-findprevioussearchedtext}

Find the previous searched text.

Equivalent of executing `VO-Shift-G`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.findNextList {#key-code-commands-findnextlist}

Find the next list.

Equivalent of executing `VO-Command-X`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.findPreviousList {#key-code-commands-findpreviouslist}

Find the previous list.

Equivalent of executing `VO-Command-Shift-X`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.findNextBoldText {#key-code-commands-findnextboldtext}

Find the next bold text.

Equivalent of executing `VO-Command-B`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.findPreviousBoldText {#key-code-commands-findpreviousboldtext}

Find the previous bold text.

Equivalent of executing `VO-Command-Shift-B`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.findNextStyleChange {#key-code-commands-findnextstylechange}

Find the next style change.

Equivalent of executing `VO-Command-C`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.findPreviousStyleChange {#key-code-commands-findpreviousstylechange}

Find the previous style change.

Equivalent of executing `VO-Command-Shift-C`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.findNextItalicText {#key-code-commands-findnextitalictext}

Find the next italic text.

Equivalent of executing `VO-Command-I`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.findPreviousItalicText {#key-code-commands-findpreviousitalictext}

Find the previous italic text.

Equivalent of executing `VO-Command-Shift-I`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.findNextColorChange {#key-code-commands-findnextcolorchange}

Find the next color change.

Equivalent of executing `VO-Command-K`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.findPreviousColorChange {#key-code-commands-findpreviouscolorchange}

Find the previous color change.

Equivalent of executing `VO-Command-Shift-K`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.findNextFontChange {#key-code-commands-findnextfontchange}

Find the next font change.

Equivalent of executing `VO-Command-O`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.findPreviousFontChange {#key-code-commands-findpreviousfontchange}

Find the previous font change.

Equivalent of executing `VO-Command-Shift-O`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.findNextTable {#key-code-commands-findnexttable}

Find the next table.

Equivalent of executing `VO-Command-T`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.findPreviousTable {#key-code-commands-findprevioustable}

Find the previous table.

Equivalent of executing `VO-Command-Shift-T`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.findNextUnderlinedText {#key-code-commands-findnextunderlinedtext}

Find the next underlined text.

Equivalent of executing `VO-Command-U`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.findPreviousUnderlinedText {#key-code-commands-findpreviousunderlinedtext}

Find the previous underlined text.

Equivalent of executing `VO-Command-Shift-U`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.findNextControl {#key-code-commands-findnextcontrol}

Find the next control.

Equivalent of executing `VO-Command-J`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.findPreviousControl {#key-code-commands-findpreviouscontrol}

Find the previous control.

Equivalent of executing `VO-Command-Shift-J`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.findNextDifferentItem {#key-code-commands-findnextdifferentitem}

Find the next different item.

Equivalent of executing `VO-Command-D`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.findPreviousDifferentItem {#key-code-commands-findpreviousdifferentitem}

Find the previous different item.

Equivalent of executing `VO-Command-Shift-D`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.findNextItemWithSameTypeAsCurrentItem {#key-code-commands-findnextitemwithsametypeascurrentitem}

Find the next item that's the same type as the current item.

Equivalent of executing `VO-Command-S`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.findPreviousItemWithSameTypeAsCurrentItem {#key-code-commands-findpreviousitemwithsametypeascurrentitem}

Find the previous item that's the same type as the current item.

Equivalent of executing `VO-Command-Shift-S`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.findNextGraphic {#key-code-commands-findnextgraphic}

Find the next graphic.

Equivalent of executing `VO-Command-G`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.findPreviousGraphic {#key-code-commands-findpreviousgraphic}

Find the previous graphic.

Equivalent of executing `VO-Command-Shift-G`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.findNextHeading {#key-code-commands-findnextheading}

Find the next heading.

Equivalent of executing `VO-Command-H`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.findPreviousHeading {#key-code-commands-findpreviousheading}

Find the previous heading.

Equivalent of executing `VO-Command-Shift-H`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.findNextLink {#key-code-commands-findnextlink}

Find the next link.

Equivalent of executing `VO-Command-L`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.findPreviousLink {#key-code-commands-findpreviouslink}

Find the previous link.

Equivalent of executing `VO-Command-Shift-L`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.findNextHeadingOfSameLevel {#key-code-commands-findnextheadingofsamelevel}

Find the next heading of the same level.

Equivalent of executing `VO-Command-M`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.findPreviousHeadingOfSameLevel {#key-code-commands-findpreviousheadingofsamelevel}

Find the previous heading of the same level.

Equivalent of executing `VO-Command-Shift-M`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.findNextPlainText {#key-code-commands-findnextplaintext}

Find the next plain text.

Equivalent of executing `VO-Command-P`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.findPreviousPlainText {#key-code-commands-findpreviousplaintext}

Find the previous plain text.

Equivalent of executing `VO-Command-Shift-P`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.findNextVisitedLink {#key-code-commands-findnextvisitedlink}

Find the next visited link.

Equivalent of executing `VO-Command-V`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.findPreviousVisitedLink {#key-code-commands-findpreviousvisitedlink}

Find the previous visited link.

Equivalent of executing `VO-Command-Shift-V`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.findNextMisspelledWord {#key-code-commands-findnextmisspelledword}

Find the next misspelled word.

Equivalent of executing `VO-Command-E`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.findPreviousMisspelledWord {#key-code-commands-findpreviousmisspelledword}

Find the previous misspelled word.

Equivalent of executing `VO-Command-Shift-E`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.readAllText {#key-code-commands-readalltext}

Read all text from the VoiceOver cursor to the end of the text.

Equivalent of executing `VO-A`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.selectAllText {#key-code-commands-selectalltext}

Select all text in the VoiceOver cursor.

Equivalent of executing `VO-Shift-A`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.toggleTextSelection {#key-code-commands-toggletextselection}

Start and stop text selection in a text field (text selection tracking must be on).

Equivalent of executing `VO-Return`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.speakTextAttributes {#key-code-commands-speaktextattributes}

Speak text attributes.

Equivalent of executing `VO-T`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.readParagraph {#key-code-commands-readparagraph}

Read paragraph in VoiceOver cursor.

Equivalent of executing `VO-P`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.readNextParagraph {#key-code-commands-readnextparagraph}

Read next paragraph.

Equivalent of executing `VO-Shift-Page Down`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.readPreviousParagraph {#key-code-commands-readpreviousparagraph}

Read previous paragraph.

Equivalent of executing `VO-Shift-Page Up`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.readSentence {#key-code-commands-readsentence}

Read sentence in VoiceOver cursor.

Equivalent of executing `VO-S`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.readNextSentence {#key-code-commands-readnextsentence}

Read next sentence.

Equivalent of executing `VO-Command-Page Down`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.readPreviousSentence {#key-code-commands-readprevioussentence}

Read previous sentence.

Equivalent of executing `VO-Command-Page Up`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.readLine {#key-code-commands-readline}

Read line in VoiceOver cursor.

Equivalent of executing `VO-L`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.readNextLine {#key-code-commands-readnextline}

Read next line.

Equivalent of executing `VO-Down Arrow`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.readPreviousLine {#key-code-commands-readpreviousline}

Read previous line.

Equivalent of executing `VO-Up Arrow`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.readWord {#key-code-commands-readword}

Read word in VoiceOver cursor.

Equivalent of executing `VO-W`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.readWordSpelled {#key-code-commands-readwordspelled}

Read word spelled in VoiceOver cursor.

Equivalent of executing `VO-W-W`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.readWordPhonetically {#key-code-commands-readwordphonetically}

Read word spelled phonetically in VoiceOver cursor.

Equivalent of executing `VO-W-W-W`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.readNextWord {#key-code-commands-readnextword}

Read next word.

Equivalent of executing `VO-Right Arrow`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.readPreviousWord {#key-code-commands-readpreviousword}

Read previous word.

Equivalent of executing `VO-Left Arrow`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.readCharacter {#key-code-commands-readcharacter}

Read character in VoiceOver cursor.

Equivalent of executing `VO-W`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.readCharacterPhonetically {#key-code-commands-readcharacterphonetically}

Read character phonetically in VoiceOver cursor.

Equivalent of executing `VO-C-C`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.readNextCharacter {#key-code-commands-readnextcharacter}

Read next character.

Equivalent of executing `VO-Shift-Right Arrow`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.readPreviousCharacter {#key-code-commands-readpreviouscharacter}

Read previous character.

Equivalent of executing `VO-Shift-Left Arrow`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.moveToFirstVisibleWord {#key-code-commands-movetofirstvisibleword}

Move to first visible word.

Equivalent of executing `VO-Home`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.moveToLastVisibleWord {#key-code-commands-movetolastvisibleword}

Move to last visible word.

Equivalent of executing `VO-End`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.moveToBeginningOfText {#key-code-commands-movetobeginningoftext}

Move to beginning of text, scrolling if necessary.

Equivalent of executing `VO-Shift-Home`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.moveToEndOfText {#key-code-commands-movetoendoftext}

Move to end of text, scrolling if necessary.

Equivalent of executing `VO-Shift-End`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.readCurrentWordAndCharacter {#key-code-commands-readcurrentwordandcharacter}

Reads the current word and character in the VoiceOver cursor.

Equivalent of executing `VO-F3`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.readNumberOfLines {#key-code-commands-readnumberoflines}

Reads the total number of lines and the number of visible lines in a document.

Equivalent of executing `VO-F3-F3`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.moveToNextColumn {#key-code-commands-movetonextcolumn}

Move to the next column.

Equivalent of executing `VO-Command-Y`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.moveToPreviousColumn {#key-code-commands-movetopreviouscolumn}

Move to the previous column.

Equivalent of executing `VO-Command-Shift-Y`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.moveToNextFrame {#key-code-commands-movetonextframe}

Move to the next frame.

Equivalent of executing `VO-Command-F`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.moveToPreviousFrame {#key-code-commands-movetopreviousframe}

Move to the previous frame.

Equivalent of executing `VO-Command-Shift-F`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.moveToNextAutoWebSpot {#key-code-commands-movetonextautowebspot}

Move to the next auto web spot.

Equivalent of executing `VO-Command-N`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.moveToPreviousAutoWebSpot {#key-code-commands-movetopreviousautowebspot}

Move to the previous auto web spot.

Equivalent of executing `VO-Command-Shift-N`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.moveToNextWebSpot {#key-code-commands-movetonextwebspot}

Move to the next web spot.

Equivalent of executing `VO-Command-]`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.moveToPreviousWebSpot {#key-code-commands-movetopreviouswebspot}

Move to the previous web spot.

Equivalent of executing `VO-Command-[`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.openWebItemRotor {#key-code-commands-openwebitemrotor}

Open the Web Item rotor.

Equivalent of executing `VO-U`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.readFromBeginningToCurrent {#key-code-commands-readfrombeginningtocurrent}

Read from the beginning of a webpage to the current location.

Equivalent of executing `VO-B`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.readLinkAddress {#key-code-commands-readlinkaddress}

Read a link address (URL).

Equivalent of executing `VO-Shift-U`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.readWebpageStatistics {#key-code-commands-readwebpagestatistics}

Read webpage statistics.

Equivalent of executing `VO-Shift-I`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.removeWebSpot {#key-code-commands-removewebspot}

Remove a web spot.

Equivalent of executing `VO-Command-Shift-{`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.setWebSpot {#key-code-commands-setwebspot}

Set a web spot.

Equivalent of executing `VO-Command-Shift-}`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.setSweetSpot {#key-code-commands-setsweetspot}

Set the sweet spot.

Equivalent of executing `VO-Command-Shift-}-}`.

**Type:** [MacOSKeyCodeCommand]

## voiceOverKeyCodeCommands.toggleGroupingItemsWithinTable {#key-code-commands-togglegroupingitemswithintable}

Turn the grouping of items within a table on or off.

Equivalent of executing `VO-=`.

**Type:** [MacOSKeyCodeCommand]

[macoskeycodecommand]: ./class-macos-key-code-command "MacOSKeyCodeCommand"
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "object"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String "string"
[record]: https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type "Record"
