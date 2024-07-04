import {configureStore } from "@reduxjs/toolkit";
import loginformslice from './Slice/Loginslice'
import userSlice from "./Slice/userslice";
import CourseSlice from "./Slice/Courseslice";
import materialsSlice from "./Slice/materialslice";

export const store = configureStore({
    reducer: {
        loginform:loginformslice,
        users:userSlice,
        courses: CourseSlice,
        materials: materialsSlice
    }
})

