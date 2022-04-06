import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 Subject:"",
 Section:"",
 Room:""
}

const ClassRoomList = createSlice({
  name: "ClassRoomList",
  initialState,
  reducers: {
    setClassRoomList: (state, action) => {
      state.Subject = action.payload.Subject
      state.Section = action.payload.Section
      state.Room = action.payload.Room
    }
  }
});

export const {
  setClassRoomList
} = ClassRoomList.actions
export const selectCreateSubject=state=>state.ClassRoom.Subject
export const selectCreateSection=state=>state.ClassRoom.Section
export const selectCreateRoom=state=>state.ClassRoom.Room
export default ClassRoomList.reducer