## Brokazy _(React Native Test Project)_

The task was to complete the implementation of a Subscription Plan Screen for a mobile application. The goal was to create a user-friendly interface that allows users to select and subscribe to different plans offered by a fictional service provider. We were provided with a basic project structure, wireframes, and some code stubs to get you started

[App Demo](https://s11.gifyu.com/images/S4xSo.gif)

<img src="./src/assets/images/brokazy.gif?raw=true" width="200px">

## Contents

- [Requirements](#-requirements)
- [Assumptions](#-assumptions)
- [How to Install dependencies and run](#-how-to-install-dependencies-and-run)

## Requirements

- Implement the provided wireframes and design mockups for the Subscription Plan Screen. Ensure that the design is responsive and looks good on different screen sizes.
- Populate the subscription plans dynamically from a JSON file. Create a sample JSON file with plan details like name, price, features, and duration. Display these plans on the screen using a scrollable list.
- Allow users to select a subscription plan by tapping on it. Selected plans should be visually distinguishable from unselected plans (e.g., change the background color or add a checkmark). Implement the logic to allow only one plan to be selected at a time. If a user selects a new plan, it should automatically deselect the previously selected one.
- Display the plan's name, price, features, duration, and any other relevant information. Implement a modal that displays detailed information about the selected plan when the user taps on it. Include a "Subscribe" button in the modal.
- When the user taps the "Subscribe" button in the modal, displays a confirmation message. You don't need to implement the actual subscription process; just show a success message.
- Add appropriate navigation between the Subscription Plan Screen and other parts of the app (e.g., a Home screen or a Profile screen). Use React Navigation or a similar library for navigation.

#### Assumptions

In addition to the outlined requirements, the project assumes the following:

- No code stub was provided with this assignment so we assume that we would need to create a new react native repo from scratch.

- Activate/Update Plan: It is assumed that there is an option on the Subscription Plan Screen to "Activate/Update Plan," which, when clicked, navigates to the "Card Details" screen as was mentioned in the wireframe.

- Modal for Subscription Plan Information: Clicking on any subscription plan opens a modal that displays information related to that plan with a subscribe button as mentioned in the requirements.

## Prerequisites

- Ruby (ruby 3.2.1)
- Node js (version 18 or higher)
- Setup the development environment first.
- [React Native CLI environment setup](https://reactnative.dev/docs/environment-setup)

## How to install dependencies and run

- Clone the repository:

```
git clone https://github.com/usmanasifzai/brokazy
```

- Go to the project directory:

```
cd brokazy
```

- Install dependencies:

```
yarn install
```

- Go to the ios directory:

```
cd ios && pod install && cd ..
```

- Run on Android:

```
yarn android
```

- Run on Ios:

```
yarn ios
```

## Setup Guide for Android

Once the android development environment setup is completed

- Run `yarn android`

Or you can install and setup android studio.
Then Follow these steps:

- Open `project > android` folder in android studio
- Let android studio build all the gradle files and compile the project for android environment
- Connect your android device or select an android emulator and start the project
- Android studio will compile, build, and install the app

## Setup Guide for iOS

[You need a MAC to run this application on iOS](ttps://reactnative.dev/docs/environment-setup)
Once the iOS development environment setup is completed

- Run `yarn ios`

Or you can install and setup XCode on MAC.
Then Follow these steps:

- Open `project > ios > brokazy.xcworkspace` in XCode
- Connect your iOS device or select an iOS emulator and start the project
- XCode will compile, build, and install the app

## Testing

We have use jest and testing-library/react-native to write the test cases and to run the test cases

```
yarn test
```

## Download APK

You can download APK from [here](https://drive.google.com/file/d/13G8tPQB_ySkDE4j6HHCV8wKjNAvd5DtT/view?usp=sharing)
