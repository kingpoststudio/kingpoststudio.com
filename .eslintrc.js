module.exports = {
  extends: ['airbnb'],
  plugins: ['@typescript-eslint', 'react'],
  parser: '@typescript-eslint/parser',
  rules: {
    'global-require': 0,
    'no-underscore-dangle': 0,
    'no-useless-constructor': 0,
    'linebreak-style': 0,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
    ],
    'import/extensions': [
      'error',
      'never',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 0,
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': [1, {
      extensions: [
        '.jsx',
        '.tsx',
        '.ts',
      ],
    }],
  },
};
