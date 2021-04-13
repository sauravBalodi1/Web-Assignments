import { createSlice } from '@reduxjs/toolkit'

const initialState = [
{id:'1',title:'first post',content:'hello'},
{id:'2',title:'second post',content:'more text'},

]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
       postsAdded(state,action){
           state.push(action.payload)
       }
    }
});

export const {
postsAdded
} = postsSlice.actions
export default postsSlice.reducer