const nextJest = require("next/jest");

const createJestConfig = nextJest({
  
  dir: "./",
});
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/lib/(.*)$": "<rootDir>/src/lib/$1",
    "^@/app/(.*)$": "<rootDir>/src/app/$1",
    "^@/helpers/(.*)$": "<rootDir>/src/helpers/$1",
    "^@/hooks/(.*)$": "<rootDir>/src/hooks/$1",
    "^@/data/(.*)$": "<rootDir>/src/data/$1",
    "^@/features/(.*)$": "<rootDir>/src/features/$1",
    "^@/types/(.*)$": "<rootDir>/src/types/$1",
  },
};
module.exports = createJestConfig(customJestConfig);
