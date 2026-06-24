// lib/api/endpoints.ts
// centralized path definitions for API endpoints
export const API = {
    AUTH: {
        REGISTER: "/api/v1/auth/register",
        LOGIN: "/api/v1/auth/login",
        WHOAMI: "/api/v1/auth/whoami",
        UPDATE: "/api/v1/auth/update",
    },
    ADMIN: {
        BLOG: {
            GET: "/api/v1/admin/blogs",
            GET_ONE: (id: string) => `/api/v1/admin/blogs/${id}`,
            CREATE: "/api/v1/admin/blogs",
            UPDATE: (id: string): string => `/api/v1/admin/blogs/${id}`,
            DELETE: (id: string): string => `/api/v1/admin/blogs/${id}`,
        }
    }
}