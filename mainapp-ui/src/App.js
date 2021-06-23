import React, { useState, useEffect } from 'react';
import Navbar from './components/Navigation/Navbar';
import TypeDetail from './components/Type/TypeDetail';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css'
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import PostDetail from './components/Posts/PostDetail';
import CategoryDetail from './components/Category/CategoryDetail';
import MyPosts from './components/Posts/MyPosts';
import NewPost from './components/Posts/NewPost';
import ChangePost from './components/Posts/ChangePost';
import NewComment from './pages/CreateComment';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';


function App() {
  const [type, SetTypeGlobal] = useState({})
  const [category, setCategoryGlobal] = useState({})
  const [name, setNameGlobal] = useState('')
  const [postID, setPostID] = useState({})
  return (
    <Container maxWidth="xl" className="App">
      <Router>
      <CssBaseline />
        <Navbar name={name}/>
        <Switch>
          <Route path='/' exact render={(props) => <Home setNameGlobal={setNameGlobal} {...props} />} />
          <Route path="/posts/:id" exact render={(props) => <PostDetail setPostID = {setPostID} category={category} {...props} />} />
          <Route path="/category/:id" exact render={(props) => <CategoryDetail setCategoryGlobal={setCategoryGlobal} type={type} {...props} />} />
          <Route path="/type/:id" exact render={(props) => <TypeDetail SetTypeGlobal={SetTypeGlobal} {...props} />} />
          <Route path="/myposts" exact render={(props) => <MyPosts {...props} />} />
          <Route path="/newpost" exact render={(props) => <NewPost {...props} />} />
          <Route path="/change/:id" exact render={(props) => <ChangePost {...props} />} />
          <Route path="/comment" exact render={(props) => <NewComment postID={postID} {...props} />} />
          <Route path='/login' exact  render={(props) => <Login setNameGlobal={setNameGlobal} {...props} />} />
          <Route path='/register' exact render={(props) => <Register {...props} />} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
