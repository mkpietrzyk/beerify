import {StackNavigator} from 'react-navigation';
import HomeScreen from '../Containers/HomeScreen/HomeScreen';
import BeerListScreen from '../Containers/BeerListScreen/BeerListScreen';
import BeerDetailsScreen from '../Containers/BeerDetailsScreen/BeerDetailsScreen';


const AppNavigator = StackNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        BeerList: {
            screen: BeerListScreen
        },
        BeerDetails: {
            screen: BeerDetailsScreen
        },
    },
    {
        initialRouteName: 'Home',
        lazy: true,
    });

export default AppNavigator;