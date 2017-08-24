var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var webserver = require('gulp-webserver');


gulp.task('script', function(){
	gulp.src(['node_modules/jquery/dist/jquery.js','node_modules/materialize-css/dist/js/materialize.js','assets/js/*.js'])
	.pipe(concat('script.js'))
	.pipe(gulp.dest('public/js/'));
});

gulp.task('style', function(){
	gulp.src(['node_modules/materialize-css/dist/css/materialize.css','assets/sass/main.scss'])
	.pipe(sass().on('error', sass.logError))
	.pipe(minifyCSS())
	.pipe(concat('style.min.css'))
	.pipe(gulp.dest('public/css/'));
});

gulp.task('webserver', function(){
	gulp.src('../yape-work/')
	.pipe(webserver({
		fallback: 'public/index.html',
		livereload: true,
		auto: false,
		 port: 6000,
		directoryListing: false,
		open: true
	}));
});

gulp.task('watch', function(){
	gulp.watch('assets/sass/*.scss',['style']);
});

gulp.task('watchjs', function() {
	gulp.watch('assets/js/*.js', ['script']);
    gulp.watch('assets/css/*.css', ['style']);
});

gulp.task('watchjs', function() {
    gulp.watch('assets/js/*.js', ['script']);
});

gulp.task('default', ['script', 'style', 'webserver', 'watch', 'watchjs']);
