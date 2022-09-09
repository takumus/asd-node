const generate = require("./generate");
const words = [
  "kawaii, trending on pixiv fanbox",
  "dog and cat",
  "beautiful sea",
];
(async () => {
  for (let i = 0; i < words.length; i++) {
    const sdConfig = require("./artroom.sd.config")();
    sdConfig.Settings.text_prompts = words[i];
    sdConfig.Settings.n_iter = 50;
    await generate(sdConfig);
  }
})();
