var gulp = require('gulp');

gulp.task('watch', function(){
  var watcher = gulp.watch('folder/js/*.js');
  watcher.on('change', function(event){
  console.log('File: ' + event.path + ' was changed!');    
  });
});

gulp.task('default', function() {
  // place code for your default task here
  console.log("Hello Gulp!");
});
