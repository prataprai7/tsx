"use server";
import { LoginFormData, RegisterFormData } from "@/app/(auth)/_components/schema";
import { register, login, whoami } from "@/lib/api/auth";

// from frontend server

export async function registerUser(data: RegisterFormData){
    try{
        const result = await register(data);
        //how to send data to component
        if(result.success){
            return {success: true, data: result.data, message: result.message || 'Registration successful'};
        }
        return { success: false , message: result.message || "Registration failed"};
    }catch(error: any){
        return { success: false, message: error.message || "Registration failed"};
    }

}

export async function loginUser(data: LoginFormData){
     try{
        const result = await login(data);
        //how to send data to component
        if(result.success){
            return {success: true, data: result.data, message: result.message || 'Login successful'};
        }
        return { success: false , message: result.message || "Login failed"};
    }catch(error: any){
        return { success: false, message: error.message || "Login failed"};
    }
}

export async function getUserData() {
    try {
        const result = await whoami();
        // how to send data to component
        if (result.success) {
            return {
                success: true, data: result.data,
                message: result.message || 'Fetch user info successful'
            };
        }
        return {
            success: false, message: result.message
                || 'Fetch user info failed'
        };
    } catch (error: any) {
        return { success: false, message: error.message || 'Fetch user info failed' };
    }
}