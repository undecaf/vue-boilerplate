module.exports = {
  root: true,

  env: {
    browser: true,
    es6: true,
    mocha: true,
  },

  extends: [
    'plugin:vue/base',
    'plugin:vue/essential',
    'plugin:vue/strongly-recommended',
    'plugin:vue/recommended'
  ],

  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },

  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 9,
    sourceType: 'module',
  },

  plugins: [
    'vue',
    'html',
  ],

  rules: {
    semi: 'off',
  },
}
