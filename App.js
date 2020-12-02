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
    console.log(StyleSheet.hairlineWidth);
    return (
      <View style={viewStyles}>
          <TouchableHighlight style={[ buttonStyles.core, buttonStyles.spacer ]}>
              <Text>Default Normal</Text>
          </TouchableHighlight>
          <TouchableHighlight style={[ buttonStyles.core, buttonStyles.hairlineBorder, buttonStyles.spacer ]}
                              underlayColor='#EFEFEF'
                              activeOpacity={0.8}
                              onPress={() => {}}>
              <Text>Default Hairline</Text>
          </TouchableHighlight>
          <TouchableHighlight style={[ buttonStyles.core, buttonStyles.primary, buttonStyles.spacer ]}>
              <Text>Primary Normal</Text>
          </TouchableHighlight>
          <TouchableHighlight style={[ buttonStyles.core, buttonStyles.primary, buttonStyles.hairlineBorder, buttonStyles.spacer ]}>
              <Text>Primary Hairline</Text>
          </TouchableHighlight>
      </View>
  );
};

const viewStyles = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
};


const buttonStyles = StyleSheet.create({
    core: {
        borderStyle: 'solid',
        borderColor: '#D5D5D5',
        borderWidth: 1,
        backgroundColor: '#EEE',
        borderRadius: 3,
        padding: 3,
        paddingLeft: 5,
        paddingRight: 5
    },
    primary: {
        backgroundColor: '#60B044',
        borderColor: '#355F27'
    },
    hairlineBorder: {
        borderWidth: StyleSheet.hairlineWidth
    },
    spacer: {
        marginBottom: 10
    }
});

export default App;
