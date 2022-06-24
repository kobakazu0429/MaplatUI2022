import path from "node:path";
import fs from "node:fs/promises";
import sass from "sass";
import postcss from "postcss";
import CleanCSS from "clean-css";
import removeExportPlugin from "../postcssPlugins/removeExportPlugin.js";
import convoluteSelectorsPlugin from "../postcssPlugins/convoluteSelectorsPlugin.js";

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const maplatScssPath = path.resolve(path.join(__dirname, "..", "src", "maplat.scss"));
const distPath = path.resolve(path.join(__dirname, "..", "dist", "maplat.css"));

const postcssProcess = async (css) => {
  const result = await postcss([removeExportPlugin, convoluteSelectorsPlugin]).process(css);
  return result.css;
}

async function main() {
  try {
    let css = sass.compile(maplatScssPath).css;
    css = await postcssProcess(css);
    css = new CleanCSS({ level: 2 }).minify(css).styles;

    await fs.writeFile(distPath, css);

    console.log("Build done.");
  } catch (error) {
    console.log("Build failed.");
    console.error(error);
  }
}

main();
