import { pathsToModuleNameMapper } from "ts-jest/utils";

export default {
  bail: true,
  clearMocks: true,
  coverageProvider: "v8",
  moduleNameMapper: pathsToModuleNameMapper(
    {
      "@modules/*": ["modules/*"],
      "@shared/*": ["shared/*"],
      "@errors/*": ["errors/*"],
    },
    {
      prefix: "<rootDir>/src",
    },
  ),
  preset: "ts-jest",
  testMatch: ["**/*.spec.ts"],
};
