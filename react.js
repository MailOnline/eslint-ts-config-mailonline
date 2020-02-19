const rules = {
  'react/jsx-key': 'error',
  'react/no-deprecated': 'error',
  'react/no-direct-mutation-state': 'error',
  'react/no-string-refs': 'error',
  'react/no-unsafe': 'error',
  'react/self-closing-comp': 'error'
};

module.exports = {
  plugins: ['react'],
  rules,
  settings: {
    react: {
      version: 'detect'
    }
  }
};
