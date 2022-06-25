import path from "node:path";
import url from "node:url";
import fs from "node:fs/promises";
import { optimize } from "svgo";
import { generateFonts as _generateFonts, FontAssetType, OtherAssetType } from 'fantasticon';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const iconsPath = path.resolve(path.join(__dirname, "..", "src", "icons"));
const svgFiles = (await fs.readdir(iconsPath)).filter(filename => filename.endsWith(".svg"));

const optimizeSvg = async (filename) => {
  const svgFilePath = path.resolve(path.join(iconsPath, filename));
  const svgString = await fs.readFile(svgFilePath, "utf-8");

  const result = optimize(svgString, {
    // multipass: true,
  });
  // console.log(result);

  return {
    filename,
    filePath: svgFilePath,
    optimizedSvg: result.data,
    size: result.info,
    error: result.error,
    modernError: result.modernError
  }
}

const writeSvgs = async (svgs) => {
  await Promise.all(svgs.map(svg => {
    return fs.writeFile(svg.filePath, svg.optimizedSvg);
  }));
}

const generateFonts = async () => {
  const FONT_NAME = "maplat-icons";
  const results = await _generateFonts({
    inputDir: iconsPath,
    outputDir: iconsPath,
    name: FONT_NAME,
    fontTypes: [FontAssetType.EOT, FontAssetType.WOFF2, FontAssetType.WOFF],
    assetTypes: [
      // OtherAssetType.CSS,
      OtherAssetType.SCSS,
      OtherAssetType.HTML,
      // OtherAssetType.JSON,
      // OtherAssetType.TS
    ],
    // formatOptions: { json: { indent: 2 } },
    templates: {
      [OtherAssetType.SCSS]: path.resolve(path.join(__dirname, "templates.scss.hbs"))
    },
    normalize: true,
    prefix: 'i',
  });
  // console.log(results);
}

async function main() {
  try {
    const optimizedSvgs = await Promise.all(svgFiles.map(filename => optimizeSvg(filename)));
    await writeSvgs(optimizedSvgs);
    await generateFonts();

    console.log("Build done.");
  } catch (error) {
    console.log("Build failed.");
    console.error(error);
  }
}

main();
