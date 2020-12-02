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
    TouchableHighlight
} from 'react-native';

const App: () => React$Node = () => {
  return (
      <View style={viewStyles}>
          <TouchableHighlight style={[btn, btnPrimary]}>
              <Text>Submit</Text>
          </TouchableHighlight>
      </View>
  );
};

const viewStyles = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
};

const btn = {
    borderStyle: 'solid',
    borderColor: '#D5D5D5',
    borderWidth: 1,
    backgroundColor: '#EEE',
    borderRadius: 3,
    padding: 3,
    paddingLeft: 5,
    paddingRight: 5
};

const btnPrimary = {
    backgroundColor: '#60B044',
    borderColor: '#5CA941'
}

export default App;
