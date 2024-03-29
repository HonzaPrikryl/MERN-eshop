import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  paymentMethod: "Credit card",
};

const paymentMethodSlice = createSlice({
  name: "paymentMethod",
  initialState,
  reducers: {
    userPaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
  },
});

export const { userPaymentMethod } = paymentMethodSlice.actions;

export default paymentMethodSlice.reducer;
