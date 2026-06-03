"user server";
import { RegisterFormData } from "@/app/(auth)/_components/schema";
import { register } from "@/lib/api/auth";

 //from frontend server

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