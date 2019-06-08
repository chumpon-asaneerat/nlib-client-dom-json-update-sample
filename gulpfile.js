const gulp = require('gulp');
const concat = require('gulp-concat');
const debug = require('gulp-debug');
const order = require("gulp-order");

gulp.task('js-bundle', () => {
    let src = [
        'nlib-html-core.js',
        'nlib-html-tag-div.js',
        'nlib-html-tag-img.js',
        'nlib-html-attribute-src.js',
        'nlib-html-attribute-width.js',
        'nlib-html-attribute-height.js'        
    ];
    let dest = 'nlib-html.js';
    return gulp.src([
            '*.js', 
            //'!nlib-html-core.js',
            //'!nlib-html-tag-div.js',
            //'!nlib-html-tag-img.js',
            //'!nlib-html-attribute-src.js',
            '!index.js', 
            '!nlib-dom-json*.js', 
            '!gulpfile.js'
        ])
        .pipe(order(src))
        .pipe(debug())
        .pipe(concat(dest))
        .pipe(gulp.dest('js'));
});