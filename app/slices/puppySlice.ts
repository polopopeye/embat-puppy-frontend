import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import type { RootState } from '../../app/store';

import constants from '../constants';
import { PuppyInterface } from '../interfaces/puppyInterface';

export type PuppyState = {
  data: [PuppyInterface?];
  pending: boolean;
  error: boolean;
};

const initialState: PuppyState = {
  data: [],
  pending: false,
  error: false,
};

export const listPuppies = createAsyncThunk('puppy', async () => {
  const response = await axios.get(constants.api.puppy);
  console.log(
    '🚀 ~ file: puppySlice.ts ~ line 23 ~ listPuppies ~ response',
    response
  );

  return response.data;
});

export const puppySlice = createSlice({
  name: 'puppy',
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(listPuppies.pending, (state: PuppyState) => {
        state.pending = true;
      })
      .addCase(
        listPuppies.fulfilled,
        (state: PuppyState, response: { payload: any }) => {
          const { payload } = response;
          state.pending = false;
          state.data = payload;
        }
      )
      .addCase(listPuppies.rejected, (state: PuppyState) => {
        state.pending = false;
        state.error = true;
      });
  },
});

export const puppyApp = (storeState: RootState) => storeState.puppy;
