const url = 'https://type.fit/api/quotes';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
let Quotes;
async function fetchQuote() {
    
        // Fetch the data from the API
        const response = await fetch(url);
        
        // Check if the response is OK (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // Parse the response as JSON
        const data = await response.json();
        return data;
}

// Call fetchQuote and handle the data
fetchQuote().then((data) => {
    //console.log(data); // This will log the parsed JSON data
    Quotes = data;
    return data;
});


function generateRandom()
{
    // Quotes = fetchQuote();
    const randomIndex = Math.floor(Math.random() * 16);
    // const randomIndex = generateRandom();
    //console.log(Quotes[randomIndex]);
    return Quotes[randomIndex];
}

module.exports = {generateRandom, fetchQuote};
// generateRandom();
