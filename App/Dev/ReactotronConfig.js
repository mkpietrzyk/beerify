import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';

Reactotron
    .configure({name: 'Beerify'})
    .use(reactotronRedux())
    .connect()