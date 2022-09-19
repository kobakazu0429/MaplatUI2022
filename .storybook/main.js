const path = require("path");
const postcssPseudoClassesPlugin = require("postcss-pseudo-classes");
const convoluteSelectorsPlugin = require("../postcssPlugins/convoluteSelectorsPlugin.js");

module.exports = /** @type {import("@storybook/core-common").StorybookConfig} */ ({
  stories: [
    "../src/**/*.stories.@(ts|tsx)"
  ],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@ergosign/storybook-addon-pseudo-states-html",
    "@ergosign/storybook-addon-pseudo-states-html/preset-postcss",
  ],
  framework: "@storybook/html",
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
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
              plugins: [
                postcssPseudoClassesPlugin({ blacklist: [":export"] }),
                convoluteSelectorsPlugin
              ],
            },
          },
        },
        "resolve-url-loader",
        {
          loader: "sass-loader",
          options: {
            sourceMap: true,
          },
        },
      ],
      include: path.resolve(__dirname, "../"),
    });

    return config;
  },
});
