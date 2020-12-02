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
      <View style={styles.main}>
          <Text style={styles.content}>Column 1</Text>
          <Text style={styles.content}>Column 2</Text>
          <Text style={styles.content}>Column 3</Text>
      </View>
  );
};

const styles = StyleSheet.create({
   main: {
       flex: 1,
       paddingVertical: 20,
       flexDirection: 'row',
       flexWrap: 'wrap'
   },
    content: {
       padding: 20,
        margin: 0,
        marginHorizontal: 10,
        backgroundColor: '#EF4C',
        width: 125,
        height: 125,
        borderWidth: 1,
        borderColor: 'red',
        textAlign: 'center'
    }
});

export default App;
