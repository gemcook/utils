module.exports = function getBabelOptions() {
  return Object.assign(
    {},
    {
      exclude: 'node_modules/**',
      babelrc: false,
      presets: ['babel-preset-stage-flow'],
      runtimeHelpers: true,
    },
  );
};
