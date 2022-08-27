import { ObjectType } from '../enums/ObjectType';
import GameScene from '../GameScene';
import { NpcsAndObjects } from './NpcAndObjects';

// pushable objects
export class Objects extends NpcsAndObjects {
    protected action: Function = (): void => {
        if (!this.scene.gridEngine.isMoving(this.name)) {
            this.scene.gridEngine.move(this.name, this.scene.gridEngine.getFacingDirection(this.scene.playerName))
            if (this.scene.gridEngine.isMoving(this.name)) {
                this.scene.gridEngine.setSpeed(this.scene.playerName, 2.5)
            }
        }
    }

    constructor(
        scene: GameScene,
        xPosition: integer,
        yPosition: integer,
        texture: string,
        scale: number = 1
    ) {
        super(scene, ObjectType.Object, xPosition, yPosition, texture, scale)
    }
}