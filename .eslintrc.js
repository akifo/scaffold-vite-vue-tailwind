/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: [
    "plugin:vue/vue3-recommended",
    "@vue/eslint-config-typescript/recommended",
  ],
  rules: {
    "no-console": "error",
    "vue/no-unused-vars": "error",
  },
};
