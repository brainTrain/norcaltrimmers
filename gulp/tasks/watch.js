'use strict';

import gulp from 'gulp';
import config from '../config';

gulp.task('watch', () => {
    gulp.watch(config.styles.watch, ['styles']);
    gulp.watch(config.styles.watch, ['scripts']);
    gulp.watch(config.views.src, ['views']);
    gulp.watch(config.images.src, ['images']);
});
