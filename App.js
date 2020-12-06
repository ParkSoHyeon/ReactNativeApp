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
        <View>
            <Text style={styles.text}>
                Fun styling <Text style={styles.bold}>text</Text> inside of
                <Text style={styles.italic}>React Native.</Text>
            </Text>
            <Text style={[styles.text, styles.moreLineHeight, styles.right]}>
                I am right aligned and have more <Text style={styles.code}>lineHeight</Text> than the text above.
            </Text>
            <Text style={[styles.text, styles.center, styles.thin]}>
                I am centered and very thin!
            </Text>
        </View>
  );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 22,
        marginBottom: 20
    },
    bold: {
        fontWeight: 'bold'
    },
    thin: {
        fontWeight: '200'
    },
    italic: {
        fontStyle: 'italic'
    },
    moreLineHeight: {
        lineHeight: 40
    },
    right: {
        textAlign: 'right'
    },
    center: {
        textAlign: 'center'
    },
    code: {
        fontFamily: 'Courier'
    }
});

export default App;
