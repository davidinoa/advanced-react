module.exports = {
  env: {
    es2021: true,
  },
  extends: ['airbnb', 'airbnb-typescript'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/prefer-default-export': 'off',
    'object-curly-newline': 'off',
    'react/prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'operator-linebreak': 'off',
    'implicit-arrow-linebreak': 'off',
  },
};
