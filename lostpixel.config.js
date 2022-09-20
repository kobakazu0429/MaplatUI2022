module.exports = /** @type {import("lost-pixel").CustomProjectConfig} */ ({
  storybookShots: {
    storybookUrl: './storybook-static',
  },
  generateOnly: true,
  failOnDifference: true,
  threshold: 0.1
});
