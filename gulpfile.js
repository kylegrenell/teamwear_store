var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function(){
  console.log("gulp task working");
});

gulp.task('html', function(){
  console.log("html working");
});

gulp.task('styles', function(){
  console.log("sass or postcss tasks running");
});

gulp.task('watch', function(){

  watch('./app/index.html', function(){
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css',function(){
    gulp.start('styles');
  });

});
