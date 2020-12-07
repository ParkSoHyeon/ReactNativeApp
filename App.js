/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    Dimensions,
    View
} from 'react-native';

const App: () => React$Node = () => {
    const { width, height, scale } = Dimensions.get('window');
    console.log(`width: ${ width }, height: ${ height }, scale: ${ scale }`)
    return (
        <View>

        </View>
    );
};

export default App;
