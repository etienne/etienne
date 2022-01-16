var gulp = require('gulp');
var path = require('path');
const gulpSquoosh = require('gulp-squoosh');
const gulpCache = require('gulp-cache');

function swoosh(cb) {
  return gulp.src('_images/**/*.png')
    .pipe(
      gulpCache(
        gulpSquoosh(({ filePath }) => ({
          preprocessOptions: {
            ...(path.basename(filePath) === "thumbnail.png"
              ? { resize: { width: 700 } }
              : { }),
          },
          encodeOptions: {
            oxipng: {},
            mozjpeg: {
              quality: 85,
              chroma_quality: 85,
            },
          },
        }))
      )
    )
    .pipe(gulp.dest('images'));
}

exports.default = swoosh;
