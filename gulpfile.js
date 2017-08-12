var gulp = require('gulp');
var webpack = require('webpack');
var webpackStream = require('webpack-stream');
var responsive = require('gulp-responsive');
var pngquant = require('gulp-pngquant');

gulp.task('js', function() {
  return gulp.src('_js/index.js')
    .pipe(webpackStream({
      output: {
        filename: 'bundle.js',
      },
      watch: true,
      plugins: [
        new webpack.optimize.UglifyJsPlugin({ minimize: true })
      ]
    }, webpack))
    .pipe(gulp.dest('js/'));
});

gulp.task('png', function () {
  return gulp.src('_images/**/*.png')
    .pipe(responsive({
      '**/!(thumbnail).png': { progressive: true },
      '**/thumbnail.png': { width: 700, progressive: true },
    }))
    .pipe(pngquant({
        quality: '65-80'
    }))
    .pipe(gulp.dest('images'));
});

gulp.task('jpg', function () {
  return gulp.src('_images/**/*.png')
    .pipe(responsive({
      '**/!(thumbnail).png': {
        quality: 80,
        progressive: true,
        format: 'jpeg',
        rename: {
          extname: '.jpg',
        },
      },
      '**/thumbnail.png': {
        width: 700,
        quality: 80,
        progressive: true,
        format: 'jpeg',
        rename: {
          extname: '.jpg',
        },
      },
    }))
    .pipe(gulp.dest('images'));
});

gulp.task('images', ['png', 'jpg']);