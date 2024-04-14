import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { State } from './types';

const initialState: State = {
    category: '',
};

export const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload;
        },
    },
});

export const {
    setCategory,
} = generalSlice.actions;

export const selectCategory = (state: RootState) => state.general.category;
export default generalSlice.reducer;