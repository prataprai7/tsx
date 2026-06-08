"use client"; // to use context must be client
// import { getUserInfoCookie } from "@/lib/cookies";
import { useAuth } from "@/lib/contexts/AuthContext";
import Link from "next/link";
export default async function DashboardPage() {
    // const userInfo = await getUserInfoCookie();
    const { user, logout } = useAuth();
    return (
        <div>

            {
                user && <div>
                    Welcome {user?.email || 'Not Logged In'}
                    <button onClick={logout} >Logout</button>
                </div>
            }
            {
                !user && <div>
                    <Link href="/login">Go to Login</Link>
                    <Link href="/register">Go to Register</Link>
                </div>
            }

        </div>
    );
}