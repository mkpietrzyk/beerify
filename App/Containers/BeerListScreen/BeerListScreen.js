import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import {getBeerList} from '../../Redux/Api/ApiActions';

const mapStateToProps = state => ({
    beerList: state.api
});


const mapDispatchToProps = dispatch => ({
    getBeerList: () => dispatch(getBeerList())
});

export class BeerListScreen extends Component {
    static navigationOptions = {
        title: 'Beer List',
        headerStyle: {position: 'absolute', backgroundColor: 'transparent', zIndex: 100, top: 0, left: 0, right: 0},
        headerTintColor: '#000'
    };

    static propTypes = {
        getBeerList: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getBeerList();
    }


    render() {
        console.log('my beer list', this.props.beerList);
        return (
            <View style={styles.container}>
                <Text> This is Beer List Screen with infitie listView</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F4B350',
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

export default connect(mapStateToProps,mapDispatchToProps)(BeerListScreen)