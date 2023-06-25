const { src, dest, watch } = require ('gulp');
const sass = require('gulp-sass')(require('sass'));

function css( done ) {
    /** Compilar SASS
     * 1.- Identificar hoja de sass
     * 2.- Compilarla
     * 3.- Guardarla en el CSS
     */

    src('src/scss/app.scss') //identificar el archivo
        .pipe( sass( {outputStyle: 'compressed'} ) ) // compilar archivo
        .pipe( dest('build/css')) // guardar archivo

    done();
}

function dev() { /**funcion del watch */
    watch('src/scss/app.scss', css);
}

exports.css = css;
exports.dev = dev;