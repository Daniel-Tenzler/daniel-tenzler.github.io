import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import babelParser from '@babel/eslint-parser';
import astro from 'eslint-plugin-astro';
import astroParser from 'astro-eslint-parser';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

/** @type {import("eslint").Config[]} */
export default [
    js.configs.recommended,

    {
        ignores: [
            'dist/**',
            'node_modules/**',
            '.vscode/**',
            '.git/**',
            '**/*.astro',
        ],
    },

    // JS/JSX
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        plugins: {
            react: reactPlugin,
            'react-hooks': reactHooksPlugin,
            'jsx-a11y': jsxA11y,
            prettier: prettierPlugin,
        },
        languageOptions: {
            parser: babelParser,
            parserOptions: {
                requireConfigFile: false,
                babelOptions: {
                    presets: ['@babel/preset-react'],
                },
                ecmaVersion: 2021,
                sourceType: 'module',
                ecmaFeatures: { jsx: true },
            },
            globals: {
                React: 'readonly',
                window: 'readonly',
                document: 'readonly',
                console: 'readonly',
                process: 'readonly',
                requestAnimationFrame: 'readonly',
                performance: 'readonly',
                setTimeout: 'readonly',
                clearTimeout: 'readonly',
                setImmediate: 'readonly',
                MessageChannel: 'readonly',
                queueMicrotask: 'readonly',
            },
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            'react/react-in-jsx-scope': 'off',
            'react/jsx-uses-react': 'off',
            'react/prop-types': 'warn',
            'react/display-name': 'off',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            'jsx-a11y/anchor-is-valid': 'warn',
            'jsx-a11y/no-static-element-interactions': 'warn',
            'jsx-a11y/click-events-have-key-events': 'warn',
            'react/jsx-curly-spacing': ['error', { when: 'never', children: true }],
            'react/jsx-fragments': ['error', 'syntax'],
            'react/self-closing-comp': [
                'error',
                {
                    component: true,
                    html: true,
                },
            ],
            'react/no-unused-prop-types': 'warn',
            'react/no-array-index-key': 'warn',
            ...reactPlugin.configs.recommended.rules,
            ...jsxA11y.configs.strict.rules,
        },
    },

    {
        files: ['**/*.astro'],
        plugins: {
            astro,
        },
        languageOptions: {
            parser: astroParser,
            parserOptions: {
                parser: babelParser,
                requireConfigFile: false,
                babelOptions: {
                    presets: ['@babel/preset-react'],
                },
                extraFileExtensions: ['.astro'],
                ecmaVersion: 2021,
                sourceType: 'module',
            },
            globals: {
                Astro: 'readonly',
            },
        },
        settings: {
            // Optional Astro-specific settings
        },
        rules: {
            ...astro.configs.recommended.rules,
            // You can customize Astro rules here
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unsafe-member-access': 'off',
            '@typescript-eslint/no-unsafe-assignment': 'off',
        },
    },
    prettierConfig,
];