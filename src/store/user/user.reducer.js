import { createSlice } from '@reduxjs/toolkit';


const INITIAL_STATE = {
  currentUser: null,
};

//it is a function, you pass it one parameter which is an object
//this objecct have some keyvalues on it that actually tell us what this reducer is going to do
//reducers: define the name of the reducer function that represents the action that updates this slice 
export const userSlice = createSlice({
  name:  'users',
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser(state, action) {
      //here seems that is updating the object, but behind scenes it is creating a new object
      //but redux toolkit make it easier to read like this way
      state.currentUser = action.payload
    }
  }
})

export const {setCurrentUser} = userSlice.actions;

export const userReducer = userSlice.reducer;



