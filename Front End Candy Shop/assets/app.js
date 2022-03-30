function fetchData() {
    fetch("/Front End Candy Shop/products.json")
        .then(response => {
            console.log(response);
            if (!response.ok) {
                throw Error("ERROR");
            }
            return response.json();
        })
        .then(data => {
            console.log(data.items);
        }).catch(error => {
            console.log(error);
        });
}

fetchData();