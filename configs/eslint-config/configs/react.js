const typescriptEslintConfig = require("./typescript")

/** @type import("eslint-define-config").Override */
const eslintReactOverride = {
  files: ['**/*.jsx', '**/*.tsx'],
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ],
  plugins: ['react-refresh'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'import/order': [
      'warn',
      {
        pathGroups: [
          {
            pattern: '{react,react-**, **-react}',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
      },
    ],
    'react/react-in-jsx-scope': 'off',
    "react-refresh/only-export-components": 'warn'
  },
};

/** @type import("eslint-define-config").ESLintConfig */

const eslintReactConfig = {
  ...typescriptEslintConfig,
  overrides: [eslintReactOverride],
}

module.exports = eslintReactConfig

