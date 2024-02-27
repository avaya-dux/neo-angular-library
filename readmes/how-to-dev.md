# how to dev

> Scaffolded via [ng generate library](https://angular.io/guide/creating-libraries/).

## one time steps

- use [NodeJS LTS](https://nodejs.org/) (preferably via nvm, [mac nvm](https://tecadmin.net/install-nvm-macos-with-homebrew/) | [windows nvm](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows))
- from project root: `npm run all`, which will install all dependancies, run linting, build the project, and run tests

## to build a production version of the library

```
npm run build:release
```

## for local development, run storybook

```
npm run storybook
```

## testing commands

Run tests

```
npm run test
```

Run tests in watch mode

```
npm run test:watch
```

## linting

```
npm run lint
```

```
npm run lint --fix
```

## when creating a new component

- follow the naming conventions of your team
- add a folder under the `src/lib` folder
- add an `index.ts` that exports the necessary files
- add your export to the `src/lib/index.ts`; make sure to follow the alphabetical order

## before commiting to this repo, please read

- our [accessibility guidelines](./accessibility-guidelines.md)
- our [coding guidelines](./coding-guidelines.md)
- and the team's [PR best practices](./pr-best-practices.md)

## publishing this repo

see [how to publish readme](./how-to-publish.md)
