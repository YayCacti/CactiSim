import React from 'react';
import styled from 'styled-components/native';
import { colors } from '../shared/theme';
import { Text, ImageBackground, View, Button } from 'react-native';
import { Flex } from '../shared/components';

const Wrapper = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
`;
const Background = styled(ImageBackground)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Title = styled(Text)`
  font-size: 50px;
  font-family: Roboto;
  text-shadow: 0 0 5px ${colors.black};
  color: ${colors.yellow};
`;
const Subtitle = styled(Text)`
  font-size: 30px;
  font-family: Roboto;
  text-shadow: 0 0 5px ${colors.black};
  color: ${colors.yellow};
`;
const PlayButton = styled(Button)`
  width: 200px;
`;

export default function Home(): JSX.Element {
  const onPlayPress = () => {
    alert('yay!');
  };

  return (
    <Background
      source={require('../shared/img/sky.jpg')}
      style={{ resizeMode: 'cover' }}>
      <Wrapper>
        <Flex style={{ alignItems: 'center' }}>
          <Title>Cacti'n'Cats</Title>
          <Subtitle>Cactus Garden Game</Subtitle>
        </Flex>
        <Flex>
          <PlayButton
            title="PLAY"
            onPress={onPlayPress}
            accessibilityLabel="Play the game!"
          />
        </Flex>
      </Wrapper>
    </Background>
  );
}
