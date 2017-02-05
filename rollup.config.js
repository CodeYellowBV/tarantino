var commonjs = require('rollup-plugin-commonjs');
var nodeResolve = require('rollup-plugin-node-resolve');

module.exports = {
    entry: './lib/browser.js',
    format: 'umd',
    dest: 'build/tarantino.js',
    moduleId: 'tarantino',
    moduleName: 'tarantino',
    plugins: [
        commonjs(),
        nodeResolve({
          jsnext: true,
          main: true
        }),
    ],
};
