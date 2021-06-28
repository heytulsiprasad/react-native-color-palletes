import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';

type Props = {
  name: string,
  color: string,
};

class ColorBox extends React.Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, color } = this.props;

    return (
      <ColoredBox color={color}>
        <Text>
          {name} : {color}
        </Text>
      </ColoredBox>
    );
  }
}

const ColoredBox = styled.View`
  padding: 10px;
  margin: 10px 0 10px 0;
  background-color: ${props => props.color};
  border-radius: 5px;
`;

export default ColorBox;
