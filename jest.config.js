export default {
  testEnvironment: "node",
  roots: [
    "/Users/baz/Desktop/Northcoders/final-project/chat-pfq-web-app/__tests__",
  ],
  moduleFileExtensions: ["js", "jsx"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  extensionsToTreatAsEsm: [".jsx"],
  transformIgnorePatterns: ["/node_modules/"],
};
