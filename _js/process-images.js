const fs = require('fs');
const fg = require('fast-glob');
const sharp = require("sharp");

async function processImages() {
  const entries = await fg.glob(['_images/**/*.png']);
  entries.forEach(async e => {
    try {
      console.info(`Processing ${e}`);
      const isThumb = e.includes('thumbnail.png');
      const targetPng = e.substring(1);
      const targetJpeg = e.substring(1).replace('.png', '.jpg');
      const targetDir = targetPng.split('/').slice(0, -1).join('/');

      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }

      await sharp(e)
        .resize({ width: isThumb ? 700 : null })
        .png({ palette: true })
        .toFile(targetPng);
      await sharp(e)
        .resize({ width: isThumb ? 700 : null })
        .jpeg({ mozjpeg: true, quality: 85, chromaSubsampling: '4:4:4' })
        .toFile(targetJpeg);
    } catch (error) {
      console.error(error);
    }
  });
}

processImages();
