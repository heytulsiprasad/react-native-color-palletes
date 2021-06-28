// @flow

import React from 'react';
import type { Node } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

import ColorBox from './components/ColorBox';

const App = (): Node => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <Text>Here are some boxes of different colors:</Text>
        <ColorBox name="Pink" color="#ffc0cb" />
        <ColorBox name="Purple" color="#eec0ff" />
        <ColorBox name="Light Green" color="#cfffc0" />
        <ColorBox name="Cyan" color="#c0f0ff" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
});

export default App;
