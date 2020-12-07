/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight,
} from 'react-native';

const App: () => React$Node = () => {
    return (
        <View>
            <Image source={require('./images/pizza.jpg')} />
            <Image source={{ uri: 'https://d3af5evjz6cdzs.cloudfront.net/images/uploads/800x0/1_8c026a181f5dd017ec0efebda35ff8351560760131.jpg' }}
                   style={{ width: 300, height: 150 }} />
        </View>
    );
};

export default App;
