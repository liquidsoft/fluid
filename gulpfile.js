//
// Modules
//

const gulp = require("gulp"),
    watch = require("gulp-watch"),
    clean = require("gulp-clean"),
    less = require("gulp-less"),
    sourcemaps = require("gulp-sourcemaps"),
    rename = require("gulp-rename"),
    cssmin = require("gulp-cssmin");

//
// Compiler
//

function compileLess( pipeline ) {
    return pipeline
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("./build"))
        .pipe(cssmin())
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest("./build"));
}

//
// Tasks
//

gulp.task("default", [ "less" ], () => {});

gulp.task("watch", () => {
    return watch(["./src/**/*.less", "./fluid.less"], () => {
        gulp.start("less");
    });
});

gulp.task("less", [ "clean" ], () => {
    return compileLess(gulp.src("./fluid.less"));
});

gulp.task("clean", () => {
    return gulp.src([ "./build/fluid.css", "./build/fluid.css.map" ]).pipe(clean());
});