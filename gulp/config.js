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
    cdn: {
        prodBaseUrl: 'public',
        devBaseUrl: '',
        files: [
            '/js/*.js',
            '/css/*.css',
            'dev/css/*.css',
            'public/css/*.css',
            'dev/js/*.js',
            'public/js/*.js',
            'dev/images/*.{jpg,jpeg,png,gif,svg}',
            'public/images/*.{jpg,jpeg,png,gif,svg}'
        ],
        imageFiles:[
            '/images/*.*'
        ]
    },
    manifest: {
        prodDest : 'public/js/rev-manifest.json'
    }
};
