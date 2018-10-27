const {rollup} = require('rollup');
const babel = require('rollup-plugin-babel');
const compiler = require('@ampproject/rollup-plugin-closure-compiler');
const commonjs = require('rollup-plugin-commonjs');
const prettier = require('rollup-plugin-prettier');
const replace = require('rollup-plugin-replace');
const resolve = require('rollup-plugin-node-resolve');
const {getBabelOptions, resolvePath, getClosureOptions} = require('./utils');

const isProduction = process.env.NODE_ENV === 'production';

rollup({
  input: resolvePath('src/index.js'),
  external: ['react', 'react-dom', 'semantic-ui-react'],
  plugins: [
    babel(getBabelOptions()),
    resolve({
      extensions: ['.mjs', '.js', '.jsx', '.json'],
      preferBuiltins: false,
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    compiler(getClosureOptions()),
    isProduction &&
      prettier({
        parser: 'babylon',
      }),
  ],
})
  .then(bundle => {
    bundle.write({
      format: 'umd',
      file: resolvePath('lib/index.js'),
      name: '@gemcook/utils',
    });
  })
  .catch(e => {
    console.error(e);
  });
