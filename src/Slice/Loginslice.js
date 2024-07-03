import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    loginList:[],
    selectedinput:{},
    error:null, 
    isLoading: false 
}
const BASE_URL="http://localhost:8000/formData/";
export const getfieldfromserver= createAsyncThunk(
    "loginform/getfieldfromserver",
    async(_, { rejectWithValue })=>{
            try {
                const response=await fetch(BASE_URL);
                if(response.ok){
                    const jsonResponse=await response.json();
                    return jsonResponse;
                } else {
                    throw new Error('Failed to fetch data'); 
                }
            } catch(error) {
                return rejectWithValue({error:error.message}); 
            }
    }
);
const loginformslice = createSlice({
    name:"loginfromslice",
    initialState,
    reducers:{
        setselectedloginform:(state,action) =>{
            state.selectedinput = action.payload;
        }
    },
    extraReducers:(builder)=>{
        builder
        // GET
        .addCase(getfieldfromserver.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(getfieldfromserver.fulfilled,(state,action)=>{
            state.isLoading=false
            state.error=null // Reset error to null on successful fetch
            state.loginList = action.payload
        })
        .addCase(getfieldfromserver.rejected,(state,action)=>{
            state.error=action.payload.error
            state.isLoading=false
            state.loginList=[]
        })
    }
});
export const { setselectedloginform } = loginformslice.actions;
export default loginformslice.reducer;