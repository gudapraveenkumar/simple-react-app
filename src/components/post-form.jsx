import React from 'react';
import Joi from "joi-browser";
import AppForm from "./commons/form";
import {Link} from "react-router-dom";

import {addPost} from "../redux/actions/postActions";
import { connect } from "react-redux";


class PostForm extends AppForm {
   state = {
      data: {
        title: "",
        body: ""
      },
      errors: {}
   };

   schema = {
      title: Joi.string()
        .required()
        .label("Title"),
      body: Joi.string()
        .required()
        .label("Body")
   };

   doSubmit = async () =>{
      this.props.savePost(this.state.data);
      this.props.history.push("/posts");
   }

   render() {
      return (
      <div className="container d-flex flex-row justify-content-center">
         <div className="card mt-5" style={{width:'50em'}}>
            <div className="card-header">
               <div className="row justify-content-between px-3">
                  <h5>New Post</h5>
                  <Link to="/posts">
                     <i class="fa fa-times"></i>
                  </Link>

               </div>
            </div>
            <div className="card-body">
               <form onSubmit={this.handleSubmit}>
                  {this.renderInput("title", "Enter Title")}
                  {this.renderTextarea("body", "Enter Body")}
                  <div>
                     {this.renderButton("Submit")}
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
   }
}

const mapDispatchToProps = dispatch => {
   return {
      savePost: postData => dispatch(addPost(postData)),
   };
 };

export default connect(
   null,
   mapDispatchToProps
 )(PostForm);
