import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Coin {
  name: string;
  price: number;
  market_cap: number;
  total_volume: number;
}


interface CoinsState {
  coins: Coin[];
  loading: boolean;
  error:string;
}

const initialState: CoinsState = { coins: [], loading: false,error:'' };

export const fetchCoins = createAsyncThunk("coins/fetchAll", async () => {
  const response = await axios.get("http://localhost:8000/coins");
  return response.data;
});

const coinsSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoins.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCoins.fulfilled, (state, action) => {
        state.coins = action.payload;
        state.loading = false;
      })
      .addCase(fetchCoins.rejected, (state, action) => {
        state.error = action.error.message || 'Failed to load coins';
        state.loading = false;
      });
  },
});

export const { } = coinsSlice.actions;
export default coinsSlice.reducer;
