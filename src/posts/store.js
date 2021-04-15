import {configureStore,applyMiddleware} from '@reduxjs/toolkit';
import postsReducer from "./postsSlice";
import logger from "redux-logger"
const loggerMiddleware=storeApi=>next=>action=>{
    console.log('dispatching action: ',action)
    let result=next(action);
    console.log('next State: ',storeApi.getState())
    return result;
}
export default configureStore({
    reducer:{
        posts:postsReducer,
    }
},applyMiddleware(loggerMiddleware))