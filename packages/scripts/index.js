const {rollup} = require('rollup');
const babel = require('rollup-plugin-babel');
const compiler = require('@ampproject/rollup-plugin-closure-compiler');
const commonjs = require('rollup-plugin-commonjs');
const prettier = require('rollup-plugin-prettier');
const replace = require('rollup-plugin-replace');
const resolve = require('rollup-plugin-node-resolve');
const {
  getBabelOptions,
  resolvePath,
  getClosureOptions,
  isExternal,
} = require('./lib/rollup/utils');

const srcPath = '../../src/index.js';
const distPath = '../../lib/index.js';
const isProduction = process.env.NODE_ENV === 'production';

/**
 * Rollup will create UMD Modules
 */
async function rollupBuild() {
  const bundle = await rollup({
    input: resolvePath(srcPath),
    external: isExternal,
    plugins: [
      resolve({
        extensions: ['.js', '.json', '.jsx'],
        preferBuiltins: false,
        customResolveOptions: {
          moduleDirectory: resolvePath('node_modules'),
        },
      }),
      commonjs({
        include: 'node_modules/**',
      }),
      babel(getBabelOptions()),
      replace({
        'process.env.NODE_ENV': isProduction ? "'production'" : "'development'",
      }),
      compiler(getClosureOptions()),
      // TODO: COPYRIGHT
      // stripBanner(),
      isProduction && prettier(),
    ],
  });

  bundle.write({
    format: 'umd',
    file: resolvePath(distPath),
    name: '@gemcook/utils',
  });
}

rollupBuild();
