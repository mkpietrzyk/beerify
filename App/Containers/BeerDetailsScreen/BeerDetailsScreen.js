import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import {getSimilarBeers} from '../../Redux/Api/ApiActions';
const mapStateToProps = state => ({
    currentBeerDetails: state.beer.currentBeerDetails,
});

export class BeerDetailsScreen extends Component {
    static navigationOptions = {
        title: 'Beer Details',
        headerStyle: {
            backgroundColor: '#F39C12',
            borderBottomWidth: 0
        },
        headerTintColor: '#000'
    };

    static propTypes = {
        currentBeerDetails: PropTypes.shape({
            name: PropTypes.string,
            tagline: PropTypes.string,
            description: PropTypes.string,
            image_url: PropTypes.string,
            brewer_tips: PropTypes.string,
            ibv: PropTypes.number,
            abv: PropTypes.number,
            ebc: PropTypes.number
        }).isRequired,

    }

    render() {
        const { name, tagline, description, image_url, brewer_tips, ibv, abv, edc } = this.props.currentBeerDetails;

        return (
            <View style={styles.container}>
                <Text> {name} </Text>
                <Text> {tagline} </Text>
                <Text> {description} </Text>
                <Text> {image_url} </Text>
                <Text> {brewer_tips} </Text>
                <Text> {ibv} </Text>
                <Text> {abv} </Text>
                <Text> {edc} </Text>
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

export default connect(mapStateToProps)(BeerDetailsScreen)