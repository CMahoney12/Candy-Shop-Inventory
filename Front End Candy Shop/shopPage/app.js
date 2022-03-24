let getProducts = function() {
    let result = fetch("/Front End Candy Shop/products.json");
    let data = result

    let products = data.items;
    products = products.map(item => {
        const { title, price } = item.fields;
        const { id } = item.sys
        const image = item.fields.image.fields.file.url;
        return { title, price, id, image }
    })
    return products
}

getProducts();