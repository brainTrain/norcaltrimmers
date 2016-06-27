'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import config from '../config';
import cdnizer from 'gulp-cdnizer';

gulp.task('styles', () => {
    return gulp.src(config.styles.src)
        .pipe(sass())
        .pipe(cdnizer({
            files: config.cdn.imageFiles,
            defaultCDNBase: config.cdn.devBaseUrl
        }))
        .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 8'))
        .pipe(gulp.dest(config.styles.devDest))
        .pipe(cdnizer({
            files: config.cdn.imageFiles,
            defaultCDNBase: config.cdn.prodBaseUrl
        }))
        .pipe(gulp.dest(config.styles.prodDest));
});
