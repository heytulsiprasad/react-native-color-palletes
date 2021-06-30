// @flow

import React from 'react';
import type { Node } from 'react';
import styled from 'styled-components';

const ColoredPane = ({ route: { params } }): Node => {
  return (
    <ColorContainer color={params.colorValue}>
      <ColorValue>{params.colorValue}</ColorValue>
    </ColorContainer>
  );
};

export const ColorContainer = styled.View`
  display: flex;
  flex-grow: 1;
  margin: 20px;
  background-color: ${props => props.color || '#fff'};
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const ColorValue = styled.Text`
  color: #ffffff;
  font-weight: bold;
  font-size: 18px;
`;

export default ColoredPane;
