import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

export default class HomeScreen extends Component {
    static navigationOptions = {
        header: null,
    };


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}> This is Home Screen </Text>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('BeerList')}
                >
                   <Text>Get the Beers list!</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FDE3A7',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});