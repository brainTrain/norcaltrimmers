'use strict';

export default {
    port: 4000,
    devDir: 'dev/',
    scripts: {
        watch: './app/media/js/*.js',
        src: './app/media/js/index.js',
        devDest: 'dev/js',
        prodDest: 'public/js/'
    },
    styles: {
        watch: 'app/media/scss/**/*.scss',
        src: 'app/media/scss/norcaltrimmers.scss',
        devDest: 'dev/css',
        prodDest: 'public/css'
    },
    images: {
        src: 'app/media/images/**/*',
        devDest: 'dev/images',
        prodDest: 'public/images',
    },
    views: {
        src: 'app/index.html',
        devDest: 'dev/',
        prodDest: ''
    },
    manifest: {
        prodDest : 'public/rev-manifest.json'
    }
};
