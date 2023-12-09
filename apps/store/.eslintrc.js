module.exports = {
  root: true,
  extends: ['eslint-config-custom/next.js'],
  parser: '@typescript-eslint/parser',
  rules: {
    'react/react-in-jsx-scope': 'off'
  },
  globals: {
    google: 'readonly'
  }
}
