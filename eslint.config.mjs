// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import unusedImports from 'eslint-plugin-unused-imports';
import importPlugin from 'eslint-plugin-import';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default tseslint.config(
    {
      ignores: ['eslint.config.mjs'],
    },

    eslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    eslintPluginPrettierRecommended,

    {
      plugins: {
        'unused-imports': unusedImports,
        import: importPlugin,
      },

      languageOptions: {
        globals: {
          ...globals.node,
          ...globals.jest,
        },
        ecmaVersion: 2021,
        sourceType: 'module',
        parserOptions: {
          projectService: true,
          tsconfigRootDir: import.meta.dirname,
        },
      },

      rules: {
        'no-console': 'off',
        'prettier/prettier': 'warn',


        '@typescript-eslint/no-wrapper-object-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-unsafe-argument': 'warn',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            args: 'after-used',
            ignoreRestSiblings: false,
            argsIgnorePattern: '^_.*?$',
          },
        ],

        'no-unused-vars': 'off',
        'unused-imports/no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'warn',

        'import/order': [
          'warn',
          {
            groups: ['type', 'builtin', 'object', 'external', 'internal', 'parent', 'sibling', 'index'],
            pathGroups: [
              {
                pattern: '~/**',
                group: 'external',
                position: 'after',
              },
            ],
            'newlines-between': 'always',
          },
        ],

        'padding-line-between-statements': [
          'warn',
          { blankLine: 'always', prev: '*', next: 'return' },
          { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
          {
            blankLine: 'any',
            prev: ['const', 'let', 'var'],
            next: ['const', 'let', 'var'],
          },
        ],
      },
    }
);
