module.exports = {
  env: {
    node: true,
    es2021: true,
    jest: true
  },
  extends: [
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    'semi': ['error', 'always'],
    'no-unused-vars': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'space-before-function-paren': ['error', 'always'],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'no-console': 'warn',
    'eqeqeq': ['error', 'always'],
    'consistent-return': 'error',
    'comma-dangle': ['error', 'never'],
  }
};
