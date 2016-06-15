'use strict';

import gulp from 'gulp';
import config from '../config';

gulp.task('images', function() {

  return gulp.src(config.images.src)
    .pipe(gulp.dest(config.images.dest));
});
