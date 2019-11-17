import { combineReducers } from 'redux';
import postReducer from './postsReducers';
import usersReducers from './usersReducers';

export default combineReducers({
    posts: postReducer,
    users: usersReducers
});