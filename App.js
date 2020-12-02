/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const App: () => React$Node = () => {
  return (
      <View style={viewStyles}>
        <Text style={textStyles}>Hello World</Text>
      </View>
  );
};

const viewStyles = { backgroundColor: 'blue', flex: 1, justifyContent: 'center', alignItems: 'center' };

const textStyles = { color: '#FFF', fontSize: 22 }

const styles = StyleSheet.create({
});

export default App;
