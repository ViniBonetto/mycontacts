module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-console': 'off',
    'linebreak-style': 'off',
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'no-promise-executor-return': 'off',
    camelcase: 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
  },
};
