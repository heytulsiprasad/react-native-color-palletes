// @flow

import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ColorBox from './../src/components/ColorBox';
import type { Node } from 'react';

const ColorPallete = ({ route: { params } }): Node => {
  return (
    <View style={styles.container}>
      <FlatList
        data={params.colors}
        renderItem={({ item }) => (
          <ColorBox name={item.colorName} color={item.hexCode} />
        )}
        keyExtractor={item => item.hexCode}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default ColorPallete;
