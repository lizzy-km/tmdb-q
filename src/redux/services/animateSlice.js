import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  blur: false,
  headerEl: null,
  navEl: null,
  mainEl: null,
  scrollUp: true,
 
};

const STORAGE_KEY = "Animate";

//____________________________________________________storedItems_____________________Null_____//
const storedItems = Cookies.get(STORAGE_KEY)
  ? JSON.parse(Cookies.get(STORAGE_KEY))
  : null;

if (storedItems) {
  initialState.blur = storedItems;
}

export const animateSlice = createSlice({
  name: "animateSlice",
  initialState,
  reducers: {
    blurOn: (state, { payload }) => {
      state.blur = payload.blur;
    },
    setHeaderEl : (state, { payload })=> {
        state.headerEl = payload;

    },
    setNavEl : (state, { payload })=> {
        state.navEl = payload;

    },
    setMainEl : (state, { payload })=> {
        state.mainEl = payload;

    },
    setScrollUp : (state, { payload })=> {
        state.scrollUp = payload;

    },

  },
});

export const {

    blurOn,
    blur,
    setHeaderEl,
    setNavEl,
    setMainEl,
    headerEl,
    navEl,
    mainEl,
    setScrollUp,
    scrollUp
 
} = animateSlice.actions;
export default animateSlice.reducer;