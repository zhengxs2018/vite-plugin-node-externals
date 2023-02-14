// @ts-check

/**
 * @type {import('eslint').Linter.Config}
 */
const userConfig = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  plugins: ['@typescript-eslint', 'unicorn', 'tsdoc'],
  parser: '@typescript-eslint/parser',
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': 'error',
    'unicorn/filename-case': [
      'error',
      {
        case: 'snakeCase',
        ignore: ['\\.vue$', '\\.js$', '\\.d.ts$'],
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['vite.config.ts', '**/*.test.ts', '**/*.spec.ts'] },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
  ignorePatterns: [],
}

module.exports = userConfig
