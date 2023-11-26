import type { Config } from "@jest/types";

const baseDir: string = "<rootDir>/src/app/password_checker";
const baseTestDir: string = "<rootDir>/src/test/password_checker";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  watch: false,
  collectCoverage: false,
  collectCoverageFrom: [`${baseDir}/**/*.ts`],
  testMatch: [`${baseTestDir}/**/*.ts`],
};

export default config;
