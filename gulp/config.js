'use strict';

export default {
    port: 4000,
    buildDir: 'public/',
    scripts: {
        watch: './app/media/js/*.js',
        src: './app/media/js/index.js',
        dest: 'public/js/'
    },
    styles: {
        watch: 'app/media/scss/**/*.scss',
        src: 'app/media/scss/norcaltrimmers.scss',
        dest: 'public/css'
    },
    images: {
        src: 'app/media/images/**/*',
        dest: 'public/images'
    },
    views: {
        src: 'app/index.html',
        destDev: 'public/',
        dest: ''
    }
};
