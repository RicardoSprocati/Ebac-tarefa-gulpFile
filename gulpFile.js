const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');


function comprimeImage() {
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}

function compilaSass() {
    return gulp.src('./source/style/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./build/style'));
}

function comprimeJs() {
    return gulp.src('./source/scripts/main.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'));
}

exports.default = function() { 
    gulp.watch('./source/style/main.scss',{ignoreInitial:false}, gulp.series(compilaSass));
    gulp.watch('./source/images/*',{ignoreInitial:false}, gulp.series(comprimeImage));
    gulp.watch('./source/scripts/main.js',{ignoreInitial:false}, gulp.series(comprimeJs));
}
