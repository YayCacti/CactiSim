import React from 'react';
import styled from 'styled-components/native';
import { View, Image, ImageBackground, StyleSheet } from 'react-native';
import { TTile } from './types';
import { generateMap } from './Tile';

const StyledTile = styled(ImageBackground)`
  flex: 1;
  min-width: 100px;
  min-height: 100px;
  width: 100px;
  height: 100px;
  border: 2px solid #222;
  color: green;
`;
const Background = styled(ImageBackground)`
  background-color: #000000;
  width: 200%;
  flex: 2;
  align-items: center;
  justify-content: center;
`;
const Board = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
  transform: rotate(45deg) rotateX(60deg);
`;

type Props = {
  size: number;
};
export default function Map(props: Props): JSX.Element {
  const { size } = props;
  const board = generateMap(size);
  const elevation = 0;

  const tiledMap = board.map((tile: TTile, index: number) => {
    return (
      <StyledTile
        key={`tile-${index}`}
        source={tile.type}
        style={[
          {
            transform: [
              { translateX: tile.height * elevation },
              { translateY: tile.height * elevation },
            ],
          },
        ]}>
        {tile.cactus && (
          <Image
            source={require('../shared/img/cactus.png')}
            style={[
              {
                width: 100,
                height: 100,
                transform: [
                  { rotateX: '20deg' },
                  { rotate: '-50deg' },
                  { translateY: -30 },
                ],
              },
            ]}
          />
        )}
      </StyledTile>
    );
  });
  return (
    <Background
      source={require('../shared/img/sky.png')}
      style={bonusStyles.bg}>
      <Board>{tiledMap}</Board>
    </Background>
  );
}

const bonusStyles = StyleSheet.create({
  bg: {
    resizeMode: 'contain',
  },
});
