import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState ={
    materialsList:[],
    selectedMaterial:{},
    isloading:false,
    error:''
}

const BASE_URL = "http://localhost:8000/material/"
// GET
export const getMaterialsFromServer = createAsyncThunk(
    "materials/getMaterialsFromServer",
    async (_,{rejectWithValue}) => {
        const response = await fetch(BASE_URL)
        if (response.ok){
            const jsonResponse = await response.json()
            return jsonResponse
        }else{
            return rejectWithValue({error: 'No Material Found'})
        }
    }
)

// post
export const addMaterialsFromServer = createAsyncThunk(
    "materials/addMaterialsFromServer",
    async (material,{rejectWithValue}) => {
        const options ={
            method: 'POST',
            body: JSON.stringify(material),
            headers: {
                "content-type":"application/json; charset=UTF-8"
            }
        }
        const response = await fetch(BASE_URL, options)
        if (response.ok){
            const jsonResponse = await response.json()
            return jsonResponse
        }else{
            return rejectWithValue({error: 'Material not Added'})
        }
    }
)

//PATCH
export const UpdateMaterialsInServer = createAsyncThunk(
    "materials/UpdateMaterialsInServer",
    async (material,{rejectWithValue}) => {
        const options ={
            method: 'PATCH',
            body: JSON.stringify(material),
            headers: {
                "content-type":"application/json; charset=UTF-8"
            }
        }
        const response = await fetch(`http://localhost:8000/material/${material.id}`, options)
        if (response.ok){
            const jsonResponse = await response.json()
            return jsonResponse
        }else{
            return rejectWithValue({error: 'Material not Updated'})
        }
    }
)

export const deleteMaterialsInServer = createAsyncThunk(
    "materials/deleteMaterialsInServer",
    async (material,{rejectWithValue}) => {
        const options ={
            method: 'DELETE'
        }
        const response = await fetch(`http://localhost:8000/material/${material.id}`, options)
        if (response.ok){
            const jsonResponse = await response.json()
            return jsonResponse
        }else{
            return rejectWithValue({error: 'Material not Deleted'})
        }
    }
)
const materialsSlice = createSlice({
    name: 'materialsSlice',
    initialState,
    reducers:{
        addMaterialToList:(state, action) => {
            const id = Math.random()*100
            let material ={...action.payload,id}
            state.materialsList.push(material)
        }, 
        removeMaterialsFromList:(state, action)=> {
             state.materialsList= state.materialsList.filter((material) => material.id !== action.payload.id)

        },
        updateMaterialsInList:(state, action) => {
            state.materialsList = state.materialsList.map((material) => material.id === action.payload.id ? action.payload: material)
        },
        setSelectedMaterial:(state, action) => {
            state.selectedMaterial = action.payload
        }
    },
    extraReducers:(builder) =>{
        builder
         .addCase(getMaterialsFromServer.pending,(state)=>{
            state.isloading = true
         })
         .addCase(getMaterialsFromServer.fulfilled,(state,action)=>{
            state.isloading = false
            state.error = ''
            state.materialsList = action.payload
         })
         .addCase(getMaterialsFromServer  .rejected,(state,action) =>{
            state.error = action.payload.error
            state.isloading = false
            state.materialsList = []
         })

         .addCase(addMaterialsFromServer.pending,(state)=>{
            state.isloading = true
         })
         .addCase(addMaterialsFromServer.fulfilled,(state,action)=>{
            state.isloading = false
            state.error = ''
            state.materialsList.push(action.payload)
         })
         .addCase(addMaterialsFromServer.rejected,(state,action) =>{
            state.error = action.payload.error
            state.isloading = false
         })
        
         .addCase(UpdateMaterialsInServer.pending,(state)=>{
            state.isloading = true
         })
         .addCase(UpdateMaterialsInServer.fulfilled,(state,action)=>{
            state.isloading = false
            state.error = ''
            state.materialsList = state.materialsList.map((material) => 
            material.id === action.payload.id ? action.payload: material)
         })
         .addCase(UpdateMaterialsInServer .rejected,(state,action) =>{
            state.error = action.payload.error
            state.isloading = false
         })

         .addCase(deleteMaterialsInServer.pending,(state)=>{
            state.isloading = true
         })
         .addCase(deleteMaterialsInServer.fulfilled,(state,action)=>{
            state.isloading = false
            state.error = ''
         })
         .addCase(deleteMaterialsInServer.rejected,(state,action) =>{
            state.error = action.payload.error
            state.isloading = false
         })

    }   
})

export const {addMaterialsToList, removeMaterialsFromList, updateMaterialsInList, setSelectedMaterial} = materialsSlice.actions

export default materialsSlice.reducer