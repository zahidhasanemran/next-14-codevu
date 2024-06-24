// Redirection, URL rewrite, authentication, headers and Cookie management
// Custom matcher config, conditional statement

import { NextResponse, type NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  return NextResponse.redirect(new URL('/', req.url))
}

export const config = {
  matcher: '/dashboard',
}
