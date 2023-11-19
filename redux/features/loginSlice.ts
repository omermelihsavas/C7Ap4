import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { emailCheck, passwordCheck } from "@/helper";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface AuthState {
    email: string;
    password: string;
}

const initialState: AuthState = {
    email: "",
    password: ""
}

export const login = createAsyncThunk("auth/login", async (_, thunkApi) => {
    try {
        const currentState: any = thunkApi.getState();
        if (!emailCheck(currentState.loginReducer.email)) {
            toast.warn("Email kurallara uygun değil!");
            return
        }
        if (!passwordCheck(currentState.loginReducer.password)) {
            toast.warn("Şifre 6-20 karakter arası ve alfanumerik olmalıdır!");
            return
        }

        const response = await fetch("https://assign-api.piton.com.tr/api/rest/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(currentState.loginReducer),
        });

        const res = await response.json();
        console.log(res);

        if (res.action_login.token !== "") {
            document.cookie = `authToken=${res.action_login.token}; path=/; SameSite=Strict; Secure;`; 
            window.location.href = 'home';           
        }

        if (res.action_login.token === "") {
            toast.warn("Giriş yapmanıza izin verilmedi. Lütfen bilgilerinizi kontrol edip tekrar deneyiniz!");
        }
    } catch (error) {
        console.log("HATA:", error);
    }
});

export const logout = createAsyncThunk("auth/logout", () => {
    function deleteCookie(name: string) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; SameSite=Strict; Secure;`;
        window.location.href = '/';
    }
    deleteCookie('authToken');
})

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setLoginData: (state, action: PayloadAction<{ email: string; password: string }>) => {
            state.email = action.payload.email;
            state.password = action.payload.password;
        }
    }
})

export const { setLoginData } = loginSlice.actions;
export default loginSlice.reducer;