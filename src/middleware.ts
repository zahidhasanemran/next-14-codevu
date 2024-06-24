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

/**
 *
 * 
 *  Problem with CSR: 

1. SEO indexing 

2. Slow Initial Load time (Performance, user wait time) increase as the app grow over the time. 



Problem with SSR: 

1. Increase server response time as sever must collect all the necessary data for the entire page before start rendering html and sent to the client any part of html. 

2. User can't interact with the UI until the hydration is complete. 

3. Hydration can't start until all the javascript for entire page downloaded. 

That create waterfall problems, and each issue must be resolved before moving to the next one. 





Note: This is huge problem, when some part of the app is slower that others





Suspense SSR Architecture

Benefits: 

1. HTML Streaming on the server

2. Selective hydration on the client 



wrapping the slower part of the app with suspense. it will start streaming other parts first, and whenever the slower part will be ready on the server, it will send the slower part with minimal inline javascript to the client. That speed up the initial HTML delivery.  

But as we know hydration on the client side will not start until the slower part (full app) will load. And if the javascript bundle for that slower part of the app is large, again though the initial HTML delivery time reduced because of using suspense, to start the hydration process will delay the same time needed to load the javascript for that slowr part. 

So what is the solution?

__Code Splitting 

React.lazy help to separate the slower sections code from the main javascript bundle. so now the main javascript file containing React and code for the entire app without slower part's code can be downloaded independently in the client without waiting for the slower part's code.

so now slective hydrtion will start hydrate certain part of the app, even before the rest of the HTML and Javascript codes are downloaded.  

Everythis is nice and beautifull. right? 

Nooo!

even Suspense SSR Architecture has Drawbacks: 

1. Though Javascript code is streamed to the browser asynchronously, the entire code for the web page must be downloaded by the user. should user really have to download so much data? 

2. In current architecture: all the component must undergo the dydrtion process on the client side, irrespective of their actual need for interctivity. This will over use resources and increase loading time. should all the components need to be hydrated, even those that don't need interactivity? 

3. Inspite of server's superior capacity for handling intensive tasks, large javascript bundle will be execute on the client as client side rendering or on the user's device. so should so much of the process be done on the user's device when the app is large and the device is not powerfull? 



What problem server side component solved?

1. Slow Initial Load (in CSR): Traditional CSR can result in slow initial load times because the client needs to download and execute a large JavaScript bundle before rendering the page. And if user device is low powered then the senario can be more severe. 
  Solutions: 
  Reduced Client-side JavaScript: Server Components allow more rendering and logic handling on the server, sending down HTML for certain components. This reduces the amount of JavaScript for the client. 
  


2. Poor SEO with CSR: bot see only div and javascript file while crawl
  Solution: 
  Fully Rendered HTML: Server Components generate fully rendered HTML on the server for the initial request, making it easier for search engines to crawl and index the content.



3. Redundant Data Fetching: CSR fetches data on the client after the page loads, while SSR can fetch the same data both on the server and again on the client during hydration.
  Solution: 
  Server-Side Data Fetching: Server Components can fetch data directly on the server and render the component with this data, eliminating the need for the client to fetch it again. This reduces redundancy and speeds up data availability.
  
  Streaming Updates: By leveraging modern streaming protocols, Server Components can progressively stream data and HTML to the client, enhancing perceived performance and reducing the time to interactive.




4. Unnecessary Hydration: SSR typically requires a hydration process where the client re-runs JavaScript to make the initially server-rendered HTML interactive
  Solution: 
  Minimal Hydration: With Server Components, only the parts of the page that need client-side interactivity require hydration. Components that are purely server-rendered don’t need to be hydrated. 



5. State Duplication and Sync: Managing state across server-rendered and client-rendered components can be complex, with potential duplication of logic and state synchronization issues.
  Solution: 
  Single Source of Truth: Server Components can manage and render state on the server, simplifying state management. The client receives already-rendered HTML and only handles interactivity where necessary, reducing the need for complex state synchronization.



6. 

in ssr, slow initial load time?
in ssc, does javascript interactivity added  to the html on the server?
why ssr fetch data on both server and client during hydration? 
does ssc send interactive ui to the client? 
how ssc reduce the Client-side JavaScript? 






 */
