// this is our master ruder file it doesnt manage any paticular peice of state. simply contains all other states

import { combineReducers } from 'redux';

import StudentReducer from './StudentReducer';

const rootReducer = combineReducers({
	students: StudentReducer
})

export default rootReducer;