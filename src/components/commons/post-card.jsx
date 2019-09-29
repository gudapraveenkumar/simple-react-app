import React from 'react';
import {Link} from "react-router-dom";

const PostCard = (props) => {
   return (
      <div className="card container-fluid" >
         <div className="card-body d-flex flex-column">
            <img src="http://lorempixel.com/400/200" className="card-img-top" alt="..."/>
            <h5 className="card-title">
               <Link to={`/post/${props.post.id}`}>{props.post.title}</Link></h5>
            <p className="card-text">{props.post.body}</p>
            <div className="mt-auto d-flex">
               <button className="btn btn-primary">
               <Link className="text-white" to={`/post/${props.post.id}`}>View Post</Link></button>
            </div>
         </div>
      </div>
   );
}

export default PostCard;
