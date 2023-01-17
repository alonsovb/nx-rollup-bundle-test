# BundlingTest

This project demonstrates how to bundle multiple NX monorepo packages into a single publishable package using Rollup, while keeping all top-level package.json dependencies as externals for the rollup build.

# How to

Check the project.json file for the `react-utils` package which is the publishable one, as well as the `utils` and `alonso-components` one which are dependencies.

To get a proper rollup build, do the following:

1. Run `nx run react-utils:build` which builds the package as well as all other dependencies and puts them into `dist/` using a structure that matches this format: `@organization/package`.
2. Run `nx run react-utils:bundle-all` which builds the package but this time it reads dependencies (`utils`, etc) from the `dist/` folder and bundles everything together. All the top level package.json dependencies are passed to rollup as external deps, so they don't get bundled too.

## TODO

- Update the resulting package.json with the proper dependencies.
