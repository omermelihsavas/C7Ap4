import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nameCheck, emailCheck, passwordCheck } from "@/helper";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface AuthState {
    name: string;
    email: string;
    password: string;
}

const initialState: AuthState = {
    name: "",
    email: "",
    password: ""
}

export const register = createAsyncThunk("auth/register", async (_, thunkApi) => {
    try {
        const currentState: any = thunkApi.getState();
        if (!nameCheck(currentState.registerReducer.name)) {
            toast.warn("İsim boş girilemez!");
            return
        }
        if (!emailCheck(currentState.registerReducer.email)) {
            toast.warn("Email kurallara uygun değil!");
            return
        }
        if (!passwordCheck(currentState.registerReducer.password)) {
            toast.warn("Şifre 6-20 karakter arası ve alfanumerik olmalıdır!");
            return
        }

        const response = await fetch("https://assign-api.piton.com.tr/api/rest/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(currentState.registerReducer),
        });

        const res = await response.json();
        console.log(res);
        
        if (res.action_register.token !== "") {
            document.cookie = `authToken=${res.action_register.token}; path=/; SameSite=Strict; Secure;`;
            window.location.href = 'home';           
        }

        if (res.action_register.token === "") {
            toast.warn("Giriş yapmanıza izin verilmedi. Lütfen bilgilerinizi kontrol edip tekrar deneyiniz!");
        }
        
    } catch (error) {
        console.log("HATA:", error);
    }
});

export const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        setRegisterData: (state, action: PayloadAction<{ name:string; email: string; password: string }>) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.password = action.payload.password;
        }
    }
})

export const { setRegisterData } = registerSlice.actions;
export default registerSlice.reducer;