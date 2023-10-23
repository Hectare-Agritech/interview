module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  ignorePatterns: [
    '**/node_modules/*',
    '**/.git/*',
    '**/.github/*',
    '**/.vscode/*'
  ],
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'max-len': ['error', { code: 180 }],
    'generator-star-spacing': ['error', {'before': true, 'after': true}]
  }
}
