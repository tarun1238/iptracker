import counterReducer from './counterReducer'
import { combineReducers } from 'redux';

const allReducer = combineReducers({
    Name:counterReducer
})



export default allReducer;