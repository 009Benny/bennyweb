const gulp = require('gulp'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer');

gulp.task('sass',function(){
  return gulp.src('./css/scss/main.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on("error",sass.logError))
    .pipe(autoprefixer({
      versions: ['last 2 browsers']
    }))
    .pipe(gulp.dest('./css/main/'))
});

gulp.task('default', gulp.parallel('sass'));

/*
gulp.task('default',function(){
  gulp.watch('./css/scss/main.scss', ['sass']);
});*/
