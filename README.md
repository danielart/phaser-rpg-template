# Phaser 3 TypeScript Project Template

This quick-start project template combines Phaser 3.50 with [TypeScript 4](https://www.typescriptlang.org/) and uses [Rollup](https://rollupjs.org) for bundling.

## Requirements

[Node.js](https://nodejs.org) is required to install dependencies and run scripts via `npm`.

## Available Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install project dependencies |
| `npm run watch` | Build project and open web server running project, watching for changes |
| `npm run dev` | Builds project and open web server, but do not watch for changes |
| `npm run build` | Builds code bundle with production settings (minification, no source maps, etc..) |

## Writing Code

After cloning the repo, run `npm install` from your project directory. Then, you can start the local development
server by running `npm run watch`. The first time you run this you should see the following demo run:

After starting the development server with `npm run watch`, you can edit any files in the `src` folder
and Rollup will automatically recompile and reload your server (available at `http://localhost:10001`
by default).

## Configuring Rollup

* Edit the file `rollup.config.dev.js` for development build.
* Edit the file `rollup.config.dist.js` for distribution build.

## Credits

### projects used

* <https://github.com/photonstorm/phaser3-typescript-project-template>

* <https://github.com/project-cybersyn-game/project-cybersyn-game>

* <https://github.com/Annoraaq/grid-movement>

### Music

* “Pet Park”, from PlayOnLoop.com (Licensed under Creative Commons by Attribution 4.0)
* “Jungle Hideout”, from PlayOnLoop.com (Licensed under Creative Commons by Attribution 4.0)

### Tiles art

* "moder exteriors", from  LimeZu <https://limezu.itch.io/>
* "moder interiors", from  LimeZu <https://limezu.itch.io/>

## Documents and tutorials

### To create tiledMaps

* <https://www.youtube.com/watch?v=ZwaomOYGuYo>

### to use grid engine

* <https://medium.com/swlh/grid-based-movement-in-a-top-down-2d-rpg-with-phaser-3-e3a3486eb2fd>

* <https://annoraaq.github.io/grid-engine/>
