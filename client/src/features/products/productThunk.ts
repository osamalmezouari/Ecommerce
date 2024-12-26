import { createAsyncThunk } from '@reduxjs/toolkit';
import * as productsApi from '../../api/products';

export const getProductsStore = createAsyncThunk(
  '/products/store',
  async (page: number, { rejectWithValue }) => {
    try {
      const products = await productsApi.getProductsStore(page);
      return products;
    } catch (error: any) {
      if (error) {
        return rejectWithValue(error);
      }
      return rejectWithValue({
        message: error.message || 'Something went wrong.',
      });
    }
  }
);

export const getproductsCards = createAsyncThunk(
  '/products/getcards',
  async (_, { rejectWithValue }) => {
    try {
      const products = await productsApi.getProductsCards();
      return products;
    } catch (error: any) {
      if (error) {
        return rejectWithValue(error);
      }
      return rejectWithValue({
        message: error.message || 'Something went wrong.',
      });
    }
  }
);

export const getProductsNewArrivals = createAsyncThunk(
  '/products/getnewArrivals',
  async (_, { rejectWithValue }) => {
    try {
      const products = await productsApi.getProductsNewArrivals();
      return products;
    } catch (error: any) {
      if (error) {
        return rejectWithValue(error);
      }
      return rejectWithValue({
        message: error.message || 'Something went wrong.',
      });
    }
  }
);
