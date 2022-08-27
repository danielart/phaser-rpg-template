import { NpcsAndObjects } from './NpcAndObjects';
import { SceneName } from '../enums/SceneNames';
import GameScene from "../GameScene";
import { ObjectType } from '../enums/ObjectType';

interface DoorProps {
    scene: GameScene,
    xPosition: number,
    yPosition: number,
    nextScene: SceneName
}

export class Door extends NpcsAndObjects {

    protected action: Function;

    constructor({
        scene,
        xPosition,
        yPosition,
        nextScene
    }: DoorProps) {
        super(scene, ObjectType.Door, xPosition, yPosition, 'emptyDoorGraphic', 1, undefined)
        this.action = (): void => {
            if (this.scene.characterMoved) {
                this.scene.characterMoved = false
                this.scene.switch(nextScene)
            }
        }
    }
}