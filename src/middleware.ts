// Redirection, URL rewrite, authentication, headers and Cookie management
// Custom matcher config, conditional statement

import { NextResponse, type NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  // if (req.nextUrl.pathname === '/dashboard') {
  //   // return NextResponse.rewrite(new URL('/docs', req.url)) FOR SEO OPTIMIZATION AND Lagacy url support
  //   return NextResponse.redirect(new URL('/docs', req.url))
  // }
  // return NextResponse.redirect(new URL('/', req.url))

  const response = NextResponse.next()
  const themePref = req.cookies.get('theme')
  if (!themePref) {
    response.cookies.set('theme', 'dark')
  }

  response.headers.set('custom-headers', 'Emran')
  return response
}

// export const config = {
//   matcher: '/dashboard',
// }
