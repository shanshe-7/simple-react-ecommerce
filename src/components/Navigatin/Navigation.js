import React from 'react';
import { useSelector } from 'react-redux';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Grid, Typography, Button } from '@material-ui/core';

import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.scss';

const Navigation = () => {
  const displayData = useSelector((st) => st.cart);

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
            <Button style={{ color: 'white' }}>
              <Typography component='div'>
                <p className={classes.home}>Home</p>
              </Typography>
            </Button>
          </NavLink>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid className={classes.navLinkGridCart} xs={4} item>
          <NavLink
            exact
            to='/cart'
            style={{ marginRight: '10%' }}
            className={classes.navLinkCart}
          >
            <Button className={classes.navLinkCart}>
              <ShoppingCartIcon className={classes.cartIcon} />
              <Typography component='div'>
                <p className={classes.cartIcon}>
                  Cart{' '}
                  <sup style={{ color: '#ff5722' }}>{displayData.length}</sup>
                </p>
              </Typography>
            </Button>
          </NavLink>
        </Grid>
      </Grid>
    </header>
  );
};
export default Navigation;
