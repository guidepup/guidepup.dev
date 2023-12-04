---
title: "Manual VoiceOver Setup"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

If [`@guidepup/setup`](https://github.com/guidepup/setup) cannot be used for your MacOS workflow, these guides instruct how to setup your MacOS environment manually for VoiceOver automation.

## Local Setup

### Allow VoiceOver To Be Controlled

This setup is required to allow VoiceOver to be controlled by Guidepup.

1. Open the "VoiceOver Utility" application.

   ![MacOS Spotlight search for "VoiceOver Utility.app".](./voiceover_utility_spotlight.png)

2. On the "General" tab, tick the checkbox "Allow VoiceOver to be controlled with AppleScript".

   ![VoiceOver Utility General Tab highlighting the last form option: a ticked checkbox for "Allow VoiceOver to be controlled with AppleScript".](./voiceover_utility_checkbox.png)

### Allow App Automation

This setup is required to allow applications, e.g. your terminal or IDE, to control other applications, i.e. VoiceOver:

<Tabs
groupId="env-flavor"
defaultValue="12"
values={[
{label: 'MacOS 12 - Monterey', value: '12'},
{label: 'MacOS 13 - Ventura', value: '13'}
]
}>
<TabItem value="12">

1. Open the "Security & Privacy" application within "System Preferences". Choose the "Privacy" tab.

   ![System Preferences application with the Security & Privacy icon button highlighted.](./system_preferences_security_and_privacy_highlight.png)

2. Select the "Accessibility" option and click on the padlock to unlock configuration. This will require you to enter an admin username and password.

   ![Security & Privacy view of System Preferences with the Privacy tab open and the Accessibility option selected. The clickable padlock at the bottom of the application is highlighted.](./security_and_privacy_accessibility_padlock.png)

3. In the "Allow the apps below to control your computer." section, use the plus "+" button to add any application that you will run a Guidepup script from - this will likely be your preferred terminal or IDE. Ensure you have also ticked the checkbox next to each application that you will run a Guidepup script from.

   ![Security & Privacy view of System Preferences with the Privacy tab open and the Accessibility option selected. The "Allow the apps below to control your computer." section is highlighted, with two applications listed: Terminal.app and Visual Studio Code.app, both with their checkboxes ticked.](./security_and_privacy_accessibility_applications.png)

</TabItem>
<TabItem value="13">

1. Open the "Privacy & Security" pane within "System Settings".

   ![System Settings application with the Privacy & Security side menu selected.](./system_settings_privacy_and_security.png)

2. Select the "Accessibility" option.

   ![Privacy & Security view of System Settings with the Accessibility tab open.](./privacy_and_security_accessibility.png)

3. In the "Allow the applications below to control your computer." section, use the plus "+" button to add any application that you will run a Guidepup script from - this will likely be your preferred terminal or IDE. This will prompt you for an administrator password. Ensure you have also ticked the checkbox next to each application that you will run a Guidepup script from.

   ![Privacy & Security view of System Settings with the Accessibility tab open. The plus "+" button below the "Allow the applications below to control your computer." section is highlighted.](./privacy_and_security_accessibility_add_highlighted.png)

   ![Privacy & Security view of System Settings with the Accessibility tab open. The "Allow the applications below to control your computer." section is highlighted, with two applications listed: Terminal.app and Visual Studio Code.app, both with their checkboxes ticked.](./privacy_and_security_accessibility_applications.png)

</TabItem>
</Tabs>

### Additional System Permissions

Depending on how you use Guidepup you may require additional "Security & Privacy" updates with "System Preferences":

- "Location Services"
- "Microphone"
- "Screen Recording"
- "Bluetooth"
- "Automation"

While using Guidepup if a system permission is required a dialog box will pop up automatically asking for the permission. Alternatively you can proactively set these permissions in the same way as the "Accessibility" settings were updated in the previous step.

## CI Setup

### Allow VoiceOver To Be Controlled

For VoiceOver to be controlled by AppleScript there is a database file and system preference default that need to be configured.

#### VoiceOver Database File

To allow VoiceOver to be controlled by AppleScript the `/private/var/db/Accessibility/.VoiceOverAppleScriptEnabled` file needs to exist and contain the character `a`.

This file can be created manually by following the steps in the guide above, by automating the manual steps from the guide above, or by creating the database file using scripts, e.g.:

```bash
# Create VoiceOver database file specifying automation is enabled
sudo bash -c 'echo -n "a" > /private/var/db/Accessibility/.VoiceOverAppleScriptEnabled'
```

> **⚠️ Warning**
>
> For the `.VoiceOverAppleScriptEnabled` file to be created in this way you must first disable [System Integrity Protection (SIP)](https://support.apple.com/en-gb/HT204899). This comes with **serious security implications**, so please first refer to the [Apple documentation](https://developer.apple.com/documentation/security/disabling_and_enabling_system_integrity_protection) for more details before taking any action. Consider whether you are able to use alternative manual setup steps for configuration before exploring this option further.
>
> SIP does not need to remain disabled once this file has been created, and so should be re-enabled once the file has been created.
>
> It is strongly advised that you use [`@guidepup/setup`](https://github.com/guidepup/setup) or the manual setup guide above for local development in preference to applying this step.

#### System Preferences

In addition to the database file you will also need to set a system preference entry:

```bash
# Update system preference defaults specifying automation is enabled
defaults write com.apple.VoiceOver4/default SCREnableAppleScript -bool true
```

This value does not require any additional steps unlike the database file.

### Allow App Automation

In order for applications (e.g. a CI terminal) to control other applications (e.g. VoiceOver) using AppleScript, updates need to be made to the `TCC.db`.

Please refer to the following examples of how to update the `TCC.db` for your desired application(s):

- [@guidepup/setup](https://github.com/guidepup/setup/blob/main/src/macOS/updateTccDb.ts) - Guidepup `TCC.db` setup
- [actions/virtual-environments](https://github.com/actions/virtual-environments/blob/main/images/macos/provision/configuration/configure-tccdb-macos11.sh) - GitHub Actions `TCC.db` setup
- [CircleCI-Public/macos-orb](https://github.com/CircleCI-Public/macos-orb/blob/main/src/commands/add-uitest-permissions.yml) - CircleCI MacOS Orb `TCC.db` setup

> **⚠️ Warning**
>
> For the system `TCC.db` updates you must first disable [System Integrity Protection (SIP)](https://support.apple.com/en-gb/HT204899). This comes with **serious security implications**, so please first refer to the [Apple documentation](https://developer.apple.com/documentation/security/disabling_and_enabling_system_integrity_protection) for more details before taking any action. Consider whether you are able to use alternative manual setup steps for configuration before exploring this option further.
>
> SIP does not need to remain disabled once these updates have been made, and so should be re-enabled once the changes are completed.
>
> It is strongly advised that you use [`@guidepup/setup`](https://github.com/guidepup/setup) or the manual setup guide above for local development in preference to applying this step.
