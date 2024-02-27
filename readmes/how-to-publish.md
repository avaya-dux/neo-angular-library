## how to publish

The `publish-lib.yml` is a GitHub Action that publishes the libray to NPM whenever the version is update on `main`. You still need to follow the GitHub release steps below.

You can check that the package was properly published by viewing it on NPMJS

- [link to registry](https://registry.npmjs.org/@avaya%2fneo-angular): api call, returns JSON, no cache
- [link to npmjs page](https://www.npmjs.com/package/@avaya/neo-angular): our page on NPMJS, is on a 60min cache

If you made a mistake, you can simply `unpublish` the package via:

- `npm unpublish @avaya/neo-angular@<version>`
- - [see NPMJS docs](https://docs.npmjs.com/cli/v8/commands/npm-unpublish) for further details on unpublishing

## GitHub release

The final step is to add the release to GitHub.

- navigate to our [GitHub releases page](https://github.com/avaya-dux/neo-angular-library/releases)
- click: "Draft a new release" (top right corner)
- choose tag (or create a new tag on publish), using format `vX.X.X`
- target `main` branch
- add title using format: "v0.1.0 (Jan 18th 2024)"
- click: "Auto-generate release notes"
- click: "Publish release"


## manual publishing

If you need to manually publish, such as to test an alpha release, you only to build and then publish the created distrobution.

- `npm run all`: to ensure that everything is built properly
- `npm logn`: to ensure that you are logged into NPMJS
- `npm publish ./dist/examples/`: to publish the library
