import React from 'react';
import { brands } from '../../../data/brands';
import { Grid, Typography, Checkbox } from '@material-ui/core';
import classes from './BrandsSidebar.module.scss';

const BrandsSidebar = ({ handleFilter }) => {
  const brand = brands.map((b) => (
    <Grid key={b.id} className={classes.grid} xs={6} sm={4} md={12} item>
      <Typography component={'div'} className={classes.iconAndName}>
        <Checkbox
          color='secondary'
          onClick={handleFilter}
          id={b.name}
          value={b.name}
        />
        <Typography
          variant='h6'
          color='primary'
          id={b.name}
          className={classes.brandsName}
        >
          {b.name}
        </Typography>
      </Typography>
    </Grid>
  ));

  return (
    <Grid
      // style={{ border: '2px solid green', marginRight: '100px' }}
      justify='center'
      className={classes.mainGrid}
      container
      direction='row'
    >
      <Grid xs={12} item>
        <Typography variant='h5' className={classes.brandsGrid}>
          Brands
        </Typography>
      </Grid>
      {brand}
    </Grid>
  );
};

export default BrandsSidebar;
