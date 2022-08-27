import { GridEngine } from "grid-engine";

import HouseScene from "./Scenes/HouseScene";
import TestScene from "./Scenes/TestScene";

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#ffffff',
    scene: [TestScene, HouseScene],
    plugins: {
        scene: [
            {
                key: "gridEngine",
                plugin: GridEngine,
                mapping: "gridEngine",
            },
        ],
    },
    scale: {
        parent: 'phaser-game',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 600,
        height: 600
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
};

const game = new Phaser.Game(config);