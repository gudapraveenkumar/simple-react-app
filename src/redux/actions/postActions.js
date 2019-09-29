import { ADD_POST, SET_POSTS} from '../actions/action-types';
import {savePost, fetchposts} from "../../http-services/posts-service";

export const addPost = (postObj) =>{
   return dispatch => {
      savePost(postObj).then(function(res){
         dispatch({type: ADD_POST, payload: res.data});
      });
   }
};

export const getPosts = () =>{
   return dispatch =>{
      fetchposts().then(function(res){
         dispatch(setPosts(res.data))
      })
   }
};

export const setPosts = posts =>{
   return{
      type: SET_POSTS,
      payload: posts
  }
}
