import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slices/counterSlice";
import postReducer from "./Slices/postSlice";
import userReducer from "./Slices/userSlice";
import AsyncPostReducer from "./Slices/AsyncPostSlice";
import AsyncUserReducer from "./Slices/AsyncUserSlice"

const Store = configureStore({
  reducer: {
    counter: counterReducer,
    post: postReducer,
    users: userReducer,
    asyncPost: AsyncPostReducer,
    asyncUser: AsyncUserReducer
  },
});

export default Store;
