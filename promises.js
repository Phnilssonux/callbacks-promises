function checkNumber(num) {
    return new Promise((resolve, reject) => {
        if (num > 10) {
            resolve(`Success! ${num} is greater than 10.`);
        } else {
            reject(`Error! ${num} is not greater than 10.`)
        }
    });
}

checkNumber(15)
    .then(result => console.log(result))
    .catch(error => console.log(error));



function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            if(!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();

        })
        .then(data => {
            console.log("Fetched Data:", data);
            document.body.innerHTML = `<h2>${data.title}</h2><p>${data.body}</p>`;
        })
        .catch(error => console.error("Fetch Error:", error));
}

fetchData();