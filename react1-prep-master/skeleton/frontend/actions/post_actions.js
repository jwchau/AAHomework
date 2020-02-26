import * as PostApiUtil from '../util/post_api_util';

/*
Export the following action constants:

1. `RECEIVE_ALL_POSTS` (corresponding action should have a `posts` payload)
2. `RECEIVE_POST` (corresponding action should have a `post` payload)
3. `REMOVE_POST` (corresponding action should have a `postId` payload)
*/

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";

export const receiveAllPosts = posts => ({
    type: RECEIVE_ALL_POSTS,
    posts
});

export const receivePost = post => ({
    type: RECEIVE_POST,
    post
});

export const removePost = postId => ({
    type: REMOVE_POST,
    postId
});

/*
Export the following thunk action creators with the specified parameters:

1. `fetchPosts`
2. `fetchPost(postId)`
3. `createPost(post)`
4. `updatePost(post)`
5. `deletePost(postId)`
*/

export const fetchPosts = () => dispatch => {
    return PostApiUtil.fetchPosts()
        .then(resp => dispatch(receiveAllPosts(resp)));
};

export const fetchPost = id => dispatch => {
    return PostApiUtil.fetchPost(id)
        .then(resp => dispatch(receivePost(resp)));
};

export const createPost = post => dispatch => (
    PostApiUtil.createPost(post)
        .then(resp => dispatch(receivePost(resp)))
);

export const updatePost = post => dispatch => (
    PostApiUtil.updatePost(post)
        .then(resp => dispatch(receivePost(resp)))
);

export const deletePost = id => dispatch => (
    PostApiUtil.deletePost(id)
        .then(resp => dispatch(removePost(resp.id)))
);