// @flow

import React from 'react';
import type { Node } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = (): Node => {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'lightpink',
  },
});

export default App;
