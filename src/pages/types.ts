type Biome = 'noobiome';
type TileType = string;
type Height = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type TTile = {
  biome: Biome;
  type: TileType;
  height: Height;
  cactus: boolean;
};
