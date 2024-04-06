import {configureStore} from "@reduxjs/toolkit";
import todoreducers from "../feature/todo/todoslice";

export const store=configureStore({

       reducer:todoreducers

})