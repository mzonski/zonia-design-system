const prettierConfig = require('zonia-config-prettier');

const sharedRules = {
  'plugin/no-low-performance-animation-properties': true,
  'selector-max-id': [
    0,
    {
      ignoreContextFunctionalPseudoClasses: [":not", "/^:(h|H)as$/"]
    }
  ],
  'max-nesting-depth': null,
  'at-rule-empty-line-before': null,
  'declaration-block-no-redundant-longhand-properties': null,
  'selector-max-compound-selectors': null,
  'color-named': null,
};

const sharedPlugins = [
  'stylelint-high-performance-animation',
  'stylelint-order',
];

const sharedExtensions = [
  'stylelint-config-clean-order',
  'stylelint-a11y/recommended'
];

const scssConfig = {
  plugins: sharedPlugins,
  extends: ['stylelint-config-standard-scss', 'stylelint-config-sass-guidelines', ...sharedExtensions],
  rules: sharedRules,
};

module.exports = scssConfig;
