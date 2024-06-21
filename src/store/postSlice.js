import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    postsData: [],
    imagePreview:{}
}


export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        allPosts: (state, action) => {
            state.postsData = action.payload
        },
        setImagePreview: (state, action) => {
            const { id, url } = action.payload;
            state.imagePreview[id] = url
        }
    }
})

export const { allPosts,setImagePreview } = postSlice.actions;
export default postSlice.reducer;