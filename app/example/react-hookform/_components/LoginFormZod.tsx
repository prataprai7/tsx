"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema, LoginFormData } from "./schema";

export default function LoginFormZod() {
    const { 
        register,
         handleSubmit,
          formState: { errors, isSubmitting } 
        } = useForm<LoginFormData>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            email: "default@gmail.com",
            password: ""
        }
    });

    return (
        <div></div>
    );
}