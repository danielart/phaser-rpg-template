import { Direction, WalkingAnimationMapping } from 'grid-engine';
import GameScene from '../GameScene';
import { NpcsAndObjects } from './NpcAndObjects';
import { ObjectType } from '../enums/ObjectType';

interface NPCProps {
    scene: GameScene,
    xPosition: integer,
    yPosition: integer,
    texture: string,
    scale: number,
    action?: Function,
    walkingAnimationMapping?: number | WalkingAnimationMapping,
    facingDirection?: Direction;
}

export class Npc extends NpcsAndObjects {

    facingDirection?: Direction;

    constructor({
        scene,
        xPosition,
        yPosition,
        texture,
        scale = 1,
        action,
        walkingAnimationMapping,
        facingDirection
    }: NPCProps
    ) {
        super(scene, ObjectType.NPC, xPosition, yPosition, texture, scale, action, walkingAnimationMapping)
        this.facingDirection = facingDirection
    }

    //add character to GridEngine
    addCharacter(
        npcSprite: Phaser.Physics.Arcade.Sprite,
        xPosition: integer,
        yPosition: integer,
        container: Phaser.GameObjects.Container,
        walkingAnimationMapping: number | WalkingAnimationMapping = 1
    ): void {
        this.scene.gridEngine.addCharacter(
            {
                id: (this.name),
                sprite: npcSprite,
                container,
                startPosition: { x: xPosition, y: yPosition },
                walkingAnimationMapping: walkingAnimationMapping,
                facingDirection: this.facingDirection || Direction.DOWN
            }
        )
    }
}