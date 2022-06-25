const removeExportPlugin = (options = {}) => {
  return {
    postcssPlugin: "remove-export",
    Rule(rule) {
      /** Targets
       * :export {}
       * .maplat :export {}
       */
      if (rule.selector.endsWith(":export")) {
        rule.remove();
      }
    }
  };
};
removeExportPlugin.postcss = true;

module.exports = removeExportPlugin;
