/**
 * Created by laixiangran on 2017/5/7.
 * homepage：http://www.laixiangran.cn
 */

var gulp = require('gulp');

var config = {
	assets: './src/assets',
	dest: './dist/assets'
};

gulp.task('copy', function () {
	return gulp.src([config.assets + '/**/*.*'])
		.pipe(gulp.dest(config.dest));
});