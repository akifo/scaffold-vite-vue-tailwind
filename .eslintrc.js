/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-recommended",
    "@vue/eslint-config-prettier",
    "@vue/eslint-config-typescript/recommended",
  ],
  plugins: ["import", "unused-imports"],
  rules: {
    "no-console": "error",
    "vue/no-unused-vars": "error",
    "vue/no-ref-as-operand": "error",
    "import/order": [
      "warn",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
  },
};
