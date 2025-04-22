const swc = require('@swc/core');
const swcLoader = require('swc-loader');

/**
 * 编译设置
 * @param {Object} buildConfig 定义在 package.json 的字段
 */
module.exports = (buildConfig = {}) => {
  return {
    jsc: {
      parser: {
        syntax: 'ecmascript',
        jsx: true,
        decorators: true,
        dynamicImport: true,
      },
      transform: {
        react: {
          runtime: 'automatic',
        },
        optimizer: {
          globals: {
            vars: {
              __DEBUG__: 'true',
            },
          },
        },
      },
      target: 'es2015',
    },
    module: {
      type: 'commonjs',
    },
    sourceMaps: true,
    minify: false,
  };
};
