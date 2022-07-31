const postcss = require("postcss");

const insideMaplat = (selector) => {
  return `.maplat ${selector}`;
}

/** @type {import('postcss').PluginCreator} */
const convoluteSelectorsPlugin = (options = {}) => {
  const maplat = postcss.rule({ selector: ".maplat" });
  return {
    postcssPlugin: "convolute-selectors",
    Rule(rule) {
      if (rule.selector === insideMaplat("html")) {
        rule.walkDecls(decl => {
          maplat.append(decl);
        });
        rule.remove();
      }

      if (rule.selector === insideMaplat("body")) {
        rule.remove();
      }
    },
    OnceExit(root) {
      root.append(maplat);
    }
  };
};
convoluteSelectorsPlugin.postcss = true;

module.exports = convoluteSelectorsPlugin;
