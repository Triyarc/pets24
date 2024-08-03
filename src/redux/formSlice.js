import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  checkbox: { id: null, value: false },
  radioButton: { id: null, value: '' },
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setCheckbox: (state, action) => {
      state.checkbox = action.payload;
    },
    setRadioButton: (state, action) => {
      state.radioButton = action.payload;
    },
    clearForm: (state) => {
        state.checkbox = { id: null, value: false };
        state.radioButton = { id: null, value: '' };
      },
  },
});

export const { setCheckbox, setRadioButton ,clearForm } = formSlice.actions;
export default formSlice.reducer;
