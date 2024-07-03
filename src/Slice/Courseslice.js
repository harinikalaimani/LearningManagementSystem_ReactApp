import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  courseSet: [],
  selectedCourse: {},
  error: "",
};
// get course 

export const getCourseFromJson = createAsyncThunk(
  "course/getCourseFromJson",
  async (_, { rejectWithValue }) => {
    const response = await fetch("http://localhost:8000/course/");
    if (response.ok) {
      const data =await response.json();
      console.log(data);
      return data;
    
    } else {
      return rejectWithValue({ error: "No matches found" });
    }
  }
);
// Add Course
export const addCourseToJson = createAsyncThunk(
  "course/addCourseToJson",
  async (user, { rejectWithValue }) => {
    const options = {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "content-type": "application/json; charset=UTF-8" },
    };
    const response = await fetch("http://localhost:8000/course/", options);
    if (response.ok) {
      const data = response.json();
      return data;
    } else {
      return rejectWithValue({ error: "Something went wrong in add users" });
    }
  }
);

// update
export const updateCourseToJson = createAsyncThunk(
  "course/updateCourseToJson",
  async (updatedCourse, { rejectWithValue }) => {
    const options = {
      method: "PUT",
      body: JSON.stringify(updatedCourse),
      headers: { "content-type": "application/json; charset=UTF-8" },
    };
    const response = await fetch(
      `http://localhost:8000/course/${updatedCourse.id}`,
      options
    );
    if (response.ok) {
      const data = response.json();
      return data;
    } else {
      return rejectWithValue({ error: "Error updating user" });
    }
  }
);
// delete
export const removeCourseFromJson = createAsyncThunk(
    "course/removeCourseFromJson",
    async (courseId, { rejectWithValue }) => {
      try {
        const response = await fetch(`http://localhost:8000/course/${courseId.id}`, {
          method: "DELETE",
        });
        if (!response.ok) {
          throw new Error("Failed to delete course");
        }
        const data = await response.json();
        return data;
      } catch (error) {
        return rejectWithValue({ error: error.message });
      }
    }
  );
  

const CourseSlice = createSlice({
  name: "CourseSlice",
  initialState,
  reducers: {
    setSelectedCourse: (state, action) => {
      state.selectedCourse = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCourseFromJson.pending, (state) => {})
      .addCase(getCourseFromJson.fulfilled, (state, action) => {
        state.courseSet = action.payload;
        state.error = "";
      })
      .addCase(getCourseFromJson.rejected, (state, action) => {
        state.error = action.payload.error;
        state.courseSet = [];
      })
      .addCase(addCourseToJson.pending, (state) => {})
      .addCase(addCourseToJson.fulfilled, (state, action) => {
        state.courseSet.push(action.payload);
        state.error = "";
      })
      .addCase(addCourseToJson.rejected, (state, action) => {
        state.error = action.payload.error;
      })
      .addCase(updateCourseToJson.pending, (state) => {})
      .addCase(updateCourseToJson.fulfilled, (state, action) => {
        state.courseSet = state.courseSet.map((course) =>
          course.id === action.payload.id ? action.payload : course
        );
        state.error = "";
      })
      
      .addCase(updateCourseToJson.rejected ,(state,action)=>{
        state.error=action.payload.error;
      })
      .addCase(removeCourseFromJson.pending, (state) => {})
      .addCase(removeCourseFromJson.fulfilled, (state, action) => {
        state.courseSet = state.courseSet.filter(
          (course) => course.id !== action.payload.id
        );
        state.error = "";
      })
      .addCase(removeCourseFromJson.rejected, (state, action) => {
        state.error = action.payload.error;
      });
  },
});

export const { setSelectedCourse } = CourseSlice.actions;

export default CourseSlice.reducer;