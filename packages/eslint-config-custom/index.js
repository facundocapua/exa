module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'next',
    'turbo',
    'prettier',
    'plugin:react/recommended',
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module',
    babelOptions: {
      // presets: [require.resolve('next/babel')],
    }
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  globals: {
    JSX: 'readonly'
  },
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'react/react-in-jsx-scope': 'off',
    // indent: 'off',
    'no-unused-vars': 'off',
    'react/prop-types': 'off',
    'react/jsx-indent': [
      'error',
      2
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true }
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        disallowTypeAnnotations: true
      }
    ],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'turbo/no-undeclared-env-vars': {
      allowList: ['NEXT_PUBLIC_*']
    }
  }
}
