//
// Modules
//

const gulp = require("gulp"),
    watch = require("gulp-watch"),
    clean = require("gulp-clean"),
    less = require("gulp-less"),
    sass = require("gulp-sass"),
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

function compileSass( pipeline ) {
    return pipeline
        .pipe(sourcemaps.init())
        .pipe(sass())
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

gulp.task("watch-less", () => {
    return watch(["./less/**/*.less", "./fluid.less"], () => {
        gulp.start("less");
    });
});

gulp.task("watch-sass", () => {
    return watch(["./sass/**/*.scss", "./fluid.scss"], () => {
        gulp.start("sass");
    });
});

gulp.task("watch", ["watch-less", "watch-sass"], () => {

});

gulp.task("less", [ "clean" ], () => {
    return compileLess(gulp.src("./fluid.less"));
});

gulp.task("sass", [ "clean" ], () => {
    return compileSass(gulp.src("./fluid.scss"));
});

gulp.task("clean", () => {
    return gulp.src([ "./build/fluid.css", "./build/fluid.css.map", "./build/fluid.min.css", "./build/fluid.css.min.map" ]).pipe(clean());
});