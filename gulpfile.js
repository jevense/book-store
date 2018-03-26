const gulp = require('gulp');
const gulpIf = require('gulp-if');
const uglify = require('gulp-uglify');
const useref = require('gulp-useref');
// const cleanCSS = require('gulp-clean-css');
const cssver = require('gulp-make-css-url-version');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const del = require('del');
const runSequence = require('run-sequence');
const browserify = require("browserify");
const source = require('vinyl-source-stream');
const handlebars = require('gulp-handlebars');
const wrap = require('gulp-wrap');
const declare = require('gulp-declare');
const modernizr = require('gulp-modernizr');
const csso = require('gulp-csso');
// const critical = require('critical');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const changed = require('gulp-changed');
const babel = require('gulp-babel');
const sprity = require('sprity');

gulp.task('images', function () {
    return gulp.src('template/phone/img/**/*.+(png|jpg|gif|svg)')
        .pipe(cache(imagemin({
            interlaced: true
        })))
        .pipe(imagemin())
        .pipe(gulp.dest('template/dist/images'))
});

// gulp.task('jscompress', function () {
//     return gulp.src('template/phone/js/**/*.js')
//         .pipe(sourcemaps.init({loadMaps: true}))
//         .pipe(babel({
//             presets: ['@babel/env'],
//             plugins: ['@babel/transform-runtime']
//         }))
//         .pipe(concat('all.js'))
//         .pipe(uglify())
//         .pipe(sourcemaps.write('.'))
//         .pipe(gulp.dest('template/dist/js'));
// });

// gulp.task('csscompress', function () {
//     return gulp.src('template/phone/css/**/*.css')
//         .pipe(sourcemaps.init())
//         .pipe(autoprefixer({
//             browsers: ['last 2 versions', 'not ie <= 8', 'Android >= 4.0'],
//             cascade: false,
//         }))
//         .pipe(concat('all.css'))
//         .pipe(uncss({
//             html: ['template/phone/index.html', 'template/phone/main.html']
//         }))
//         .pipe(csso())
//         // .pipe(cleanCSS())
//         .pipe(sourcemaps.write('.'))
//         .pipe(gulp.dest('template/dist/css'));
// });

const DEST = 'template/dist';

gulp.task('useref', function () {
    return gulp.src(['template/phone/index.html', 'template/phone/main.html'])
        .pipe(changed(DEST))
        // .pipe(gulpIf('*.css', cssver()))
        // .pipe(gulpIf('**.css', cssmin({
        //     advanced: false,//类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
        //     compatibility: 'ie7',//保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
        //     keepBreaks: true,//类型：Boolean 默认：false [是否保留换行]
        //     keepSpecialComments: '*'
        //     //保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
        // })))
        // .pipe(gulpIf('**.css', csso()))
        // .pipe(gulpIf('*.js', uglify()))
        .pipe(useref())
        .pipe(gulp.dest(DEST));
});

gulp.task('clean:dist', function (callback) {
    del(['template/dist/**/*', '!template/dist/images', '!template/dist/images/**/*'], callback)
});

gulp.task('clean:cache', function (callback) {
    del('template/dist');
    return cache.clearAll(callback);
});

gulp.task('build', function (callback) {
    runSequence('clean:dist',
        ['useref', 'images'],
        callback
    )
});

gulp.task('default', function (callback) {
    runSequence(['browserSync', 'watch'],
        callback
    )
});

gulp.task('!sprites', function () {
    return sprity.src({
        src: 'template/dist/images/**/*.+(png|jpg|gif|svg)',
        style: 'template/dist/css/all.css',
        // ... other optional options
        // for example if you want to generate scss instead of css
        // processor: 'sass', // make sure you have installed sprity-sass
    }).pipe(gulpif('*.png', gulp.dest('template/dist/img-release'), gulp.dest('./dist/css-release')))
});

gulp.task('browserify', function(){
    //定义多个入口文件
    const entityFiles = [
        './src/main/nodejs/index.js',
        './src/main/nodejs/a.js',
    ];
    //遍历映射这些入口文件
    const tasks = entityFiles.map(function(entity){
        return browserify({entries: [entry]})
            .bundle()
            .pipe(source(entry))
            .pipe(rename({
                extname: '.bundle.js',
                dirname: ''
            }))
            .pipe(gulp.dest('./src/main/webapp/js'));
    });

    //创建一个合并流
    return es.merge.apply(null, tasks);
});

gulp.task('templates', function(){
    gulp.src('source/templates/*.hbs')
        .pipe(handlebars())
        .pipe(wrap('Handlebars.template(<%= contents %>)'))
        .pipe(declare({
            namespace: 'MyApp.templates',
            noRedeclare: true, // Avoid duplicate declarations
        }))
        .pipe(concat('templates.js'))
        .pipe(gulp.dest('build/js/'));
});

gulp.task('modernizr', function() {
    return gulp.src('./js/*.js')
        .pipe(modernizr())
        .pipe(gulp.dest("build/"))
});


// critical.generate({
//     inline: true,
//     base: 'test/',
//     src: 'index.html',
//     dest: 'index-critical.html',
//     width: 1300,
//     height: 900
// });