import globals from 'globals';
import pluginJest from 'eslint-plugin-jest';

export default [
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "module" }
  },
  {
    languageOptions: { globals: globals.browser },
    plugins: { jest: pluginJest },
    rules: {
      ...pluginJest.configs.recommended.rules
    }
  }
];
