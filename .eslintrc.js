const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8')
);

module.exports = {
  root: true,
  extends: ['react-app', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        ...prettierOptions,
        endOfLine: 'auto',
      },
    ],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-unused-vars': 'warn',
  },
  overrides: [
    {
      files: ['**/*.js?(x)', '**/*.ts?(x)'],
      rules: {
        'prettier/prettier': ['warn', prettierOptions],
        'react-hooks/exhaustive-deps': 'warn',
      },
    },
  ],
};
