module.exports = {
    verbose: true,
    testTimeout: 20000,
    preset: "jest-playwright-preset",
    // globalSetup: "./global-setup.js",
    // globalTeardown: "./global-teardown.js",
    testMatch: ["**/__tests__/**/*.+(ts|js)", "**/?(*.)+(spec|test).+(ts|js)"],
    transform: {
        "^.+\\.(ts)$": "ts-jest",
    },
    testPathIgnorePatterns: [
        "/node_modules/",
    ],
    // moduleFileExtensions: [
    //     "ts",
    //     "tsx",
    //     "js",
    //     "jsx",
    //     "json",
    //     "node"
    // ]
};