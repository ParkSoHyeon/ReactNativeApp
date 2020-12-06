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
    TouchableHighlight,
} from 'react-native';

const App: () => React$Node = () => {
    return (
        <View>
            <Headline>This is a header</Headline>
            <BodyCopy>This is my regular or
                <Bold onPress={() => console.log('Pressed!')}
                      numberOfLines={2}
                      style={pressStyles.green}>bold</Bold> text.</BodyCopy>
        </View>
  );
};

const Bold = ({ children, style, ...otherProps }) =>
    <Text style={[boldTextStyles.text, style]} {...otherProps}>{children}</Text>;
Bold.propTypes = {
    children: PropTypes.node.isRequired,
    style: Text.propTypes.style
};
const boldTextStyles = StyleSheet.create({
    text: {
        fontWeight: '600'
    },
});

const BodyCopy = ({ children }) => <Text style={BodyCopyStyles.text}>{children}</Text>;
BodyCopy.propTypes = {
    children: PropTypes.node.isRequired
};
const BodyCopyStyles = StyleSheet.create({
    text: {
        fontFamily: 'Helvetica',
        fontSize: 18,
        color: '#333'
    },
});

const pressStyles = StyleSheet.create({
    green: {
        color: 'green'
    }
})

const Headline = ({ children }) => <Bold><Text style={HeadlineStyles.text}>{children}</Text></Bold>;
Headline.propTypes = {
    children: PropTypes.node.isRequired
};
const HeadlineStyles = StyleSheet.create({
    text: {
        fontFamily: 'Optima',
        fontSize: 30,
        color: '#333'
    },
});

export default App;
