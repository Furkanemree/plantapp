module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ["react-native-reanimated/plugin"],
      [
        require.resolve("babel-plugin-module-resolver"),
        {
          root: ["./"],
          extensions: [".ios.js", ".android.js", ".ts", ".tsx", ".jsx", ".js", ".svg"],
          alias: {
            assets: "./assets",
          }
        }
      ]
    ],
  };
};
