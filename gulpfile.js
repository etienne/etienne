var gulp = require('gulp');
var webpack = require('webpack');
var webpackStream = require('webpack-stream');
var responsive = require('gulp-responsive');

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

gulp.task('images', function () {
  return gulp.src('_images/**/*.png')
    .pipe(responsive({
      '**/!(thumbnail).png': [
        {
          quality: 80,
          progressive: true,
          format: 'jpeg',
          rename: {
            extname: '.jpg',
          },
        },
        {
          progressive: true,
        }
      ],
      '**/thumbnail.png': [
        {
          width: 700,
          quality: 80,
          progressive: true,
          format: 'jpeg',
          rename: {
            extname: '.jpg',
          },
        },
        {
          width: 700,
          progressive: true,
        }
      ],
    }))
    .pipe(gulp.dest('images'));
});

gulp.task('default', [ 'js', 'images' ]);
