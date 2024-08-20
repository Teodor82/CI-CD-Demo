module.exports = {
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  testPathIgnorePatterns: ["/node_modules/"],
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(js|jsx|ts|tsx)$"
};
