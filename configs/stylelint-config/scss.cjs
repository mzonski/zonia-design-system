const prettierConfig = require('@cfg/prettier-config');

const sharedRules = {
  'plugin/no-low-performance-animation-properties': true,
  'plugin/no-unsupported-browser-features': [
    true,
    {
      browsers: ["> 10%"],
      severity: 'warning',
    },
  ],
  'prettier/prettier': [true, prettierConfig]
}

const sharedPlugins = [
  'stylelint-high-performance-animation',
  'stylelint-no-unsupported-browser-features',
  'stylelint-order',
]

const sharedExtensions = [
  'stylelint-config-clean-order',
  'stylelint-a11y/recommended',
  'stylelint-prettier/recommended',
]

const scssConfig = {
  plugins: sharedPlugins,
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-sass-guidelines',
    ...sharedExtensions
  ],
  rules: sharedRules,
};

module.exports = scssConfig;
