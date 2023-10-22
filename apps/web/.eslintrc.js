// eslint-disable-next-line no-undef
module.exports = {
  ignorePatterns: ['node_modules', '.next', 'src/gql'],
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@next/next/recommended",
    "plugin:storybook/recommended"
  ],
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      babelrc: false,
      configFile: false,
    },
  },
};
