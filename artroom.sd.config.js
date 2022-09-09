const Path = require("path");
module.exports = () => ({
  Settings: {
    text_prompts: "stable diffusion", // プロンプト
    batch_name: "./", // いじらなくていい
    steps: 50,
    aspect_ratio: "4:3",
    width: 512,
    height: 384,
    seed: 0,
    use_random_seed: true, // ランダムシード
    n_samples: 1, // バッチサイズ
    n_iter: 30, // 生成数
    cfg_scale: 10,
    sampler: "plms",
    init_image: "", // 参照画像ファイルパス(下みたいにユニコードにしないと日本語無理)
    // init_image: "C:\\Users\\takumus\\Dropbox\\illust\\2018\u5e7402\u670821.png",
    strength: 0.6, // プロンプトの強さ。
  },
  Config: {
    use_optimized_version: true,
    use_turbo: true,
    use_superfast: true,
    use_full_precision: false,
    image_save_path: Path.resolve(
      __dirname,
      "outputs",
      new Date()
        .toLocaleString()
        .replace(/\//g, "-")
        .replace(",", "-")
        .replace(/ /g, "")
        .replace(/:/g, "-")
    ),
    // init_imageと同じく多分日本語含んだらだめ。
  },
});
