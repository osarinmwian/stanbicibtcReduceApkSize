module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [
            ".ios.js",
            ".android.js",
            ".js",
            ".ts",
            ".tsx",
            ".json",
            ".svg",
          ],
          alias: {
            "@/shared": "./src/shared",
            "@/shared/components": "./src/shared/components",
            "@/ease": "./src/ease",
            "@/insurance": "./src/insurance",
            "@/mutualfunds": "./src/mutualfunds",
            "@/mybank": "./src/mybank",
            "@/mybank/screens": "./src/mybank/screens",
            "@/mybank/navigation": "./src/mybank/navigation",
            "@/pension": "./src/pension",
            "@/stocks": "./src/stocks",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
