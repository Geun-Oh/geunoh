import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/user";
import { UserService } from "../services/userService";

const initialState: User = {
  id: "",
  displayName: "",
  email: "",
  belong: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getInitialUserInfo: (state: User, action: PayloadAction<User>) => {
      state = action.payload; // immer를 사용해서 불변성을 지키도록 해주어야 한다.
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(UserService.getUser.pending, (state, action) => {
        console.log("pending");
      })
      .addCase(UserService.getUser.fulfilled, (state, action) => {
        console.log("fulfilled");
      })
      .addCase(UserService.getUser.rejected, (state, action) => {
        console.log("rejected");
      });
  },
});

export const { getInitialUserInfo } = userSlice.actions;
export default userSlice.reducer;
