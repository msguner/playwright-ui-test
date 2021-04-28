module.exports = {
    verbose: true,
    preset: "jest-playwright-preset",
    testMatch: ["**/__tests__/**/*.+(ts|js)", "**/?(*.)+(spec|test).+(ts|js)"],
    transform: {
        "^.+\\.(ts)$": "ts-jest",
    }, testPathIgnorePatterns: [
        "/node_modules/",
    ],
};