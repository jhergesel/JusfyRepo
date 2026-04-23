import {
    createSlice
} from '@reduxjs/toolkit';

const initialLayoutState = {
    isAsideMinimized: false,
};

const layoutSlice = createSlice({
    name: 'layout',
    initialState: initialLayoutState,
    reducers: {
        setAsideMinimized: (state, action) => {
            state.isAsideMinimized = action.payload;
        },
    },
});

export const layoutActions = layoutSlice.actions;
export const layoutReducer = layoutSlice.reducer;