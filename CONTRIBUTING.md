<!-- <h1 style="display: flex; align-items: center; justify-content: space-between"> React Native Coding Standard (version 2.0.0) <img src="https://images.africanfinancials.com/ng-ibtc-logo.png" alt="stanbic_logo" width="40" height="40" /></h1> -->

# React Native Coding Standard (version 2.0.0)

## Contents

- [General Convention](#general-convention)
- [Naming Convention](#naming-convention)
- [Simplify Relative Imports](#simplify-relative-imports)
- [Documentation Convention](#documentation-convention)
- [Commiting Convention](#commiting-convention)
- [Building Animations](#building-animations)
- [Directory Structure](#directory-structure)
- [Other Standards](#other-standards)
- [Closing Notes](#closing-notes)

## General Convention

[Npm](https://npmjs.com/ "npm") is the preffered package manager, this means that [Yarn](# "yarn") should not be used for consistency and to avoid [dependency hell](https://en.wikipedia.org/wiki/Dependency_hell "hell").

Write functional components and leverage the power of hooks: Functional components are the preferred methods of constructing your components/UI, they can do almost everything class components can do (except Error Boundaries) and more. Also they minify better than classes do.

## Naming Convention

Please do note that the project has specific rules on how you structure your files, each `components/assets/utils etc...` should be modularized (contained within their own folders), also the accepted file naming convention is either `PascalCase` for files in the `components` or `screens` folders and `camelCase` otherwise.

That means let's say for a button component, it would be named as:

```shell
src/components/Button.tsx
```

and also let's say we have a custom debounce util function it would be named as:

```shell
src/utils/debounce.ts
```

Object and variable declarations should be `camelCase` while class declarations should be `PascalCase`, functions can be a mix of both e.g your functional component should be `PascalCase` and your util functions should be `camelCase`.

Also, be mindful while naming your files and folders and be very specific with the naming. The name given to a file or folder should automatically tell what that file or that folder serves in the application.
Do not have names like `MastercardScreen1`, `Screen2`, `Screen1`, `View1`, etc...

The above listed names might appear to be good but are not very specific instead have screens like `MastercardLandingScreen`, `TermsAndConditions`, `WalkthroughScreen`, etc...

## Simplify Relative Imports

Simplify your import from modules by creating an alias and specifying the paths in [babel config](./babel.config.js "babel") and [tsconfig](./tsconfig.json "tsconfig").

So imports from say let's `components` module would be transformed from:

```tsx
import { foo } from "../../../../../components/bar";
```

to:

```tsx
import { foo } from "@/components/bar";
```

That way if the folder structure changes or the components folder is moved elsewhere, you only need to update the paths in both [babel config](./babel.config.js "babel") and [tsconfig](./tsconfig.json "tsconfig") for the second example. But for the first example you'd have to go into every file where `foo` is imported to update it.

## Documentation Convention

Write documentations for your components/functions/classes, the documentation can be written in the form of multiline comments using [jsdoc tags](https://jsdoc.app/ "jsdoc tags").

This comment is used to generate a [documentation](./docs "docs") folder automatically immediately you commit your files.

To get started, here is an example doc for **`pick`** function usually seen in lodash.

````ts
/**
 * The pick function let's you select the particular
 * properties you want from a `targetObject` and returns
 * a new object with your selected properties.
 *
 * @example
 * ```ts
 * const targetObject = { a: 1, b: 2, c: 3, d: 4 };
 * const newObject = pick(targetObject, ["a", "b"]);
 * console.log(newObject); // { a: 1, b: 2}
 * ```
 */
function pick(targetObject: object, keys: string[]) {
  return keys.reduce((obj, key) => {
    if (object && object.hasOwnProperty(key)) {
      obj[key] = object[key];
    }
    return obj;
  }, {});
}
````

comment written like this wouldn't go to the documentation:

```tsx
// This comment does not go into the documentation
```

You do not have to specify the types in the jsdoc comments since the project uses typescript, but a general comment on what your `component/function/class/interface/type annotation` etc... does using appropriate tags, alonsgide an example if need be should suffice.

Checkout the [docs](https://jsdoc.app/ "jsdoc") to get an idea of the different tags you can use to add a better description.

## Commiting Convention

Your commit message should follow the conventional commits standard, that is your commit messages should be prefixed with one of these key word descriptors:

- **build**
- **chore**
- **ci**
- **docs**
- **feat**
- **fix**
- **perf**
- **refactor**
- **revert**
- **style**
- **test**

For example let's say I add a new feature for instant money transfer, I would use the keyword `feat` and add my commit message like so:

```shell
feat: added instant money Transfer
```

another example would be for a fix, let's say I fixed a bug for the keyboard avoiding view on android, my commit message would be:

```shell
fix: fixed keyboard avoiding issue on android
```

You can check the [github](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional "conventional commits") for more info or rules and conventions for your commits.

## Building Animations

To achieve smooth user experiences at `60fps` with low end devices as well as high end ones, the preffered libraries for constructing animations are:

- [React Native Moti](https://moti.fyi/ "moti"): For high level animations.
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/docs/ "reanimated"): For more detailed animations.

If you are more familiar with the API of [React Native Animatable](https://github.com/oblador/react-native-animatable "Animatable"), checkout [Layout Animations](https://docs.swmansion.com/react-native-reanimated/docs/api/LayoutAnimations/entryAnimations "Layout") by Reanimated.

> Note: `React Native Animatable` should not be used, it's based on the slower Animated API

## Directory Structure

```shell
├───src
│   ├───api
│   ├───assets
│   │   ├───fonts
│   │   ├───images
│   │   └───lottie
│   ├───components
│   │   └───ErrorBoundary
│   ├───env
│   ├───navigation
│   ├───screens
│   │   ├───@ease
│   │   ├───insurance
│   │   ├───mutualfunds
│   │   ├───mybank
│   │   ├───onepass
│   │   ├───pension
│   │   └───sme
│   ├───storage
│   │   ├───local
│   │   └───persisted
│   └───utils
│       ├───functions
│       └───hooks
└───__tests__
```

`src/api` - This is where all api call and server state are handled.

`src/assets` - This is where all media files (e.g images, videos, lottie etc...) will go to.

`src/components` - The directory will contain all the plain components. In short, these components will only do layouting and won't contain any states or business logic inside them. All the data to these components will be passed in as props.

`src/env` - This is where configurations for the app will go in. For example, your environment specific config for dev and prod, application urls, common header, etc.

`src/screens` - This directory will hold all the screen components for each module. The screen components contain business logic and UI composition based on the shared components in `src/components`

> Note: you can separate your UI layer and business logic by abstracting the business logic into custom hooks.

`src/navigation` - This is where we will keep all our app's navigation logic. This will contain the map between the different screens in each modules.

`src/storage` - This is where all configurations, types, interface etc... for both local (session) storage, and persisted storage would go to.

`src/utils` - This is where all the utility functions such as data transformation utility, data validation, reusable hooks etc... will go.

`__tests__` - This is where all test cases are written (unit and integration tests).

## Other Standards

### **Inline stylings are forbidden**

### **All stylings should be moved to a different file**

### **All constants that should be changed when moving to production must be in the .env file:**

All constants which includes API urls, desitination bank code etc... must be in the .env file. Refer [here](https://www.npmjs.com/package/react-native-dotenv "dotenv") for assistance.

### **Create multiple files instead of writing one big file:**

This standard helps us implement component-based approach and make each component maintain single resposibility.

Instead of having a large file, please break the different part of that file into different components and import those components into the file that you would like to use them. Please note that those components must reside inside the same folder as the feature you are working on.

### **Write tests for your components:**

All components must have full `unit` and `integration` tests written out for them with good coverage before generating a build and passing it down to the QA teams for `e2e` testing.

### **When you are done with a feature/fix/chore etc..., raise a PR to the maintainers for code review, at least one of the maintainers must approve your code.**

### **Your code would be judged based on the standards set above.**

> **Notes on Styling:**
> Ensure you follow the design system (typography, fonts, paddings/margins standards) as set by the product designers, this is very important to have a unified look and feel across all modules of the app.  
> <br> Also on design systems, colours should be explicitly passed to each component you are styling that would be visible. This is very important especially for Android phones like `Samsung`, `Oppo`, `Xiaomi` who all try to build their own skins and hence design systems on top of vanilla android.
> This means if you don't explicitly pass colours, the **OS** would determine it for you based on their own design system, making the app not look as designed.

## Closing Notes

> Please do ensure to follow all standards as set above, this would ensure a unified codebase and would also save your time as there are `eslint rules` enforcing these specified rules, and you might not be able to make a commit even in your own local repository if you do not follow these rules (which can be frustrating).

**_Happy Hacking :)_**
