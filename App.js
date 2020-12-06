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
    TouchableHighlight,
} from 'react-native';

const App: () => React$Node = () => {
    return (
      <Text style={styles.headline}>
          Welcome to <Text style={styles.bold}>React</Text> Native {'\n'}
          <Text style={styles.subheader}>This is <Text style={styles.bold}>so cool!</Text></Text>
      </Text>
  );
};

const styles = StyleSheet.create({
    headline: {
        fontFamily: 'Georgia',
        fontSize: 20
    },
    subheader: {
        color: 'blue'
    },
    bold: {
        fontWeight: 'bold'
    }
});

export default App;
