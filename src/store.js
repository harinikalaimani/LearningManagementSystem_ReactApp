import {configureStore } from "@reduxjs/toolkit";
import loginformslice from '../../LMS-project/src/Slice/Loginslice'
import userSlice from "../../LMS-project/src/Slice/userslice";
import CourseSlice from "../../LMS-project/src/Slice/Courseslice";
import materialsSlice from "./Slice/materialslice";

export const store = configureStore({
    reducer: {
        loginform:loginformslice,
        users:userSlice,
        courses: CourseSlice,
        materials: materialsSlice
    }
})

