const postcss = require("postcss");

const convoluteSelectorsPlugin = (options = {}) => {
  const maplat = postcss.rule({ selector: ".maplat" });
  return {
    postcssPlugin: "convolute-selectors",
    Rule(rule) {
      if (rule.selector.endsWith("html")) {
        rule.walkDecls(decl => {
          maplat.append(decl);
        });
        rule.remove();
      }

      if (rule.selector.endsWith("body") ||
        rule.selector.endsWith("main")) {
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
