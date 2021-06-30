// @flow

import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';
import type { Node } from 'react';

// DATA
const RAINBOW: Array<Object> = [
  { colorName: 'Red', hexCode: '#FF0000' },
  { colorName: 'Orange', hexCode: '#FF7F00' },
  { colorName: 'Yellow', hexCode: '#FFFF00' },
  { colorName: 'Green', hexCode: '#00FF00' },
  { colorName: 'Violet', hexCode: '#8B00FF' },
];

const FRONTEND_MASTERS: Array<Object> = [
  { colorName: 'Red', hexCode: '#c02d28' },
  { colorName: 'Black', hexCode: '#3e3e3e' },
  { colorName: 'Grey', hexCode: '#8a8a8a' },
  { colorName: 'White', hexCode: '#ffffff' },
  { colorName: 'Orange', hexCode: '#e66225' },
];

const COLORS: Array<Object> = [
  { colorName: 'Base03', hexCode: '#002b36' },
  { colorName: 'Base02', hexCode: '#073642' },
  { colorName: 'Base01', hexCode: '#586e75' },
  { colorName: 'Base00', hexCode: '#657b83' },
  { colorName: 'Base0', hexCode: '#839496' },
  { colorName: 'Base1', hexCode: '#93a1a1' },
  { colorName: 'Base2', hexCode: '#eee8d5' },
  { colorName: 'Base3', hexCode: '#fdf6e3' },
  { colorName: 'Yellow', hexCode: '#b58900' },
  { colorName: 'Orange', hexCode: '#cb4b16' },
  { colorName: 'Red', hexCode: '#dc322f' },
  { colorName: 'Magenta', hexCode: '#d33682' },
  { colorName: 'Violet', hexCode: '#6c71c4' },
  { colorName: 'Blue', hexCode: '#268bd2' },
  { colorName: 'Cyan', hexCode: '#2aa198' },
  { colorName: 'Green', hexCode: '#859900' },
];

const Home = ({ navigation }): Node => {
  const onPressHandler = () =>
    navigation.navigate('Color Pallete', {
      paletteName: 'Solarized',
      colors: COLORS,
    });

  return (
    <StyledView>
      <StyledButton onPress={onPressHandler}>
        <Text>Go to ColorPallets</Text>
      </StyledButton>
    </StyledView>
  );
};

const StyledView = styled.View`
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.TouchableOpacity`
  padding: 20px;
  background-color: hotpink;
  border-radius: 10px;
`;

export default Home;
