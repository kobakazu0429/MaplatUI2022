module.exports = {
  "extends": "stylelint-config-standard-scss",
  "rules": {
    "color-hex-length": "long",
    "color-hex-case": "upper",
    "font-family-name-quotes": "always-where-recommended",
    "declaration-empty-line-before": null,
    "at-rule-disallowed-list": ["extend"],
    "scss/dollar-variable-empty-line-before": null,
    "value-keyword-case": null,
    "color-function-notation": "legacy", // scss does not support CSS Color Module Level 4 yet
    "declaration-block-no-redundant-longhand-properties": [true, { ignoreShorthands: ["padding", "grid", "grid-template", "flex-flow"] }],
    "selector-pseudo-class-no-unknown": [true, { ignorePseudoClasses: ["export"] }],
    "property-no-unknown": [true, { ignoreSelectors: [":export"] }],
    "custom-property-pattern": "maplat-.+",
  }
};
