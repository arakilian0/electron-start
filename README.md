# [electron-start](https://github.com/arakilian0/electron-start) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/arakilian0/electron-start/blob/main/LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/arakilian0/electron-start/blob/main/CONTRIBUTING.md)

This project is an [Electron](https://www.electronjs.org) Quickstart Template. In the [docs](https://www.electronjs.org/docs/latest/tutorial/quick-start#bonus-add-functionality-to-your-web-contents)(scroll down), it eventually just tells you to create 3 files. `index.html, main.js, preload.js`. Well we did, and now we want to build past that. Just a little. Work on things like, custom Web Components with JavaScript, build scripts for Linux, Windows, & Mac using `electron-builder`, bundle size optimizations etc.

## Requirements

[Node.js](https://www.nodejs.org)

## Installation

```
git clone https://github.com/arakilian0/electron-start.git
```

### Setup

After cloning the repo, install the project dependencies. In this case "dependency". Electron.
```
cd electron-start
npm install
```

### Start

To start the app, run

```
npm start
```

### Build

To build the app, this template uses [electron-builder](https://www.electron.build/). First globally install
electron-builder.
```
npm install -g electron-builder
```
then
```
npm run dist
```

This will run electron-builder using the configurations in `package.json` and bundle up
a distributable electron application in `/dist`.

## License
This project is [MIT Licensed](https://github.com/arakilian0/electron-start/blob/main/LICENSE).