const {writeFileSync, existsSync, readFileSync} = require('fs');
const {join} = require('path');

const BUILD_VERSION_PATH = join(__dirname, 'AppConfig.json');

let appConfig = require('./AppConfig.json');

function getTimestampBasedVersion() {
  return parseInt(new Date().getTime() / 1000);
}

const buildResult = {
  timeOfBuild: getTimestampBasedVersion()
};

console.log(appConfig);
appConfig = {
  ...appConfig, ...buildResult
}

console.log(appConfig);

writeFileSync(BUILD_VERSION_PATH, JSON.stringify(appConfig, null, 2));
