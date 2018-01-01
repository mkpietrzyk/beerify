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

import {getBeerList} from '../../Redux/Api/ApiActions';

const mapStateToProps = state => ({
    beerList: state.api.beerList
});


const mapDispatchToProps = dispatch => ({
    getBeerList: () => dispatch(getBeerList())
});

export class BeerListScreen extends Component {
    static navigationOptions = {
        title: 'Beer List',
        headerStyle: {position: 'relative', backgroundColor: '#F4B350', zIndex: 100, top: 0, left: 0, right: 0, borderBottomWidth: 0},
        headerTintColor: '#000'
    };

    static propTypes = {
        getBeerList: PropTypes.func.isRequired,
        beerList: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
                tagline: PropTypes.string,
                image_url: PropTypes.string
            })
        ).isRequired
    }

    componentDidMount() {
        if(this.props.beerList.length === 0){
            this.props.getBeerList();
        }
    }

    _renderItem = beer => (
        <ListItem
            containerStyle={styles.listRow}
            roundAvatar
            hideChevron
            avatar={beer.image_url && {uri: beer.image_url}}
            key={beer.id}
            title={beer.name}
            onPress={() => console.log('clicked the : ', beer.name)}
        />
    )


    render() {
        console.log('my beer list', this.props.beerList);
        return (
            <View style={styles.container}>
                <Text> This is Beer List Screen with infitie listView</Text>
                <FlatList
                    data={this.props.beerList}
                    keyExtractor={beer => beer.id}
                    renderItem={beer => this._renderItem(beer.item)}
                    contentContainerStyle={styles.flatList}
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
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(BeerListScreen)