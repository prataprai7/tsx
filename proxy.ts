import { NextResponse, NextRequest } from "next/server";
import { getTokenCookie, getUserInfoCookie } from "./lib/cookies";
const publicRoutes = ["/login", "/register"];
const adminRoutes = ["/admin"];

export async function proxy(request: NextRequest) {
    const {pathname}= request.nextUrl; //which path
    const token  = await getTokenCookie();
    const user = await getUserInfoCookie();

    const isPublicRoute = publicRoutes.some(route => pathname.startsWith(route));
    if(!token && !isPublicRoute){
        return NextResponse.redirect(new URL("/login", request.url));
    }
    
    const isAdminRoute = publicRoutes.some(route => pathname.startsWith(route));
    if(token && user){
        if(isAdminRoute && user.role !== "admin"){
            return NextResponse.redirect(new URL("/unauthorized", request.url));
        }
    }

    
    if(token && isPublicRoute){
        return NextResponse.redirect(new URL("/dashbaord", request.url));
    }
    // return NextResponse.rewrite(new URL("/Login", request.url)); //rewrite to api route
    return NextResponse.next(); //continue to page
    
}

export const config = {
    matcher: [
        "/register", //which path to apply
        "/dashboard",
        "/login",
        "/admin/:path*", //matchh all admin routes
    ]
}