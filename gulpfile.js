const { src, dest, series, parallel } = require("gulp");

// Dynamically import gulp-imagemin
const imagemin = async () => (await import("gulp-imagemin")).default;

// Task to compress images
async function compressImages() {
  const imgMin = await imagemin();
  return src("public/img/**/*.{png,jpg,jpeg}")
    .pipe(imgMin())
    .pipe(dest("public/img"));
}

// Default task
exports.default = series(compressImages);
