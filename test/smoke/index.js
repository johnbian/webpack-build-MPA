const path = require('path');
const webpack = require('webpack');
const rimraf = require('rimraf');

process.chdir(path.join(__dirname, 'template'));

const prodConfig = require('../../lib/webpack.prod.js');

rimraf('./dist', () => {
  webpack(prodConfig, (errs, stats) => {
    if (errs) {
      console.error(errs);
      process.exit(2);
    }
    console.log(stats.toString({
      colors: true,
      modules: false,
      children: false,
    }));
  });
});
