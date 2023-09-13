const sass = require('gulp-sass')(require('sass'));

import gulp from 'gulp';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';

const paths = {
  source: './src/**/*.scss',
  outCss: './output/**/*.css',
  outDir: './output',
} as const;

function minifyCSS() {
  return gulp
    .src(paths.outCss)
    .pipe(
      cleanCSS({}, (details) => {
        console.log(`${details.name}: ${details.stats.originalSize}B to ${details.stats.minifiedSize}B`);
      }),
    )
    .pipe(
      rename({
        suffix: '.min',
      }),
    )
    .pipe(gulp.dest(paths.outDir));
}

function buildStyles() {
  return gulp
    .src(paths.source)
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(
      autoprefixer({
        cascade: false,
      }),
    )
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.outDir));
}

gulp.task('watch', (finishCallback) => {
  const watcher = gulp.watch(paths.source, buildStyles);
  watcher.on("unlink", finishCallback)
});

gulp.task('build', (finishCallback) => {
  // buildStyles().on("finish", () => minifyCSS().on('finish', finishCallback));
  buildStyles().on("finish", finishCallback);
});

gulp.task('minify', (finishCallback) => {
  minifyCSS().on("finish", finishCallback);
});
