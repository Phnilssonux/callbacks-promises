function checkNumber(num) {
    return new Promise((resolve, reject) => {
        if (num > 10) {
            resolve(`Success! ${num} is greater than 10.`);
        } else {
            reject(`Error! ${num} is not greater than 10.`)
        }
    });
}

async function checkNumberAsync(num) {
    try {
        const result = await checkNumber(num);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
    
}

checkNumberAsync(15);
checkNumberAsync(5);



const fetchData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched Data:" data);

        document.body.innerHTML = `<h2>${data.title}</h2><p>${data.body}</p>`;
    } catch (error) {
        console.log("Fetch Error:", error);
    }
};