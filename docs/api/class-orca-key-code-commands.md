---
title: "OrcaKeyCodeCommands"
description: Reference Orca key code command definitions for Guidepup automation.
---

**Extends:** [object]

**Implements:** [Record]&#60;[string], [OrcaKeyCodeCommand]&#62;

Keyboard commands supported by Guidepup for the Orca screen reader on Linux.

Use with `unstable_orca.perform` to invoke a command:

```ts
import { unstable_orca } from "@guidepup/guidepup";

(async () => {
  // Start Orca.
  await unstable_orca.start();

  // Move to the next item.
  await unstable_orca.perform(unstable_orca.keyboardCommands.MoveToNextSibling);

  // Stop Orca.
  await unstable_orca.stop();
})();
```

Each command exposes its command name, description, keyboard representation, and Orca service.

**Contents:**

- [orcaKeyCodeCommands.EndOfFile](./class-orca-key-code-commands#key-code-commands-endoffile)
- [orcaKeyCodeCommands.EndOfLine](./class-orca-key-code-commands#key-code-commands-endofline)
- [orcaKeyCodeCommands.NextCharacter](./class-orca-key-code-commands#key-code-commands-nextcharacter)
- [orcaKeyCodeCommands.NextLine](./class-orca-key-code-commands#key-code-commands-nextline)
- [orcaKeyCodeCommands.NextWord](./class-orca-key-code-commands#key-code-commands-nextword)
- [orcaKeyCodeCommands.PreviousCharacter](./class-orca-key-code-commands#key-code-commands-previouscharacter)
- [orcaKeyCodeCommands.PreviousLine](./class-orca-key-code-commands#key-code-commands-previousline)
- [orcaKeyCodeCommands.PreviousWord](./class-orca-key-code-commands#key-code-commands-previousword)
- [orcaKeyCodeCommands.StartOfFile](./class-orca-key-code-commands#key-code-commands-startoffile)
- [orcaKeyCodeCommands.StartOfLine](./class-orca-key-code-commands#key-code-commands-startofline)
- [orcaKeyCodeCommands.ToggleEnabled](./class-orca-key-code-commands#key-code-commands-toggleenabled)
- [orcaKeyCodeCommands.PresentNextMessage](./class-orca-key-code-commands#key-code-commands-presentnextmessage)
- [orcaKeyCodeCommands.PresentPreviousMessage](./class-orca-key-code-commands#key-code-commands-presentpreviousmessage)
- [orcaKeyCodeCommands.ToggleBuddyTyping](./class-orca-key-code-commands#key-code-commands-togglebuddytyping)
- [orcaKeyCodeCommands.ToggleMessageHistories](./class-orca-key-code-commands#key-code-commands-togglemessagehistories)
- [orcaKeyCodeCommands.TogglePrefix](./class-orca-key-code-commands#key-code-commands-toggleprefix)
- [orcaKeyCodeCommands.PresentClipboardContents](./class-orca-key-code-commands#key-code-commands-presentclipboardcontents)
- [orcaKeyCodeCommands.ToggleKeyboardLayout](./class-orca-key-code-commands#key-code-commands-togglekeyboardlayout)
- [orcaKeyCodeCommands.TogglePresentationMode](./class-orca-key-code-commands#key-code-commands-togglepresentationmode)
- [orcaKeyCodeCommands.GoAbove](./class-orca-key-code-commands#key-code-commands-goabove)
- [orcaKeyCodeCommands.GoBelow](./class-orca-key-code-commands#key-code-commands-gobelow)
- [orcaKeyCodeCommands.GoEnd](./class-orca-key-code-commands#key-code-commands-goend)
- [orcaKeyCodeCommands.GoEndOfLine](./class-orca-key-code-commands#key-code-commands-goendofline)
- [orcaKeyCodeCommands.GoHome](./class-orca-key-code-commands#key-code-commands-gohome)
- [orcaKeyCodeCommands.GoNextCharacter](./class-orca-key-code-commands#key-code-commands-gonextcharacter)
- [orcaKeyCodeCommands.GoNextItem](./class-orca-key-code-commands#key-code-commands-gonextitem)
- [orcaKeyCodeCommands.GoNextLine](./class-orca-key-code-commands#key-code-commands-gonextline)
- [orcaKeyCodeCommands.GoPreviousCharacter](./class-orca-key-code-commands#key-code-commands-gopreviouscharacter)
- [orcaKeyCodeCommands.GoPreviousItem](./class-orca-key-code-commands#key-code-commands-gopreviousitem)
- [orcaKeyCodeCommands.GoPreviousLine](./class-orca-key-code-commands#key-code-commands-gopreviousline)
- [orcaKeyCodeCommands.GoStartOfLine](./class-orca-key-code-commands#key-code-commands-gostartofline)
- [orcaKeyCodeCommands.LeftClickOnObject](./class-orca-key-code-commands#key-code-commands-leftclickonobject)
- [orcaKeyCodeCommands.PresentCharacter](./class-orca-key-code-commands#key-code-commands-presentcharacter)
- [orcaKeyCodeCommands.PresentItem](./class-orca-key-code-commands#key-code-commands-presentitem)
- [orcaKeyCodeCommands.PresentLine](./class-orca-key-code-commands#key-code-commands-presentline)
- [orcaKeyCodeCommands.RightClickOnObject](./class-orca-key-code-commands#key-code-commands-rightclickonobject)
- [orcaKeyCodeCommands.RoutePointerToObject](./class-orca-key-code-commands#key-code-commands-routepointertoobject)
- [orcaKeyCodeCommands.SayAll](./class-orca-key-code-commands#key-code-commands-sayall)
- [orcaKeyCodeCommands.ToggleFlatReviewMode](./class-orca-key-code-commands#key-code-commands-toggleflatreviewmode)
- [orcaKeyCodeCommands.ToggleMouseReview](./class-orca-key-code-commands#key-code-commands-togglemousereview)
- [orcaKeyCodeCommands.PresentLastNotification](./class-orca-key-code-commands#key-code-commands-presentlastnotification)
- [orcaKeyCodeCommands.PresentNextNotification](./class-orca-key-code-commands#key-code-commands-presentnextnotification)
- [orcaKeyCodeCommands.PresentPreviousNotification](./class-orca-key-code-commands#key-code-commands-presentpreviousnotification)
- [orcaKeyCodeCommands.ShowNotificationList](./class-orca-key-code-commands#key-code-commands-shownotificationlist)
- [orcaKeyCodeCommands.MoveToFirstChild](./class-orca-key-code-commands#key-code-commands-movetofirstchild)
- [orcaKeyCodeCommands.MoveToNextSibling](./class-orca-key-code-commands#key-code-commands-movetonextsibling)
- [orcaKeyCodeCommands.MoveToParent](./class-orca-key-code-commands#key-code-commands-movetoparent)
- [orcaKeyCodeCommands.MoveToPreviousSibling](./class-orca-key-code-commands#key-code-commands-movetoprevioussibling)
- [orcaKeyCodeCommands.PerformAction](./class-orca-key-code-commands#key-code-commands-performaction)
- [orcaKeyCodeCommands.CycleSettingsProfile](./class-orca-key-code-commands#key-code-commands-cyclesettingsprofile)
- [orcaKeyCodeCommands.PresentCurrentProfile](./class-orca-key-code-commands#key-code-commands-presentcurrentprofile)
- [orcaKeyCodeCommands.FastForward](./class-orca-key-code-commands#key-code-commands-fastforward)
- [orcaKeyCodeCommands.Rewind](./class-orca-key-code-commands#key-code-commands-rewind)
- [orcaKeyCodeCommands.ToggleSleepMode](./class-orca-key-code-commands#key-code-commands-togglesleepmode)
- [orcaKeyCodeCommands.CycleCapitalizationStyle](./class-orca-key-code-commands#key-code-commands-cyclecapitalizationstyle)
- [orcaKeyCodeCommands.CyclePunctuationLevel](./class-orca-key-code-commands#key-code-commands-cyclepunctuationlevel)
- [orcaKeyCodeCommands.CycleSynthesizer](./class-orca-key-code-commands#key-code-commands-cyclesynthesizer)
- [orcaKeyCodeCommands.DecreasePitch](./class-orca-key-code-commands#key-code-commands-decreasepitch)
- [orcaKeyCodeCommands.DecreaseRate](./class-orca-key-code-commands#key-code-commands-decreaserate)
- [orcaKeyCodeCommands.DecreaseVolume](./class-orca-key-code-commands#key-code-commands-decreasevolume)
- [orcaKeyCodeCommands.IncreasePitch](./class-orca-key-code-commands#key-code-commands-increasepitch)
- [orcaKeyCodeCommands.IncreaseRate](./class-orca-key-code-commands#key-code-commands-increaserate)
- [orcaKeyCodeCommands.IncreaseVolume](./class-orca-key-code-commands#key-code-commands-increasevolume)
- [orcaKeyCodeCommands.InterruptSpeech](./class-orca-key-code-commands#key-code-commands-interruptspeech)
- [orcaKeyCodeCommands.ToggleSpeech](./class-orca-key-code-commands#key-code-commands-togglespeech)
- [orcaKeyCodeCommands.ContainerEnd](./class-orca-key-code-commands#key-code-commands-containerend)
- [orcaKeyCodeCommands.ContainerStart](./class-orca-key-code-commands#key-code-commands-containerstart)
- [orcaKeyCodeCommands.ListBlockquotes](./class-orca-key-code-commands#key-code-commands-listblockquotes)
- [orcaKeyCodeCommands.ListButtons](./class-orca-key-code-commands#key-code-commands-listbuttons)
- [orcaKeyCodeCommands.ListCheckboxes](./class-orca-key-code-commands#key-code-commands-listcheckboxes)
- [orcaKeyCodeCommands.ListClickables](./class-orca-key-code-commands#key-code-commands-listclickables)
- [orcaKeyCodeCommands.ListComboboxes](./class-orca-key-code-commands#key-code-commands-listcomboboxes)
- [orcaKeyCodeCommands.ListEntries](./class-orca-key-code-commands#key-code-commands-listentries)
- [orcaKeyCodeCommands.ListFormFields](./class-orca-key-code-commands#key-code-commands-listformfields)
- [orcaKeyCodeCommands.ListHeadings](./class-orca-key-code-commands#key-code-commands-listheadings)
- [orcaKeyCodeCommands.ListHeadingsLevel1](./class-orca-key-code-commands#key-code-commands-listheadingslevel1)
- [orcaKeyCodeCommands.ListHeadingsLevel2](./class-orca-key-code-commands#key-code-commands-listheadingslevel2)
- [orcaKeyCodeCommands.ListHeadingsLevel3](./class-orca-key-code-commands#key-code-commands-listheadingslevel3)
- [orcaKeyCodeCommands.ListHeadingsLevel4](./class-orca-key-code-commands#key-code-commands-listheadingslevel4)
- [orcaKeyCodeCommands.ListHeadingsLevel5](./class-orca-key-code-commands#key-code-commands-listheadingslevel5)
- [orcaKeyCodeCommands.ListHeadingsLevel6](./class-orca-key-code-commands#key-code-commands-listheadingslevel6)
- [orcaKeyCodeCommands.ListImages](./class-orca-key-code-commands#key-code-commands-listimages)
- [orcaKeyCodeCommands.ListLandmarks](./class-orca-key-code-commands#key-code-commands-listlandmarks)
- [orcaKeyCodeCommands.ListLargeObjects](./class-orca-key-code-commands#key-code-commands-listlargeobjects)
- [orcaKeyCodeCommands.ListLinks](./class-orca-key-code-commands#key-code-commands-listlinks)
- [orcaKeyCodeCommands.ListListItems](./class-orca-key-code-commands#key-code-commands-listlistitems)
- [orcaKeyCodeCommands.ListLists](./class-orca-key-code-commands#key-code-commands-listlists)
- [orcaKeyCodeCommands.ListParagraphs](./class-orca-key-code-commands#key-code-commands-listparagraphs)
- [orcaKeyCodeCommands.ListRadioButtons](./class-orca-key-code-commands#key-code-commands-listradiobuttons)
- [orcaKeyCodeCommands.ListTables](./class-orca-key-code-commands#key-code-commands-listtables)
- [orcaKeyCodeCommands.ListUnvisitedLinks](./class-orca-key-code-commands#key-code-commands-listunvisitedlinks)
- [orcaKeyCodeCommands.ListVisitedLinks](./class-orca-key-code-commands#key-code-commands-listvisitedlinks)
- [orcaKeyCodeCommands.NextBlockquote](./class-orca-key-code-commands#key-code-commands-nextblockquote)
- [orcaKeyCodeCommands.NextButton](./class-orca-key-code-commands#key-code-commands-nextbutton)
- [orcaKeyCodeCommands.NextCheckbox](./class-orca-key-code-commands#key-code-commands-nextcheckbox)
- [orcaKeyCodeCommands.NextClickable](./class-orca-key-code-commands#key-code-commands-nextclickable)
- [orcaKeyCodeCommands.NextCombobox](./class-orca-key-code-commands#key-code-commands-nextcombobox)
- [orcaKeyCodeCommands.NextEntry](./class-orca-key-code-commands#key-code-commands-nextentry)
- [orcaKeyCodeCommands.NextFormField](./class-orca-key-code-commands#key-code-commands-nextformfield)
- [orcaKeyCodeCommands.NextHeading](./class-orca-key-code-commands#key-code-commands-nextheading)
- [orcaKeyCodeCommands.NextHeadingLevel1](./class-orca-key-code-commands#key-code-commands-nextheadinglevel1)
- [orcaKeyCodeCommands.NextHeadingLevel2](./class-orca-key-code-commands#key-code-commands-nextheadinglevel2)
- [orcaKeyCodeCommands.NextHeadingLevel3](./class-orca-key-code-commands#key-code-commands-nextheadinglevel3)
- [orcaKeyCodeCommands.NextHeadingLevel4](./class-orca-key-code-commands#key-code-commands-nextheadinglevel4)
- [orcaKeyCodeCommands.NextHeadingLevel5](./class-orca-key-code-commands#key-code-commands-nextheadinglevel5)
- [orcaKeyCodeCommands.NextHeadingLevel6](./class-orca-key-code-commands#key-code-commands-nextheadinglevel6)
- [orcaKeyCodeCommands.NextImage](./class-orca-key-code-commands#key-code-commands-nextimage)
- [orcaKeyCodeCommands.NextLandmark](./class-orca-key-code-commands#key-code-commands-nextlandmark)
- [orcaKeyCodeCommands.NextLargeObject](./class-orca-key-code-commands#key-code-commands-nextlargeobject)
- [orcaKeyCodeCommands.NextLink](./class-orca-key-code-commands#key-code-commands-nextlink)
- [orcaKeyCodeCommands.NextList](./class-orca-key-code-commands#key-code-commands-nextlist)
- [orcaKeyCodeCommands.NextListItem](./class-orca-key-code-commands#key-code-commands-nextlistitem)
- [orcaKeyCodeCommands.NextParagraph](./class-orca-key-code-commands#key-code-commands-nextparagraph)
- [orcaKeyCodeCommands.NextRadioButton](./class-orca-key-code-commands#key-code-commands-nextradiobutton)
- [orcaKeyCodeCommands.NextSeparator](./class-orca-key-code-commands#key-code-commands-nextseparator)
- [orcaKeyCodeCommands.NextTable](./class-orca-key-code-commands#key-code-commands-nexttable)
- [orcaKeyCodeCommands.NextUnvisitedLink](./class-orca-key-code-commands#key-code-commands-nextunvisitedlink)
- [orcaKeyCodeCommands.NextVisitedLink](./class-orca-key-code-commands#key-code-commands-nextvisitedlink)
- [orcaKeyCodeCommands.PreviousBlockquote](./class-orca-key-code-commands#key-code-commands-previousblockquote)
- [orcaKeyCodeCommands.PreviousButton](./class-orca-key-code-commands#key-code-commands-previousbutton)
- [orcaKeyCodeCommands.PreviousCheckbox](./class-orca-key-code-commands#key-code-commands-previouscheckbox)
- [orcaKeyCodeCommands.PreviousClickable](./class-orca-key-code-commands#key-code-commands-previousclickable)
- [orcaKeyCodeCommands.PreviousCombobox](./class-orca-key-code-commands#key-code-commands-previouscombobox)
- [orcaKeyCodeCommands.PreviousEntry](./class-orca-key-code-commands#key-code-commands-previousentry)
- [orcaKeyCodeCommands.PreviousFormField](./class-orca-key-code-commands#key-code-commands-previousformfield)
- [orcaKeyCodeCommands.PreviousHeading](./class-orca-key-code-commands#key-code-commands-previousheading)
- [orcaKeyCodeCommands.PreviousHeadingLevel1](./class-orca-key-code-commands#key-code-commands-previousheadinglevel1)
- [orcaKeyCodeCommands.PreviousHeadingLevel2](./class-orca-key-code-commands#key-code-commands-previousheadinglevel2)
- [orcaKeyCodeCommands.PreviousHeadingLevel3](./class-orca-key-code-commands#key-code-commands-previousheadinglevel3)
- [orcaKeyCodeCommands.PreviousHeadingLevel4](./class-orca-key-code-commands#key-code-commands-previousheadinglevel4)
- [orcaKeyCodeCommands.PreviousHeadingLevel5](./class-orca-key-code-commands#key-code-commands-previousheadinglevel5)
- [orcaKeyCodeCommands.PreviousHeadingLevel6](./class-orca-key-code-commands#key-code-commands-previousheadinglevel6)
- [orcaKeyCodeCommands.PreviousImage](./class-orca-key-code-commands#key-code-commands-previousimage)
- [orcaKeyCodeCommands.PreviousLandmark](./class-orca-key-code-commands#key-code-commands-previouslandmark)
- [orcaKeyCodeCommands.PreviousLargeObject](./class-orca-key-code-commands#key-code-commands-previouslargeobject)
- [orcaKeyCodeCommands.PreviousLink](./class-orca-key-code-commands#key-code-commands-previouslink)
- [orcaKeyCodeCommands.PreviousList](./class-orca-key-code-commands#key-code-commands-previouslist)
- [orcaKeyCodeCommands.PreviousListItem](./class-orca-key-code-commands#key-code-commands-previouslistitem)
- [orcaKeyCodeCommands.PreviousParagraph](./class-orca-key-code-commands#key-code-commands-previousparagraph)
- [orcaKeyCodeCommands.PreviousRadioButton](./class-orca-key-code-commands#key-code-commands-previousradiobutton)
- [orcaKeyCodeCommands.PreviousSeparator](./class-orca-key-code-commands#key-code-commands-previousseparator)
- [orcaKeyCodeCommands.PreviousTable](./class-orca-key-code-commands#key-code-commands-previoustable)
- [orcaKeyCodeCommands.PreviousUnvisitedLink](./class-orca-key-code-commands#key-code-commands-previousunvisitedlink)
- [orcaKeyCodeCommands.PreviousVisitedLink](./class-orca-key-code-commands#key-code-commands-previousvisitedlink)
- [orcaKeyCodeCommands.PresentBatteryStatus](./class-orca-key-code-commands#key-code-commands-presentbatterystatus)
- [orcaKeyCodeCommands.PresentCpuAndMemoryUsage](./class-orca-key-code-commands#key-code-commands-presentcpuandmemoryusage)
- [orcaKeyCodeCommands.PresentDate](./class-orca-key-code-commands#key-code-commands-presentdate)
- [orcaKeyCodeCommands.PresentTime](./class-orca-key-code-commands#key-code-commands-presenttime)
- [orcaKeyCodeCommands.ClearDynamicColumnHeadersRow](./class-orca-key-code-commands#key-code-commands-cleardynamiccolumnheadersrow)
- [orcaKeyCodeCommands.ClearDynamicRowHeadersColumn](./class-orca-key-code-commands#key-code-commands-cleardynamicrowheaderscolumn)
- [orcaKeyCodeCommands.MoveDown](./class-orca-key-code-commands#key-code-commands-movedown)
- [orcaKeyCodeCommands.MoveLeft](./class-orca-key-code-commands#key-code-commands-moveleft)
- [orcaKeyCodeCommands.MoveRight](./class-orca-key-code-commands#key-code-commands-moveright)
- [orcaKeyCodeCommands.MoveToBeginningOfRow](./class-orca-key-code-commands#key-code-commands-movetobeginningofrow)
- [orcaKeyCodeCommands.MoveToBottomOfColumn](./class-orca-key-code-commands#key-code-commands-movetobottomofcolumn)
- [orcaKeyCodeCommands.MoveToEndOfRow](./class-orca-key-code-commands#key-code-commands-movetoendofrow)
- [orcaKeyCodeCommands.MoveToFirstCell](./class-orca-key-code-commands#key-code-commands-movetofirstcell)
- [orcaKeyCodeCommands.MoveToLastCell](./class-orca-key-code-commands#key-code-commands-movetolastcell)
- [orcaKeyCodeCommands.MoveToTopOfColumn](./class-orca-key-code-commands#key-code-commands-movetotopofcolumn)
- [orcaKeyCodeCommands.MoveUp](./class-orca-key-code-commands#key-code-commands-moveup)
- [orcaKeyCodeCommands.SetDynamicColumnHeadersRow](./class-orca-key-code-commands#key-code-commands-setdynamiccolumnheadersrow)
- [orcaKeyCodeCommands.SetDynamicRowHeadersColumn](./class-orca-key-code-commands#key-code-commands-setdynamicrowheaderscolumn)
- [orcaKeyCodeCommands.CycleKeyEcho](./class-orca-key-code-commands#key-code-commands-cyclekeyecho)
- [orcaKeyCodeCommands.PresentCellFormula](./class-orca-key-code-commands#key-code-commands-presentcellformula)
- [orcaKeyCodeCommands.PresentCharacterAttributes](./class-orca-key-code-commands#key-code-commands-presentcharacterattributes)
- [orcaKeyCodeCommands.PresentDefaultButton](./class-orca-key-code-commands#key-code-commands-presentdefaultbutton)
- [orcaKeyCodeCommands.PresentLink](./class-orca-key-code-commands#key-code-commands-presentlink)
- [orcaKeyCodeCommands.PresentSelectedText](./class-orca-key-code-commands#key-code-commands-presentselectedtext)
- [orcaKeyCodeCommands.PresentSelection](./class-orca-key-code-commands#key-code-commands-presentselection)
- [orcaKeyCodeCommands.PresentSizeAndPosition](./class-orca-key-code-commands#key-code-commands-presentsizeandposition)
- [orcaKeyCodeCommands.PresentStatusBar](./class-orca-key-code-commands#key-code-commands-presentstatusbar)
- [orcaKeyCodeCommands.PresentTitle](./class-orca-key-code-commands#key-code-commands-presenttitle)
- [orcaKeyCodeCommands.WhereAmIBasic](./class-orca-key-code-commands#key-code-commands-whereamibasic)
- [orcaKeyCodeCommands.WhereAmIDetailed](./class-orca-key-code-commands#key-code-commands-whereamidetailed)


## orcaKeyCodeCommands.EndOfFile {#key-code-commands-endoffile}

Moves to the end of the file.

Equivalent of executing `Ctrl-End`.

**Service:** `CaretNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.EndOfLine {#key-code-commands-endofline}

Moves to the end of the line.

Equivalent of executing `End`.

**Service:** `CaretNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.NextCharacter {#key-code-commands-nextcharacter}

Moves to the next character.

Equivalent of executing `Right`.

**Service:** `CaretNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.NextLine {#key-code-commands-nextline}

Moves to the next line.

Equivalent of executing `Down`.

**Service:** `CaretNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.NextWord {#key-code-commands-nextword}

Moves to the next word.

Equivalent of executing `Ctrl-Right`.

**Service:** `CaretNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.PreviousCharacter {#key-code-commands-previouscharacter}

Moves to the previous character.

Equivalent of executing `Left`.

**Service:** `CaretNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.PreviousLine {#key-code-commands-previousline}

Moves to the previous line.

Equivalent of executing `Up`.

**Service:** `CaretNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.PreviousWord {#key-code-commands-previousword}

Moves to the previous word.

Equivalent of executing `Ctrl-Left`.

**Service:** `CaretNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.StartOfFile {#key-code-commands-startoffile}

Moves to the start of the file.

Equivalent of executing `Ctrl-Home`.

**Service:** `CaretNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.StartOfLine {#key-code-commands-startofline}

Moves to the start of the line.

Equivalent of executing `Home`.

**Service:** `CaretNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.ToggleEnabled {#key-code-commands-toggleenabled}

Toggles table navigation.

Equivalent of executing `ORCA-Shift-T`.

**Service:** `TableNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.PresentNextMessage {#key-code-commands-presentnextmessage}

Navigate to and present the next chat message in the history.

Equivalent of executing `ORCA-Alt-Down`.

**Service:** `ChatPresenter`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.PresentPreviousMessage {#key-code-commands-presentpreviousmessage}

Navigate to and present the previous chat message in the history.

Equivalent of executing `ORCA-Alt-Up`.

**Service:** `ChatPresenter`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.ToggleBuddyTyping {#key-code-commands-togglebuddytyping}

Toggles whether we announce when our buddies are typing a message.

Equivalent of executing `ORCA-Alt-F11`.

**Service:** `ChatPresenter`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.ToggleMessageHistories {#key-code-commands-togglemessagehistories}

Toggles whether we provide chat room specific message histories.

Equivalent of executing `ORCA-Alt-F12`.

**Service:** `ChatPresenter`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.TogglePrefix {#key-code-commands-toggleprefix}

Toggles whether we prefix chat room messages with the name of the chat room.

Equivalent of executing `ORCA-Alt-F10`.

**Service:** `ChatPresenter`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.PresentClipboardContents {#key-code-commands-presentclipboardcontents}

Presents the clipboard contents.

Equivalent of executing `ORCA-C`.

**Service:** `ClipboardPresenter`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.ToggleKeyboardLayout {#key-code-commands-togglekeyboardlayout}

Toggles between desktop and laptop keyboard layout.

Equivalent of executing `ORCA-Shift-F12`.

**Service:** `CommandManager`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.TogglePresentationMode {#key-code-commands-togglepresentationmode}

Switches between browse mode and focus mode (user-initiated).

Equivalent of executing `ORCA-Space`.

**Service:** `DocumentPresenter`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.GoAbove {#key-code-commands-goabove}

Moves to the character above.

Equivalent of executing `ORCA-KP4`.

**Service:** `FlatReviewPresenter`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.GoBelow {#key-code-commands-gobelow}

Moves to the character below.

Equivalent of executing `ORCA-KP6`.

**Service:** `FlatReviewPresenter`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.GoEnd {#key-code-commands-goend}

Moves to the bottom right of the current window.

Equivalent of executing `ORCA-KP9`.

**Service:** `FlatReviewPresenter`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.GoEndOfLine {#key-code-commands-goendofline}

Moves to the end of the line.

Equivalent of executing `ORCA-KP1`.

**Service:** `FlatReviewPresenter`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.GoHome {#key-code-commands-gohome}

Moves to the top left of the current window.

Equivalent of executing `ORCA-KP7`.

**Service:** `FlatReviewPresenter`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.GoNextCharacter {#key-code-commands-gonextcharacter}

Moves to the next character.

Equivalent of executing `ORCA-KP3`.

**Service:** `FlatReviewPresenter`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.GoNextItem {#key-code-commands-gonextitem}

Moves to the next item or word.

Equivalent of executing `ORCA-KP6`.

**Service:** `FlatReviewPresenter`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.GoNextLine {#key-code-commands-gonextline}

Moves to the next line.

Equivalent of executing `ORCA-KP9`.

**Service:** `FlatReviewPresenter`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.GoPreviousCharacter {#key-code-commands-gopreviouscharacter}

Moves to the previous character.

Equivalent of executing `ORCA-KP1`.

**Service:** `FlatReviewPresenter`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.GoPreviousItem {#key-code-commands-gopreviousitem}

Moves to the previous item or word.

Equivalent of executing `ORCA-KP4`.

**Service:** `FlatReviewPresenter`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.GoPreviousLine {#key-code-commands-gopreviousline}

Moves to the previous line.

Equivalent of executing `KP7`.

**Service:** `FlatReviewPresenter`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.GoStartOfLine {#key-code-commands-gostartofline}

Moves to the beginning of the current line.

Equivalent of executing `KP7`.

**Service:** `FlatReviewPresenter`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.LeftClickOnObject {#key-code-commands-leftclickonobject}

Attempts to synthesize a left click on the current accessible.

Equivalent of executing `ORCA-KP/`.

**Service:** `FlatReviewPresenter`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.PresentCharacter {#key-code-commands-presentcharacter}

Presents the current character.

Equivalent of executing `KP2`.

**Service:** `FlatReviewPresenter`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.PresentItem {#key-code-commands-presentitem}

Presents the current item/word.

Equivalent of executing `KP5`.

**Service:** `FlatReviewPresenter`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.PresentLine {#key-code-commands-presentline}

Presents the current line.

Equivalent of executing `KP8`.

**Service:** `FlatReviewPresenter`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.RightClickOnObject {#key-code-commands-rightclickonobject}

Attempts to synthesize a right click on the current accessible.

Equivalent of executing `ORCA-KP*`.

**Service:** `FlatReviewPresenter`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.RoutePointerToObject {#key-code-commands-routepointertoobject}

Routes the mouse pointer to the current accessible.

Equivalent of executing `ORCA-KP/`.

**Service:** `FlatReviewPresenter`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.SayAll {#key-code-commands-sayall}

Speaks the entire document or text, starting from the current position.

Equivalent of executing `ORCA-KP+`.

**Service:** `SayAllPresenter`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.ToggleFlatReviewMode {#key-code-commands-toggleflatreviewmode}

Toggles between flat review mode and focus tracking mode.

Equivalent of executing `ORCA-KP-`.

**Service:** `FlatReviewPresenter`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.ToggleMouseReview {#key-code-commands-togglemousereview}

Toggle mouse reviewing on or off (requires Wnck).

Equivalent of executing `ORCA-M`.

**Service:** `MousePresenter`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.PresentLastNotification {#key-code-commands-presentlastnotification}

Presents the last notification.

Equivalent of executing `ORCA-N`.

**Service:** `NotificationPresenter`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.PresentNextNotification {#key-code-commands-presentnextnotification}

Presents the next notification.

Equivalent of executing `ORCA-Shift-N`.

**Service:** `NotificationPresenter`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.PresentPreviousNotification {#key-code-commands-presentpreviousnotification}

Presents the previous notification.

Equivalent of executing `ORCA-Ctrl-N`.

**Service:** `NotificationPresenter`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.ShowNotificationList {#key-code-commands-shownotificationlist}

Opens a dialog with a list of the notifications.

Equivalent of executing `ORCA-Alt-N`.

**Service:** `NotificationPresenter`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.MoveToFirstChild {#key-code-commands-movetofirstchild}

Moves the navigator focus to the first child of the current focus.

Equivalent of executing `ORCA-Shift-Down`.

**Service:** `ObjectNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.MoveToNextSibling {#key-code-commands-movetonextsibling}

Moves the navigator focus to the next sibling of the current focus.

Equivalent of executing `ORCA-Down`.

**Service:** `ObjectNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.MoveToParent {#key-code-commands-movetoparent}

Moves the navigator focus to the parent of the current focus.

Equivalent of executing `ORCA-Shift-Up`.

**Service:** `ObjectNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.MoveToPreviousSibling {#key-code-commands-movetoprevioussibling}

Moves the navigator focus to the previous sibling of the current focus.

Equivalent of executing `ORCA-Up`.

**Service:** `ObjectNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.PerformAction {#key-code-commands-performaction}

Attempts to click on the current focus.

Equivalent of executing `ORCA-Enter`.

**Service:** `ObjectNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.CycleSettingsProfile {#key-code-commands-cyclesettingsprofile}

Cycle through the user's existing settings profiles.

Equivalent of executing `ORCA-Ctrl-S`.

**Service:** `ProfileManager`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.PresentCurrentProfile {#key-code-commands-presentcurrentprofile}

Present the name of the currently active profile.

Equivalent of executing `ORCA-Ctrl-P`.

**Service:** `ProfileManager`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.FastForward {#key-code-commands-fastforward}

Jumps forward in the current Say All.

Equivalent of executing `Down`.

**Service:** `SayAllPresenter`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.Rewind {#key-code-commands-rewind}

Jumps back in the current Say All.

Equivalent of executing `Up`.

**Service:** `SayAllPresenter`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.ToggleSleepMode {#key-code-commands-togglesleepmode}

Toggles sleep mode for the active application.

Equivalent of executing `ORCA-Shift-S`.

**Service:** `SleepModeManager`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.CycleCapitalizationStyle {#key-code-commands-cyclecapitalizationstyle}

Cycle through the speech-dispatcher capitalization styles.

Equivalent of executing `ORCA-Alt-C`.

**Service:** `SpeechManager`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.CyclePunctuationLevel {#key-code-commands-cyclepunctuationlevel}

Cycles through punctuation levels for speech.

Equivalent of executing `ORCA-P`.

**Service:** `SpeechManager`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.CycleSynthesizer {#key-code-commands-cyclesynthesizer}

Cycles through available speech synthesizers.

Equivalent of executing `ORCA-Ctrl-S`.

**Service:** `SpeechManager`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.DecreasePitch {#key-code-commands-decreasepitch}

Decreases the speech pitch.

Equivalent of executing `ORCA-Alt-Left`.

**Service:** `SpeechManager`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.DecreaseRate {#key-code-commands-decreaserate}

Decreases the speech rate.

Equivalent of executing `ORCA-Ctrl-Left`.

**Service:** `SpeechManager`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.DecreaseVolume {#key-code-commands-decreasevolume}

Decreases the speech volume.

Equivalent of executing `ORCA-Alt-Down`.

**Service:** `SpeechManager`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.IncreasePitch {#key-code-commands-increasepitch}

Increase the speech pitch.

Equivalent of executing `ORCA-Alt-Right`.

**Service:** `SpeechManager`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.IncreaseRate {#key-code-commands-increaserate}

Increases the speech rate.

Equivalent of executing `ORCA-Ctrl-Right`.

**Service:** `SpeechManager`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.IncreaseVolume {#key-code-commands-increasevolume}

Increases the speech volume.

Equivalent of executing `ORCA-Alt-Up`.

**Service:** `SpeechManager`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.InterruptSpeech {#key-code-commands-interruptspeech}

Interrupts the speech server.

Equivalent of executing `Ctrl`.

**Service:** `SpeechManager`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.ToggleSpeech {#key-code-commands-togglespeech}

Toggles speech on and off.

Equivalent of executing `ORCA-S`.

**Service:** `SpeechManager`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.ContainerEnd {#key-code-commands-containerend}

Moves to the end of the current container.

Equivalent of executing `Comma`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.ContainerStart {#key-code-commands-containerstart}

Moves to the start of the current container.

Equivalent of executing `Shift-Comma`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.ListBlockquotes {#key-code-commands-listblockquotes}

Displays a list of blockquotes.

Equivalent of executing `Alt-Shift-Q`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.ListButtons {#key-code-commands-listbuttons}

Displays a list of buttons.

Equivalent of executing `Alt-Shift-B`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.ListCheckboxes {#key-code-commands-listcheckboxes}

Displays a list of checkboxes.

Equivalent of executing `Alt-Shift-X`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.ListClickables {#key-code-commands-listclickables}

Displays a list of clickables.

Equivalent of executing `Alt-Shift-A`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.ListComboboxes {#key-code-commands-listcomboboxes}

Displays a list of combo boxes.

Equivalent of executing `Alt-Shift-C`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.ListEntries {#key-code-commands-listentries}

Displays a list of entries.

Equivalent of executing `Alt-Shift-E`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.ListFormFields {#key-code-commands-listformfields}

Displays a list of form fields.

Equivalent of executing `Alt-Shift-F`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.ListHeadings {#key-code-commands-listheadings}

Displays a list of headings.

Equivalent of executing `Alt-Shift-H`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.ListHeadingsLevel1 {#key-code-commands-listheadingslevel1}

Displays a list of level 1 headings.

Equivalent of executing `Alt-Shift-1`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.ListHeadingsLevel2 {#key-code-commands-listheadingslevel2}

Displays a list of level 2 headings.

Equivalent of executing `Alt-Shift-2`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.ListHeadingsLevel3 {#key-code-commands-listheadingslevel3}

Displays a list of level 3 headings.

Equivalent of executing `Alt-Shift-3`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.ListHeadingsLevel4 {#key-code-commands-listheadingslevel4}

Displays a list of level 4 headings.

Equivalent of executing `Alt-Shift-4`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.ListHeadingsLevel5 {#key-code-commands-listheadingslevel5}

Displays a list of level 5 headings.

Equivalent of executing `Alt-Shift-5`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.ListHeadingsLevel6 {#key-code-commands-listheadingslevel6}

Displays a list of level 6 headings.

Equivalent of executing `Alt-Shift-6`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.ListImages {#key-code-commands-listimages}

Displays a list of images.

Equivalent of executing `Alt-Shift-G`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.ListLandmarks {#key-code-commands-listlandmarks}

Displays a list of landmarks.

Equivalent of executing `Alt-Shift-M`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.ListLargeObjects {#key-code-commands-listlargeobjects}

Displays a list of large objects.

Equivalent of executing `Alt-Shift-O`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.ListLinks {#key-code-commands-listlinks}

Displays a list of links.

Equivalent of executing `Alt-Shift-K`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.ListListItems {#key-code-commands-listlistitems}

Displays a list of list items.

Equivalent of executing `Alt-Shift-I`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.ListLists {#key-code-commands-listlists}

Displays a list of lists.

Equivalent of executing `Alt-Shift-L`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.ListParagraphs {#key-code-commands-listparagraphs}

Displays a list of paragraphs.

Equivalent of executing `Alt-Shift-P`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.ListRadioButtons {#key-code-commands-listradiobuttons}

Displays a list of radio buttons.

Equivalent of executing `Alt-Shift-R`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.ListTables {#key-code-commands-listtables}

Displays a list of tables.

Equivalent of executing `Alt-Shift-T`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.ListUnvisitedLinks {#key-code-commands-listunvisitedlinks}

Displays a list of unvisited links.

Equivalent of executing `Alt-Shift-U`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.ListVisitedLinks {#key-code-commands-listvisitedlinks}

Displays a list of visited links.

Equivalent of executing `Alt-Shift-V`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.NextBlockquote {#key-code-commands-nextblockquote}

Goes to the next blockquote.

Equivalent of executing `Q`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.NextButton {#key-code-commands-nextbutton}

Goes to the next button.

Equivalent of executing `B`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.NextCheckbox {#key-code-commands-nextcheckbox}

Goes to the next checkbox.

Equivalent of executing `X`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.NextClickable {#key-code-commands-nextclickable}

Goes to the next clickable.

Equivalent of executing `A`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.NextCombobox {#key-code-commands-nextcombobox}

Goes to the next combo box.

Equivalent of executing `C`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.NextEntry {#key-code-commands-nextentry}

Goes to the next entry.

Equivalent of executing `E`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.NextFormField {#key-code-commands-nextformfield}

Goes to the next form field.

Equivalent of executing `F`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.NextHeading {#key-code-commands-nextheading}

Goes to the next heading.

Equivalent of executing `H`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.NextHeadingLevel1 {#key-code-commands-nextheadinglevel1}

Goes to the next level 1 heading.

Equivalent of executing `1`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.NextHeadingLevel2 {#key-code-commands-nextheadinglevel2}

Goes to the next level 2 heading.

Equivalent of executing `2`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.NextHeadingLevel3 {#key-code-commands-nextheadinglevel3}

Goes to the next level 3 heading.

Equivalent of executing `3`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.NextHeadingLevel4 {#key-code-commands-nextheadinglevel4}

Goes to the next level 4 heading.

Equivalent of executing `4`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.NextHeadingLevel5 {#key-code-commands-nextheadinglevel5}

Goes to the next level 5 heading.

Equivalent of executing `5`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.NextHeadingLevel6 {#key-code-commands-nextheadinglevel6}

Goes to the next level 6 heading.

Equivalent of executing `6`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.NextImage {#key-code-commands-nextimage}

Goes to the next image.

Equivalent of executing `G`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.NextLandmark {#key-code-commands-nextlandmark}

Goes to the next landmark.

Equivalent of executing `M`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.NextLargeObject {#key-code-commands-nextlargeobject}

Goes to the next large object.

Equivalent of executing `O`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.NextLink {#key-code-commands-nextlink}

Goes to the next link.

Equivalent of executing `K`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.NextList {#key-code-commands-nextlist}

Goes to the next list.

Equivalent of executing `L`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.NextListItem {#key-code-commands-nextlistitem}

Goes to the next list item.

Equivalent of executing `I`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.NextParagraph {#key-code-commands-nextparagraph}

Goes to the next paragraph.

Equivalent of executing `P`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.NextRadioButton {#key-code-commands-nextradiobutton}

Goes to the next radio button.

Equivalent of executing `R`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.NextSeparator {#key-code-commands-nextseparator}

Goes to the next separator.

Equivalent of executing `S`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.NextTable {#key-code-commands-nexttable}

Goes to the next table.

Equivalent of executing `T`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.NextUnvisitedLink {#key-code-commands-nextunvisitedlink}

Goes to the next unvisited link.

Equivalent of executing `U`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.NextVisitedLink {#key-code-commands-nextvisitedlink}

Goes to the next visited link.

Equivalent of executing `V`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.PreviousBlockquote {#key-code-commands-previousblockquote}

Goes to the previous blockquote.

Equivalent of executing `Shift-Q`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.PreviousButton {#key-code-commands-previousbutton}

Goes to the previous button.

Equivalent of executing `Shift-B`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.PreviousCheckbox {#key-code-commands-previouscheckbox}

Goes to the previous checkbox.

Equivalent of executing `Shift-X`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.PreviousClickable {#key-code-commands-previousclickable}

Goes to the previous clickable.

Equivalent of executing `Shift-A`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.PreviousCombobox {#key-code-commands-previouscombobox}

Goes to the previous combo box.

Equivalent of executing `Shift-C`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.PreviousEntry {#key-code-commands-previousentry}

Goes to the previous entry.

Equivalent of executing `Shift-E`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.PreviousFormField {#key-code-commands-previousformfield}

Goes to the previous form field.

Equivalent of executing `Shift-F`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.PreviousHeading {#key-code-commands-previousheading}

Goes to the previous heading.

Equivalent of executing `Shift-H`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.PreviousHeadingLevel1 {#key-code-commands-previousheadinglevel1}

Goes to the previous level 1 heading.

Equivalent of executing `Shift-1`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.PreviousHeadingLevel2 {#key-code-commands-previousheadinglevel2}

Goes to the previous level 2 heading.

Equivalent of executing `Shift-2`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.PreviousHeadingLevel3 {#key-code-commands-previousheadinglevel3}

Goes to the previous level 3 heading.

Equivalent of executing `Shift-3`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.PreviousHeadingLevel4 {#key-code-commands-previousheadinglevel4}

Goes to the previous level 4 heading.

Equivalent of executing `Shift-4`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.PreviousHeadingLevel5 {#key-code-commands-previousheadinglevel5}

Goes to the previous level 5 heading.

Equivalent of executing `Shift-5`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.PreviousHeadingLevel6 {#key-code-commands-previousheadinglevel6}

Goes to the previous level 6 heading.

Equivalent of executing `Shift-6`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.PreviousImage {#key-code-commands-previousimage}

Goes to the previous image.

Equivalent of executing `Shift-G`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.PreviousLandmark {#key-code-commands-previouslandmark}

Goes to the previous landmark.

Equivalent of executing `Shift-M`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.PreviousLargeObject {#key-code-commands-previouslargeobject}

Goes to the previous large object.

Equivalent of executing `Shift-O`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.PreviousLink {#key-code-commands-previouslink}

Goes to the previous link.

Equivalent of executing `Shift-K`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.PreviousList {#key-code-commands-previouslist}

Goes to the previous list.

Equivalent of executing `Shift-L`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.PreviousListItem {#key-code-commands-previouslistitem}

Goes to the previous list item.

Equivalent of executing `Shift-I`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.PreviousParagraph {#key-code-commands-previousparagraph}

Goes to the previous paragraph.

Equivalent of executing `Shift-P`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.PreviousRadioButton {#key-code-commands-previousradiobutton}

Goes to the previous radio button.

Equivalent of executing `Shift-R`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.PreviousSeparator {#key-code-commands-previousseparator}

Goes to the previous separator.

Equivalent of executing `Shift-S`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.PreviousTable {#key-code-commands-previoustable}

Goes to the previous table.

Equivalent of executing `Shift-T`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.PreviousUnvisitedLink {#key-code-commands-previousunvisitedlink}

Goes to the previous unvisited link.

Equivalent of executing `Shift-U`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.PreviousVisitedLink {#key-code-commands-previousvisitedlink}

Goes to the previous visited link.

Equivalent of executing `Shift-V`.

**Service:** `StructuralNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.PresentBatteryStatus {#key-code-commands-presentbatterystatus}

Presents the battery status.

Equivalent of executing `ORCA-Shift-B`.

**Service:** `SystemInformationPresenter`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.PresentCpuAndMemoryUsage {#key-code-commands-presentcpuandmemoryusage}

Presents the cpu and memory usage.

Equivalent of executing `ORCA-Shift-E`.

**Service:** `SystemInformationPresenter`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.PresentDate {#key-code-commands-presentdate}

Presents the current date.

Equivalent of executing `ORCA-Shift-T`.

**Service:** `SystemInformationPresenter`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.PresentTime {#key-code-commands-presenttime}

Presents the current time.

Equivalent of executing `ORCA-T`.

**Service:** `SystemInformationPresenter`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.ClearDynamicColumnHeadersRow {#key-code-commands-cleardynamiccolumnheadersrow}

Clears the row for the dynamic column headers.

Equivalent of executing `ORCA-Shift-Alt-R`.

**Service:** `TableNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.ClearDynamicRowHeadersColumn {#key-code-commands-cleardynamicrowheaderscolumn}

Clears the column for the dynamic row headers.

Equivalent of executing `ORCA-Shift-Alt-C`.

**Service:** `TableNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.MoveDown {#key-code-commands-movedown}

Moves to the cell below.

Equivalent of executing `ORCA-Down`.

**Service:** `TableNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.MoveLeft {#key-code-commands-moveleft}

Moves to the cell on the left.

Equivalent of executing `ORCA-Left`.

**Service:** `TableNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.MoveRight {#key-code-commands-moveright}

Moves to the cell on the right.

Equivalent of executing `ORCA-Right`.

**Service:** `TableNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.MoveToBeginningOfRow {#key-code-commands-movetobeginningofrow}

Moves to the beginning of the row.

Equivalent of executing `ORCA-Home`.

**Service:** `TableNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.MoveToBottomOfColumn {#key-code-commands-movetobottomofcolumn}

Moves to the bottom of the column.

Equivalent of executing `ORCA-Shift-Down`.

**Service:** `TableNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.MoveToEndOfRow {#key-code-commands-movetoendofrow}

Moves to the end of the row.

Equivalent of executing `ORCA-End`.

**Service:** `TableNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.MoveToFirstCell {#key-code-commands-movetofirstcell}

Moves to the first cell.

Equivalent of executing `ORCA-Ctrl-Home`.

**Service:** `TableNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.MoveToLastCell {#key-code-commands-movetolastcell}

Moves to the last cell.

Equivalent of executing `ORCA-Ctrl-End`.

**Service:** `TableNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.MoveToTopOfColumn {#key-code-commands-movetotopofcolumn}

Moves to the top of the column.

Equivalent of executing `ORCA-Shift-Up`.

**Service:** `TableNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.MoveUp {#key-code-commands-moveup}

Moves to the cell above.

Equivalent of executing `ORCA-Up`.

**Service:** `TableNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.SetDynamicColumnHeadersRow {#key-code-commands-setdynamiccolumnheadersrow}

Sets the row for the dynamic header columns to the current row.

Equivalent of executing `ORCA-Shift-Alt-R`.

**Service:** `TableNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.SetDynamicRowHeadersColumn {#key-code-commands-setdynamicrowheaderscolumn}

Sets the column for the dynamic row headers to the current column.

Equivalent of executing `ORCA-Shift-Alt-C`.

**Service:** `TableNavigator`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.CycleKeyEcho {#key-code-commands-cyclekeyecho}

Cycle through the key echo levels.

Equivalent of executing `ORCA-Shift-K`.

**Service:** `TypingEchoPresenter`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.PresentCellFormula {#key-code-commands-presentcellformula}

Presents the formula associated with the current spreadsheet cell.

Equivalent of executing `ORCA-Shift-F`.

**Service:** `WhereAmIPresenter`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.PresentCharacterAttributes {#key-code-commands-presentcharacterattributes}

Presents the font and formatting details for the current character.

Equivalent of executing `ORCA-F`.

**Service:** `WhereAmIPresenter`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.PresentDefaultButton {#key-code-commands-presentdefaultbutton}

Presents the default button of the current dialog.

Equivalent of executing `ORCA-Enter`.

**Service:** `WhereAmIPresenter`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.PresentLink {#key-code-commands-presentlink}

Presents details about the current link.

Equivalent of executing `ORCA-Shift-L`.

**Service:** `WhereAmIPresenter`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.PresentSelectedText {#key-code-commands-presentselectedtext}

Presents the selected text.

Equivalent of executing `ORCA-Shift-Up`.

**Service:** `WhereAmIPresenter`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.PresentSelection {#key-code-commands-presentselection}

Presents the selected text or selected objects.

Equivalent of executing `ORCA-Shift-S`.

**Service:** `WhereAmIPresenter`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.PresentSizeAndPosition {#key-code-commands-presentsizeandposition}

Presents the size and position of the current object.

Equivalent of executing `ORCA-Shift-P`.

**Service:** `WhereAmIPresenter`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.PresentStatusBar {#key-code-commands-presentstatusbar}

Presents the status bar and info bar of the current window.

Equivalent of executing `ORCA-Shift-End`.

**Service:** `WhereAmIPresenter`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.PresentTitle {#key-code-commands-presenttitle}

Presents the title of the current window.

Equivalent of executing `ORCA-Ctrl-T`.

**Service:** `WhereAmIPresenter`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.WhereAmIBasic {#key-code-commands-whereamibasic}

Presents basic information about the current location.

Equivalent of executing `ORCA-KP_Enter`.

**Service:** `WhereAmIPresenter`

**Type:** [OrcaKeyCodeCommand]

## orcaKeyCodeCommands.WhereAmIDetailed {#key-code-commands-whereamidetailed}

Presents detailed information about the current location.

Equivalent of executing `ORCA-KP_Enter`.

**Service:** `WhereAmIPresenter`

**Type:** [OrcaKeyCodeCommand]

[orcakeycodecommand]: ./class-orca-key-code-command "OrcaKeyCodeCommand"
[record]: https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type "Record"
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String "string"
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "object"
