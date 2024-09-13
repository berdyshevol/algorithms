module.exports = {
  env: {
    node: true, // Enables Node.js global variables and Node.js scoping
    es2021: true, // Enables ECMAScript 2021 features
    jest: true, // Enables Jest global variables (for testing)
  },
  extends: [
    "eslint:recommended", // Use ESLint's recommended rules
    "plugin:jest/recommended", // Use recommended Jest linting rules
  ],
  parserOptions: {
    ecmaVersion: 12, // ECMAScript version 2021
  },
  plugins: ["jest"], // Add Jest plugin for ESLint
  rules: {
    // Add custom rules here if needed
  },
};
