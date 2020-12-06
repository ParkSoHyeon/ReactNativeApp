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
      <View style={styles.container}>
          <View style={[styles.item, { alignSelf: 'flex-start' }]}/>
          <View style={[styles.item, { alignSelf: 'stretch', width: undefined }]}/>
          <View style={[styles.item, { alignSelf: 'flex-end' }]}/>
      </View>
  );
};

/*
* justifyContent 속성 값
*   flex-start
*   flex-end
*   center
*   space-between
*   space-around
* */

/*
* alignSelf 속성 값
*   flex-start
*   flex-end
*   center
*   stretch
* */

const styles = StyleSheet.create({
   container: {
       flex: 1,
       flexDirection: 'column',
       justifyContent: 'space-around',
       alignItems: 'flex-start'
   },
    item: {
        backgroundColor: 'lightgoldenrodyellow',
        width: 150,
        height: 150,
        borderWidth: 1,
        borderColor: 'goldenrod',
    }
});

export default App;
