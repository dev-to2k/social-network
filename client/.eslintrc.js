module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'prettier', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier', 'react'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    semi: ['error', 'always'],
    'import/no-dynamic-require': 0,
    'global-require': 0,
    'object-curly-newline': 0,
    'no-console': [0, 'false'],
    'no-underscore-dangle': 0,
    'max-len': 0,
    'react/jsx-one-expression-per-line': 0,
    'function-call-argument-newline': 0,
    'import/no-unresolved': 0,
    'no-nested-ternary': 0,
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'jsx-a11y/label-has-for': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'react/react-in-jsx-scope': 0,
    'comma-dangle': 0,
    'react/prop-types': 0,
  },
};
