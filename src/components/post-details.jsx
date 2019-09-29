import React, { Component } from 'react';
import {fetchPostById} from "../http-services/posts-service";

class PostDetails extends Component {
   state = {
      post: {}
   }

   async componentDidMount () {
      await this.populatePostDetails();
   }

   async populatePostDetails() {
      try{
          const postId = this.props.match.params.id
          const {data: post} = await fetchPostById(postId);
          console.log(post);
          this.setState({post});
      }
      catch(ex){
          if(ex.response && ex.response.status === 404)
          this.props.history.replace("/page-not-found");
      }
  }

  render() {
     return(
        <div className="container">
           <div className="row justify-content-center">
            <div className="card mb-3 col-9">
               <img src="http://lorempixel.com/400/200" alt="..." class="mt-2 card-img-top post-thumbnail"/>
               <div className="card-body">
                  <h4 className="card-title">{this.state.post.title}</h4>
                  <p className="card-text">{this.state.post.body}</p>
                  <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                     when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                     It has survived not only five centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                     and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
               </div>
               </div>
           </div>
        </div>

     );
   }

}

export default PostDetails;
