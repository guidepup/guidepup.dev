---
title: "NVDAKeyCodeCommands"
---

**Extends:** [object]

**Implements:** [Record]&#60;[string], [WindowsKeyCodeCommand]&#62;

[Key code commands for the NVDA screen reader](https://www.nvaccess.org/files/nvda/releases/2021.2/documentation/keyCommands.html) on Windows.

Use with the NVDA `perform` to invoke the key code command:

```ts
import { nvda } from "@guidepup/guidepup";

(async () => {
  // Start NVDA.
  await nvda.start();

  // Move to the next item.
  await nvda.perform(nvda.keyboardCommands.moveToNext);

  // Stop NVDA.
  await nvda.stop();
})();
```

**Contents:**

- [NVDAKeyCodeCommands.start](./class-nvda-key-code-commands#key-code-commands-start)
- [NVDAKeyCodeCommands.stopSpeech](./class-nvda-key-code-commands#key-code-commands-stopspeech)
- [NVDAKeyCodeCommands.pauseSpeech](./class-nvda-key-code-commands#key-code-commands-pausespeech)
- [NVDAKeyCodeCommands.openUtilityMenu](./class-nvda-key-code-commands#key-code-commands-openutilitymenu)
- [NVDAKeyCodeCommands.toggleSpeechMode](./class-nvda-key-code-commands#key-code-commands-togglespeechmode)
- [NVDAKeyCodeCommands.startKeyboardHelp](./class-nvda-key-code-commands#key-code-commands-startkeyboardhelp)
- [NVDAKeyCodeCommands.stop](./class-nvda-key-code-commands#key-code-commands-stop)
- [NVDAKeyCodeCommands.ignoreNextKeyCombination](./class-nvda-key-code-commands#key-code-commands-ignorenextkeycombination)
- [NVDAKeyCodeCommands.toggleSleepMode](./class-nvda-key-code-commands#key-code-commands-togglesleepmode)
- [NVDAKeyCodeCommands.reportDateTime](./class-nvda-key-code-commands#key-code-commands-reportdatetime)
- [NVDAKeyCodeCommands.reportBatteryStatus](./class-nvda-key-code-commands#key-code-commands-reportbatterystatus)
- [NVDAKeyCodeCommands.reportClipboardText](./class-nvda-key-code-commands#key-code-commands-reportclipboardtext)
- [NVDAKeyCodeCommands.reportCurrentFocus](./class-nvda-key-code-commands#key-code-commands-reportcurrentfocus)
- [NVDAKeyCodeCommands.reportTitle](./class-nvda-key-code-commands#key-code-commands-reporttitle)
- [NVDAKeyCodeCommands.readActiveWindow](./class-nvda-key-code-commands#key-code-commands-readactivewindow)
- [NVDAKeyCodeCommands.reportStatusBar](./class-nvda-key-code-commands#key-code-commands-reportstatusbar)
- [NVDAKeyCodeCommands.sayAll](./class-nvda-key-code-commands#key-code-commands-sayall)
- [NVDAKeyCodeCommands.readLine](./class-nvda-key-code-commands#key-code-commands-readline)
- [NVDAKeyCodeCommands.readCurrentSelection](./class-nvda-key-code-commands#key-code-commands-readcurrentselection)
- [NVDAKeyCodeCommands.reportTextFormatting](./class-nvda-key-code-commands#key-code-commands-reporttextformatting)
- [NVDAKeyCodeCommands.readNextSentence](./class-nvda-key-code-commands#key-code-commands-readnextsentence)
- [NVDAKeyCodeCommands.readPreviousSentence](./class-nvda-key-code-commands#key-code-commands-readprevioussentence)
- [NVDAKeyCodeCommands.moveToPreviousColumn](./class-nvda-key-code-commands#key-code-commands-movetopreviouscolumn)
- [NVDAKeyCodeCommands.moveToNextColumn](./class-nvda-key-code-commands#key-code-commands-movetonextcolumn)
- [NVDAKeyCodeCommands.moveToPreviousRow](./class-nvda-key-code-commands#key-code-commands-movetopreviousrow)
- [NVDAKeyCodeCommands.moveToNextRow](./class-nvda-key-code-commands#key-code-commands-movetonextrow)
- [NVDAKeyCodeCommands.reportCurrentObject](./class-nvda-key-code-commands#key-code-commands-reportcurrentobject)
- [NVDAKeyCodeCommands.moveToContainingObject](./class-nvda-key-code-commands#key-code-commands-movetocontainingobject)
- [NVDAKeyCodeCommands.moveToPreviousObject](./class-nvda-key-code-commands#key-code-commands-movetopreviousobject)
- [NVDAKeyCodeCommands.moveToNextObject](./class-nvda-key-code-commands#key-code-commands-movetonextobject)
- [NVDAKeyCodeCommands.moveToFirstContainedObject](./class-nvda-key-code-commands#key-code-commands-movetofirstcontainedobject)
- [NVDAKeyCodeCommands.moveToFocusObject](./class-nvda-key-code-commands#key-code-commands-movetofocusobject)
- [NVDAKeyCodeCommands.activateCurrentNavigatorObject](./class-nvda-key-code-commands#key-code-commands-activatecurrentnavigatorobject)
- [NVDAKeyCodeCommands.moveToReviewPosition](./class-nvda-key-code-commands#key-code-commands-movetoreviewposition)
- [NVDAKeyCodeCommands.reportReviewPosition](./class-nvda-key-code-commands#key-code-commands-reportreviewposition)
- [NVDAKeyCodeCommands.moveToTopLineInReview](./class-nvda-key-code-commands#key-code-commands-movetotoplineinreview)
- [NVDAKeyCodeCommands.moveToPreviousLineInReview](./class-nvda-key-code-commands#key-code-commands-movetopreviouslineinreview)
- [NVDAKeyCodeCommands.reportCurrentLineInReview](./class-nvda-key-code-commands#key-code-commands-reportcurrentlineinreview)
- [NVDAKeyCodeCommands.moveToNextLineInReview](./class-nvda-key-code-commands#key-code-commands-movetonextlineinreview)
- [NVDAKeyCodeCommands.moveToBottomLineInReview](./class-nvda-key-code-commands#key-code-commands-movetobottomlineinreview)
- [NVDAKeyCodeCommands.moveToPreviousWordInReview](./class-nvda-key-code-commands#key-code-commands-movetopreviouswordinreview)
- [NVDAKeyCodeCommands.reportCurrentWordInReview](./class-nvda-key-code-commands#key-code-commands-reportcurrentwordinreview)
- [NVDAKeyCodeCommands.moveToNextWordInReview](./class-nvda-key-code-commands#key-code-commands-movetonextwordinreview)
- [NVDAKeyCodeCommands.moveToStartOfLineInReview](./class-nvda-key-code-commands#key-code-commands-movetostartoflineinreview)
- [NVDAKeyCodeCommands.moveToPreviousCharacterInReview](./class-nvda-key-code-commands#key-code-commands-movetopreviouscharacterinreview)
- [NVDAKeyCodeCommands.reportCurrentCharacterInReview](./class-nvda-key-code-commands#key-code-commands-reportcurrentcharacterinreview)
- [NVDAKeyCodeCommands.moveToNextCharacterInReview](./class-nvda-key-code-commands#key-code-commands-movetonextcharacterinreview)
- [NVDAKeyCodeCommands.moveToEndOfLineInReview](./class-nvda-key-code-commands#key-code-commands-movetoendoflineinreview)
- [NVDAKeyCodeCommands.sayAllWithReview](./class-nvda-key-code-commands#key-code-commands-sayallwithreview)
- [NVDAKeyCodeCommands.selectThenCopyFromReviewCursor](./class-nvda-key-code-commands#key-code-commands-selectthencopyfromreviewcursor)
- [NVDAKeyCodeCommands.selectThenCopyToReviewCursor](./class-nvda-key-code-commands#key-code-commands-selectthencopytoreviewcursor)
- [NVDAKeyCodeCommands.moveToMarkedStartForCopyInReview](./class-nvda-key-code-commands#key-code-commands-movetomarkedstartforcopyinreview)
- [NVDAKeyCodeCommands.reportTextFormattingInReview](./class-nvda-key-code-commands#key-code-commands-reporttextformattinginreview)
- [NVDAKeyCodeCommands.switchToNextReviewMode](./class-nvda-key-code-commands#key-code-commands-switchtonextreviewmode)
- [NVDAKeyCodeCommands.switchToPreviousReviewMode](./class-nvda-key-code-commands#key-code-commands-switchtopreviousreviewmode)
- [NVDAKeyCodeCommands.leftMouseClick](./class-nvda-key-code-commands#key-code-commands-leftmouseclick)
- [NVDAKeyCodeCommands.leftMouseButtonLock](./class-nvda-key-code-commands#key-code-commands-leftmousebuttonlock)
- [NVDAKeyCodeCommands.rightMouseClick](./class-nvda-key-code-commands#key-code-commands-rightmouseclick)
- [NVDAKeyCodeCommands.rightMouseButtonLock](./class-nvda-key-code-commands#key-code-commands-rightmousebuttonlock)
- [NVDAKeyCodeCommands.moveMouseToCurrentNavigatorObject](./class-nvda-key-code-commands#key-code-commands-movemousetocurrentnavigatorobject)
- [NVDAKeyCodeCommands.navigateToObjectUnderMouse](./class-nvda-key-code-commands#key-code-commands-navigatetoobjectundermouse)
- [NVDAKeyCodeCommands.toggleBetweenBrowseAndFocusMode](./class-nvda-key-code-commands#key-code-commands-togglebetweenbrowseandfocusmode)
- [NVDAKeyCodeCommands.exitFocusMode](./class-nvda-key-code-commands#key-code-commands-exitfocusmode)
- [NVDAKeyCodeCommands.refreshBrowseDocument](./class-nvda-key-code-commands#key-code-commands-refreshbrowsedocument)
- [NVDAKeyCodeCommands.find](./class-nvda-key-code-commands#key-code-commands-find)
- [NVDAKeyCodeCommands.findNext](./class-nvda-key-code-commands#key-code-commands-findnext)
- [NVDAKeyCodeCommands.findPrevious](./class-nvda-key-code-commands#key-code-commands-findprevious)
- [NVDAKeyCodeCommands.openLongDescription](./class-nvda-key-code-commands#key-code-commands-openlongdescription)
- [NVDAKeyCodeCommands.moveToNextHeading](./class-nvda-key-code-commands#key-code-commands-movetonextheading)
- [NVDAKeyCodeCommands.moveToPreviousHeading](./class-nvda-key-code-commands#key-code-commands-movetopreviousheading)
- [NVDAKeyCodeCommands.moveToNextList](./class-nvda-key-code-commands#key-code-commands-movetonextlist)
- [NVDAKeyCodeCommands.moveToPreviousList](./class-nvda-key-code-commands#key-code-commands-movetopreviouslist)
- [NVDAKeyCodeCommands.moveToNextListItem](./class-nvda-key-code-commands#key-code-commands-movetonextlistitem)
- [NVDAKeyCodeCommands.moveToPreviousListItem](./class-nvda-key-code-commands#key-code-commands-movetopreviouslistitem)
- [NVDAKeyCodeCommands.moveToNextTable](./class-nvda-key-code-commands#key-code-commands-movetonexttable)
- [NVDAKeyCodeCommands.moveToPreviousTable](./class-nvda-key-code-commands#key-code-commands-movetoprevioustable)
- [NVDAKeyCodeCommands.moveToNextLink](./class-nvda-key-code-commands#key-code-commands-movetonextlink)
- [NVDAKeyCodeCommands.moveToPreviousLink](./class-nvda-key-code-commands#key-code-commands-movetopreviouslink)
- [NVDAKeyCodeCommands.moveToNextNonLinkedText](./class-nvda-key-code-commands#key-code-commands-movetonextnonlinkedtext)
- [NVDAKeyCodeCommands.moveToPreviousNonLinkedText](./class-nvda-key-code-commands#key-code-commands-movetopreviousnonlinkedtext)
- [NVDAKeyCodeCommands.moveToNextFormField](./class-nvda-key-code-commands#key-code-commands-movetonextformfield)
- [NVDAKeyCodeCommands.moveToPreviousFormField](./class-nvda-key-code-commands#key-code-commands-movetopreviousformfield)
- [NVDAKeyCodeCommands.moveToNextUnvisitedLink](./class-nvda-key-code-commands#key-code-commands-movetonextunvisitedlink)
- [NVDAKeyCodeCommands.moveToPreviousUnvisitedLink](./class-nvda-key-code-commands#key-code-commands-movetopreviousunvisitedlink)
- [NVDAKeyCodeCommands.moveToNextVisitedLink](./class-nvda-key-code-commands#key-code-commands-movetonextvisitedlink)
- [NVDAKeyCodeCommands.moveToPreviousVisitedLink](./class-nvda-key-code-commands#key-code-commands-movetopreviousvisitedlink)
- [NVDAKeyCodeCommands.moveToNextEditField](./class-nvda-key-code-commands#key-code-commands-movetonexteditfield)
- [NVDAKeyCodeCommands.moveToPreviousEditField](./class-nvda-key-code-commands#key-code-commands-movetopreviouseditfield)
- [NVDAKeyCodeCommands.moveToNextButton](./class-nvda-key-code-commands#key-code-commands-movetonextbutton)
- [NVDAKeyCodeCommands.moveToPreviousButton](./class-nvda-key-code-commands#key-code-commands-movetopreviousbutton)
- [NVDAKeyCodeCommands.moveToNextCheckbox](./class-nvda-key-code-commands#key-code-commands-movetonextcheckbox)
- [NVDAKeyCodeCommands.moveToPreviousCheckbox](./class-nvda-key-code-commands#key-code-commands-movetopreviouscheckbox)
- [NVDAKeyCodeCommands.moveToNextComboBox](./class-nvda-key-code-commands#key-code-commands-movetonextcombobox)
- [NVDAKeyCodeCommands.moveToPreviousComboBox](./class-nvda-key-code-commands#key-code-commands-movetopreviouscombobox)
- [NVDAKeyCodeCommands.moveToNextRadioButton](./class-nvda-key-code-commands#key-code-commands-movetonextradiobutton)
- [NVDAKeyCodeCommands.moveToPreviousRadioButton](./class-nvda-key-code-commands#key-code-commands-movetopreviousradiobutton)
- [NVDAKeyCodeCommands.moveToNextBlockQuote](./class-nvda-key-code-commands#key-code-commands-movetonextblockquote)
- [NVDAKeyCodeCommands.moveToPreviousBlockQuote](./class-nvda-key-code-commands#key-code-commands-movetopreviousblockquote)
- [NVDAKeyCodeCommands.moveToNextSeparator](./class-nvda-key-code-commands#key-code-commands-movetonextseparator)
- [NVDAKeyCodeCommands.moveToPreviousSeparator](./class-nvda-key-code-commands#key-code-commands-movetopreviousseparator)
- [NVDAKeyCodeCommands.moveToNextFrame](./class-nvda-key-code-commands#key-code-commands-movetonextframe)
- [NVDAKeyCodeCommands.moveToPreviousFrame](./class-nvda-key-code-commands#key-code-commands-movetopreviousframe)
- [NVDAKeyCodeCommands.moveToNextGraphic](./class-nvda-key-code-commands#key-code-commands-movetonextgraphic)
- [NVDAKeyCodeCommands.moveToPreviousGraphic](./class-nvda-key-code-commands#key-code-commands-movetopreviousgraphic)
- [NVDAKeyCodeCommands.moveToNextLandmark](./class-nvda-key-code-commands#key-code-commands-movetonextlandmark)
- [NVDAKeyCodeCommands.moveToPreviousLandmark](./class-nvda-key-code-commands#key-code-commands-movetopreviouslandmark)
- [NVDAKeyCodeCommands.moveToNextEmbeddedObject](./class-nvda-key-code-commands#key-code-commands-movetonextembeddedobject)
- [NVDAKeyCodeCommands.moveToPreviousEmbeddedObject](./class-nvda-key-code-commands#key-code-commands-movetopreviousembeddedobject)
- [NVDAKeyCodeCommands.moveToNextHeadingLevel1](./class-nvda-key-code-commands#key-code-commands-movetonextheadinglevel1)
- [NVDAKeyCodeCommands.moveToPreviousHeadingLevel1](./class-nvda-key-code-commands#key-code-commands-movetopreviousheadinglevel1)
- [NVDAKeyCodeCommands.moveToNextHeadingLevel2](./class-nvda-key-code-commands#key-code-commands-movetonextheadinglevel2)
- [NVDAKeyCodeCommands.moveToPreviousHeadingLevel2](./class-nvda-key-code-commands#key-code-commands-movetopreviousheadinglevel2)
- [NVDAKeyCodeCommands.moveToNextHeadingLevel3](./class-nvda-key-code-commands#key-code-commands-movetonextheadinglevel3)
- [NVDAKeyCodeCommands.moveToPreviousHeadingLevel3](./class-nvda-key-code-commands#key-code-commands-movetopreviousheadinglevel3)
- [NVDAKeyCodeCommands.moveToNextHeadingLevel4](./class-nvda-key-code-commands#key-code-commands-movetonextheadinglevel4)
- [NVDAKeyCodeCommands.moveToPreviousHeadingLevel4](./class-nvda-key-code-commands#key-code-commands-movetopreviousheadinglevel4)
- [NVDAKeyCodeCommands.moveToNextHeadingLevel5](./class-nvda-key-code-commands#key-code-commands-movetonextheadinglevel5)
- [NVDAKeyCodeCommands.moveToPreviousHeadingLevel5](./class-nvda-key-code-commands#key-code-commands-movetopreviousheadinglevel5)
- [NVDAKeyCodeCommands.moveToNextHeadingLevel6](./class-nvda-key-code-commands#key-code-commands-movetonextheadinglevel6)
- [NVDAKeyCodeCommands.moveToPreviousHeadingLevel6](./class-nvda-key-code-commands#key-code-commands-movetopreviousheadinglevel6)
- [NVDAKeyCodeCommands.moveToNextAnnotation](./class-nvda-key-code-commands#key-code-commands-movetonextannotation)
- [NVDAKeyCodeCommands.moveToPreviousAnnotation](./class-nvda-key-code-commands#key-code-commands-movetopreviousannotation)
- [NVDAKeyCodeCommands.moveToNextSpellingError](./class-nvda-key-code-commands#key-code-commands-movetonextspellingerror)
- [NVDAKeyCodeCommands.moveToPreviousSpellingError](./class-nvda-key-code-commands#key-code-commands-movetopreviousspellingerror)
- [NVDAKeyCodeCommands.moveToStartOfContainer](./class-nvda-key-code-commands#key-code-commands-movetostartofcontainer)
- [NVDAKeyCodeCommands.movePastEndOfContainer](./class-nvda-key-code-commands#key-code-commands-movepastendofcontainer)
- [NVDAKeyCodeCommands.toggleSingleLetterNavigation](./class-nvda-key-code-commands#key-code-commands-togglesingleletternavigation)
- [NVDAKeyCodeCommands.browseModeElementsList](./class-nvda-key-code-commands#key-code-commands-browsemodeelementslist)
- [NVDAKeyCodeCommands.moveToContainingBrowseModeDocument](./class-nvda-key-code-commands#key-code-commands-movetocontainingbrowsemodedocument)
- [NVDAKeyCodeCommands.interactWithMathContent](./class-nvda-key-code-commands#key-code-commands-interactwithmathcontent)
- [NVDAKeyCodeCommands.openSpeechSettings](./class-nvda-key-code-commands#key-code-commands-openspeechsettings)
- [NVDAKeyCodeCommands.punctuationLevel](./class-nvda-key-code-commands#key-code-commands-punctuationlevel)
- [NVDAKeyCodeCommands.selectSynthesizer](./class-nvda-key-code-commands#key-code-commands-selectsynthesizer)
- [NVDAKeyCodeCommands.audioDuckingMode](./class-nvda-key-code-commands#key-code-commands-audioduckingmode)
- [NVDAKeyCodeCommands.moveToNextSynthSetting](./class-nvda-key-code-commands#key-code-commands-movetonextsynthsetting)
- [NVDAKeyCodeCommands.moveToPreviousSynthSetting](./class-nvda-key-code-commands#key-code-commands-movetoprevioussynthsetting)
- [NVDAKeyCodeCommands.incrementCurrentSynthSetting](./class-nvda-key-code-commands#key-code-commands-incrementcurrentsynthsetting)
- [NVDAKeyCodeCommands.decrementCurrentSynthSetting](./class-nvda-key-code-commands#key-code-commands-decrementcurrentsynthsetting)
- [NVDAKeyCodeCommands.tetherBraille](./class-nvda-key-code-commands#key-code-commands-tetherbraille)
- [NVDAKeyCodeCommands.openKeyboardSettings](./class-nvda-key-code-commands#key-code-commands-openkeyboardsettings)
- [NVDAKeyCodeCommands.speakTypedCharacters](./class-nvda-key-code-commands#key-code-commands-speaktypedcharacters)
- [NVDAKeyCodeCommands.speakTypedWords](./class-nvda-key-code-commands#key-code-commands-speaktypedwords)
- [NVDAKeyCodeCommands.speakCommandKeys](./class-nvda-key-code-commands#key-code-commands-speakcommandkeys)
- [NVDAKeyCodeCommands.openMouseSettings](./class-nvda-key-code-commands#key-code-commands-openmousesettings)
- [NVDAKeyCodeCommands.enableMouseTracking](./class-nvda-key-code-commands#key-code-commands-enablemousetracking)
- [NVDAKeyCodeCommands.reviewCursorFollowSystemFocus](./class-nvda-key-code-commands#key-code-commands-reviewcursorfollowsystemfocus)
- [NVDAKeyCodeCommands.reviewCursorFollowSystemCaret](./class-nvda-key-code-commands#key-code-commands-reviewcursorfollowsystemcaret)
- [NVDAKeyCodeCommands.openObjectPresentationSettings](./class-nvda-key-code-commands#key-code-commands-openobjectpresentationsettings)
- [NVDAKeyCodeCommands.progressBarOutput](./class-nvda-key-code-commands#key-code-commands-progressbaroutput)
- [NVDAKeyCodeCommands.reportDynamicContentChanges](./class-nvda-key-code-commands#key-code-commands-reportdynamiccontentchanges)
- [NVDAKeyCodeCommands.openBrowseModeSettings](./class-nvda-key-code-commands#key-code-commands-openbrowsemodesettings)
- [NVDAKeyCodeCommands.useScreenLayout](./class-nvda-key-code-commands#key-code-commands-usescreenlayout)
- [NVDAKeyCodeCommands.saveConfiguration](./class-nvda-key-code-commands#key-code-commands-saveconfiguration)
- [NVDAKeyCodeCommands.revertConfiguration](./class-nvda-key-code-commands#key-code-commands-revertconfiguration)
- [NVDAKeyCodeCommands.openConfigurationProfilesDialog](./class-nvda-key-code-commands#key-code-commands-openconfigurationprofilesdialog)
- [NVDAKeyCodeCommands.moveToPrevious](./class-nvda-key-code-commands#key-code-commands-movetoprevious)
- [NVDAKeyCodeCommands.moveToNext](./class-nvda-key-code-commands#key-code-commands-movetonext)
- [NVDAKeyCodeCommands.readNextFocusableItem](./class-nvda-key-code-commands#key-code-commands-readnextfocusableitem)
- [NVDAKeyCodeCommands.performDefaultActionForItem](./class-nvda-key-code-commands#key-code-commands-performdefaultactionforitem)
- [NVDAKeyCodeCommands.activate](./class-nvda-key-code-commands#key-code-commands-activate)

## NVDAKeyCodeCommands.start {#key-code-commands-start}

Turn NVDA on.

Equivalent of executing `Control-Alt-N`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.stopSpeech {#key-code-commands-stopspeech}

Instantly stops speaking.

Equivalent of executing `Control`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.pauseSpeech {#key-code-commands-pausespeech}

Instantly pauses speech. Pressing it again will continue speaking where it left off (if pausing is supported by the current synthesizer).

Equivalent of executing `Shift`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.openUtilityMenu {#key-code-commands-openutilitymenu}

Pops up the NVDA menu to allow you to access preferences, tools, help, etc..

Equivalent of executing `NVDA-N`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.toggleSpeechMode {#key-code-commands-togglespeechmode}

Toggles speech mode between speech, beeps and off..

Equivalent of executing `NVDA-S`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.startKeyboardHelp {#key-code-commands-startkeyboardhelp}

Pressing any key in this mode will report the key, and the description of any NVDA command associated with it.

Equivalent of executing `NVDA-1`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.stop {#key-code-commands-stop}

Turn NVDA off.

Equivalent of executing `NVDA-Q`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.ignoreNextKeyCombination {#key-code-commands-ignorenextkeycombination}

Tells NVDA to pass the next key press straight through to the active application - even if it is normally treated as an NVDA key command.

Equivalent of executing `NVDA-F2`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.toggleSleepMode {#key-code-commands-togglesleepmode}

sleep mode disables all NVDA commands and speech/braille output for the current application. This is most useful in applications that provide their own speech or screen reading features. Press this command again to disable sleep mode - note that NVDA will only retain the Sleep Mode setting until it is restarted..

Equivalent of executing `NVDA-Shift-S`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.reportDateTime {#key-code-commands-reportdatetime}

Pressing once reports the current time, pressing twice reports the date.

Equivalent of executing `NVDA-F12`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.reportBatteryStatus {#key-code-commands-reportbatterystatus}

Reports the battery status i.e. whether AC power is in use or the current charge percentage..

Equivalent of executing `NVDA-Shift-B`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.reportClipboardText {#key-code-commands-reportclipboardtext}

Reports the Text on the clipboard if there is any..

Equivalent of executing `NVDA-C`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.reportCurrentFocus {#key-code-commands-reportcurrentfocus}

Announces the current object or control that has the System focus. Pressing twice will spell the information.

Equivalent of executing `NVDA-Tab`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.reportTitle {#key-code-commands-reporttitle}

Reports the title of the currently active window. Pressing twice will spell the information. Pressing three times will copy it to the clipboard.

Equivalent of executing `NVDA-T`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.readActiveWindow {#key-code-commands-readactivewindow}

Reads all the controls in the currently active window (useful for dialogs).

Equivalent of executing `NVDA-B`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.reportStatusBar {#key-code-commands-reportstatusbar}

Reports the Status Bar if NVDA finds one. It also moves the navigator object to this location. Pressing twice will spell the information. Pressing three times will copy it to the clipboard.

Equivalent of executing `NVDA-End`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.sayAll {#key-code-commands-sayall}

Starts reading from the current position of the system caret, moving it along as it goes.

Equivalent of executing `NVDA-Down Arrow`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.readLine {#key-code-commands-readline}

Reads the line where the system caret is currently situated. Pressing twice spells the line. Pressing three times spells the line using character descriptions..

Equivalent of executing `NVDA-Up Arrow`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.readCurrentSelection {#key-code-commands-readcurrentselection}

Reads any currently selected text.

Equivalent of executing `NVDA-Shift-Up Arrow`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.reportTextFormatting {#key-code-commands-reporttextformatting}

Reports the formatting of the text where the caret is currently situated. Pressing twice shows the information in browse mode.

Equivalent of executing `NVDA-F`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.readNextSentence {#key-code-commands-readnextsentence}

Moves the caret to the next sentence and announces it. (only supported in Microsoft Word and Outlook).

Equivalent of executing `Alt-Down Arrow`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.readPreviousSentence {#key-code-commands-readprevioussentence}

Moves the caret to the previous sentence and announces it. (only supported in Microsoft Word and Outlook).

Equivalent of executing `Alt-Up Arrow`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToPreviousColumn {#key-code-commands-movetopreviouscolumn}

When within a table, moves the system caret to the previous column (staying in the same row).

Equivalent of executing `Control-Alt-Left Arrow`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToNextColumn {#key-code-commands-movetonextcolumn}

When within a table, moves the system caret to the next column (staying in the same row).

Equivalent of executing `Control-Alt-Right Arrow`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToPreviousRow {#key-code-commands-movetopreviousrow}

When within a table, moves the system caret to the previous row (staying in the same column).

Equivalent of executing `Control-Alt-Up Arrow`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToNextRow {#key-code-commands-movetonextrow}

When within a table, moves the system caret to the next row (staying in the same column).

Equivalent of executing `Control-Alt-Down Arrow`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.reportCurrentObject {#key-code-commands-reportcurrentobject}

Reports the current navigator object. Pressing twice spells the information, and pressing 3 times copies this object's name and value to the clipboard..

Equivalent of executing `NVDA-NumPad5`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToContainingObject {#key-code-commands-movetocontainingobject}

Moves to the object containing the current navigator object.

Equivalent of executing `NVDA-NumPad8`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToPreviousObject {#key-code-commands-movetopreviousobject}

Moves to the object before the current navigator object.

Equivalent of executing `NVDA-NumPad4`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToNextObject {#key-code-commands-movetonextobject}

Moves to the object after the current navigator object.

Equivalent of executing `NVDA-NumPad6`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToFirstContainedObject {#key-code-commands-movetofirstcontainedobject}

Moves to the first object contained by the current navigator object.

Equivalent of executing `NVDA-NumPad2`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToFocusObject {#key-code-commands-movetofocusobject}

Moves to the object that currently has the system focus, and also places the review cursor at the position of the System caret, if it is showing.

Equivalent of executing `NVDA-NumPadMinus`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.activateCurrentNavigatorObject {#key-code-commands-activatecurrentnavigatorobject}

Activates the current navigator object (similar to clicking with the mouse or pressing space when it has the system focus).

Equivalent of executing `NVDA-NumPadEnter`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToReviewPosition {#key-code-commands-movetoreviewposition}

pressed once Moves the System focus to the current navigator object, pressed twice moves the system caret to the position of the review cursor.

Equivalent of executing `NVDA-Shift-NumPadMinus`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.reportReviewPosition {#key-code-commands-reportreviewposition}

Reports information about the location of the text or object at the review cursor. For example, this might include the percentage through the document, the distance from the edge of the page or the exact screen position. Pressing twice may provide further detail..

Equivalent of executing `NVDA-NumPadDelete`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToTopLineInReview {#key-code-commands-movetotoplineinreview}

Moves the review cursor to the top line of the text.

Equivalent of executing `Shift-NumPad7`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToPreviousLineInReview {#key-code-commands-movetopreviouslineinreview}

Moves the review cursor to the previous line of text.

Equivalent of executing `NumPad7`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.reportCurrentLineInReview {#key-code-commands-reportcurrentlineinreview}

Announces the current line of text where the review cursor is positioned. Pressing twice spells the line. Pressing three times spells the line using character descriptions..

Equivalent of executing `NumPad8`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToNextLineInReview {#key-code-commands-movetonextlineinreview}

Move the review cursor to the next line of text.

Equivalent of executing `NumPad9`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToBottomLineInReview {#key-code-commands-movetobottomlineinreview}

Moves the review cursor to the bottom line of text.

Equivalent of executing `Shift-NumPad9`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToPreviousWordInReview {#key-code-commands-movetopreviouswordinreview}

Moves the review cursor to the previous word in the text.

Equivalent of executing `NumPad4`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.reportCurrentWordInReview {#key-code-commands-reportcurrentwordinreview}

Announces the current word in the text where the review cursor is positioned. Pressing twice spells the word. Pressing three times spells the word using character descriptions..

Equivalent of executing `NumPad5`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToNextWordInReview {#key-code-commands-movetonextwordinreview}

Move the review cursor to the next word in the text.

Equivalent of executing `NumPad6`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToStartOfLineInReview {#key-code-commands-movetostartoflineinreview}

Moves the review cursor to the start of the current line in the text.

Equivalent of executing `Shift-NumPad1`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToPreviousCharacterInReview {#key-code-commands-movetopreviouscharacterinreview}

Moves the review cursor to the previous character on the current line in the text.

Equivalent of executing `NumPad1`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.reportCurrentCharacterInReview {#key-code-commands-reportcurrentcharacterinreview}

Announces the current character on the line of text where the review cursor is positioned. Pressing twice reports a description or example of that character. Pressing three times reports the numeric value of the character in decimal and hexadecimal..

Equivalent of executing `NumPad2`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToNextCharacterInReview {#key-code-commands-movetonextcharacterinreview}

Move the review cursor to the next character on the current line of text.

Equivalent of executing `NumPad3`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToEndOfLineInReview {#key-code-commands-movetoendoflineinreview}

Moves the review cursor to the end of the current line of text.

Equivalent of executing `Shift-NumPad3`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.sayAllWithReview {#key-code-commands-sayallwithreview}

Reads from the current position of the review cursor, moving it as it goes.

Equivalent of executing `NumPadPlus`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.selectThenCopyFromReviewCursor {#key-code-commands-selectthencopyfromreviewcursor}

Starts the select then copy process from the current position of the review cursor. The actual action is not performed until you tell NVDA where the end of the text range is.

Equivalent of executing `NVDA-F9`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.selectThenCopyToReviewCursor {#key-code-commands-selectthencopytoreviewcursor}

On the first press, text is selected from the position previously set as start marker up to and including the review cursor's current position. If the system caret can reach the text, it will be moved to the selected text. After pressing this key stroke a second time, the text will be copied to the Windows clipboard.

Equivalent of executing `NVDA-F10`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToMarkedStartForCopyInReview {#key-code-commands-movetomarkedstartforcopyinreview}

Moves the review cursor to the position previously set start marker for copy.

Equivalent of executing `NVDA-Shift-F9`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.reportTextFormattingInReview {#key-code-commands-reporttextformattinginreview}

Reports the formatting of the text where the review cursor is currently situated. Pressing twice shows the information in browse mode.

Equivalent of executing `NVDA-Shift-F`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.switchToNextReviewMode {#key-code-commands-switchtonextreviewmode}

switches to the next available review mode.

Equivalent of executing `NVDA-NumPad7`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.switchToPreviousReviewMode {#key-code-commands-switchtopreviousreviewmode}

switches to the previous available review mode.

Equivalent of executing `NVDA-NumPad1`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.leftMouseClick {#key-code-commands-leftmouseclick}

Clicks the left mouse button once. The common double click can be performed by pressing this key twice in quick succession.

Equivalent of executing `NumPadDivide`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.leftMouseButtonLock {#key-code-commands-leftmousebuttonlock}

Locks the left mouse button down. Press again to release it. To drag the mouse, press this key to lock the left button down and then move the mouse either physically or use one of the other mouse routing commands.

Equivalent of executing `Shift-NumPadDivide`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.rightMouseClick {#key-code-commands-rightmouseclick}

Clicks the right mouse button once, mostly used to open context menu at the location of the mouse..

Equivalent of executing `NumPadMultiply`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.rightMouseButtonLock {#key-code-commands-rightmousebuttonlock}

Locks the right mouse button down. Press again to release it. To drag the mouse, press this key to lock the right button down and then move the mouse either physically or use one of the other mouse routing commands.

Equivalent of executing `Shift-NumPadMultiply`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveMouseToCurrentNavigatorObject {#key-code-commands-movemousetocurrentnavigatorobject}

Moves the mouse to the location of the current navigator object and review cursor.

Equivalent of executing `NVDA-NumPadDivide`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.navigateToObjectUnderMouse {#key-code-commands-navigatetoobjectundermouse}

Set the navigator object to the object located at the position of the mouse.

Equivalent of executing `NVDA-NumPadMultiply`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.toggleBetweenBrowseAndFocusMode {#key-code-commands-togglebetweenbrowseandfocusmode}

Toggles between focus mode and browse mode.

Equivalent of executing `NVDA-Space bar`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.exitFocusMode {#key-code-commands-exitfocusmode}

Switches back to browse mode if focus mode was previously switched to automatically.

Equivalent of executing `Escape`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.refreshBrowseDocument {#key-code-commands-refreshbrowsedocument}

Reloads the current document content (useful if certain content seems to be missing from the document. Not available in Microsoft Word and Outlook.).

Equivalent of executing `NVDA-F5`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.find {#key-code-commands-find}

Pops up a dialog in which you can type some text to find in the current document. See searching for text for more information..

Equivalent of executing `NVDA-Control-F`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.findNext {#key-code-commands-findnext}

Finds the next occurrence of the text in the document that you previously searched for.

Equivalent of executing `NVDA-F3`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.findPrevious {#key-code-commands-findprevious}

Finds the previous occurrence of the text in the document you previously searched for.

Equivalent of executing `NVDA-Shift-F3`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.openLongDescription {#key-code-commands-openlongdescription}

Opens a new window containing a long description for the element you are on if it has one..

Equivalent of executing `NVDA-D`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToNextHeading {#key-code-commands-movetonextheading}

Move to next heading.

Equivalent of executing `H`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToPreviousHeading {#key-code-commands-movetopreviousheading}

Move to previous heading.

Equivalent of executing `Shift-H`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToNextList {#key-code-commands-movetonextlist}

Move to next list.

Equivalent of executing `L`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToPreviousList {#key-code-commands-movetopreviouslist}

Move to previous list.

Equivalent of executing `Shift-L`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToNextListItem {#key-code-commands-movetonextlistitem}

Move to next list item.

Equivalent of executing `I`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToPreviousListItem {#key-code-commands-movetopreviouslistitem}

Move to previous list item.

Equivalent of executing `Shift-I`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToNextTable {#key-code-commands-movetonexttable}

Move to next table.

Equivalent of executing `T`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToPreviousTable {#key-code-commands-movetoprevioustable}

Move to previous table.

Equivalent of executing `Shift-T`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToNextLink {#key-code-commands-movetonextlink}

Move to next link.

Equivalent of executing `K`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToPreviousLink {#key-code-commands-movetopreviouslink}

Move to previous link.

Equivalent of executing `Shift-K`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToNextNonLinkedText {#key-code-commands-movetonextnonlinkedtext}

Move to next non linked text.

Equivalent of executing `N`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToPreviousNonLinkedText {#key-code-commands-movetopreviousnonlinkedtext}

Move to previous non linked text.

Equivalent of executing `Shift-N`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToNextFormField {#key-code-commands-movetonextformfield}

Move to next form field.

Equivalent of executing `F`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToPreviousFormField {#key-code-commands-movetopreviousformfield}

Move to previous form field.

Equivalent of executing `Shift-F`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToNextUnvisitedLink {#key-code-commands-movetonextunvisitedlink}

Move to next unvisited link.

Equivalent of executing `U`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToPreviousUnvisitedLink {#key-code-commands-movetopreviousunvisitedlink}

Move to previous unvisited link.

Equivalent of executing `Shift-U`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToNextVisitedLink {#key-code-commands-movetonextvisitedlink}

Move to next visited link.

Equivalent of executing `V`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToPreviousVisitedLink {#key-code-commands-movetopreviousvisitedlink}

Move to previous visited link.

Equivalent of executing `Shift-V`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToNextEditField {#key-code-commands-movetonexteditfield}

Move to next edit field.

Equivalent of executing `E`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToPreviousEditField {#key-code-commands-movetopreviouseditfield}

Move to previous edit field.

Equivalent of executing `Shift-E`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToNextButton {#key-code-commands-movetonextbutton}

Move to next button.

Equivalent of executing `B`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToPreviousButton {#key-code-commands-movetopreviousbutton}

Move to previous button.

Equivalent of executing `Shift-B`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToNextCheckbox {#key-code-commands-movetonextcheckbox}

Move to next checkbox.

Equivalent of executing `X`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToPreviousCheckbox {#key-code-commands-movetopreviouscheckbox}

Move to previous checkbox.

Equivalent of executing `Shift-X`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToNextComboBox {#key-code-commands-movetonextcombobox}

Move to next combo box.

Equivalent of executing `C`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToPreviousComboBox {#key-code-commands-movetopreviouscombobox}

Move to previous combo box.

Equivalent of executing `Shift-C`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToNextRadioButton {#key-code-commands-movetonextradiobutton}

Move to next radio button.

Equivalent of executing `R`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToPreviousRadioButton {#key-code-commands-movetopreviousradiobutton}

Move to previous radio button.

Equivalent of executing `Shift-R`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToNextBlockQuote {#key-code-commands-movetonextblockquote}

Move to next block quote.

Equivalent of executing `Q`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToPreviousBlockQuote {#key-code-commands-movetopreviousblockquote}

Move to previous block quote.

Equivalent of executing `Shift-Q`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToNextSeparator {#key-code-commands-movetonextseparator}

Move to next separator.

Equivalent of executing `S`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToPreviousSeparator {#key-code-commands-movetopreviousseparator}

Move to previous separator.

Equivalent of executing `Shift-S`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToNextFrame {#key-code-commands-movetonextframe}

Move to next frame.

Equivalent of executing `M`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToPreviousFrame {#key-code-commands-movetopreviousframe}

Move to previous frame.

Equivalent of executing `Shift-M`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToNextGraphic {#key-code-commands-movetonextgraphic}

Move to next graphic.

Equivalent of executing `G`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToPreviousGraphic {#key-code-commands-movetopreviousgraphic}

Move to previous graphic.

Equivalent of executing `Shift-G`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToNextLandmark {#key-code-commands-movetonextlandmark}

Move to next landmark.

Equivalent of executing `D`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToPreviousLandmark {#key-code-commands-movetopreviouslandmark}

Move to previous landmark.

Equivalent of executing `Shift-D`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToNextEmbeddedObject {#key-code-commands-movetonextembeddedobject}

Move to next embedded object.

Equivalent of executing `O`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToPreviousEmbeddedObject {#key-code-commands-movetopreviousembeddedobject}

Move to previous embedded object.

Equivalent of executing `Shift-O`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToNextHeadingLevel1 {#key-code-commands-movetonextheadinglevel1}

Move to next heading level 1.

Equivalent of executing `1`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToPreviousHeadingLevel1 {#key-code-commands-movetopreviousheadinglevel1}

Move to previous heading level 1.

Equivalent of executing `Shift-1`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToNextHeadingLevel2 {#key-code-commands-movetonextheadinglevel2}

Move to next heading level 2.

Equivalent of executing `2`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToPreviousHeadingLevel2 {#key-code-commands-movetopreviousheadinglevel2}

Move to previous heading level 2.

Equivalent of executing `Shift-2`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToNextHeadingLevel3 {#key-code-commands-movetonextheadinglevel3}

Move to next heading level 3.

Equivalent of executing `3`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToPreviousHeadingLevel3 {#key-code-commands-movetopreviousheadinglevel3}

Move to previous heading level 3.

Equivalent of executing `Shift-3`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToNextHeadingLevel4 {#key-code-commands-movetonextheadinglevel4}

Move to next heading level 4.

Equivalent of executing `4`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToPreviousHeadingLevel4 {#key-code-commands-movetopreviousheadinglevel4}

Move to previous heading level 4.

Equivalent of executing `Shift-4`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToNextHeadingLevel5 {#key-code-commands-movetonextheadinglevel5}

Move to next heading level 5.

Equivalent of executing `5`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToPreviousHeadingLevel5 {#key-code-commands-movetopreviousheadinglevel5}

Move to previous heading level 5.

Equivalent of executing `Shift-5`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToNextHeadingLevel6 {#key-code-commands-movetonextheadinglevel6}

Move to next heading level 6.

Equivalent of executing `6`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToPreviousHeadingLevel6 {#key-code-commands-movetopreviousheadinglevel6}

Move to previous heading level 6.

Equivalent of executing `Shift-6`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToNextAnnotation {#key-code-commands-movetonextannotation}

Move to next annotation.

Equivalent of executing `A`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToPreviousAnnotation {#key-code-commands-movetopreviousannotation}

Move to previous annotation.

Equivalent of executing `Shift-A`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToNextSpellingError {#key-code-commands-movetonextspellingerror}

Move to next spelling error.

Equivalent of executing `W`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToPreviousSpellingError {#key-code-commands-movetopreviousspellingerror}

Move to previous spelling error.

Equivalent of executing `Shift-W`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToStartOfContainer {#key-code-commands-movetostartofcontainer}

Moves to the start of the container (list, table, etc.) where the caret is positioned.

Equivalent of executing `Shift-,`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.movePastEndOfContainer {#key-code-commands-movepastendofcontainer}

Moves past the end of the container (list, table, etc.) where the caret is positioned.

Equivalent of executing `,`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.toggleSingleLetterNavigation {#key-code-commands-togglesingleletternavigation}

Toggles single letter navigation on and off for the current document..

Equivalent of executing `NVDA-Shift-Space bar`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.browseModeElementsList {#key-code-commands-browsemodeelementslist}

Lists various types of elements in the current document.

Equivalent of executing `NVDA-F7`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToContainingBrowseModeDocument {#key-code-commands-movetocontainingbrowsemodedocument}

Moves the focus out of the current embedded object and into the document that contains it.

Equivalent of executing `NVDA-Control-Space bar`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.interactWithMathContent {#key-code-commands-interactwithmathcontent}

Begins interaction with math content..

Equivalent of executing `NVDA-Alt-M`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.openSpeechSettings {#key-code-commands-openspeechsettings}

Open speech settings..

Equivalent of executing `NVDA-Control-V`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.punctuationLevel {#key-code-commands-punctuationlevel}

This allows you to choose the amount of punctuation and other symbols that should be spoken as words..

Equivalent of executing `NVDA-P`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.selectSynthesizer {#key-code-commands-selectsynthesizer}

Select Synthesizer..

Equivalent of executing `NVDA-Control-S`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.audioDuckingMode {#key-code-commands-audioduckingmode}

On Windows 8 and above, this option allows you to choose if NVDA should lower the volume of other applications while NVDA is speaking, or all the time while NVDA is running..

Equivalent of executing `NVDA-Shift-D`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToNextSynthSetting {#key-code-commands-movetonextsynthsetting}

Moves to the next available speech setting after the current, wrapping around to the first setting again after the last.

Equivalent of executing `NVDA-Control-Right Arrow`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToPreviousSynthSetting {#key-code-commands-movetoprevioussynthsetting}

Moves to the next available speech setting before the current, wrapping around to the last setting after the first.

Equivalent of executing `NVDA-Control-Left Arrow`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.incrementCurrentSynthSetting {#key-code-commands-incrementcurrentsynthsetting}

increases the current speech setting you are on. E.g. increases the rate, chooses the next voice, increases the volume.

Equivalent of executing `NVDA-Control-Up Arrow`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.decrementCurrentSynthSetting {#key-code-commands-decrementcurrentsynthsetting}

decreases the current speech setting you are on. E.g. decreases the rate, chooses the previous voice, decreases the volume.

Equivalent of executing `NVDA-Control-Down Arrow`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.tetherBraille {#key-code-commands-tetherbraille}

This option allows you to choose whether the braille display will follow the system focus / caret, the navigator object / review cursor, or both..

Equivalent of executing `NVDA-Control-T`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.openKeyboardSettings {#key-code-commands-openkeyboardsettings}

Open keyboard settings..

Equivalent of executing `NVDA-Control-K`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.speakTypedCharacters {#key-code-commands-speaktypedcharacters}

When enabled, NVDA will announce all characters you type on the keyboard..

Equivalent of executing `NVDA-2`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.speakTypedWords {#key-code-commands-speaktypedwords}

When enabled, NVDA will announce all words you type on the keyboard..

Equivalent of executing `NVDA-3`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.speakCommandKeys {#key-code-commands-speakcommandkeys}

When enabled, NVDA will announce all non-character keys you type on the keyboard. This includes key combinations such as control plus another letter..

Equivalent of executing `NVDA-4`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.openMouseSettings {#key-code-commands-openmousesettings}

Open mouse settings..

Equivalent of executing `NVDA-Control-M`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.enableMouseTracking {#key-code-commands-enablemousetracking}

When enabled, NVDA will announce the text currently under the mouse pointer, as you move it around the screen. This allows you to find things on the screen, by physically moving the mouse, rather than trying to find them through object navigation..

Equivalent of executing `NVDA-M`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.reviewCursorFollowSystemFocus {#key-code-commands-reviewcursorfollowsystemfocus}

When enabled, The review cursor will always be placed in the same object as the current system focus whenever the focus changes..

Equivalent of executing `NVDA-7`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.reviewCursorFollowSystemCaret {#key-code-commands-reviewcursorfollowsystemcaret}

When enabled, the review cursor will automatically be moved to the position of the System caret each time it moves.

Equivalent of executing `NVDA-6`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.openObjectPresentationSettings {#key-code-commands-openobjectpresentationsettings}

Open Object Presentation Settings..

Equivalent of executing `NVDA-Control-O`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.progressBarOutput {#key-code-commands-progressbaroutput}

This option controls how NVDA reports progress bar updates to you..

Equivalent of executing `NVDA-U`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.reportDynamicContentChanges {#key-code-commands-reportdynamiccontentchanges}

Toggles the announcement of new content in particular objects such as terminals and the history control in chat programs..

Equivalent of executing `NVDA-5`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.openBrowseModeSettings {#key-code-commands-openbrowsemodesettings}

Open Browse Mode Settings..

Equivalent of executing `NVDA-Control-B`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.useScreenLayout {#key-code-commands-usescreenlayout}

This option allows you to specify whether content in browse mode should place content such as links and other fields on their own line, or if it should keep them in the flow of text as it is visually shown..

Equivalent of executing `NVDA-V`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.saveConfiguration {#key-code-commands-saveconfiguration}

Saves your current configuration so that it is not lost when you exit NVDA.

Equivalent of executing `NVDA-Control-C`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.revertConfiguration {#key-code-commands-revertconfiguration}

Pressing once resets your configuration to when you last saved it. Pressing three times will reset it back to factory defaults..

Equivalent of executing `NVDA-Control-R`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.openConfigurationProfilesDialog {#key-code-commands-openconfigurationprofilesdialog}

Show the Configuration Profiles dialog..

Equivalent of executing `NVDA-Control-P`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToPrevious {#key-code-commands-movetoprevious}

Move to previous.

Equivalent of executing `Up Arrow`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.moveToNext {#key-code-commands-movetonext}

Move to next.

Equivalent of executing `Down Arrow`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.readNextFocusableItem {#key-code-commands-readnextfocusableitem}

Read next focusable item (e.g. link, button).

Equivalent of executing `Tab`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.performDefaultActionForItem {#key-code-commands-performdefaultactionforitem}

Activate.

Equivalent of executing `Enter`.

**Type:** [WindowsKeyCodeCommand]

## NVDAKeyCodeCommands.activate {#key-code-commands-activate}

Activate.

Equivalent of executing `Enter`.

**Type:** [WindowsKeyCodeCommand]

[windowskeycodecommand]: ./class-windows-key-code-command "WindowsKeyCodeCommand"
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "object"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String "string"
[record]: https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type "Record"
