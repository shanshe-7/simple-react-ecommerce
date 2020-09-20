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
    border: '5px solid green',
  };
  return (
    <header className={classes.header}>
      <Grid className={classes.grid} container alignItems='center'>
        <Grid className={classes.navLinkGridHome} xs={4} item>
          <NavLink
            exact
            to='/'
            style={{ marginLeft: '10%' }}
            className={classes.navLinkHome}
          >
            <Button style={{ color: 'white' }} className={classes.home}>
              <Typography>Home</Typography>
            </Button>
          </NavLink>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid
          className={classes.navLinkGridCart}
          // style={{ marginRight: '20px' }}
          xs={4}
          item
        >
          <NavLink
            exact
            to='/cart'
            style={{ marginRight: '10%' }}
            className={classes.navLinkCart}
          >
            <Button>
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
