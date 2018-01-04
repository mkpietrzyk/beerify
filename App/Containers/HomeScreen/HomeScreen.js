import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

import styles from './Styles/HomeScreenStyles'

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
                <Text style={styles.title}> BEERIFY </Text>

                <TouchableOpacity
                    onPress={() => this._navigateToBeerList()}
                >

                    <Text>Get the Beers list!</Text>

                </TouchableOpacity>

            </View>
        );
    }
}
