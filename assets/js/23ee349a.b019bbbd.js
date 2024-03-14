"use strict";(self.webpackChunk_guidepup_guidepup_dev=self.webpackChunk_guidepup_guidepup_dev||[]).push([[291],{1402:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>t,default:()=>a,frontMatter:()=>O,metadata:()=>r,toc:()=>T});var _=o(4848),E=o(8453);const O={title:"VoiceOverCommanderCommands"},t=void 0,r={id:"api/class-voiceover-commander-commands",title:"VoiceOverCommanderCommands",description:"Collection of VoiceOver Commander commands.",source:"@site/docs/api/class-voiceover-commander-commands.md",sourceDirName:"api",slug:"/api/class-voiceover-commander-commands",permalink:"/docs/api/class-voiceover-commander-commands",draft:!1,unlisted:!1,editUrl:"https://github.com/guidepup/guidepup.dev/tree/main/docs/api/class-voiceover-commander-commands.md",tags:[],version:"current",frontMatter:{title:"VoiceOverCommanderCommands"},sidebar:"api",previous:{title:"ScreenReader",permalink:"/docs/api/class-screenreader"},next:{title:"voiceOverKeyCodeCommands",permalink:"/docs/api/class-voiceover-key-code-commands"}},i={},T=[];function R(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,E.R)(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(n.p,{children:["Collection of ",(0,_.jsx)(n.a,{href:"https://support.apple.com/en-gb/guide/voiceover/cpvoukbcmdr/mac",children:"VoiceOver Commander"})," commands."]}),"\n",(0,_.jsxs)(n.p,{children:["Use with the VoiceOver ",(0,_.jsx)(n.code,{children:"perform"})," command to invoke a Commander action:"]}),"\n",(0,_.jsx)(n.pre,{children:(0,_.jsx)(n.code,{className:"language-ts",children:'import { voiceOver } from "@guidepup/guidepup";\n\n(async () => {\n  // Start VoiceOver.\n  await voiceOver.start();\n\n  // Move down.\n  await voiceOver.perform(voiceOver.commanderCommands.MOVE_DOWN);\n\n  // Stop VoiceOver.\n  await voiceOver.stop();\n})();\n'})}),"\n",(0,_.jsx)(n.p,{children:"Available Commander commands are listed below:"}),"\n",(0,_.jsx)(n.pre,{children:(0,_.jsx)(n.code,{className:"language-ts",children:'enum VoiceOverCommanderCommands {\n  // General Commands\n  ACTIONS = "actions",\n  ADD_PRONUNCIATION = "add pronunciation",\n  BRING_WINDOW_TO_FRONT = "bring window to front",\n  CLICK_MOUSE = "click mouse",\n  CLOSE_WINDOW = "close window",\n  DESCRIBE_POSITION_OF_WINDOW = "describe position of window",\n  DESCRIBE_SIZE_OF_WINDOW = "describe size of window",\n  DOUBLE_CLICK_MOUSE = "double click mouse",\n  DROP_MARKED_ITEM_AFTER_CHOSEN_HOT_SPOT = "drop marked item after chosen hot spot",\n  DROP_MARKED_ITEM_AFTER_VOICEOVER_CURSOR = "drop marked item after voiceover cursor",\n  DROP_MARKED_ITEM_BEFORE_CHOSEN_HOT_SPOT = "drop marked item before chosen hot spot",\n  DROP_MARKED_ITEM_BEFORE_VOICEOVER_CURSOR = "drop marked item before voiceover cursor",\n  DROP_MARKED_ITEM_ON_CHOSEN_HOT_SPOT = "drop marked item on chosen hot spot",\n  DROP_MARKED_ITEM_ON_VOICEOVER_CURSOR = "drop marked item on voiceover cursor",\n  ESCAPE = "escape",\n  FAST_FORWARD = "fast-forward",\n  IGNORE_NEXT_KEYPRESS = "ignore next keypress",\n  INTERACT_WITH_SCROLL_BAR = "interact with scroll bar",\n  ITEM_CHOOSER = "item chooser",\n  KEYBOARD_HELP = "keyboard help",\n  LABEL_ITEM = "label item",\n  MAGIC_TAP = "magic tap",\n  MARK_ITEM_TO_DRAG_AND_DROP = "mark item to drag and drop",\n  MORE_CONTENT = "more content",\n  MOUSE_DOWN = "mouse down",\n  MOUSE_UP = "mouse up",\n  MOVE_DOWN = "move down",\n  MOVE_LEFT = "move left",\n  MOVE_RIGHT = "move right",\n  MOVE_UP = "move up",\n  OPEN_ACTIVITY_CHOOSER = "open activity chooser",\n  OPEN_APPLICATION_CHOOSER = "open application chooser",\n  OPEN_COMMANDS_MENU = "open commands menu",\n  OPEN_CONTROL_CENTER = "open control center",\n  OPEN_NEXT_SPEECH_ATTRIBUTE_GUIDE = "open next speech attribute guide",\n  OPEN_NOTIFICATION_CENTRE = "open notification centre",\n  OPEN_PREVIOUS_SPEECH_ATTRIBUTE_GUIDE = "open previous speech attribute guide",\n  OPEN_QUICK_START_TUTORIAL = "open quick start tutorial",\n  OPEN_SHORTCUT_MENU = "open shortcut menu",\n  OPEN_THE_ANNOUNCEMENT_HISTORY_MENU = "open the announcement history menu",\n  OPEN_THE_NOTIFICATIONS_MENU = "open the notifications menu",\n  OPEN_VERBOSITY_ROTOR = "open verbosity rotor",\n  OPEN_VOICEOVER_HELP_MENU = "open voiceover help menu",\n  OPEN_VOICEOVER_UTILITY = "open voiceover utility",\n  OPEN_WINDOW_CHOOSER = "open window chooser",\n  PAUSE_OR_RESUME_SPEAKING = "pause or resume speaking",\n  PERFORM_ACTION_FOR_ITEM = "perform action for item",\n  PREVIOUS_ACTIVITY = "previous activity",\n  READ_CONTENTS_OF_VOICEOVER_CURSOR = "read contents of voiceover cursor",\n  READ_CONTENTS_OF_WINDOW = "read contents of window",\n  READ_CURRENT_ITEM_ALPHABETICALLY = "read current item alphabetically",\n  READ_CURRENT_ITEM_PHONETICALLY = "read current item phonetically",\n  READ_HELP_TAG_FOR_ITEM = "read help tag for item",\n  READ_IMAGE_DESCRIPTION_FOR_ITEM = "read image description for item",\n  READ_SELECTED_TEXT_OR_ITEM = "read selected text or item",\n  READ_VISIBLE_TEXT = "read visible text",\n  READ_VOICEOVER_HINT = "read voiceover hint",\n  REMOVE_FROM_WINDOW_SPOTS = "remove from window spots",\n  REWIND = "rewind",\n  RIGHT_CLICK_MOUSE = "right click mouse",\n  ROTOR = "rotor",\n  SELECT_ITEM = "select item",\n  SELECT_NEXT_OPTION_DOWN_IN_SPEECH_ATTRIBUTE_GUIDE = "select next option down in speech attribute guide",\n  SELECT_NEXT_OPTION_UP_IN_SPEECH_ATTRIBUTE_GUIDE = "select next option up in speech attribute guide",\n  SET_AS_A_WINDOW_SPOT = "set as a window spot",\n  SET_THE_SWEET_SPOT = "set the sweet spot",\n  START_INTERACTING_WITH_ITEM = "start interacting with item",\n  STOP_INTERACTING_WITH_ITEM = "stop interacting with item",\n  TOGGLE_CURSOR_TRACKING_ON_OR_OFF = "toggle cursor tracking on or off",\n  TOGGLE_DISCLOSURE_TRIANGLE_OPEN_OR_CLOSED = "toggle disclosure triangle open or closed",\n  TOGGLE_KEYBOARD_COMMANDER_ON_OR_OFF = "toggle keyboard commander on or off",\n  TOGGLE_MULTIPLE_SELECTION_ON_OR_OFF = "toggle multiple selection on or off",\n  TOGGLE_NUMPAD_COMMANDER_ON_OR_OFF = "toggle numpad commander on or off",\n  TOGGLE_QUICK_NAV_ON_OR_OFF = "toggle quick nav on or off",\n  TOGGLE_SCREEN_CURTAIN_ON_OR_OFF = "toggle screen curtain on or off",\n  TOGGLE_SINGLE_KEY_QUICK_NAV_ON_OR_OFF = "toggle single-key quick nav on or off",\n  TOGGLE_THE_VO_MODIFIER_LOCK_ON_OR_OFF = "toggle the vo modifier lock on or off",\n  TOGGLE_TRACKPAD_COMMANDER_ON_OR_OFF = "toggle trackpad commander on or off",\n  USER_GUIDE = "user guide",\n\n  // Information Commands\n  DESCRIBE_ITEM_IN_MOUSE_POINTER = "describe item in mouse pointer",\n  DESCRIBE_ITEM_IN_VOICEOVER_CURSOR = "describe item in voiceover cursor",\n  DESCRIBE_ITEM_WITH_KEYBOARD_FOCUS = "describe item with keyboard focus",\n  DESCRIBE_MOUSE_POINTER_LOCATION_FROM_TOP_LEFT_OF_SCREEN = "describe mouse pointer location (from top left of screen)",\n  DESCRIBE_MOUSE_POINTER_LOCATION_FROM_TOP_LEFT_OF_WINDOW = "describe mouse pointer location (from top left of window)",\n  DESCRIBE_OPEN_APPLICATIONS = "describe open applications",\n  DESCRIBE_POSITION_OF_ITEM_IN_VOICEOVER_CURSOR = "describe position of item in voiceover cursor",\n  DESCRIBE_SIZE_OF_ITEM_IN_VOICEOVER_CURSOR = "describe size of item in voiceover cursor",\n  DESCRIBE_WINDOW = "describe window",\n\n  // Navigation Commands\n  GO_DOWN_ONE_PAGE = "go down one page",\n  GO_LEFT_A_BIT = "go left a bit",\n  GO_LEFT_ONE_PAGE = "go left one page",\n  GO_RIGHT_A_BIT = "go right a bit",\n  GO_RIGHT_ONE_PAGE = "go right one page",\n  GO_TO_BEGINNING = "go to beginning",\n  GO_TO_BOTTOM_OF_WINDOW = "go to bottom of window",\n  GO_TO_DESKTOP = "go to desktop",\n  GO_TO_DOCK = "go to dock",\n  GO_TO_END = "go to end",\n  GO_TO_LINKED_ITEM = "go to linked item",\n  GO_TO_MENU_BAR = "go to menu bar",\n  GO_TO_POP_UP_ITEM = "go to pop-up item",\n  GO_TO_STATUS_MENUS = "go to status menus",\n  GO_TO_TOP_OF_WINDOW = "go to top of window",\n  GO_TO_VISIBLE_BEGINNING = "go to visible beginning",\n  GO_TO_VISIBLE_END = "go to visible end",\n  GO_UP_ONE_PAGE = "go up one page",\n  MOVE_DOWN_IN_ROTOR = "move down in rotor",\n  MOVE_KEYBOARD_FOCUS_TO_VOICEOVER_CURSOR = "move keyboard focus to voiceover cursor",\n  MOVE_MOUSE_POINTER_TO_VOICEOVER_CURSOR = "move mouse pointer to voiceover cursor",\n  MOVE_TO_AREA_AFTER_SPLITTER = "move to area after splitter",\n  MOVE_TO_AREA_BEFORE_SPLITTER = "move to area before splitter",\n  MOVE_TO_NEXT_SECTION = "move to next section",\n  MOVE_TO_PREVIOUS_SECTION = "move to previous section",\n  MOVE_UP_IN_ROTOR = "move up in rotor",\n  MOVE_VOICEOVER_CURSOR_TO_KEYBOARD_FOCUS = "move voiceover cursor to keyboard focus",\n  MOVE_VOICEOVER_CURSOR_TO_MOUSE_POINTER = "move voiceover cursor to mouse pointer",\n  NEXT_CONTENT = "next content",\n  NEXT_ROTOR_ITEM = "next rotor item",\n  PREVIOUS_CONTENT = "previous content",\n  PREVIOUS_ROTO_ITEM = "previous rotor item",\n  ROTATE_LEFT = "rotate left",\n  ROTATE_RIGHT = "rotate right",\n  SCROLL_DOWN_ONE_PAGE = "scroll down one page",\n  SCROLL_LEFT_ONE_PAGE = "scroll left one page",\n  SCROLL_RIGHT_ONE_PAGE = "scroll right one page",\n  SCROLL_UP_ONE_PAGE = "scroll up one page",\n  SPEAK_CURRENT_PAGE_IN_SCROLL_AREA = "speak current page in scroll area",\n  SWITCH_WINDOW = "switch window",\n  TOGGLE_VOICEOVER_CURSOR_FOLLOWS_MOUSE_ON_OR_OFF = "toggle voiceover cursor follows mouse on or off",\n\n  // Text Commands\n  READ_CURRENT_CHARACTER = "read current character",\n  READ_CURRENT_CHARACTER_PHONETICALLY = "read current character phonetically",\n  READ_CURRENT_LINE = "read current line",\n  READ_CURRENT_PARAGRAPH = "read current paragraph",\n  READ_CURRENT_SENTENCE = "read current sentence",\n  READ_CURRENT_WORD = "read current word",\n  READ_CURRENT_WORD_ALPHABETICALLY = "read current word alphabetically",\n  READ_CURRENT_WORD_PHONETICALLY = "read current word phonetically",\n  READ_FROM_BEGINNING_TO_VOICEOVER_CURSOR = "read from beginning to voiceover cursor",\n  READ_NEXT_CHARACTER = "read next character",\n  READ_NEXT_LINE = "read next line",\n  READ_NEXT_PARAGRAPH = "read next paragraph",\n  READ_NEXT_SENTENCE = "read next sentence",\n  READ_NEXT_WORD = "read next word",\n  READ_PREVIOUS_CHARACTER = "read previous character",\n  READ_PREVIOUS_LINE = "read previous line",\n  READ_PREVIOUS_PARAGRAPH = "read previous paragraph",\n  READ_PREVIOUS_SENTENCE = "read previous sentence",\n  READ_PREVIOUS_WORD = "read previous word",\n  READ_TEXT_ATTRIBUTES = "read text attributes",\n  SELECT_ALL = "select all",\n  SELECT_LEFT_OF_THE_CURSOR = "select left of the cursor",\n  SELECT_RIGHT_OF_THE_CURSOR = "select right of the cursor",\n  SELECT_TEXT = "select text",\n  SELECT_TEXT_IN_VOICEOVER_CURSOR = "select text in voiceover cursor",\n  TOGGLE_TEXT_SPOKEN_ALL_OR_MOST_RECENT = "toggle text spoken all or most recent",\n  UNSELECT_TEXT = "unselect text",\n\n  // Web Commands\n  ALWAYS_ALLOW_KEYBOARD_COMMANDS_TO_NAVIGATE_WEBSITES = "always allow keyboard commands to navigate websites",\n  FIND_NEXT_AUTO_WEB_SPOT = "find next auto web spot",\n  FIND_NEXT_BUTTON = "find next button",\n  FIND_NEXT_COLUMN = "find next column",\n  FIND_NEXT_FRAME = "find next frame",\n  FIND_NEXT_LANDMARK = "find next landmark",\n  FIND_NEXT_LIVE_REGION = "find next region",\n  FIND_NEXT_RADIO_GROUP = "find next group",\n  FIND_NEXT_TEXT_FIELD = "find next field",\n  FIND_NEXT_TICKBOX = "find next tickbox",\n  FIND_NEXT_WEB_SPOT = "find next web spot",\n  FIND_PREVIOUS_ = "find previous auto web spot",\n  FIND_PREVIOUS_BUTTON = "find previous button",\n  FIND_PREVIOUS_COLUMN = "find previous column",\n  FIND_PREVIOUS_FRAME = "find previous frame",\n  FIND_PREVIOUS_LANDMARK = "find previous landmark",\n  FIND_PREVIOUS_REGION = "find previous region",\n  FIND_PREVIOUS_GROUP = "find previous group",\n  FIND_PREVIOUS_FIELD = "find previous field",\n  FIND_PREVIOUS_TICKBOX = "find previous tickbox",\n  FIND_PREVIOUS_WEB_SPOT = "find previous web spot",\n  READ_LINK_ADDRESS = "read link address",\n  READ_WEB_PAGE_STATISTICS = "read web page statistics",\n  REMOVE_WEB_SPOT = "read web spot",\n  SET_WEB_SPOT = "set web spot",\n  TOGGLE_INSERTION_POINT_NAVIGATION = "toggle insertion point navigation",\n  TOGGLE_LIVE_REGION = "toggle live region",\n  TOGGLE_TABLE_INTERACTABILITY = "toggle table interactability",\n  TOGGLE_TABLE_ROW_AND_COLUMN_INDICES = "toggle table row and column indices",\n  TOGGLE_WEB_NAVIGATION_DOM_OR_GROUP = "toggle web navigation dom or group",\n}\n'})})]})}function a(e={}){const{wrapper:n}={...(0,E.R)(),...e.components};return n?(0,_.jsx)(n,{...e,children:(0,_.jsx)(R,{...e})}):R(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>t,x:()=>r});var _=o(6540);const E={},O=_.createContext(E);function t(e){const n=_.useContext(O);return _.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(E):e.components||E:t(e.components),_.createElement(O.Provider,{value:n},e.children)}}}]);