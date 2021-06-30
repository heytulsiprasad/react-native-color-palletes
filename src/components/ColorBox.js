import React from 'react';
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';

type Props = {
  name: string,
  color: string,
};

const ColorBox = (props: Props) => {
  const navigation = useNavigation();

  const { name, color } = props;
  const onColorPress = () => {
    navigation.navigate('Colored Pane', { colorName: name, colorValue: color });
  };

  return (
    <ColoredBox color={color} onPress={onColorPress}>
      <ColorText>
        {name} : {color}
      </ColorText>
    </ColoredBox>
  );
};

const ColoredBox = styled.TouchableOpacity`
  padding: 20px;
  margin: 10px 0 10px 0;
  background-color: ${props => props.color};
  border-radius: 5px;
`;

const ColorText = styled.Text`
  font-weight: bold;
  color: #fff;
`;

export default ColorBox;
