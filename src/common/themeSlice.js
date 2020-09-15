import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    darkTheme: JSON.parse(localStorage.getItem("theme")) || false,
  },
  reducers: {
    toggleTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export const selectDarkTheme = (state) => state.theme.darkTheme;
export default themeSlice.reducer;
