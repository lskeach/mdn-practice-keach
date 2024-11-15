const fetchPromise = fetch(
    "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

console.log(fetchPromise);

fetchPromise.then((response) => {
    console.log('Received response: ${response.status}');
});

console.log("Started request...");

//Chaining the promise:
fetchPromise
    .then((response) => {
        if (!response.ok){
            throw new Error('HTTP error: ${response.status}');
        }
        return response.json()
    })
    .then((data) => {
        console.log(data[0].name);
    })
    .catch((error) => {
        console.error('Could not get products: ${error}');
    });
 

