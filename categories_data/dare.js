(function () {
    const items = [
        {
            "name": "Dare Knipex 210mm",
            "image": "https://toolsmarket.al/wp-content/uploads/2024/02/IM0013707.webp",
            "price": "L 23,000.00"
        },
        {
            "name": "Dare Knipex 280mm",
            "image": "https://toolsmarket.al/wp-content/uploads/2022/07/IM0007044.jpg",
            "price": "L 23,000.00"
        },
        {
            "name": "Dare Knipex 255mm",
            "image": "https://toolsmarket.al/wp-content/uploads/2022/07/IM0004628.jpg",
            "price": "L 23,000.00"
        },
        {
            "name": "Dare Knipex 225mm",
            "image": "https://toolsmarket.al/wp-content/uploads/2024/02/IM0004637.png \n",
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
