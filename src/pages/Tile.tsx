import { TTile } from './types';

const getTileType = () => {
  const tileTypes = [
    require('../shared/img/grass1.png'),
    require('../shared/img/grass2.png'),
    require('../shared/img/grass3.png'),
  ];
  const random = Math.floor(Math.random() * tileTypes.length - 1) + 1;
  return tileTypes[random];
};

const getHeight = (index: number, prevTile: TTile) => {
  const firstElement = index === 0;
  const basicElevation = 4;
  const elevationDiff = [1, 0, 0, 0, -1];
  const random = Math.floor(Math.random() * elevationDiff.length - 1) + 1;
  const diff = elevationDiff[random];
  const relativeHeight = firstElement
    ? basicElevation
    : Number(prevTile.height) + diff;
  if (relativeHeight < 1) {
    return 1;
  }
  if (relativeHeight > 10) {
    return 10;
  }
  return relativeHeight;
};

const getCactus = () => {
  const chanceForCactus = Math.floor(Math.random() * 10) + 1;
  return chanceForCactus === 1;
};

/**
 * Generates the board.
 * @param size - number of rows and columns of the board
 */
export function generateMap(size: number): TTile[] {
  const nrOfTiles = size * size;
  const tiles: TTile[] = [];

  for (let index = 0; index < nrOfTiles; index++) {
    const height = getHeight(index, tiles[index - 1]);
    const type = getTileType();
    const cactus = getCactus();
    tiles.push({
      biome: 'noobiome',
      cactus,
      type,
      height,
    } as TTile);
  }

  return tiles;
}
