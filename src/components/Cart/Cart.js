import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  deleteItem,
  addQuantity,
  subtractQuantity,
} from '../../Redux/cartSlice';
import { Grid, Typography, Card } from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import classes from './Cart.module.scss';
import store from '../../Redux/store';

const Cart = () => {
  const displayData = useSelector((st) => st.cart);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const sum = displayData
    .map((i) => parseFloat(i.price) * i.quantity)
    .reduce(reducer, 0);
  const [totalSum, setTotalSum] = useState(sum);

  const handleDelete = (e) => {
    const id = e.currentTarget.id;
    const index = displayData.findIndex((i) => i.id === id);
    store.dispatch(deleteItem(index));
    setTotalSum((st) => {
      const itemQuantity = displayData[index].quantity;
      const itemPrice = parseFloat(displayData[index].price);
      const subData = itemQuantity * itemPrice;
      return st - subData;
    });
  };

  const handleAddQuantity = (e) => {
    const id = e.currentTarget.id;
    const index = displayData.findIndex((i) => i.id === id);
    store.dispatch(addQuantity(index));
    if (displayData[index].quantity < 15) {
      setTotalSum((st) => {
        return st + parseFloat(displayData[index].price);
      });
    }
  };

  const handleSubtractQuantity = (e) => {
    const id = e.currentTarget.id;
    const index = displayData.findIndex((i) => i.id === id);
    store.dispatch(subtractQuantity(index));
    if (displayData[index].quantity > 1) {
      setTotalSum((st) => {
        return st - parseFloat(displayData[index].price);
      });
    }
  };
  const display = displayData.map((i) => (
    <Card key={i.id} className={classes.cardItemGrid}>
      <Grid
        className={classes.itemContainerGrid}
        item
        container
        justify='center'
        xs={12}
      >
        <Grid className={classes.imageGrid} xs={12} item sm={2} md={1}>
          <img className={classes.image} src={i.img} alt={i.description} />
        </Grid>
        <Grid className={classes.descriptionGrid} item xs={12} sm={4} md={7}>
          <Typography align='center' variant='h5'>
            {i.description}
          </Typography>
        </Grid>
        <Grid className={classes.pricePlusDelete} item xs={12} sm={6} md={4}>
          <Typography className={classes.price} variant='h5'>
            ${i.price}
          </Typography>

          <div className={classes.plusMinusQuantityDiv}>
            <Typography className={classes.quantity}>{i.quantity}</Typography>
            <div className={classes.plusMinusDiv}>
              <Typography
                id={i.id}
                onClick={handleAddQuantity}
                className={classes.minusPlusButton}
              >
                +
              </Typography>
              <Typography
                id={i.id}
                onClick={handleSubtractQuantity}
                className={classes.minusPlusButton}
              >
                -
              </Typography>
            </div>
          </div>

          <DeleteIcon
            id={i.id}
            onClick={handleDelete}
            className={classes.deleteIcon}
            color='secondary'
          />
        </Grid>
      </Grid>
    </Card>
  ));
  return (
    <Grid
      style={{
        marginBottom: '20px',
        marginTop: '3%',
      }}
      justify='center'
      container
    >
      <Grid className={classes.shoppingCartGrid} item>
        <ShoppingCartIcon className={classes.shippingCartIcon} />
        <Typography variant='h6'>Shipping cart</Typography>
      </Grid>
      {display}

      <Grid className={classes.totalPriceGrid} item>
        <Typography
          style={{ marginRight: '1em' }}
          className={classes.totalPriceTypo}
          variant='h5'
        >{`Total price: $${Math.abs(totalSum.toFixed(2))}`}</Typography>
      </Grid>
    </Grid>
  );
};
export default Cart;
