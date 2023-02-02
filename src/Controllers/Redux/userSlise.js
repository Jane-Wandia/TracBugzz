import {createSlice} from "@reduxjs/toolkit"


const slice = createSlice({
    name:"user",
    initialState:"[{}]",
    reducers:{
        getUser:(state)=>{
            state.push({name:"Tracie Muthuri"})
             state.push({name:"Tracie Muthuri"})
        
        }
    }
})
export default slice.reducer;
export const{getBugs,createBug,updateBug,markComplete}= slice.actions