import type { Config } from "jest";

const config: Config = {
  collectCoverage: true,
  coverageDirectory: "coverage",

  coverageReporters: ["text", "clover"],
  roots: ["<rootDir>"],
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
  transform: { "^.+\\.(ts|tsx)$": "ts-jest" },
};

export default config;
