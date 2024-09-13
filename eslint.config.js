import globals from "globals";
import pluginJest from "eslint-plugin-jest";

export default [
  {
    files: ["**/*.js"],
    languageOptions: { globals: globals.browser, sourceType: "module" },
    plugins: {
      jest: pluginJest,
      import: "eslint-plugin-import",
      prettier: "eslint-plugin-prettier",
    },
    extends: [
      "eslint:recommended", // Recommended ESLint rules
      "airbnb-base", // Airbnb base configuration for JavaScript
      "plugin:import/errors", // Import plugin rules
      "plugin:import/warnings", // Import plugin warnings
      "plugin:prettier/recommended", // Prettier plugin with recommended settings
    ],
    rules: {
      ...pluginJest.configs.recommended.rules,
      "no-console": "warn",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-debugger": "error",
      "import/prefer-default-export": "off",
      "prettier/prettier": [
        "error",
        {
          semi: false,
          singleQuote: true,
          trailingComma: "es5",
          printWidth: 80,
        },
      ],
    },
  },
];
