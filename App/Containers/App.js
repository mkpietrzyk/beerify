import '../Dev/ReactotronConfig';

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from '../Redux/store';
import AppNavigator from '../Navigation/AppNavigator'
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <AppNavigator/>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

