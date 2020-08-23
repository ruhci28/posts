import allpost from './allpost';
import search from './search';
import searchmode from './searchmode';
import filterpost from './filterpost';
import detailpost from './detailpost';
import {combineReducers} from 'redux';

 const rootReducer = combineReducers({
   allpost:allpost,
   searchterm:search,
   searchmode:searchmode,
   filteredpost:filterpost,
   detailpost:detailpost
 })
 export default rootReducer;
