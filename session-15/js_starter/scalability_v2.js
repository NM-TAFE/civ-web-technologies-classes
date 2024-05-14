// Modularised example on how to exand you API consumption using higher order function and Promises
async function fetchData(route) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/${route}`);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error('Failed to fetch data');
        }
    } catch (error) {
        console.error('An error occurred:', error);
        return null;
    }
}

async function fetchAndProcessData() {
    const routes = ['posts/1', 'users/1', 'todos/1'];

    try {
        const data = await Promise.all(routes.map(route => fetchData(route)));
        data.forEach((item, index) => {
            if (item) {
                console.log(`Data from route ${routes[index]}:`, item);
            } else {
                console.log(`Failed to fetch data from route ${routes[index]}`);
            }
        });
    } catch (error) {
        console.error('An error occurred:', error);
    }
    console.log('Async/Await Message');
}

fetchAndProcessData();
