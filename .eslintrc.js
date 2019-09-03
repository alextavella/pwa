module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/jsx-filename-extension": ["warn", { "extensions": [".jsx", ".js"] }],
    "react/jsx-props-no-spreading": "off",
    "react/no-array-index-key": "off",
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "react/forbid-foreign-prop-types": "off",
    "react-hooks/rules-of-hooks": "off",
    "react-hooks/exhaustive-deps": "off",

    "import/prefer-default-export": "off",

    "no-console": "off",
    "no-restricted-globals": "off",
    "no-use-before-define": "off",
    "no-param-reassign": "off"
  },
};
