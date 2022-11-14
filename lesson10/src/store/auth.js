import {createSlice} from '@reduxjs/toolkit';
const auth=createSlice({
    name:'auth',
    initialState:{
        user:null
    },
    reducers:{
        login(state,action){
            state.user=action.payload;
        },
        logout(state,action){
            state.user=null;
        }
    }
});
export const authAction=auth.actions;
export default auth;