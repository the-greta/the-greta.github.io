module.exports = {
  env: {
    browser: true,
    es2022: true,
  },
  extends: ["next/core-web-vitals", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"],
  },
  plugins: ["react", "simple-import-sort", "import", "unused-imports"],
  rules: {
    "react/prop-types": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "unused-imports/no-unused-imports": "error",
  },

  settings: {
    react: {
      version: "detect",
    },
  },
};
