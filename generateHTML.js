const fs = require("fs");
const Path = require("path");
module.exports = (destDir) => {
  const prompt = Path.basename(destDir);
  const imgtags = fs
    .readdirSync(destDir)
    .filter((name) => {
      return name.startsWith("seed") && name.endsWith(".png");
    })
    .map((name) => {
      return `<img src="./${name}" style="width: 256px;">`;
    })
    .join("");
  const html = `<html><head><title>${prompt}</title></head><body><p>${prompt}</p>${imgtags}</body></html>`;
  const htmlFilePath = Path.resolve(destDir, "images.html");
  fs.writeFileSync(htmlFilePath, html);
  console.log(htmlFilePath);
};
