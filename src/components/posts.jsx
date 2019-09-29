import React from 'react';
import PostCard from './commons/post-card';
import {getPosts} from '../redux/actions/postActions';
import { connect } from "react-redux";

const Posts =(props) =>  {
   props.fetchPosts();

      return (
         <div className="container">
               <div className="row mt-3">
                  {props.stateContainer.posts.map(el =>{
                     return(
                        <div key={el.id} className="col-4 my-3 d-flex">
                           {<PostCard post={el}/>}
                        </div>
                     )
                     })
                  }
               </div>
         </div>
       );
}

function mapStateToProps(state) {
   return {
     stateContainer: state.posts
   };
 }

 const mapDispatchToProps = dispatch => {
   return {
     fetchPosts: () => dispatch(getPosts()),
   };
 };

 export default connect(
   mapStateToProps,
   mapDispatchToProps
 )(Posts);
