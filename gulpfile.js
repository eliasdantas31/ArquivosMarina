const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");
const obfuscator = require("gulp-javascript-obfuscator");
const imagemin = require('gulp-imagemin');

function compilaSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}

function minificaJs() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscator())
        .pipe(gulp.dest('./build/scripts'));
}

function minificaImagem() {
    return gulp.src('./source/imagens/**/*.{png,jpg,jpeg,gif,svg}')
        .pipe(imagemin([
            imagemin.gifsicle({ interlaced: true }),
            imagemin.mozjpeg({ quality: 70, progressive: true }),
            imagemin.optipng({ optimizationLevel: 5 }),
            imagemin.svgo({
                plugins: [
                    { removeViewBox: false },
                    { cleanupIDs: false }
                ]
            })
        ]))
        .pipe(gulp.dest('./build/imagens'));
}


function assistirArquivos() {
    gulp.watch('./source/styles/**/*.scss', { ignoreInitial: false }, gulp.series(compilaSass));
    gulp.watch('./source/scripts/*.js', { ignoreInitial: false }, gulp.series(minificaJs));
    gulp.watch('./source/imagens/**/*.{png,jpg,jpeg,gif,svg}', { ignoreInitial: false }, gulp.series(minificaImagem));
}
exports.default = assistirArquivos;