module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint'
  ],
  rules: {
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/interface-name-prefix': [
      'error',
      {
        prefixWithI: 'always'
      }
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        allowExpressions: true
      }
    ],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
    'eol-last': ['error', 'always'],
    'no-unneeded-ternary': 'error',
    'dot-notation': 'error',
    eqeqeq: 'error',
    'no-else-return': 'error',
    'no-use-before-define': 'error',
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'no-var': 'error'
  }
};
