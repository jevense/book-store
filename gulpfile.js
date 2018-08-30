const gulp = require('gulp');
const gulpIf = require('gulp-if');
const uglify = require('gulp-uglify');
const useref = require('gulp-useref');
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
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const changed = require('gulp-changed');
const babel = require('gulp-babel');
const sprity = require('sprity');
const server = require('gulp-express');
const imacss = require('imacss');
const buffer = require('vinyl-buffer');
const merge = require('merge-stream');
const spritesmith = require('gulp.spritesmith');
const plato = require('plato');
const imageResize = require('gulp-image-resize');

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
    // .pipe(changed(DEST))
        .pipe(useref())
        .pipe(gulpIf('*.css', csso()))
        // .pipe(gulpIf('*.js', babel()))
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulp.dest(DEST));
});

gulp.task('bridge', function () {
    return gulp.src('template/phone/js/bridge.js')
        .pipe(changed(DEST))
        .pipe(gulpIf('*.js', babel()))
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulp.dest('template/dist/js'));
});

// gulp.task('images', function () {
//     return gulp.src('template/phone/img/*.*')
//         .pipe(cache(imagemin({
//             interlaced: true
//         })))
//         .pipe(imagemin())
//         .pipe(gulp.dest('template/dist/img'))
// });
gulp.task('images', function () {
    return gulp.src('template/phone/img/AD183AAF-D0C9-47ad-A997-D060F01039FD.png')
        .pipe(cache(imagemin({
            interlaced: true
        })))
        .pipe(imagemin())
        .pipe(gulp.dest('template/dist/img'))
});


gulp.task('sprite', function () {
    // Generate our spritesheet
    var spriteData = gulp.src('template/phone/img/*.png')
        .pipe(spritesmith({
            imgName: 'sprite.png',
            cssName: 'icon.new.css',
            imgPath: '../img/sprite.png',
            // padding: 2,// 每个图片之间的间距，默认为0px
        }))

    // Pipe image stream through image optimizer and onto disk
    var imgStream = spriteData.img
    // DEV: We must buffer our stream into a Buffer for `imagemin`
        .pipe(buffer())
        .pipe(cache(imagemin({
            interlaced: true
        })))
        .pipe(imagemin())
        .pipe(gulp.dest('template/dist/img'));

    // Pipe CSS stream through CSS optimizer and onto disk
    var cssStream = spriteData.css
    // .pipe(csso())
        .pipe(gulp.dest('template/dist/css'));

    // Return a merged stream to handle both `end` events
    return merge(imgStream, cssStream);
});


gulp.task('clean:dist', function (callback) {
    del(['template/dist/**/*', '!template/dist/img', '!template/dist/img/**/*'], callback)
});

gulp.task('clean:cache', function (callback) {
    del('template/dist');
    return cache.clearAll(callback);
});

gulp.task('build', function (callback) {
    runSequence(['clean:dist', 'images', 'bridge', 'useref',], callback)
});

gulp.task('default', function (callback) {
    runSequence(['browserSync', 'watch'],
        callback
    )
});

gulp.task('templates', function () {
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

gulp.task('server', function () {
    // Start the server at the beginning of the task
    server.run(['app.js']);

    // Restart the server when file changes
    // gulp.watch(['app/**/*.html'], server.notify);
    // gulp.watch(['app/styles/**/*.scss'], ['styles:scss']);
    //gulp.watch(['{.tmp,app}/styles/**/*.css'], ['styles:css', server.notify]);
    //Event object won't pass down to gulp.watch's callback if there's more than one of them.
    //So the correct way to use server.notify is as following:
    // gulp.watch(['{.tmp,app}/styles/**/*.css'], function(event){
    //     gulp.run('styles:css');
    //     server.notify(event);
    //     //pipe support is added for server.notify since v0.1.5,
    //     //see https://github.com/gimm/gulp-express#servernotifyevent
    // });
    //
    // gulp.watch(['app/scripts/**/*.js'], ['jshint']);
    // gulp.watch(['app/images/**/*'], server.notify);
    // gulp.watch(['app.js', 'routes/**/*.js'], [server.run]);
});

gulp.task('imacss', function () {
    imacss.transform('/path/to/your/images/*.png')
        .on('error', function onError(err) {
            console.error('Transforming images failed: ' + err);
        })
        .pipe(process.stdout);
});

gulp.task('resize', function () {
    gulp.src('dist/resize/source/*')
        .pipe(imageResize({
            width: 270,
            // crop: true,
            // upscale: false
        })).pipe(imagemin({
        optimizationLevel: 7, //类型：Number  默认：3  取值范围：0-7（优化等级）
        progressive: true,   //类型：Boolean 默认：false 无损压缩jpg图片
        interlaced: true,     //类型：Boolean 默认：false 隔行扫描gif进行渲染
        multipass: true       //类型：Boolean 默认：false 多次优化svg直到完全优化
    }))
        .pipe(gulp.dest('dist/resize/target/*'));
});
