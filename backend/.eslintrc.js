/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable indent */ module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb-base', 'plugin:security/recommended'],
  plugins: ['prettier', 'security'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    camelcase: 'off',
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '_',
      },
    ],
    'comma-dangle': 'off',
    indent: [2, 2],
    'operator-linebreak': 'off',
  },
};
