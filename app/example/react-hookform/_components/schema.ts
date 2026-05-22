import {z} from "zod";

export const loginFormSchema = z.object({
    email: z.email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters")
});
export type LoginFormData = z.infer<typeof loginFormSchema>;

export const registrationFormSchema = z.object({
    email: z.email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm Password must be at least 6 characters")
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
});
export type RegistrationFormData = z.infer<typeof registrationFormSchema>;