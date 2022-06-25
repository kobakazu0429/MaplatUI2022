import path from "node:path";
import fs from "node:fs/promises";
import url from "node:url";
import sass from "sass";
import postcss from "postcss";
import CleanCSS from "clean-css";
import removeExportPlugin from "../postcssPlugins/removeExportPlugin.js";
import convoluteSelectorsPlugin from "../postcssPlugins/convoluteSelectorsPlugin.js";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const maplatScssPath = path.resolve(path.join(__dirname, "..", "src", "maplat.scss"));
const distPath = path.resolve(path.join(__dirname, "..", "dist"));

const postcssProcess = async (css) => {
  const result = await postcss([removeExportPlugin, convoluteSelectorsPlugin]).process(css, { from: undefined });
  return result.css;
}

async function main() {
  try {
    await fs.mkdir(distPath, { recursive: true });

    let css = sass.compile(maplatScssPath).css;
    css = await postcssProcess(css);
    css = new CleanCSS({ level: 2 }).minify(css).styles;

    await fs.writeFile(path.join(distPath, "maplat.css"), css);

    console.log("Build done.");
  } catch (error) {
    console.log("Build failed.");
    console.error(error);
  }
}

main();
