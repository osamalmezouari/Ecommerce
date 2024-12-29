/* import Slider from 'react-slick';
import Grid from '@mui/material/Grid';
import ProductCard from '../../base/ProductCard/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../app/store';
import { getproductsCards } from '../../../features/products/productThunk';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect } from 'react';
import { Box, CircularProgress } from '@mui/material';

const ProductCardContainer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, data } = useSelector(
    (state: RootState) => state.products.productsCard
  );

  useEffect(() => {
    dispatch(getproductsCards());
  }, [dispatch]);

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ margin: 'auto', maxWidth: '1400px', padding: '20px' }}>
      {loading ? (
        <Box className={'w-full flex justify-center items-center py-8'}>
          <CircularProgress className="" />
        </Box>
      ) : (
        <Slider {...sliderSettings}>
          {' '}
          <Grid container gap={4}>
            {data?.map((productCard) => (
              <div key={productCard.id}>
                <Grid item xs={12} lg={3} gap={2}>
                  <ProductCard
                    id={productCard.id}
                    discount={productCard.discount}
                    name={productCard.name}
                    categoryName={productCard.categoryName}
                    description={productCard.description}
                    productAvgRating={productCard.productAvgRating}
                    price={productCard.price}
                    priceWithDiscount={productCard.priceWithDiscount}
                    unit={productCard.unit}
                    imageLink={productCard.imageLink}
                  />
                </Grid>
              </div>
            ))}
          </Grid>
        </Slider>
      )}
    </div>
  );
};

export default ProductCardContainer;
 */

import Slider from 'react-slick';
import ProductCard from '../../base/ProductCard/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../app/store';
import { getproductsCards } from '../../../features/products/productThunk';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect } from 'react';
import { Box, CircularProgress } from '@mui/material';

const ProductCardContainer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, data } = useSelector(
    (state: RootState) => state.products.productsCard
  );

  useEffect(() => {
    dispatch(getproductsCards());
  }, [dispatch]);

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ margin: 'auto', maxWidth: '1350px', padding: '20px' }}>
      {loading ? (
        <Box className="w-full flex justify-center items-center py-8">
          <CircularProgress />
        </Box>
      ) : (
        <Slider {...sliderSettings}>
          {data?.map((productCard) => (
            <div key={productCard.id} style={{ padding: '0 10px' }}  >
              <ProductCard
                id={productCard.id}
                discount={productCard.discount}
                name={productCard.name}
                categoryName={productCard.categoryName}
                description={productCard.description}
                productAvgRating={productCard.productAvgRating}
                price={productCard.price}
                priceWithDiscount={productCard.priceWithDiscount}
                unit={productCard.unit}
                imageLink={productCard.imageLink}
              />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default ProductCardContainer;
