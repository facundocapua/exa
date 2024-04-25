module.exports = {
  root: true,
  extends: ["@repo/eslint-config/next.js"],
  parser: '@typescript-eslint/parser',
  rules: {
    'react/react-in-jsx-scope': 'off'
  },
  globals: {
    google: 'readonly'
  }
}
