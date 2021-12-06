# Stanbic IBTC Mobile App Revamp

## Welcome

Welcome to the new repository for Stanbic IBTC Mobile App, to clone the project run:

```shell
git clone https://stanbicibtcdev.visualstudio.com/MobileBanking.FrontEnd.Contributors/_git/NewMobileBanking.Frontend.Project
```

Then install the dependencies using yarn:

```shell
yarn install
```

> Note: [Yarn](https://classic.yarnpkg.com/en/ "yarn") is the preffered package manager, the project uses expo bare configurations of which it's tooling is built around `yarn`, and also for consistency.

## Contributing

Please do note that the project has specific rules on how you structre your files, each `component/assets/utils etc...` should be modularized (contained within their own folders), also the accepted file naming convention is either `PascalCase` for `coponents/screens` etc.. and `camelCase` otherwise.

Checkout the [eslint](./.eslintrc.js) for more insights on the rules/conventions.

> Important: Some of the packages depend on node engines `12.22.0` or `14.17.0` or `>=16.0.0`

If you current node engine version is not the same as one of the above, kindly update or a temporal fix would be to run:

```shell
yarn config set ignore-engines true
```
