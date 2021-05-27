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


function App() {
  const [type, SetTypeGlobal] = useState({})
  const [category, setCategoryGlobal] = useState({})
  const [name, setNameGlobal] = useState('')
  return (
    <div className="App">
      {console.log(name)}
      <Router>
        <Navbar name={name}/>
        <Switch>
          <Route path='/' exact render={(props) => <Home setNameGlobal={setNameGlobal} {...props} />} />
          <Route path='/login' exact  render={(props) => <Login setNameGlobal={setNameGlobal} {...props} />} />
          <Route path='/register' exact render={(props) => <Register {...props} />} />
          <Route path="/posts/:id" exact render={(props) => <PostDetail category={category} {...props} />} />
          <Route path="/category/:id" exact render={(props) => <CategoryDetail setCategoryGlobal={setCategoryGlobal} type={type} {...props} />} />
          <Route path="/type/:id" exact render={(props) => <TypeDetail SetTypeGlobal={SetTypeGlobal} {...props} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
