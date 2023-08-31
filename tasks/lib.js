import app from '../config/gulp.js';

const { src, dest, path, changed, plumber, plumberNotify, isProd } = app;

const lib = () => src([path.lib.srcCss])
  .pipe(changed(path.lib.destCss))
  .pipe(plumber(plumberNotify('LIB')))
  .pipe(dest(path.lib.destCss));

export default lib;