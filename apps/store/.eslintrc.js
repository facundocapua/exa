module.exports = {
  root: true,
  extends: ["@repo/eslint-config/next.js"],
  parser: '@typescript-eslint/parser',
  rules: {
    'react/react-in-jsx-scope': 'off'
  },
  parserOptions: {
    project: "./tsconfig.lint.json",
    tsconfigRootDir: __dirname,
  },
  globals: {
    google: 'readonly'
  }
}
