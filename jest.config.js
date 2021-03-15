module.exports = {
  "transform": {
    "^.+\\.tsx?$": `ts-jest`,
    "^.+\\.js?$": `babel-jest`,
  },
  "testRegex": `.spec.(js?|jsx?|tsx?|ts?)$`,
  "moduleFileExtensions": [
    `ts`,
    `tsx`,
    `js`,
    `jsx`,
    `json`,
    `node`,
  ],
};
