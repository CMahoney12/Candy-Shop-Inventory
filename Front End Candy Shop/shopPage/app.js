let cardBody = document.getElementById("card-body")

cardBody.append(getProducts());


fetch("/Front End Candy Shop/products.json")
    .then(res => res.json())
    .then(json => {
        const products = [json].map(data => [
            console.log(data.items)
        ])
    });

showPictures = json.items.image
showPrice = json.items.price
showTitle = json.items.title

// for (let i = 0; i < 30; i++) {

function getProducts(showPictures, showPrice, showTitle) {
    let card = document.createElement('div');
    card.innerHTML = `
    <div class="products-center col">
            <article class="product">
                <div class="img-container">
                    <img src="/Front End Candy Shop/assets/images/candy.jpg" alt="product 1 image" class="product-img">
                    <button class="bag-btn">
                        <i class="bi bi-cart-plus"></i>
                        add to cart
                    </button>
                </div>
                <h3>${showTitle}</h3>
                <h4>$3.99</h4>
            </article>
        </div>
    `;
    return card
}