import React from 'react';
import { Typography, Select, MenuItem, Paper } from '@material-ui/core';
import classes from './SortByPrice.module.scss';

const SortByPrice = ({
  hanldeSortLowToGigh,
  hanldeSortHighToLow,
  handleRemoveSorting,
}) => {
  return (
    <Paper className={classes.paper}>
      <Typography
        style={{
          marginRight: '3px',
          marginLeft: '3px',
        }}
      >
        Sort by Price:{' '}
      </Typography>

      <Select labelId='price'>
        <MenuItem onClick={hanldeSortLowToGigh}>Low to high</MenuItem>
        <MenuItem onClick={hanldeSortHighToLow}>High to low</MenuItem>
        <MenuItem onClick={handleRemoveSorting}>Remove sorting</MenuItem>
      </Select>
    </Paper>
  );
};

export default SortByPrice;
