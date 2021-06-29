// @flow

import React from 'react';
import type { Node } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';

import ColorBox from './components/ColorBox';

const colorData: Array<Object> = [
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

const App = (): Node => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <Text>Here are some boxes of different colors:</Text>
      </View>
      <FlatList
        data={colorData}
        renderItem={({ item }) => (
          <ColorBox name={item.colorName} color={item.hexCode} />
        )}
        keyExtractor={item => item.hexCode}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    padding: 20,
  },
  container: {
    marginTop: 10,
    marginBottom: 10,
  },
});

export default App;
