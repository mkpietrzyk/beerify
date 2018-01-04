import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

export default class HomeScreen extends Component {
    static navigationOptions = {
        header: null,
    };

    _navigateToBeerList = () => {
        this.props.navigation.navigate('BeerList');
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}> BEERIFY </Text>
                <TouchableOpacity
                    onPress={() => this._navigateToBeerList()}
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
        backgroundColor: '#ECECEC',
    },
    welcome: {
        fontSize: 36,
        textAlign: 'center',
        fontWeight: '700',
        margin: 10,
        color: '#F5AB35'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});