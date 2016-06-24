'use strict';

import gulp from 'gulp';
import config from '../config';
import revReplace from 'gulp-rev-replace';

// Views task
gulp.task('views', () => {
    let manifest = gulp.src([
        config.manifest.prodDest
    ]);

    return gulp.src(config.views.src)
        .pipe(gulp.dest(config.views.devDest))
        .pipe(revReplace({manifest: manifest}))
        .pipe(gulp.dest(config.views.prodDest));
});
