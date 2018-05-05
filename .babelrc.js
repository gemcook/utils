'use strict';

var env = process.env.BABEL_ENV;

var presets = ['@babel/flow', '@babel/react', '@babel/preset-stage-3'];
var plugins = [
  ['@babel/plugin-proposal-class-properties', {loose: true}],
  '@babel/plugin-proposal-export-default-from',
  '@babel/plugin-proposal-export-namespace-from',
  '@babel/plugin-proposal-optional-chaining',
  '@babel/plugin-syntax-class-properties',
  '@babel/plugin-syntax-export-default-from',
  '@babel/plugin-syntax-export-namespace-from',
  '@babel/plugin-syntax-optional-chaining',
];

if (env === 'test') {
  presets.push.apply(presets, [
    [
      '@babel/preset-env',
      {
        targets: {node: '8.11.1'},
        modules: false,
      },
    ],
  ]);
}

if (env === 'development') {
  presets.push.apply(presets, [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['> 1% in JP'],
        },
        modules: false,
        useBuiltIns: 'usage',
      },
    ],
  ]);
}

if (env === 'production') {
  presets.push.apply(presets, [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['> 1% in JP'],
        },
        modules: false,
        useBuiltIns: 'usage',
      },
    ],
  ]);
}

module.exports = {presets, plugins};
