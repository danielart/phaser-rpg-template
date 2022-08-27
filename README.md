# Phaser 3 TypeScript Project Template

A small template to create a RPG with tiled maps in PhaserJS 3. This will allow you to make easilly:

* Scenes with several layers
* Place objects and NPC in scenes
* Switch between scenes through doors (even hidden doors!)
* Move player and npcs across the tiles thanks to GridEngine (already configured but you can customize it)
* Add music to your scenes
* Trigger some logic/actions when interact with NPC or objects
* Add special habilities with sounds and animations to main player.

This quick-start project template combines Phaser 3.55.2 with [TypeScript 4.8](https://www.typescriptlang.org/) and uses [Rollup 2.77](https://rollupjs.org) for bundling.

## Requirements

[Node.js (^14.19.0)](https://nodejs.org) is required to install dependencies and run scripts via `npm`.

## Available Commands

| Command | Description |
|---------|-------------|
| `npm i` | Install project dependencies |
| `npm run watch` | Build project and open web server running project, watching for changes |
| `npm run dev` | Builds project and open web server, but do not watch for changes |
| `npm run build` | Builds code bundle with production settings (minify, uglify...) |

## How to start

After cloning the repo, run `npm i` from your project directory. Then, you can start the local development. Run `npm run watch` to develop.
After starting the development server with `npm run watch`, you can edit any files in the `src` folder and Rollup will automatically recompile and reload your server (available at [`http://localhost:10001`]()).

*NOTE: may hot module replace is broken, and you'll need to refresh the browser once the files are bundled again*

## Configuring Rollup

* Edit the file `rollup.config.dev.js` for development build.
* Edit the file `rollup.config.dist.js` for distribution build.

## TODO List

* [ ] Menu scene
* [ ] Save data/progress locally
* [ ] Pause scene
* [ ] Implement [Quest](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/quest/) pluguin
* [ ] Implement a joystick for mobile
* [ ] Implement dialog components

About coding

* [ ] Implement eslint & prettier before commit
* [ ] Set linter rules
* [ ] Improve typescript in all classes and methods
* [ ] Improve docs

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

### To use grid engine

* <https://medium.com/swlh/grid-based-movement-in-a-top-down-2d-rpg-with-phaser-3-e3a3486eb2fd>

* <https://annoraaq.github.io/grid-engine/>

## Tools to create arts

### Maps

To create tiled maps I recommend [Tiled](https://www.mapeditor.org/)

### Tiles, sprites and sounds

You can find some assets for free on [Itch.io](https://itch.io/game-assets/tag-royalty-free)

### Create/edit sprites

I created few arts with [Piskel](https://www.piskelapp.com/p/create/sprite), is easy and intuitive
