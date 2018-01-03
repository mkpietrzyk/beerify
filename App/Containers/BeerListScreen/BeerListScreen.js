import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
    Platform,
    StyleSheet,
    Text,
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
            backgroundColor: '#F4B350',
            borderBottomWidth: 0
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
            roundAvatar
            hideChevron
            avatar={beer.image_url && {uri: beer.image_url}}
            key={beer.id}
            title={
                <Text>
                    {beer.name}
                </Text>
            }
            subtitle={
                <Text>
                    {beer.tagline}
                </Text>
            }
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
        console.log('my beer list', this.props.beerList);
        console.log('currentPage', this.props.currentPage);
        return (
            <View style={styles.container}>
                <Text> This is Beer List Screen with infitie listView</Text>
                <FlatList
                    data={this.props.beerList}
                    keyExtractor={beer => beer.id}
                    renderItem={beer => this._renderItem(beer.item)}
                    contentContainerStyle={styles.flatList}
                    onEndReached={() => this._getAnotherPage()}
                    onEndReachedTreshold={100}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4B350',
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

export default connect(mapStateToProps, mapDispatchToProps)(BeerListScreen)