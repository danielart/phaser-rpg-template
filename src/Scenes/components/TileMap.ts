import 'phaser'

interface TilesetInfo {
    tilesetName: string
    image: string
}

interface TileMapAndSet {
    tilemap: Phaser.Tilemaps.Tilemap
    tileset: Phaser.Tilemaps.Tileset[]
}

// Create an array of tilesets used for a tilemap.
export function createTileset(
    tilemap: Phaser.Tilemaps.Tilemap,
    tilesetInfo: TilesetInfo[]
): Phaser.Tilemaps.Tileset[] {
    const tilesetArray: Phaser.Tilemaps.Tileset[] = [];

    tilesetInfo.forEach(infoObject => {
        tilesetArray.push(tilemap.addTilesetImage(infoObject.tilesetName, infoObject.image));
    })

    return tilesetArray
}

// Create layers
export function createAllLayers(
    tilemap: Phaser.Tilemaps.Tilemap,
    tileset: Phaser.Tilemaps.Tileset[],
    layerNames: string[]
): void {
    layerNames.forEach(layerName =>
        tilemap.createLayer(layerName, tileset)
    )
}

// Create an array of tilesets used for a scene and a tilemap.
export function createMap(
    {
        scene, tilemapTiledJSONKey, tilesetInfo, layerNames
    }: {
        scene: Phaser.Scene,
        tilemapTiledJSONKey: string,
        tilesetInfo: TilesetInfo[],
        layerNames: string[]
    }
): TileMapAndSet {
    const tilemap: Phaser.Tilemaps.Tilemap = scene.make.tilemap({ key: tilemapTiledJSONKey });
    const tileset = createTileset(tilemap, tilesetInfo);

    createAllLayers(tilemap, tileset, layerNames);

    return { tilemap, tileset }
}