module.exports = {
  root: true,
  extends: ['@react-native', 'eslint-config-prettier', 'prettier'],

  plugins: ['prettier'],

  rule: {
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/array-type': 'error',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

    'prettier/prettier': [
      'warn',
      {
        bracketSameLine: true,
        singleQuote: true,

        arrowParens: 'always',
        semi: false,
        trailingComma: 'none',
        tabWidth: 2,
        endOfLine: 'auto',
        useTabs: false,
        printWidth: 120,
        jsxSingleQuote: true
      }
    ]
  }
}
