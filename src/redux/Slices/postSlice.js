import { createSlice } from "@reduxjs/toolkit";

// initial State for define State structer/fields
const initialState = [
  {
    id: 1,
    title: "Learning Nextjs",
    description: "Nextjs is amazing because of simple and fast",
    time: new Date(new Date() - 600000).toISOString(),
    reactions: {
      thumbsup: 5,
      wow: 2,
      heart: 2,
    },
  },
];


// createSlice for create reducers

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },

    remove: (state, action) => {
      const newState = state.filter((item) => item.id !== action.payload);
      return newState;
    },

    incrementReactionCount: (state, action) => {
      const { postId, reaction } = action.payload;
      const selectedPost = state.find((post) => post.id === postId);
      if (selectedPost) 
        selectedPost.reactions[reaction]++;
    },
  },
});


// to use these actions we have to export the actions
export const { add, remove, incrementReactionCount } = postSlice.actions;


// we also need to export the reducer to pass into store
export default postSlice.reducer;
