const rules = {
  '@typescript-eslint/adjacent-overload-signatures': 'error',
  '@typescript-eslint/array-type': [
    'error',
    {
      default: 'array'
    }
  ],
  '@typescript-eslint/await-thenable': 'error',
  '@typescript-eslint/ban-types': [
    'error',
    {
      types: {
        Boolean: 'Avoid using the `Boolean` type. Did you mean `boolean`?',
        Function: 'Avoid using the `Function` type. Prefer a specific function type, like `() => void`.',
        Number: 'Avoid using the `Number` type. Did you mean `number`?',
        Object: 'Avoid using the `Object` type. Did you mean `object`?',
        String: 'Avoid using the `String` type. Did you mean `string`?',
        Symbol: 'Avoid using the `Symbol` type. Did you mean `symbol`?'
      }
    }
  ],
  '@typescript-eslint/consistent-type-assertions': 'error',
  '@typescript-eslint/naming-convention': [
    'error',
    {
      custom: {
        match: false,
        regex: '^I[A-Z]'
      },
      format: ['PascalCase'],
      selector: 'interface'
    }
  ],
  '@typescript-eslint/no-dynamic-delete': 'error',
  '@typescript-eslint/no-empty-interface': 'error',
  '@typescript-eslint/no-explicit-any': 'error',
  '@typescript-eslint/no-extraneous-class': 'error',
  '@typescript-eslint/no-floating-promises': 'error',
  '@typescript-eslint/no-inferrable-types': 'error',
  '@typescript-eslint/no-misused-new': 'error',
  '@typescript-eslint/no-namespace': 'error',
  '@typescript-eslint/no-non-null-assertion': 'error',
  '@typescript-eslint/no-parameter-properties': 'error',
  '@typescript-eslint/no-this-alias': [
    'error',
    {
      allowDestructuring: true
    }
  ],
  '@typescript-eslint/no-unused-vars': 'off',
  '@typescript-eslint/prefer-for-of': 'error',
  '@typescript-eslint/promise-function-async': 'error',
  '@typescript-eslint/restrict-plus-operands': 'error',
  '@typescript-eslint/triple-slash-reference': [
    'error',
    {
      lib: 'never',
      path: 'never',
      types: 'never'
    }
  ],
  '@typescript-eslint/unified-signatures': 'error',
  'accessor-pairs': 'error',
  'block-scoped-var': 'error',
  'class-methods-use-this': 'error',
  eqeqeq: 'error',
  'for-direction': 'error',
  'guard-for-in': 'error',
  'id-length': [
    'warn',
    {
      exceptions: ['P', 'R', '$', '_'],
      max: 50,
      min: 2
    }
  ],
  'import/default': 'error',
  'import/first': ['error', 'absolute-first'],
  'import/named': 'error',
  'import/namespace': 'error',
  'import/no-cycle': 'error',
  'import/no-dynamic-require': 'error',
  'import/no-extraneous-dependencies': 'error',
  'import/no-unresolved': 'error',
  'import/order': [
    'error',
    {
      groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
      'newlines-between': 'ignore'
    }
  ],
  'max-classes-per-file': ['error', 1],
  'no-bitwise': 'error',
  'no-caller': 'error',
  'no-cond-assign': 'error',
  'no-console': 'error',
  'no-debugger': 'error',
  'no-dupe-keys': 'error',
  'no-duplicate-case': 'error',
  'no-duplicate-imports': 'error',
  'no-empty': 'error',
  'no-eval': 'error',
  'no-invalid-this': 'error',
  'no-labels': 'error',
  'no-new-wrappers': 'error',
  'no-only-tests/no-only-tests': 'error',
  'no-param-reassign': 'error',
  'no-redeclare': 'error',
  'no-return-await': 'error',
  'no-sequences': 'error',
  'no-shadow': 'error',
  'no-sparse-arrays': 'error',
  'no-template-curly-in-string': 'error',
  'no-throw-literal': 'error',
  'no-undef-init': 'error',
  'no-unneeded-ternary': 'error',
  'no-unsafe-finally': 'error',
  'no-unused-expressions': 'error',
  'no-unused-vars': 'off',
  'no-useless-catch': 'error',
  'no-var': 'error',
  'object-shorthand': 'error',
  'one-var': ['error', 'never'],
  'padding-line-between-statements': [
    'error',
    {
      blankLine: 'always',
      next: '*',
      prev: ['const', 'let', 'var']
    },
    {
      blankLine: 'any',
      next: ['const', 'let', 'var'],
      prev: ['const', 'let', 'var']
    },
    {
      blankLine: 'always',
      next: 'return',
      prev: '*'
    }
  ],
  'prefer-arrow/prefer-arrow-functions': 'error',
  'prefer-const': 'error',
  'prefer-object-spread': 'error',
  'prefer-template': 'error',
  radix: 'error',
  'sort-keys': [
    'error',
    'asc',
    {
      caseSensitive: false,
      natural: true
    }
  ],
  'use-isnan': 'error'
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['eslint-config-prettier'],
  ignorePatterns: ['**/*.config.js', '**/coverage/*', '**/dist/*'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      globalReturn: false,
      jsx: true
    },
    ecmaVersion: 2021,
    impliedStrict: true,
    project: './tsconfig.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname
  },
  plugins: ['no-only-tests', 'import', 'prefer-arrow', '@typescript-eslint'],
  rules,
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      },
      typescript: {
        alwaysTryTypes: true
      }
    }
  }
};
