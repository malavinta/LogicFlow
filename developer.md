# developer tips

## Start

We choose the fork repository, and then submit the form of PR for development.

### clone the repository after your fork

```shell
git clone <your forked repository>
```

### Install project dependencies

> Need to install yarn in advance

```shell
npm run bootstrap
```

### Build types and package

LF is managed in the form of monorepo, and there is a dependency relationship between each package, so it is necessary to build the type and source code once before development.

```shell
npm run build:types

npm run build
```

### Start local development

develop core package

```shell
cd packages/core
npm run dev

# or skip the above "build part" and run directly
npm run dev:core
```

development extension

```shell
cd packages/extension
npm run dev

# or skip the above "build part" and run directly
npm run dev:extension
```

### Project configuration modification

The line breaks between windows and mac platforms are inconsistent, under windows is CRLF, under mac is LF, so the eslint rules need to be modified under windows system:
(If widows is configured to convert to LF, this item does not apply)

```js
{
  rules: {
    'linebreak-style': ['error', 'unix'],
    // ...
  }
}

// change to
{
  rules: {
    'linebreak-style': ['error', process.env.NODE_ENV === 'production' ? 'unix' : 'windows'],
    // ...
  }
}
```

## Publish

### clone source repository

```shell
git clone git@github.com:didi/LogicFlow.git
```

### Source packaging

```shell
# install dependencies
npm run bootstrap

# build types
npm run build:types

# Bale
npm run build
```

### Change npm official source

```shell
npm config set registry https://registry.npmjs.org/
```

### Local login to npm

```shell
npm login

# Check if you are logged in
npm whoami
```

### Add tags to the project

```shell
lerna version patch
```

For the detailed usage of lerna version, see [here](https://github.com/lerna/lerna/tree/main/commands/version#readme)

### release version

```shell
npm run lerna: publish
```

### Push tag to remote

```shell
git push origin --tags
```
