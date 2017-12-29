import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import {reducer as api} from './Api/ApiReducers';
import thunkMiddleware from 'redux-thunk';
import Reactotron from 'reactotron-react-native';


const reducers = combineReducers({
    api
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
    applyMiddleware(
        thunkMiddleware
    )
)

const store = Reactotron.createStore(reducers, enhancer);

export default store