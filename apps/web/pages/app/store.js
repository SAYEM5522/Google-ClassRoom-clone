import { configureStore } from '@reduxjs/toolkit';
import ClassRoomReducer from "../features/ClassRoomList";
export default configureStore({
  reducer: {
    ClassRoom:ClassRoomReducer,
  },
  
});