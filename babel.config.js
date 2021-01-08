module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          ie: "11",
        },
        corejs: "2.6.12",
        useBuiltIns: 'usage'
      },
    ],
  ],
  plugins: ["@babel/plugin-transform-runtime"],
};
