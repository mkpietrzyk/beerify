import { compose, combineReducers, applyMiddleware } from 'redux';
import {reducer as api} from './Api/ApiReducers';
import {reducer as beer} from './BeerData/BeerDataReducers';
import thunkMiddleware from 'redux-thunk';
import Reactotron from 'reactotron-react-native';


const reducers = combineReducers({
    api,
    beer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
    applyMiddleware(
        thunkMiddleware
    )
)

const store = Reactotron.createStore(reducers, enhancer);

export default store