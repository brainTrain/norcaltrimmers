'use strict';

import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('build', () => {
    runSequence(['scripts', 'styles', 'views', 'images']);
});
