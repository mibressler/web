module.exports = {
  extends: ['next', 'next/core-web-vitals', 'prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^(_)+', varsIgnorePattern: '^(_)+' },
        ],
      },
    },
  ],
};
