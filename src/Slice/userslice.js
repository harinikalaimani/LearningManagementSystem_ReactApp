import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState ={
    usersList:[],
    selectedUser:{},
    isloading:false,
    error:''
}

const BASE_URL = "http://localhost:8000/formData/"
// GET
export const getUsersFromServer = createAsyncThunk(
    "users/getUsersFromServer",
    async (_,{rejectWithValue}) => {
        const response = await fetch(BASE_URL)
        if (response.ok){
            const jsonResponse = await response.json()
            return jsonResponse
        }else{
            return rejectWithValue({error: 'No User Found'})
        }
    }
)

// post
export const addUsersFromServer = createAsyncThunk(
    "users/addUsersFromServer",
    async (user,{rejectWithValue}) => {
        const options ={
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                "content-type":"application/json; charset=UTF-8"
            }
        }
        const response = await fetch(BASE_URL, options)
        if (response.ok){
            const jsonResponse = await response.json()
            return jsonResponse
        }else{
            return rejectWithValue({error: 'User not Added'})
        }
    }
)

//PATCH
export const UpdateUserInServer = createAsyncThunk(
    "users/UpdateUserInServer",
    async (user,{rejectWithValue}) => {
        const options ={
            method: 'PATCH',
            body: JSON.stringify(user),
            headers: {
                "content-type":"application/json; charset=UTF-8"
            }
        }
        const response = await fetch(`http://localhost:8000/formData/${user.id}`, options)
        if (response.ok){
            const jsonResponse = await response.json()
            return jsonResponse
        }else{
            return rejectWithValue({error: 'User not Updated'})
        }
    }
    )
    
    export const deleteUsersInServer = createAsyncThunk(
        "users/deleteUsersInServer",
        async (user,{rejectWithValue}) => {
            const options ={
                method: 'DELETE'
            }
            // const response = await fetch(BASE_URL + '/' + user.id, options)
            const response = await fetch(`http://localhost:8000/formData/${user.id}`, options)
        if (response.ok){
            const jsonResponse = await response.json()
            return jsonResponse
        }else{
            return rejectWithValue({error: 'User not Deleted'})
        }
    }
)
const usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers:{
        addUserToList:(state, action) => {
            const id = Math.random()*100
            let user ={...action.payload,id}
            state.usersList.push(user)
        }, 
        removeUserFromList:(state, action)=> {
             state.usersList= state.usersList.filter((user) => user.id !== action.payload.id)
        },
        updateTaskInList:(state, action) => {
            state.usersList = state.usersList.map((user) => user.id === action.payload.id ? action.payload: user)
        },
        setSelectedTask:(state, action) => {
            state.selectedUser = action.payload
        }
    },
    extraReducers:(builder) =>{
        builder
         .addCase(getUsersFromServer.pending,(state)=>{
            state.isloading = true
         })
         .addCase(getUsersFromServer.fulfilled,(state,action)=>{
            state.isloading = false
            state.error = ''
            state.usersList = action.payload
         })
         .addCase(getUsersFromServer  .rejected,(state,action) =>{
            state.error = action.payload.error
            state.isloading = false
            state.usersList = []
         })

         .addCase(addUsersFromServer.pending,(state)=>{
            state.isloading = true
         })
         .addCase(addUsersFromServer.fulfilled,(state,action)=>{
            state.isloading = false
            state.error = ''
            state.usersList.push(action.payload)
         })
         .addCase(addUsersFromServer.rejected,(state,action) =>{
            state.error = action.payload.error
            state.isloading = false
         })
        
         .addCase(UpdateUserInServer.pending,(state)=>{
            state.isloading = true
         })
         .addCase(UpdateUserInServer.fulfilled,(state,action)=>{
            state.isloading = false
            state.error = ''
            state.usersList = state.usersList.map((user) => 
            user.id === action.payload.id ? action.payload: user)
         })
         .addCase(UpdateUserInServer .rejected,(state,action) =>{
            state.error = action.payload.error
            state.isloading = false
         })

         .addCase(deleteUsersInServer.pending,(state)=>{
            state.isloading = true
         })
         .addCase(deleteUsersInServer.fulfilled,(state,action)=>{
            state.isloading = false
            state.error = ''
         })
         .addCase(deleteUsersInServer.rejected,(state,action) =>{
            state.error = action.payload.error
            state.isloading = false
         })

    }   
})

export const {addUserToList, removeUserFromList, updateTaskInList, setSelectedTask} = usersSlice.actions

export default usersSlice.reducer