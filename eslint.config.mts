import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import prettier from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

export default defineConfig([
  js.configs.recommended,
  ...tseslint.configs.recommended,
  react.configs.flat.recommended,
  prettier,

  {
    files: ['**/*.js', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    settings: {
      react: {
        version: 'detect',
        runtime: 'automatic',
      },
    },
    rules: {
      quotes: ['error', 'single'], 
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'import/no-unresolved': 'off',
      'no-console': 'off',
    },
  },
  {
    files: [
      '*.config.js',
      '*.config.cjs',
      '.eslintrc.js',
      '.prettierrc.js',
      'babel.config.js',
      'metro.config.js',
      'jest.config.js',
    ],
    languageOptions: {
      sourceType: 'script',
      globals: globals.node,
    },
  },
]);
