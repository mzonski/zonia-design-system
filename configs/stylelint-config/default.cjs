const prettierConfig = require("@cfg/prettier-config");
const sharedRules = {
  'plugin/no-low-performance-animation-properties': true,
  'plugin/no-unsupported-browser-features': [
    true,
    {
      browsers: ["> 1%", "Last 2 versions"],
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
  'stylelint-a11y/recommended',
  'stylelint-prettier/recommended',
  'stylelint-config-clean-order',
]

const defaultConfig = {
    plugins: sharedPlugins,
    extends: [
        'stylelint-config-standard',
        ...sharedExtensions
    ],
    rules: sharedRules,
};

module.exports = defaultConfig;
