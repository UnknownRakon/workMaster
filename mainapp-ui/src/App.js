import React, { useEffect, useState } from 'react';
import Navbar from './components/Navigation/Navbar';
import CategoryDetail from './components/Category/CategoryDetail';
import TypeDetail from './components/Type/TypeDetail';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import PostDetail from './components/Posts/PostDetail';

function App() {

  const[type, SetTypeGlobal] = useState({})

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
            <Route path="/posts/:id" exact component={PostDetail}/>
            <Route path="/category/:id" exact render={(props)=><CategoryDetail type={type} {...props}/>}/>
            <Route path="/type/:id" exact render={(props)=><TypeDetail SetTypeGlobal={SetTypeGlobal} {...props}/>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
