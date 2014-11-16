var gulp       = require( 'gulp' )
  , react      = require( 'gulp-react' )
  , uglify     = require( 'gulp-uglify' )
  , concat     = require( 'gulp-concat' )
  , browserify = require( 'gulp-browserify' );

var PATH = {
    client: {
        _:          'src/client/',
        js:         'src/client/js/',
        components: 'src/client/js/components/',
        compiled:   'src/client/js/components/compiled/'
    },

    dist: {
        _:          'dist/',
        js:         'dist/js/',
        css:        'dist/css/'
    },

    node_modules: {
        _:          'node_modules/',
        bootstrap:  'node_modules/bootstrap/dist/css/bootstrap.css'
    }
};

gulp.task( 'jsx', function () {
    return gulp.src( PATH.client.components + '*.jsx' )
               .pipe( react() )
               .pipe( gulp.dest( PATH.client.compiled ) );
});

gulp.task( 'js', [ 'jsx' ], function () {
    return gulp.src( PATH.client.js + 'main.js' )
               .pipe( react() )
               .pipe( browserify() )
               .pipe( gulp.dest( PATH.dist.js ) );
});

gulp.task( 'html', function () {
    return gulp.src( PATH.client._ + 'index.html' )
               .pipe( gulp.dest( PATH.dist._ ) );
});


gulp.task( 'css', function () {
    return gulp.src([ PATH.node_modules.bootstrap ])
               .pipe( gulp.dest( PATH.dist.css ) );
});

gulp.task( 'default', [ 'js', 'html', 'css' ] );
