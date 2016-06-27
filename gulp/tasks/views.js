'use strict';

import gulp from 'gulp';
import config from '../config';
import revReplace from 'gulp-rev-replace';
import buffer from 'vinyl-buffer';
import template from 'gulp-template';

// Views task
gulp.task('views', () => {
    let manifest = gulp.src([
        config.manifest.prodDest
    ]);

    return gulp.src(config.views.src)
        .pipe(template({baseUrl: config.views.devBaseUrl}))
        .pipe(gulp.dest(config.views.devDest))
        .pipe(buffer())
        .pipe(gulp.src(config.views.src))
        .pipe(revReplace({manifest: manifest}))
        .pipe(template({baseUrl:  config.views.prodBaseUrl}))
        .pipe(gulp.dest(config.views.prodDest));
});
