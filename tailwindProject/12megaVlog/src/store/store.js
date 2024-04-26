import {confirgureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';

const store=confirgureStore({
       reducer:{
              auth: authSlice,
       }

});

export default store;