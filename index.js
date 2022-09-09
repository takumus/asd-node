const sdConfig = require("./artroom.sd.config")();
const args = require("args-parser")(process.argv);
const generate = require("./generate");
Object.keys(args).map((key) => {
  if (sdConfig.Config[key] !== undefined) {
    sdConfig.Config[key] = args[key];
  } else if (sdConfig.Settings[key] !== undefined) {
    sdConfig.Settings[key] = args[key];
  } else {
    throw new Error(`Invalid arguments : ${key}`);
  }
});
generate(sdConfig);
