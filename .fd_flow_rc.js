const path = require('path');

module.exports = {
  plugins: ['rollup-bundler'],
  configs: {
    rollupBundler: {
      bundlerScene: 'common_bundler',
      bundlerOption: {
        projectDir: path.resolve(__dirname, '.'),
        inputFiles: './src/index.ts',
        outputDirs: './dist/',
        outputFormats: ['esm', 'commonjs'],
        babel: {
          include: ['src/**']
        },
      }
    },
  },
};
