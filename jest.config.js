module.exports = {
  "moduleFileExtensions": ["ts", "tsx", "js"],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "testMatch": [
    "**/*test.(ts|tsx)"
  ],
  "moduleNameMapper": {
    "\\.(css|pcss)$": "identity-obj-proxy"
  },
  "setupFiles": [
    "<rootDir>/__test__/setupTests.ts"
  ]
}
