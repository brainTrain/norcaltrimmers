'use strict';

export default {
    port: 4000,
    buildDir: 'public/',
    scripts: {
        src: './media/js/index.js',
        dest: 'public/js/'
    },
    styles: {
        watch: 'media/scss/**/*.scss',
        src: 'media/scss/norcaltrimmers.scss',
        dest: 'public/css'
    },
    images: {
        src: 'media/images/**/*',
        dest: 'public/images'
    },
    views: {
        src: 'index.html',
        dest: 'public/'
    },
    templates: {
        watch: 'demo/**/*.html',
        src: 'demo/'
    }
};
