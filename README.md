# `eslint-config-ts-mailonline`

[![NPM version](http://img.shields.io/npm/v/eslint-config-ts-mailonline.svg?style=flat-square)](https://www.npmjs.org/package/eslint-config-ts-mailonline)
[![Travis build status](http://img.shields.io/travis/MailOnline/eslint-config-ts-mailonline/master.svg?style=flat-square)](https://travis-ci.org/MailOnline/eslint-config-ts-mailonline)

MailOnline ESlint Typescript configuration.

## Usage

1. Add `eslint-config-ts-mailonline`, `eslint`, `typescript`, `prettier`, `husky`, and `pretty-quick` as development dependencies:

```bash
yarn add --dev eslint-config-ts-mailonline eslint typescript prettier husky pretty-quick
```

2. Create a `tsconfig.eslint.json` file (this is a technicality due to the way the eslint typescript parser works):

```json
{
  "compilerOptions": {"strict": true},
  "include": ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules", "dist", "coverage"]
}
```

3. Create ESLint configuration file (`.eslintrc.json`) that extends `ts-mailonline`:

```json
{
  "extends": ["ts-mailonline", "ts-mailonline/react"],
  "parserOptions": {
    "project": "./tsconfig.eslint.json"
  }
}
```

4. Create `prettier.config.js` on the root of your project with these contents:

```js
module.exports = require('eslint-config-ts-mailonline/prettier');
```

5. Create an `.eslintignore` file:

```
bin/
dist/
coverage/
dev/
node_modules/
*.css.d.ts
```

6. Add the following script command to your `package.json`:

```json
{
  "lint": "tsc --noEmit && eslint './**/*.{js,jsx,ts,tsx}'"
}
```

7. Add the following pre-commit hook to your `package.json`:

```json
"husky": {
  "hooks": {
    "pre-commit": "pretty-quick --staged && yarn run lint"
  }
}
```

## Breaking changes

Any changes to this package that might cause code using it to not validate anymore, will be a semver-major change.
