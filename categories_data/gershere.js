(function () {
    const items = [
        {
            "name": "Gershere profesionale Knipex",
            "image": "https://toolsmarket.al/wp-content/uploads/2024/02/IM0004960.png",
            "price": "L 23,000.00"
        },
        {
            "name": "Gershere Knipex 7 1/4",
            "image": "https://toolsmarket.al/wp-content/uploads/2024/02/9010185-00-3.jpg",
            "price": "L 23,000.00"
        },
        {
            "name": "Gershere Knipex 8 1/4",
            "image": "https://toolsmarket.al/wp-content/uploads/2024/02/9010185-00-F-A-02.jpg",
            "price": "L 23,000.00"
        },
        {
            "name": "Gershere profesionale Knipex",
            "image": "https://toolsmarket.al/wp-content/uploads/2024/02/IM0006152.webp",
            "price": "L 23,000.00"
        },
    ]
    const categoriesElement = document.getElementById('products');

    for (let i = 0; i < items.length; i++) {
        const productComponent = `
                    <div class="col-lg-3 col-md-6 col-sm-6 pb-1">
                        <div class="product-item bg-light mb-4">
                            <div class="product-img position-relative overflow-hidden">
                                <img class="img-fluid w-100" src="${items[i].image}" alt="">
                            </div>
                            <div class="text-center py-4">
                                <a class="h6 text-decoration-none text-truncate" href="">${items[i].name}</a>
                                <div class="d-flex align-items-center justify-content-center mt-2">
                                    <!--<h5>${items[i].price}</h5><h6 class="text-muted ml-2"></h6>-->
                                </div>
                                
                            </div>
                        </div>
                        </div>
                 `
        categoriesElement.innerHTML += productComponent
    }
})()
