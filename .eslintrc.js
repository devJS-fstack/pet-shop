module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "unused-imports"],
  ignorePatterns: ["webpack"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "no-useless-escape": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "unused-imports/no-unused-imports": "error",
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
  env: {
    browser: true,
    amd: true,
    node: true,
  },
};
