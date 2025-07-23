/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parser: require('@typescript-eslint/parser'), // 👈 important
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // 👈 required for JSX
        },
        project: ['./tsconfig.json'],
      },
    },
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
    },
    rules: {
      // your rules...
    },
  },
];
