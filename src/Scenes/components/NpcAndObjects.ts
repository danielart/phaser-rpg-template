import { ObjectType } from '../enums/ObjectType';
import 'phaser'
import GameScene from "../GameScene"
import GlobalInfo from '../../GlobalInfo'
import { WalkingAnimationMapping, Direction } from 'grid-engine'

export class NpcsAndObjects {
    static number: integer = 0;
    static npcsAndObjectsArray: NpcsAndObjects[] = [];
    texture?: string;
    name: string
    type: ObjectType;
    scene: GameScene;
    startX: integer = 0;
    startY: integer = 0;
    speed: integer = 4;
    container!: Phaser.GameObjects.Container;
    interactionCounter: integer = 0;
    facingDirection?: Direction;

    protected action: Function = (): void => {
        // code here for default action
    }

    constructor(
        scene: GameScene,
        type: ObjectType,
        xPos: integer,
        yPos: integer,
        texture: string | undefined,
        scale: number,
        action?: Function,
        walkingAnimationMapping?: number | WalkingAnimationMapping
    ) {
        this.name = `${type}${NpcsAndObjects.number}`
        NpcsAndObjects.number++
        NpcsAndObjects.npcsAndObjectsArray.push(this)
        this.type = type
        this.scene = scene

        this.startX = xPos
        this.startY = yPos
        this.texture = texture

        // add object to the scene
        const npcSprite = createCharacterSprite(scene, 0, 0, texture, scale)
        this.addCharacter(npcSprite, xPos, yPos, this.container, walkingAnimationMapping)

        // add action to execute when player interacts with the object
        if (action) {
            this.action = action
        }

        scene.npcsAndObjectsArray.push(this)
    }

    // For interacting with NPCs and objects and then executing the action set in the associated NPC
    static interaction(
        scene: GameScene
    ): void {
        const movementStartListener = scene.gridEngine.movementStarted()
        const movementStopListener = scene.gridEngine.movementStopped()
        const directionListener = scene.gridEngine.directionChanged()

        // prevents doors from being used repeatedly after switching the scene/room
        scene.events.addListener('wake', () => {
            scene.characterMoved = false
        })

        movementStopListener.subscribe((observer) => {
            scene.gridEngine.setSpeed(scene.playerName, 4)
            this.interactionChange(scene)
        })

        // Doesn't even need to rotate / change the direction.
        directionListener.subscribe((observer) => {
            if (observer.charId === scene.playerName) {
                this.interactionChange(scene)
                // object movement
                if (
                    !GlobalInfo._gameProgress.inDialogue &&
                    (
                        (scene.cursors.up.isDown && observer.direction === Direction.UP) ||
                        (scene.cursors.left.isDown && observer.direction === Direction.LEFT) ||
                        (scene.cursors.down.isDown && observer.direction === Direction.DOWN) ||
                        (scene.cursors.right.isDown && observer.direction === Direction.RIGHT)
                    )
                ) {
                    scene.npcsAndObjectsArray.forEach(object => {
                        if (
                            scene.gridEngine.getFacingPosition(scene.playerName).x === scene.gridEngine.getPosition(object.name.toString()).x &&
                            scene.gridEngine.getFacingPosition(scene.playerName).y === scene.gridEngine.getPosition(object.name.toString()).y &&
                            !object.name.toUpperCase().startsWith('NPC')
                        ) {
                            object.action(scene, object.name)
                        }
                    })
                }
            }
        })

        movementStartListener.subscribe((observer) => {

            scene.interactionKey.removeAllListeners('down')
            scene.cursors.up.off('down')
            scene.cursors.left.off('down')
            scene.cursors.down.off('down')
            scene.cursors.right.off('down')
        })

        GlobalInfo.on('inDialogue', (value: boolean) => {
            this.interactionChange(scene)
        })
    }

    private static interactionChange(
        scene: GameScene
    ): void {
        scene.interactionKey.removeAllListeners('down')
        if (!GlobalInfo._gameProgress.inDialogue) {
            scene.npcsAndObjectsArray.forEach(object => {
                if (
                    scene.gridEngine.getFacingPosition(scene.playerName).x === scene.gridEngine.getPosition(object.name.toString()).x &&
                    scene.gridEngine.getFacingPosition(scene.playerName).y === scene.gridEngine.getPosition(object.name.toString()).y &&
                    object.name.toUpperCase().startsWith('NPC')
                ) {
                    scene.interactionKey.once('down', () => {
                        object.action(scene, object.name)
                    })
                }
            })
        }
    }

    // add a character to the GridEngine
    addCharacter(
        npcSprite: Phaser.Physics.Arcade.Sprite,
        xPos: integer,
        yPos: integer,
        container: Phaser.GameObjects.Container,
        walkingAnimationMapping?: number | WalkingAnimationMapping
    ): void {
        this.scene.gridEngine.addCharacter(
            {
                id: (this.name),
                sprite: npcSprite,
                container,
                startPosition: { x: xPos, y: yPos },
                facingDirection: this.facingDirection ?? Direction.DOWN,
                speed: this.speed,
                walkingAnimationMapping: walkingAnimationMapping ?? 0
            }
        )
    }
}


// create a character at the given coordinates on the map and scale it
export function createCharacterSprite(
    scene: GameScene,
    x: number,
    y: number,
    texture: string,
    scale: number
): Phaser.Physics.Arcade.Sprite {
    const sprite: Phaser.Physics.Arcade.Sprite = scene.physics.add.sprite(x, y, texture)
    sprite.scale = scale

    return sprite
}