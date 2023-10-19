import { createSlice } from "@reduxjs/toolkit";

// First, define the reducer and action creators via `createSlice`
const appSlice = createSlice({
  name: "app",
  initialState: {
    userInfo: null,
    userFollowers: [],
    userVideos: [],
    challenges: [],
    challengeInfo: null,
    videos: [],
  },
  reducers: {
    setUser(state, action) {
      state.userInfo = action.payload;
    },
    setUserFollowers(state, action) {
      state.userFollowers = action.payload;
    },
    setUserVideos(state, action) {
      state.userVideos = action.payload;
    },
    setChallenges(state, action) {
      state.challenges = action.payload;
    },
    setChallengeInfo(state, action) {
      state.challengeInfo = action.payload;
    },
    setVideos(state, action) {
      state.videos = action.payload;
    },
  },
});

const { actions, reducer } = appSlice;

// Destructure and export the plain action creators
export const {
  setUser,
  setChallengeInfo,
  setChallenges,
  setVideos,
  setUserFollowers,
  setUserVideos,
} = actions;

export default reducer;
