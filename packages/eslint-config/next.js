const { resolve } = require('node:path')

const project = resolve(process.cwd(), 'tsconfig.json')

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    'eslint:recommended',
    'prettier',
    require.resolve('@vercel/style-guide/eslint/next'),
    'plugin:react/recommended',
    'eslint-config-turbo',
    'standard'
  ],
  globals: {
    React: true,
    JSX: true
  },
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  plugins: [
    'only-warn',
    'react',
    '@typescript-eslint'
  ],
  settings: {
    'import/resolver': {
      typescript: {
        project
      }
    }
  },
  ignorePatterns: [
    // Ignore dotfiles
    '.*.js',
    'node_modules/'
  ],
  overrides: [{ files: ['*.js?(x)', '*.ts?(x)'] }],
  rules: {
    'react/jsx-indent': [
      'error',
      2
    ]
  }
}
