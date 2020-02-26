import {
  RECEIVE_ALL_POSTS,
  RECEIVE_POST,
  REMOVE_POST,
} from '../actions/post_actions';
import merge from 'lodash/merge';

/*
Export a `PostsReducer` that takes in the old state and appropriately handles
all post actions.
*/

export const PostsReducer = (state, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ALL_POST:
      nextState = action.posts
      return nextState;
    default:
      return nextState;
  }
};