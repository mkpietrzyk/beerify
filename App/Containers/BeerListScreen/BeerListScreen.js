import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
    StyleSheet,
    View,
    FlatList,
} from 'react-native';
import {ListItem} from 'react-native-elements';

import {getBeerList, getBeerListAnotherPage, increasePageCount} from '../../Redux/Api/ApiActions';
import {setCurrentBeerDetails} from "../../Redux/BeerData/BeerDataActions";

const mapStateToProps = state => ({
    beerList: state.api.beerList,
    currentPage: state.api.currentPage
});


const mapDispatchToProps = dispatch => ({
    getBeerList: () => dispatch(getBeerList()),
    getBeerListAnotherPage: (page) => dispatch(getBeerListAnotherPage(page)),
    increasePageCount: (page) => dispatch(increasePageCount(page)),
    setCurrentBeerDetails: beer => dispatch(setCurrentBeerDetails(beer))
});

export class BeerListScreen extends Component {
    static navigationOptions = {
        title: 'Beer List',
        headerStyle: {
            backgroundColor: '#FDE3A7'
        },
        headerTintColor: '#222'
    };

    static propTypes = {
        beerList: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
                tagline: PropTypes.string,
                image_url: PropTypes.string
            })
        ).isRequired,
        currentPage: PropTypes.number.isRequired,
        getBeerList: PropTypes.func.isRequired,
        getBeerListAnotherPage: PropTypes.func.isRequired,
        increasePageCount: PropTypes.func.isRequired,
        setCurrentBeerDetails: PropTypes.func.isRequired
    }

    componentDidMount() {
        if (this.props.beerList.length === 0) {
            this.props.getBeerList();
        }
    }

    _navigateToBeerDetailsScreen = currentBeer => {
        this.props.setCurrentBeerDetails(currentBeer);
        this.props.navigation.navigate('BeerDetails');
    }

    _renderItem = beer => (
        <ListItem
            containerStyle={styles.listRow}
            avatarStyle={styles.avatarImage}
            avatarContainerStyle={styles.avatarContainer}
            avatarOverlayContainerStyle={styles.avatarOverlayContainer}
            avatar={beer.image_url && {uri: beer.image_url}}
            key={beer.id}
            title={beer.name}
            subtitle={beer.tagline}
            onPress={() => this._navigateToBeerDetailsScreen(beer)}
        />
    )

    _getAnotherPage = () => {
        setTimeout(() => {
            this.props.increasePageCount(this.props.currentPage);
            this.props.getBeerListAnotherPage(this.props.currentPage);
        }, 1500)
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.beerList}
                    keyExtractor={beer => beer.id}
                    renderItem={beer => this._renderItem(beer.item)}
                    onEndReached={() => this._getAnotherPage()}
                    onEndReachedTreshold={150}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ECECEC',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    avatarImage: {
        resizeMode: 'contain',
        width: 150,
        height: 150,
    },
    avatarContainer: {
        width: 150,
        height: 150,
    },
    avatarOverlayContainer: {
        backgroundColor: 'rgba(0,0,0,0)'
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(BeerListScreen)