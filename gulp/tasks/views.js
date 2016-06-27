'use strict';

import gulp from 'gulp';
import config from '../config';
import revReplace from 'gulp-rev-replace';
import buffer from 'vinyl-buffer';
import cdnizer from 'gulp-cdnizer';

// Views task
gulp.task('views', () => {
    let manifest = gulp.src([
        config.manifest.prodDest
    ]);

    return gulp.src(config.views.src)
        .pipe(cdnizer({
            files: config.cdn.files,
            defaultCDNBase: config.cdn.devBaseUrl
        }))
        .pipe(gulp.dest(config.views.devDest))
        .pipe(buffer())
        .pipe(gulp.src(config.views.src))
        .pipe(revReplace({manifest: manifest}))
        .pipe(cdnizer({
            files: config.cdn.files,
            defaultCDNBase: `/norcaltrimmers/${config.cdn.prodBaseUrl}`
        }))
        .pipe(gulp.dest(config.views.prodDest));
});
