/**
 * Represents the homepage route of the application
 * localhost:3000/
 * Adding "use client" will turn this into a client side component instead of the default server side: https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns
 */
async function Page({params}) {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`,
        //remove to use default Static Site Generation (SSG), fetch and cache ->{ cache: 'no-store'} //don't store it, simply call it,
        {next: {revalidate:10}} //add to combine benefits of Server Side Rendering (SSR) and SSG for dynamic content in static sites and results to Incremental Static Generation (ISR)
                                //instead of messing with the cache, data is  statically fetched at built time, while defining a revalidation time interval
                                //this means that the data will be cached but after specific time frame it's then going to refresh it and youre always gonna have new data making this the best for dynamic content 
    );
    
    const data = await res.json()

    return (
        <div className="grid grid-cols-6 gap-x-6 gap-y-3">
            <div className="">
                <h1 className="">
                    {data.title}
                </h1>
                <p className="">{data.body}</p>
            </div>
        </div>
    )
}