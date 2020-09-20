import React from 'react';
import { useSelector } from 'react-redux';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Grid, Typography, Button } from '@material-ui/core';

import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.scss';

const Navigation = () => {
  const displayData = useSelector((st) => st.cart);

  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <header className={classes.header}>
      <Grid className={classes.grid} container alignItems='center'>
        <Grid style={style} xs={3} item>
          <NavLink exact to='/' className={classes.navLink}>
            <Button style={{ color: 'white' }} className={classes.home}>
              <Typography>Home</Typography>
            </Button>
          </NavLink>
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid style={style} xs={3} item>
          <NavLink exact to='/cart' className={classes.navLink}>
            <Button style={style}>
              <ShoppingCartIcon style={{ color: 'white' }} />
              <Typography style={{ color: 'white' }}>
                Cart{' '}
                <sup style={{ color: '#ff5722' }}>{displayData.length}</sup>
              </Typography>
            </Button>
          </NavLink>
        </Grid>
      </Grid>
    </header>
  );
};
export default Navigation;
