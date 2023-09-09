module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  transform: {
    '^.+\\.test.js$': 'babel-jest',
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.js$': 'babel-jest',
  },

  transformIgnorePatterns: [
    '/node_modules/(?!(@react-native*|react-native|one-weir-mobile|react-native-config|@react-navigation|rn-fetch-blob|@react-native-async-storage/async-storage|react-native-nfc-manager|react-native-gesture-handler)|/).*',
  ],
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
};
