import React from 'react';
import { useSelector } from 'react-redux';
import { pushCurrenItem } from '../../Redux/cartSlice';
import store from '../../Redux/store';
import { data } from '../../data/data';
import { Grid, Typography, Card, Button } from '@material-ui/core';
import classes from './SinglePhone.module.scss';

const SinglePhone = () => {
  const currentId = useSelector((st) => st.id.value.retrivedId);
  let i;
  currentId ? (i = data.find((d) => d.id === currentId)) : (i = data[0]);

  const handleToCartPush = () => {
    store.dispatch(pushCurrenItem(i));
  };

  return (
    <Grid justify='center' container>
      <Card className={classes.cardItemGrid}>
        <Grid item xs={12} container>
          <Grid className={classes.grid} item md={6} sm={12}>
            <img className={classes.img} src={i.img} alt={i.description} />
          </Grid>
          <Grid
            style={{
              padding: '4%',
            }}
            justify='center'
            spacing={3}
            item
            direction='column'
            container
            md={6}
            sm={12}
          >
            <Grid item>
              <div>
                <Typography variant='h4'>{i.description}</Typography>
              </div>
            </Grid>
            <Grid item>
              <div>
                <Typography variant='h5'>${i.price}</Typography>
              </div>
            </Grid>
            <Grid item>
              <div>
                <Typography variant='h6'>Screen size</Typography>
                <Typography>{i.screenSize}</Typography>
              </div>
            </Grid>
            <Grid item>
              <div>
                <Typography variant='h6'>Battary</Typography>
                <Typography>{i.battery}</Typography>
              </div>
            </Grid>
            <Grid item>
              <div>
                <Typography variant='h6'>Weight</Typography>
                <Typography>{i.weight}</Typography>
              </div>
            </Grid>
            <Grid item>
              <div>
                <Typography variant='h6'>Operating System</Typography>
                <Typography>{i.opSystem}</Typography>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <div className={classes.button}>
          <Button
            style={{
              margin: '20px',
            }}
            variant='contained'
            color='primary'
            onClick={handleToCartPush}
          >
            Add to cart
          </Button>
        </div>
      </Card>
    </Grid>
  );
};
export default SinglePhone;
