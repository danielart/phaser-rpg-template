import { Npc } from './components/Npc';
import { SceneName } from './enums/SceneNames';
import { Door } from './components/Door';
import { CollisionStrategy } from 'grid-engine';
import GameScene from "./GameScene"
import { LayerType } from './enums/LayerType';



export default class TestScene extends GameScene {
    constructor() {
        super(SceneName.Test, 4, 4, [LayerType.Floor, LayerType.Walls, LayerType.Furnitures])

        this.imageNames = {
            Perli: `${SceneName.Test}_perli`,
            Veterinary: 'test_veterinary',
            Map: 'test_map',
        }

        this.tilemapJSONPath = '../assets/tilemap/test_map.json'
        this.imageMapDefaultPath = '../assets/tiles/'
        this.imageMapNames = {
            Basement_16x16: {
                name: "Basement_16x16",
            },
        }

        this.gridEngineSettings = {
            startPosition: {
                x: 4,
                y: 4
            },
            scale: 5,
            characterCollisionStrategy: CollisionStrategy.BLOCK_ONE_TILE_AHEAD,
            layerOverlay: false
        }
    }

    preload(): void {
        super.preload()
        super.loadAvatarSpritesheet()
        super.loadMapImages()
        this.loadObjectImages()
    }

    loadObjectImages(): void {
        this.load.spritesheet(
            this.imageNames.Veterinary,
            '../assets/Characters/NPCs_1.png',
            {
                frameWidth: 32,
                frameHeight: 64
            }
        )
    }

    create(): void {
        super.create()

        // example to add a hidden Door
        new Door({
            scene: this, xPosition: 7, yPosition: 7, nextScene: SceneName.House
        })
    }

    createNpcs(): void {

        // example to add a NPC
        new Npc(
            {
                scene: this,
                xPosition: 10,
                yPosition: 10,
                texture: this.imageNames.Veterinary,
                scale: 0.7,
                action: (
                    scene: GameScene,
                    name: String
                ) => {
                    // place here code for messages or quests
                },
                walkingAnimationMapping: 0,
            });
    }

    update(): void {
        super.update()
    }
}