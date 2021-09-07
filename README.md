# yarn-webpack-node-modules-to-pnp

Steps to reproduce:

* Clone repository (`git clone git@github.com:jgornick/yarn-webpack-node-modules-to-pnp.git`)
* Install dependencies (`yarn i`)
* Try to build w/ webpack (`yarn build:node-modules`)

Current output with build:node-modules from monorepo root:

```
$ yarn build:node-modules
asset bundle.js 2.88 KiB [compared for emit] (name: main)
./index.js 109 bytes [built] [code generated]
../../components/pnp/index.js 94 bytes [built] [code generated]
../../../.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/identity.js 370 bytes [built] [code generated]

ERROR in ./index.js 1:14-37
Module not found: Error: Can't resolve 'lodash/times' in '/Users/joe/Projects/yarn-webpack-node-modules-to-pnp/workspaces/tools/node-modules'
resolve 'lodash/times' in '/Users/joe/Projects/yarn-webpack-node-modules-to-pnp/workspaces/tools/node-modules'
  Parsed request is a module
  using description file: /Users/joe/Projects/yarn-webpack-node-modules-to-pnp/workspaces/tools/node-modules/package.json (relative path: .)
    Field 'browser' doesn't contain a valid alias configuration
    resolve as module
      issuer is not managed by the pnpapi

webpack 5.51.1 compiled with 1 error in 131 ms
Command failed: node /usr/local/Cellar/yvm/4.1.4/versions/v1.22.11/bin/yarn.js build:node-modules
```

> ^^^ Notice how it can't find `lodash/times` in the node-modules module

Output with running build manually:

```
$ cd workspaces/tools/node-modules && yarn build
asset bundle.js 19.5 KiB [emitted] (name: main)
runtime modules 221 bytes 1 module
modules by path ./node_modules/lodash/*.js 11.5 KiB 18 modules
./index.js 109 bytes [built] [code generated]
../../components/pnp/index.js 94 bytes [built] [code generated]

ERROR in ../../components/pnp/index.js 1:17-43
Module not found: Error: Can't resolve 'lodash/identity' in '/Users/joe/Projects/yarn-webpack-node-modules-to-pnp/workspaces/components/pnp'
resolve 'lodash/identity' in '/Users/joe/Projects/yarn-webpack-node-modules-to-pnp/workspaces/components/pnp'
  Parsed request is a module
  using description file: /Users/joe/Projects/yarn-webpack-node-modules-to-pnp/workspaces/components/pnp/package.json (relative path: .)
    Field 'browser' doesn't contain a valid alias configuration
    resolve as module
      /Users/joe/Projects/yarn-webpack-node-modules-to-pnp/workspaces/components/pnp/node_modules doesn't exist or is not a directory
      /Users/joe/Projects/yarn-webpack-node-modules-to-pnp/workspaces/components/node_modules doesn't exist or is not a directory
      /Users/joe/Projects/yarn-webpack-node-modules-to-pnp/workspaces/node_modules doesn't exist or is not a directory
      /Users/joe/Projects/yarn-webpack-node-modules-to-pnp/node_modules doesn't exist or is not a directory
      /Users/joe/Projects/node_modules doesn't exist or is not a directory
      looking for modules in /Users/joe/node_modules
        /Users/joe/node_modules/lodash doesn't exist
      /Users/node_modules doesn't exist or is not a directory
      /node_modules doesn't exist or is not a directory
 @ ./index.js 3:11-42

webpack 5.51.1 compiled with 1 error in 130 ms
Command failed: node /usr/local/Cellar/yvm/4.1.4/versions/v1.22.11/bin/yarn.js build
```

> ^^^ Notice how it can't find `lodash/identity` in the pnp module
