import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories:[]
}
export const CategorySlice = createSlice({
    name:"CategoriySlice",
    initialState,
    reducers:{
        setCategories:(state,action)=>{
            state.categories = action.payload
            
            //console.log("setCategories reducer fonksiyonu",action.payload)
        }
    }
})

export const {setCategories} = CategorySlice.actions

export default CategorySlice.reducer