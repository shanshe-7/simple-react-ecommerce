import React, { useState } from 'react';
import BrandsSidebar from '../BrandsSidebar/BrandsSidebar';
import AddCartButton from './AddCartButton/AddCartButton';
import SortByPrice from '../SortByPrice/SortByPrice';
import { data } from '../../../data/data';
import { retrieve } from '../../../Redux/idSlice';
import { pushCurrenItem } from '../../../Redux/cartSlice';
import { NavLink } from 'react-router-dom';
import { Pagination } from '@material-ui/lab';
import { Grid, Card, CardActionArea, Typography } from '@material-ui/core';
import classes from './AllPhoneDisplay.module.scss';
import store from '../../../Redux/store';

const PhoneDisplay = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [dataForDisplay, setDataForDisplay] = useState(data);
  const [count, setCount] = useState(0);

  const postsPerPage = 9;
  const indexOfLastItem = currentPage * postsPerPage;
  const indexOfFirstItem = indexOfLastItem - postsPerPage;
  const pageCount = Math.ceil(dataForDisplay.length / postsPerPage);

  const hanldeSortLowToGigh = () => {
    let arrSort = dataForDisplay.slice();
    setDataForDisplay(
      arrSort.sort((a, b) => {
        return parseInt(a.price) - parseInt(b.price);
      })
    );
  };

  const handleRemoveSorting = () => {
    if (dataForDisplay.length >= 24) {
      setDataForDisplay(data);
    }
  };

  const handleFilter = (e) => {
    const filteredData = data.filter((d) => {
      return d.company === e.target.value;
    });
    if (dataForDisplay.length >= 24) {
      setCount((prevSt) => prevSt + 1);
      setDataForDisplay(Array.from(new Set(filteredData)));
    } else if (e.target.checked) {
      setCount((prevSt) => prevSt + 1);
      setDataForDisplay(
        Array.from(new Set(dataForDisplay.concat(filteredData)))
      );
    } else if (!e.target.checked && count !== 1) {
      setCount((prevSt) => prevSt - 1);
      setDataForDisplay(
        dataForDisplay.filter((d) => {
          return d.company !== e.target.id;
        })
      );
    } else if (!e.target.checked && count === 1) {
      setCount(0);
      setDataForDisplay(data);
    }
  };

  const hanldeSortHighToLow = () => {
    setDataForDisplay(
      [...dataForDisplay].sort((a, b) => {
        return parseInt(b.price) - parseInt(a.price);
      })
    );
  };

  const handleAddToCartClick = (e) => {
    const curId = e.currentTarget.id;
    const item = dataForDisplay.find((i) => {
      return i.id === curId;
    });
    store.dispatch(pushCurrenItem(item));
  };

  const hanldeIdRetrieve = (e) => {
    const curId = e.currentTarget.id;
    store.dispatch(retrieve(curId));
  };

  const handlePageChange = (event, val) => {
    setCurrentPage(val);
  };

  const pegData = dataForDisplay.slice(indexOfFirstItem, indexOfLastItem);

  const smartPhoneImage = pegData.map((i) => (
    <Grid key={i.id} item xs={12} sm={6} lg={4}>
      <Card className={classes.card}>
        <figure className={classes.figure}>
          <NavLink to='/phone' className={classes.navLink}>
            <CardActionArea id={i.id} onClick={hanldeIdRetrieve}>
              <img src={i.img} alt={i.description} width='100%' height='90%' />

              <figcaption className={classes.figcaption}>
                <Typography vartiant='subtitle2' color='primary'>
                  {i.description}
                </Typography>
              </figcaption>
            </CardActionArea>
          </NavLink>
          <Typography variant='h5' className={classes.price}>
            ${i.price}
          </Typography>
        </figure>
        <AddCartButton handleAddToCartClick={handleAddToCartClick} id={i.id} />
      </Card>
    </Grid>
  ));

  return (
    <>
      <Grid style={{ padding: '2%' }} container justify='center' spacing={2}>
        <Grid item xs={12} md={3} lg={2} xl={1}>
          <BrandsSidebar handleFilter={handleFilter} />
        </Grid>
        <Grid item xs={12} md={9} lg={10} xl={11} container>
          <Grid
            style={{
              marginLeft: '10px',
              marginRight: '10px',
              marginBottom: '1%',
            }}
            className={classes.sortByPriceGrid}
            item
            xs={12}
          >
            <SortByPrice
              hanldeSortHighToLow={hanldeSortHighToLow}
              hanldeSortLowToGigh={hanldeSortLowToGigh}
              handleRemoveSorting={handleRemoveSorting}
            />
          </Grid>

          {smartPhoneImage}
        </Grid>
        <Grid className={classes.paginationGrid} item xs={12}>
          <Pagination
            className={classes.pagination}
            color='secondary'
            size='medium'
            count={pageCount}
            onChange={handlePageChange}
          />
        </Grid>
      </Grid>
    </>
  );
};
export default PhoneDisplay;
