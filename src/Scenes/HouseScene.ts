import 'phaser';
import { CollisionStrategy } from "grid-engine";

import GameScene from './GameScene';
import { Door } from './components/Door';
import { csvStringQuest } from '../Scenes/quests/house-quests';
import { SceneName } from './enums/SceneNames';

export default class HouseScene extends GameScene {
    constructor() {
        super('house', 7, 7);

        this.imageNames = {
            Perli: `${SceneName.House}_perli`,
            Map: 'house',
        }

        this.tilemapJSONPath = '../assets/tilemap/house.json'
        this.imageMapDefaultPath = '../assets/tiles/'
        this.imageMapNames = {
            Basement_16x16: {
                name: "Basement_16x16",
            },
            Room_Builder_Floors_16x16: {
                name: "Room_Builder_Floors_16x16",
            },
            Room_Builder_Walls_16x16: {
                name: "Room_Builder_Walls_16x16",
            },
            Grocery_store_16x16: {
                name: "Grocery_store_16x16",
            },
        }

        this.gridEngineSettings = {
            startPosition: {
                x: 7,
                y: 9
            },
            scale: 5,
            characterCollisionStrategy: CollisionStrategy.BLOCK_ONE_TILE_AHEAD,
            layerOverlay: false
        }
    }


    loadObjectImages(): void {
    }
    createNpcs(): void {
    }

    preload() {
        super.preload();
        super.loadAvatarSpritesheet();
        super.loadMapImages();
        this.loadObjectImages();
        this.load.audio('square_theme', '../../assets/music/pet_park.wav');
    }

    create(): void {
        super.create();
        new Door({
            scene: this, xPosition: 11, yPosition: 7, nextScene: SceneName.Test
        })
        new Door({
            scene: this, xPosition: 11, yPosition: 8, nextScene: SceneName.Test
        })

        this.sound.play('square_theme', {
            volume: 0.5,
            loop: true
        })
        this.scene.scene.events.on('wake', () => {
            this.sound.play('square_theme', {
                volume: 0.5,
                loop: true
            })
        })
        this.scene.scene.events.on('start', () => {
            this.sound.play('square_theme', {
                volume: 0.5,
                loop: true
            })
        })

        console.log(this.scene.scene.plugins.get('rexQuest'))

        console.log(this.plugins)

    }

    update(): void {
        super.update()
    }
}
