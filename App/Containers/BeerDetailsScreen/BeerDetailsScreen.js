import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import {getSimilarBeers} from '../../Redux/Api/ApiActions';
import {getCurrentBeerDetails} from "../../Redux/BeerData/BeerDataActions";


export default class BeerDetailsScreen extends Component {
    static navigationOptions = {
        title: 'Beer Details',
        headerStyle: {
            backgroundColor: '#F39C12',
            borderBottomWidth: 0
        },
        headerTintColor: '#000'
    };

    render() {
        console.log(this.props);
        return (
            <View style={styles.container}>
                <Text> This is Beer details Screen </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F39C12',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    flatList: {
        borderWidth: 0,
    },
    listRow: {
        height: 150
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});