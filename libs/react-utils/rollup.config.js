const fs = require('fs');
const resolve = require('@rollup/plugin-node-resolve');
/* const postcss = require('rollup-plugin-postcss') */
const nrwlConfig = require('@nrwl/react/plugins/bundle-rollup');

const fileExtensions = ['.js', '.jsx', '.ts', '.tsx'];

function getDependencies() {
  try {
    const rawData = fs.readFileSync('package.json', 'utf8');
    const package = JSON.parse(rawData);

    return Object.keys(package.dependencies);
  } catch (err) {
    console.error(err);
  }
}

function getRollupOptions(options) {
  nrwlConfig(options);
  const extraGlobals = {
    /* 'react-dom': 'ReactDOM',
    'styled-components': 'styled',
    '@emotion/core': 'emotionCore', */
  };
  if (Array.isArray(options.output)) {
    options.output.forEach((o) => {
      o.globals = Object.assign(Object.assign({}, o.globals), extraGlobals);
    });
  } else {
    options.output.globals = Object.assign(
      Object.assign({}, options.output.globals),
      extraGlobals
    );
  }

  options.plugins.push(
    resolve.nodeResolve({
      preferBuiltins: true,
      extensions: fileExtensions,
      moduleDirectories: ['dist', 'node_modules'],
    })
    /* builtins(), */
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
  );
  options.external = getDependencies();
  return options;
}

module.exports = getRollupOptions;
