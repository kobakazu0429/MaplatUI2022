const path = require("path");
const convoluteSelectorsPlugin = require("../postcssPlugins/convoluteSelectorsPlugin.js");

module.exports = {
  "stories": [
    "../src/**/*.stories.@(ts|tsx)"
  ],
  "staticDirs": ['../public'],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/html",
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              mode: "local",
              localIdentName: "[local]",
              exportOnlyLocals: false,
            }
          },
        },
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [convoluteSelectorsPlugin],
            },
          },
        },
        "resolve-url-loader",
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    });

    return config;
  },
};
