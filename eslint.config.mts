import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import prettier from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  js.configs.recommended,
  ...tseslint.configs.recommended,
  react.configs.flat.recommended,
  prettier,
   {
  files: [
    '*.config.js',
    '*.config.cjs',
    '.*rc.js',
    '.eslintrc.js',
    '.prettierrc.js',
    'babel.config.js',
    'metro.config.js',
    'jest.config.js',
  ],
  languageOptions: {
    globals: globals.node,
    sourceType: 'script',
  },
  rules: {
    'no-undef': 'off',
    '@typescript-eslint/no-require-imports': 'off',
    'no-console': 'off',
  },

  },
]);
