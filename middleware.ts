export { default} from 'next-auth/middleware';

export const config = {
    matcher: [
        '/user/:id*'
    ]
}


















// import { NextRequest, NextResponse } from "next/server";

// export function middleware(request: NextRequest){
//     return NextResponse.redirect(new URL("/new-page",request.url));
// }

// export const config={
//     matcher: [
//         '/user/:id*'
//     ]
// }