## how to publish

from the root of the directory

- `npm login`: to ensure that you are properly logged in to the NPM network
- `npm run all`: this will clean out all build artifacts, rebuild everything, run all tests, and "pack" the tarball if everything was successful
- `npm run publish:lib`: publishes the generated tarball to our registry
- - TEMP: Joe/Enrique/Mo will need to do the actual publishing for now


You can check that the package was properly published by viewing it on NPMJS
- [link to registry](https://registry.npmjs.org/@avaya%2fneo-angular): api call, returns JSON, no cache
- [link to npmjs page](https://www.npmjs.com/package/@avaya/neo-angular): our page on NPMJS, is on a 60min cache

If you made a mistake, you can simply `unpublish` the package via
- `npm unpublish @avaya/neo-angular@<version>`
- - [see NPMJS docs](https://docs.npmjs.com/cli/v8/commands/npm-unpublish) for further details on unpublishing


Once that is complete, the next step is to add the release to our GitHub
- navigate to our [GitHub releases page](https://github.com/avaya-dux/neo-angular-library/releases)
- click: "Draft a new release" (top right corner)
- choose tag (or create a new tag on publish), using format `vX.X.X`
- target `main` branch
- add title using format: "v0.1.0 (Jan 18th 2024)"
- click: "Auto-generate release notes"
- attach the binary generated from `yarn all` (tgz file)
- click: "Publish release"
- create a PR and bump package.json version
