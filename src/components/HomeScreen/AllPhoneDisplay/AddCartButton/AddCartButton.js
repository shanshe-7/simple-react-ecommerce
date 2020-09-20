import React from 'react';
import { Button } from '@material-ui/core';
import classes from './AddCartButton.module.scss';

const AddCartButton = ({ id, handleAddToCartClick }) => {
  return (
    <div className={classes.button}>
      <Button
        style={{
          margin: '20px',
        }}
        variant='contained'
        color='primary'
        id={id}
        price={0}
        onClick={handleAddToCartClick}
      >
        Add to cart
      </Button>
    </div>
  );
};
export default AddCartButton;
