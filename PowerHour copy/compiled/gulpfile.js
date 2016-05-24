'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var gulpif = require('gulp-if');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');
var less = require('gulp-less');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var babelify = require('babelify');
var browserify = require('browserify');
var watchify = require('watchify');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

var production = process.env.NODE_ENV === 'production';

var dependencies = ['alt', 'react', 'react-dom', 'react-router', 'underscore'];

/*
 |--------------------------------------------------------------------------
 | Combine all JS libraries into a single file for fewer HTTP requests.
 |--------------------------------------------------------------------------
 */
gulp.task('vendor', function () {
  return gulp.src(['bower_components/jquery/dist/jquery.js', 'bower_components/bootstrap/dist/js/bootstrap.js', 'bower_components/magnific-popup/dist/jquery.magnific-popup.js', 'bower_components/toastr/toastr.js']).pipe(concat('vendor.js')).pipe(gulpif(production, uglify({ mangle: false }))).pipe(gulp.dest('public/js'));
});

/*
 |--------------------------------------------------------------------------
 | Compile third-party dependencies separately for faster performance.
 |--------------------------------------------------------------------------
 */
gulp.task('browserify-vendor', function () {
  return browserify().require(dependencies).bundle().pipe(source('vendor.bundle.js')).pipe(buffer()).pipe(gulpif(production, uglify({ mangle: false }))).pipe(gulp.dest('public/js'));
});

/*
 |--------------------------------------------------------------------------
 | Compile only project files, excluding all third-party dependencies.
 |--------------------------------------------------------------------------
 */
gulp.task('browserify', ['browserify-vendor'], function () {
  return browserify({ entries: 'app/main.js', debug: true }).external(dependencies).transform(babelify, { presets: ['es2015', 'react'] }).bundle().pipe(source('bundle.js')).pipe(buffer()).pipe(sourcemaps.init({ loadMaps: true })).pipe(gulpif(production, uglify({ mangle: false }))).pipe(sourcemaps.write('.')).pipe(gulp.dest('public/js'));
});

/*
 |--------------------------------------------------------------------------
 | Same as browserify task, but will also watch for changes and re-compile.
 |--------------------------------------------------------------------------
 */
gulp.task('browserify-watch', ['browserify-vendor'], function () {
  var bundler = watchify(browserify({ entries: 'app/main.js', debug: true }, watchify.args));
  bundler.external(dependencies);
  bundler.transform(babelify, { presets: ['es2015', 'react'] });
  bundler.on('update', rebundle);
  return rebundle();

  function rebundle() {
    var start = Date.now();
    return bundler.bundle().on('error', function (err) {
      gutil.log(gutil.colors.red(err.toString()));
    }).on('end', function () {
      gutil.log(gutil.colors.green('Finished rebundling in', Date.now() - start + 'ms.'));
    }).pipe(source('bundle.js')).pipe(buffer()).pipe(sourcemaps.init({ loadMaps: true })).pipe(sourcemaps.write('.')).pipe(gulp.dest('public/js/'));
  }
});

/*
 |--------------------------------------------------------------------------
 | Compile LESS stylesheets.
 |--------------------------------------------------------------------------
 */
gulp.task('styles', function () {
  return gulp.src('app/stylesheets/main.less').pipe(plumber()).pipe(less()).pipe(autoprefixer()).pipe(gulpif(production, cssmin())).pipe(gulp.dest('public/css'));
});

gulp.task('watch', function () {
  gulp.watch('app/stylesheets/**/*.less', ['styles']);
});

gulp.task('default', ['styles', 'vendor', 'browserify-watch', 'watch']);
gulp.task('build', ['styles', 'vendor', 'browserify']);
//# sourceMappingURL=data:application/json;base64,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LENBS0MsS0FBSyxJQUFMLENBQVUsWUFBVixDQUxELENBQVA7QUFNRCxDQVBEOztBQVNBLEtBQUssSUFBTCxDQUFVLE9BQVYsRUFBbUIsWUFBVztBQUM1QixPQUFLLEtBQUwsQ0FBVywyQkFBWCxFQUF3QyxDQUFDLFFBQUQsQ0FBeEM7QUFDRCxDQUZEOztBQUlBLEtBQUssSUFBTCxDQUFVLFNBQVYsRUFBcUIsQ0FBQyxRQUFELEVBQVcsUUFBWCxFQUFxQixrQkFBckIsRUFBeUMsT0FBekMsQ0FBckI7QUFDQSxLQUFLLElBQUwsQ0FBVSxPQUFWLEVBQW1CLENBQUMsUUFBRCxFQUFXLFFBQVgsRUFBcUIsWUFBckIsQ0FBbkIiLCJmaWxlIjoiZ3VscGZpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZ3VscCA9IHJlcXVpcmUoJ2d1bHAnKTtcbnZhciBndXRpbCA9IHJlcXVpcmUoJ2d1bHAtdXRpbCcpO1xudmFyIGd1bHBpZiA9IHJlcXVpcmUoJ2d1bHAtaWYnKTtcbnZhciBhdXRvcHJlZml4ZXIgPSByZXF1aXJlKCdndWxwLWF1dG9wcmVmaXhlcicpO1xudmFyIGNzc21pbiA9IHJlcXVpcmUoJ2d1bHAtY3NzbWluJyk7XG52YXIgbGVzcyA9IHJlcXVpcmUoJ2d1bHAtbGVzcycpO1xudmFyIGNvbmNhdCA9IHJlcXVpcmUoJ2d1bHAtY29uY2F0Jyk7XG52YXIgcGx1bWJlciA9IHJlcXVpcmUoJ2d1bHAtcGx1bWJlcicpO1xudmFyIGJ1ZmZlciA9IHJlcXVpcmUoJ3ZpbnlsLWJ1ZmZlcicpO1xudmFyIHNvdXJjZSA9IHJlcXVpcmUoJ3ZpbnlsLXNvdXJjZS1zdHJlYW0nKTtcbnZhciBiYWJlbGlmeSA9IHJlcXVpcmUoJ2JhYmVsaWZ5Jyk7XG52YXIgYnJvd3NlcmlmeSA9IHJlcXVpcmUoJ2Jyb3dzZXJpZnknKTtcbnZhciB3YXRjaGlmeSA9IHJlcXVpcmUoJ3dhdGNoaWZ5Jyk7XG52YXIgdWdsaWZ5ID0gcmVxdWlyZSgnZ3VscC11Z2xpZnknKTtcbnZhciBzb3VyY2VtYXBzID0gcmVxdWlyZSgnZ3VscC1zb3VyY2VtYXBzJyk7XG5cbnZhciBwcm9kdWN0aW9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJztcblxudmFyIGRlcGVuZGVuY2llcyA9IFtcbiAgJ2FsdCcsXG4gICdyZWFjdCcsXG4gICdyZWFjdC1kb20nLFxuICAncmVhY3Qtcm91dGVyJyxcbiAgJ3VuZGVyc2NvcmUnXG5dO1xuXG4vKlxuIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuIHwgQ29tYmluZSBhbGwgSlMgbGlicmFyaWVzIGludG8gYSBzaW5nbGUgZmlsZSBmb3IgZmV3ZXIgSFRUUCByZXF1ZXN0cy5cbiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuZ3VscC50YXNrKCd2ZW5kb3InLCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGd1bHAuc3JjKFtcbiAgICAnYm93ZXJfY29tcG9uZW50cy9qcXVlcnkvZGlzdC9qcXVlcnkuanMnLFxuICAgICdib3dlcl9jb21wb25lbnRzL2Jvb3RzdHJhcC9kaXN0L2pzL2Jvb3RzdHJhcC5qcycsXG4gICAgJ2Jvd2VyX2NvbXBvbmVudHMvbWFnbmlmaWMtcG9wdXAvZGlzdC9qcXVlcnkubWFnbmlmaWMtcG9wdXAuanMnLFxuICAgICdib3dlcl9jb21wb25lbnRzL3RvYXN0ci90b2FzdHIuanMnXG4gIF0pLnBpcGUoY29uY2F0KCd2ZW5kb3IuanMnKSlcbiAgICAucGlwZShndWxwaWYocHJvZHVjdGlvbiwgdWdsaWZ5KHsgbWFuZ2xlOiBmYWxzZSB9KSkpXG4gICAgLnBpcGUoZ3VscC5kZXN0KCdwdWJsaWMvanMnKSk7XG59KTtcblxuLypcbiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiB8IENvbXBpbGUgdGhpcmQtcGFydHkgZGVwZW5kZW5jaWVzIHNlcGFyYXRlbHkgZm9yIGZhc3RlciBwZXJmb3JtYW5jZS5cbiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuZ3VscC50YXNrKCdicm93c2VyaWZ5LXZlbmRvcicsIGZ1bmN0aW9uKCkge1xuICByZXR1cm4gYnJvd3NlcmlmeSgpXG4gICAgLnJlcXVpcmUoZGVwZW5kZW5jaWVzKVxuICAgIC5idW5kbGUoKVxuICAgIC5waXBlKHNvdXJjZSgndmVuZG9yLmJ1bmRsZS5qcycpKVxuICAgIC5waXBlKGJ1ZmZlcigpKVxuICAgIC5waXBlKGd1bHBpZihwcm9kdWN0aW9uLCB1Z2xpZnkoeyBtYW5nbGU6IGZhbHNlIH0pKSlcbiAgICAucGlwZShndWxwLmRlc3QoJ3B1YmxpYy9qcycpKTtcbn0pO1xuXG4vKlxuIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuIHwgQ29tcGlsZSBvbmx5IHByb2plY3QgZmlsZXMsIGV4Y2x1ZGluZyBhbGwgdGhpcmQtcGFydHkgZGVwZW5kZW5jaWVzLlxuIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5ndWxwLnRhc2soJ2Jyb3dzZXJpZnknLCBbJ2Jyb3dzZXJpZnktdmVuZG9yJ10sIGZ1bmN0aW9uKCkge1xuICByZXR1cm4gYnJvd3NlcmlmeSh7IGVudHJpZXM6ICdhcHAvbWFpbi5qcycsIGRlYnVnOiB0cnVlIH0pXG4gICAgLmV4dGVybmFsKGRlcGVuZGVuY2llcylcbiAgICAudHJhbnNmb3JtKGJhYmVsaWZ5LCB7IHByZXNldHM6IFsnZXMyMDE1JywgJ3JlYWN0J10gfSlcbiAgICAuYnVuZGxlKClcbiAgICAucGlwZShzb3VyY2UoJ2J1bmRsZS5qcycpKVxuICAgIC5waXBlKGJ1ZmZlcigpKVxuICAgIC5waXBlKHNvdXJjZW1hcHMuaW5pdCh7IGxvYWRNYXBzOiB0cnVlIH0pKVxuICAgIC5waXBlKGd1bHBpZihwcm9kdWN0aW9uLCB1Z2xpZnkoeyBtYW5nbGU6IGZhbHNlIH0pKSlcbiAgICAucGlwZShzb3VyY2VtYXBzLndyaXRlKCcuJykpXG4gICAgLnBpcGUoZ3VscC5kZXN0KCdwdWJsaWMvanMnKSk7XG59KTtcblxuLypcbiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiB8IFNhbWUgYXMgYnJvd3NlcmlmeSB0YXNrLCBidXQgd2lsbCBhbHNvIHdhdGNoIGZvciBjaGFuZ2VzIGFuZCByZS1jb21waWxlLlxuIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5ndWxwLnRhc2soJ2Jyb3dzZXJpZnktd2F0Y2gnLCBbJ2Jyb3dzZXJpZnktdmVuZG9yJ10sIGZ1bmN0aW9uKCkge1xuICB2YXIgYnVuZGxlciA9IHdhdGNoaWZ5KGJyb3dzZXJpZnkoeyBlbnRyaWVzOiAnYXBwL21haW4uanMnLCBkZWJ1ZzogdHJ1ZSB9LCB3YXRjaGlmeS5hcmdzKSk7XG4gIGJ1bmRsZXIuZXh0ZXJuYWwoZGVwZW5kZW5jaWVzKTtcbiAgYnVuZGxlci50cmFuc2Zvcm0oYmFiZWxpZnksIHsgcHJlc2V0czogWydlczIwMTUnLCAncmVhY3QnXSB9KTtcbiAgYnVuZGxlci5vbigndXBkYXRlJywgcmVidW5kbGUpO1xuICByZXR1cm4gcmVidW5kbGUoKTtcblxuICBmdW5jdGlvbiByZWJ1bmRsZSgpIHtcbiAgICB2YXIgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHJldHVybiBidW5kbGVyLmJ1bmRsZSgpXG4gICAgICAub24oJ2Vycm9yJywgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGd1dGlsLmxvZyhndXRpbC5jb2xvcnMucmVkKGVyci50b1N0cmluZygpKSk7XG4gICAgICB9KVxuICAgICAgLm9uKCdlbmQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZ3V0aWwubG9nKGd1dGlsLmNvbG9ycy5ncmVlbignRmluaXNoZWQgcmVidW5kbGluZyBpbicsIChEYXRlLm5vdygpIC0gc3RhcnQpICsgJ21zLicpKTtcbiAgICAgIH0pXG4gICAgICAucGlwZShzb3VyY2UoJ2J1bmRsZS5qcycpKVxuICAgICAgLnBpcGUoYnVmZmVyKCkpXG4gICAgICAucGlwZShzb3VyY2VtYXBzLmluaXQoeyBsb2FkTWFwczogdHJ1ZSB9KSlcbiAgICAgIC5waXBlKHNvdXJjZW1hcHMud3JpdGUoJy4nKSlcbiAgICAgIC5waXBlKGd1bHAuZGVzdCgncHVibGljL2pzLycpKTtcbiAgfVxufSk7XG5cbi8qXG4gfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gfCBDb21waWxlIExFU1Mgc3R5bGVzaGVldHMuXG4gfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbmd1bHAudGFzaygnc3R5bGVzJywgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBndWxwLnNyYygnYXBwL3N0eWxlc2hlZXRzL21haW4ubGVzcycpXG4gICAgLnBpcGUocGx1bWJlcigpKVxuICAgIC5waXBlKGxlc3MoKSlcbiAgICAucGlwZShhdXRvcHJlZml4ZXIoKSlcbiAgICAucGlwZShndWxwaWYocHJvZHVjdGlvbiwgY3NzbWluKCkpKVxuICAgIC5waXBlKGd1bHAuZGVzdCgncHVibGljL2NzcycpKTtcbn0pO1xuXG5ndWxwLnRhc2soJ3dhdGNoJywgZnVuY3Rpb24oKSB7XG4gIGd1bHAud2F0Y2goJ2FwcC9zdHlsZXNoZWV0cy8qKi8qLmxlc3MnLCBbJ3N0eWxlcyddKTtcbn0pO1xuXG5ndWxwLnRhc2soJ2RlZmF1bHQnLCBbJ3N0eWxlcycsICd2ZW5kb3InLCAnYnJvd3NlcmlmeS13YXRjaCcsICd3YXRjaCddKTtcbmd1bHAudGFzaygnYnVpbGQnLCBbJ3N0eWxlcycsICd2ZW5kb3InLCAnYnJvd3NlcmlmeSddKTsiXX0=