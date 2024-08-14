import { NextResponse } from 'next/server';
import { routeConstants } from './app/utilities/constants/combine.constant';

export function middleware(request) {
    const { pathname } = request.nextUrl;
    const token = request.cookies.get('token')?.value;

    if (token && (pathname === routeConstants.LOGIN || pathname === '/')) {
        return NextResponse.redirect(new URL(routeConstants.DASHBOARD, request.url));
    }
    if (!token && (pathname === '/' || pathname === '/auth' || pathname === '/login')) {
        return NextResponse.redirect(new URL(routeConstants.LOGIN, request.url));
    }
    if (!token && !pathname.includes('/auth') && !pathname.includes('/login')) {
        return NextResponse.redirect(new URL(routeConstants.LOGIN, request.url));
    }

    return NextResponse.next(); // Proceed to the next middleware or the requested route
}

export const config = {
    matcher: ['/', '/auth/:path*', '/login', '/dashboard/:path*'],
};
