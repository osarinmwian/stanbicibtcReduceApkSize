function getAliasesFromTsConfig() {
  const tsConfig = require("./tsconfig.json");
  const paths = tsConfig.compilerOptions.paths;
  let alias = {};
  Object.keys(paths).forEach((key) => {
    alias[key] = `${paths[key][0]}`;
  });

  return alias;
}

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@/stanbic/components": "./src/shared/components",
            "@/stanbic": "./src/shared",
            "@/ease": ["./src/@ease"],
            "@/insurance": "./src/insurance",
            "@/mutualfunds": "./src/mutualfunds",
            "@/mybank": "./src/mybank",
            "@/pension": "./src/pension",
            "@/stocks": "./src/stocks",
          },
          extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
          root: ["./src"],
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
