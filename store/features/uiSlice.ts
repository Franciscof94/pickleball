import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type uiState = {
  stepNumber: number | null,
  nextStep: () => void
};

const initialState: uiState = {
  stepNumber: 0,
  nextStep: () => {}
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setStepNumber: (state, action: PayloadAction<number>) => {
      state.stepNumber = action.payload;
    },
    setNextStep: (state, action: PayloadAction<() => void>) => {
      state.nextStep = action.payload
    }
  },
});

export const { setStepNumber, setNextStep } = uiSlice.actions;

export const selectUi = (state: RootState) => state.ui;

export default uiSlice.reducer;
