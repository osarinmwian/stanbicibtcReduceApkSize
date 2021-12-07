# Stanbic IBTC Mobile App

## Welcome

Welcome to the repository for Stanbic IBTC Mobile App, to clone the project run:

```shell
git clone https://stanbicibtcdev.visualstudio.com/MobileBanking.FrontEnd.Contributors/_git/NewMobileBanking.Frontend.Project
```

Then install the dependencies using yarn:

```shell
yarn install
```

[Yarn](https://classic.yarnpkg.com/en/ "yarn") is the preffered package manager, the project uses expo bare configurations of which it's default tooling is built around `yarn`. Also for consistency and to avoid [dependency hell](https://en.wikipedia.org/wiki/Dependency_hell "hell").

> Important: Some of the packages depend on node engines `12.22.0` or `14.17.0` or `>=16.0.0`

If your current node engine version is not the same as one of the above, kindly update or a temporal fix would be to run:

```shell
yarn config set ignore-engines true
```

# Contributing

Please do note that the project has specific rules on how you structre your files, each `components/assets/utils etc...` should be modularized (contained within their own folders), also the accepted file naming convention is either `PascalCase` for `components/screens` etc.. and `camelCase` otherwise.

Checkout the [eslint](./.eslintrc.js "eslint") for more insights on the rules/conventions.

## Building Animations

To achieve a smooth user experience at `60fps` with low end devices as well as high end ones, the preffered libraries for constructing animations are:

- [React Native Moti](https://moti.fyi/ "moti"): For high level animations.
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/docs/ "reanimated"): For more detailed animations.

## Simplify Relative Imports

Simplify your import from local modules by creating an alias and specifying the paths in [babel config](./babel.config.js "babel") and [tsconfig](./tsconfig.json "tsconfig").

So imports from say `components` would be transformed from:

```tsx
import { foo } from "../../../../../components/bar";
```

To:

```tsx
import { foo } from "@/components/bar";
```

That way if the folder structure changes, you only need to update the paths in both [babel config](./babel.config.js "babel") and [tsconfig](./tsconfig.json "tsconfig") for the second example. But for the first example you'd have to go into every file where `bar` is imported to update it.
