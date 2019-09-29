import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Posts from "./components/posts";
import PostDialog from './components/post-form';
import NavBar from './components/commons/navbar';
import PostDetails from './components/post-details';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="container-fluid">
          <Switch>
            <Route path="/posts" component={Posts} />
            <Route path="/new-post" component={PostDialog} />
            <Route path="/post/:id" component = {PostDetails}/>
            <Route path="/" exact component={Posts} />
          </Switch>
      </div>
    </div>
  );
}

export default App;
