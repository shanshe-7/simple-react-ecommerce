import React from 'react';
import AllPhoneDisplay from './components/HomeScreen/AllPhoneDisplay/AllPhoneDisplay';
import Navigation from './components/Navigatin/Navigation';
import SinglePhone from './components/SinglePhone/SinglePhone';
import Cart from './components/Cart/Cart';
import { Route, Switch } from 'react-router-dom';
import classes from './App.module.scss';

function App() {
  return (
    <div className={classes.mainDiv}>
      <Navigation />
      <Switch>
        <Route exact path='/phone' component={SinglePhone} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/' component={AllPhoneDisplay} />
      </Switch>
    </div>
  );
}

export default App;
