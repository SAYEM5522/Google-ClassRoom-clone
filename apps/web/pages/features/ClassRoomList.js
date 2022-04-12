import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 Subject:"",
 Section:"",
 Room:"",
 googleID:null,
 Email:null,
  Name:null,
 ImageUrl:"",

}

const ClassRoomList = createSlice({
  name: "ClassRoomList",
  initialState,
  reducers: {
    setClassRoomList: (state, action) => {
      state.Subject = action.payload.Subject
      state.Section = action.payload.Section
      state.Room = action.payload.Room
    },
    setGoogleID: (state, action) => {
      state.googleID = action.payload.googleID
    },
    setUser: (state, action) => {
      state.Email = action.payload.Email
      state.Name = action.payload.Name
      state.ImageUrl = action.payload.ImageUrl
    }
  }
});

export const {
  setClassRoomList,
  setGoogleID,
  setUser
} = ClassRoomList.actions
export const selectCreateSubject=state=>state.ClassRoom.Subject
export const selectCreateSection=state=>state.ClassRoom.Section
export const selectCreateRoom=state=>state.ClassRoom.Room
export const selectGoogleID=state=>state.ClassRoom.googleID
export const selectEmail=state=>state.ClassRoom.Email
export const selectName=state=>state.ClassRoom.Name
export const selectImageUrl=state=>state.ClassRoom.ImageUrl
export default ClassRoomList.reducer