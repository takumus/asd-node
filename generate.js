const Path = require("path");
const { spawn } = require("child_process");
const fs = require("fs");
const generateHTML = require("./generateHTML");
const artroomEnvConfig = require("./artroom.env.config");
module.exports = (sdConfig) =>
  new Promise((res) => {
    console.log(sdConfig);
    try {
      fs.mkdirSync(sdConfig.Config.image_save_path);
    } catch {
      //
    }
    // ワーキングディレクトリをartroomに。
    process.chdir(artroomEnvConfig.artroomRoot);
    const ls = spawn(artroomEnvConfig.artroomPython, [
      Path.resolve(__dirname, `./runner.py`),
      JSON.stringify(sdConfig),
    ]);
    const output = (data) => {
      process.stdout.write(data);
      const lines = String(data).split("\n");
      lines.forEach((line) => {
        line = line.trim();
        // console.log(line);
        if (line.startsWith("__out__")) {
          const dest = Path.resolve(line.replace("__out__", ""));
          generateHTML(dest);
        }
      });
    };
    ls.stdout.on("data", output);
    ls.stderr.on("data", output);
    ls.on("close", (code) => {
      console.log(`exit(${code})`);
      res(code);
    });
  });
