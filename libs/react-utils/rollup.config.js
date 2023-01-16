/* const resolve = require('@rollup/plugin-node-resolve') */
/* const postcss = require('rollup-plugin-postcss') */
/* const nrwlConfig = require('@nrwl/react/plugins/bundle-rollup') */
/* const typescript = require('@rollup/plugin-typescript') */

/* const fileExtensions = ['.js', '.jsx', '.ts', '.tsx'] */

function getRollupOptions(options) {
  /* nrwlConfig(options) */
  /* const extraGlobals = {
    // <YOUR EXTRAGLOBALS NAMES>
    // Example:
    'react-dom': 'ReactDOM',
    'styled-components': 'styled',
    '@emotion/core': 'emotionCore',
  }
  if (Array.isArray(options.output)) {
    options.output.forEach(o => {
      o.globals = Object.assign(Object.assign({}, o.globals), extraGlobals)
    })
  } else {
    options.output.globals = Object.assign(Object.assign({}, options.output.globals), extraGlobals)
  } */

  options.plugins
    .push
    /* resolve.nodeResolve({
      preferBuiltins: true,
      extensions: fileExtensions,
      moduleDirectories: ['dist/packages', 'node_modules'],
    }), */
    /* builtins(), */
    /* typescript({
      tsconfig: 'packages/end-product/dashboard/tsconfig.lib.json',
      outDir: 'dist/packages/end-product/dashboard',
    }), */
    /* postcss({
      config: {
        path: 'postcss.config.js',
      },
      extensions: ['.css'],
      minimize: true,
      inject: {
        insertAt: 'top',
      },
    }), */
    ();
  options.external = [
    // YOUR EXTERNAL LIBS (Libs you don't want to bundle)
    // Example:
    'react',
    'react-is',
  ];
  return options;
}
module.exports = getRollupOptions;
