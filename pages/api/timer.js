async function timer(request, response) {
    const apiSecret = process.env.CONVERTKIT_API_SECRET;
    const dynamicDate = new Date();

    //const subscribersResponse = await fetch(`https://api.convertkit.com/v3/subscribers?api_secret=${apiSecret}`);
    //const subscribersResponseJson = await subscribersResponse.json();
    const inscritos = 10000 //subscribersResponseJson.total_subscribers;

    // auto revalidate every 10 seconds, return cache while revalidate
    response.setHeader('Cache-control', 's-maxage=10, stale-while-revalidate');
    
    response.json({
        date: dynamicDate.toGMTString(),
        inscritos: inscritos,
    });
}

export default timer;