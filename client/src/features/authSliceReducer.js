import { createSlice } from "@reduxjs/toolkit";
import { adminLogin } from "../utils/fetchApiData";


const initialState = {
    user: null,
    token: null
}

const authSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        logout: () => {
            return initialState
        }
    },
    extraReducers: (builder) => {
        builder.addCase(adminLogin.fulfilled, (state, action) => {
            state.user = action.payload.adminId
            state.token = action.payload.token

        })
    }
})
export const { logout, login } = authSlice.actions
export default authSlice.reducer