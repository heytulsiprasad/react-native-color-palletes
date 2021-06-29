import React from 'react';
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
        <ColorText>
          {name} : {color}
        </ColorText>
      </ColoredBox>
    );
  }
}

const ColoredBox = styled.View`
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
