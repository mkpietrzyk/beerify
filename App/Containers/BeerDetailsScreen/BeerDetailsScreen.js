import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
    StyleSheet,
    Text,
    View,
    Image
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
        const {name, tagline, description, image_url, brewers_tips, ibu, abv, ebc} = this.props.currentBeerDetails;

        return (
            <View style={styles.container}>

                <View style={styles.headerView}>
                    <Image
                        style={styles.headerImage}
                        source={{uri: image_url}}
                    />

                    <View style={styles.headerTextContainer}>
                        <Text style={styles.header} numberOfLines={5}> {name} </Text>
                        <Text style={styles.tagline}> {tagline} </Text>
                        <Text style={styles.indexValue}> IBU : {ibu} </Text>
                        <Text style={styles.indexValue}> ABV : {abv} </Text>
                        <Text style={styles.indexValue}> EBC : {ebc} </Text>
                    </View>
                </View>

                <View style={styles.detailsContentView}>
                    <Text style={styles.header}> About </Text>
                    <Text style={styles.description}> {description} </Text>
                    <Text style={styles.header}> Tips </Text>
                    <Text> {brewers_tips} </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDE3A7',
        alignItems: 'center',
        padding: 10,

    },
    headerView: {
        flexDirection: 'row',
        backgroundColor: '#F4B350',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
    },
    headerImage: {
        width: 150,
        height: 150,
        resizeMode: 'contain'
    },
    headerTextContainer: {
        flexDirection: 'column',
        flexGrow: 1,
        flex: 1,
    },
    header: {
        fontSize: 18,
        fontWeight: '600',
        paddingBottom: 5,
    },
    tagline: {
        fontStyle: 'italic',
        paddingBottom: 20,
    },
    detailsContentView: {
        backgroundColor: '#F4B350',
        paddingTop: 20,
        paddingBottom: 20,
    },
    description: {
        fontSize: 14,
        fontStyle: 'italic'
    },
    imageView: {},
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default connect(mapStateToProps)(BeerDetailsScreen)