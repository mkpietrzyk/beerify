import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    FlatList
} from 'react-native';
import {ListItem} from 'react-native-elements';

import {getSimilarBeers} from '../../Redux/Api/ApiActions';
import {setCurrentBeerDetails} from "../../Redux/BeerData/BeerDataActions";

import styles from './Styles/BeerDetailsScreenStyles'

const mapStateToProps = state => ({
    currentBeerDetails: state.beer.currentBeerDetails,
    similarBeers: state.api.similarBeers
});

const mapDispatchToProps = dispatch => ({
    getSimilarBeers: (beerDetails) => dispatch(getSimilarBeers(beerDetails)),
    setCurrentBeerDetails: (beer) => dispatch(setCurrentBeerDetails(beer))
})

export class BeerDetailsScreen extends Component {
    static navigationOptions = {
        title: 'Beer Details',
        headerStyle: {
            backgroundColor: '#FDE3A7'
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
        smiliarBeers: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
                tagline: PropTypes.string,
                image_url: PropTypes.string
            })
        ).isRequired,
        getSimilarBeers: PropTypes.func.isRequired,
        setCurrentBeerDetails: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getSimilarBeers(this.props.currentBeerDetails);
    }

    _renderItem = beer => (
        <ListItem
            chevronColor={'#F89406'}
            avatarStyle={styles.avatarImage}
            avatarContainerStyle={styles.avatarContainer}
            avatarOverlayContainerStyle={styles.avatarOverlayContainer}
            avatar={beer.image_url && {uri: beer.image_url}}
            key={beer.id}
            title={beer.name}
            subtitle={beer.tagline}
            onPress={() => this._repopulateScreenWithCurrentBeer(beer)}
        />
    )

    _repopulateScreenWithCurrentBeer = selectedBeer => {
        this.props.setCurrentBeerDetails(selectedBeer);
        this.props.getSimilarBeers(this.props.currentBeerDetails);
        this.listView.scrollTo({x: 0, y: 0, animated: true});
    }


    render() {
        const {name, tagline, description, image_url, brewers_tips, ibu, abv, ebc} = this.props.currentBeerDetails;
        return (
            <View style={styles.container}>
                <ScrollView
                    ref={ref => this.listView = ref}
                >

                    <View style={styles.headerView}>
                        <Image
                            style={styles.headerImage}
                            source={image_url && {uri: image_url}}
                        />

                        <View style={styles.headerTextContainer}>
                            <Text style={styles.header}> {name} </Text>
                            <Text style={styles.tagline}> {tagline} </Text>
                            <Text> IBU : {ibu} </Text>
                            <Text> ABV : {abv} </Text>
                            <Text> EBC : {ebc} </Text>
                        </View>
                    </View>

                    <View style={styles.detailsContentView}>
                        <Text style={styles.header}> About </Text>
                        <Text style={styles.detailsContentText}> {description} </Text>
                        <Text style={styles.header}> Tips </Text>
                        <Text style={styles.detailsContentText}> {brewers_tips} </Text>
                        <Text style={styles.header}> You may also like: </Text>
                    </View>

                    <FlatList
                        data={this.props.similarBeers}
                        keyExtractor={beer => beer.id}
                        renderItem={beer => this._renderItem(beer.item)}
                    />

                </ScrollView>
            </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BeerDetailsScreen)