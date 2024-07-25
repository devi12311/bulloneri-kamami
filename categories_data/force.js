(function () {
    const items = [
        {
            "name": "Koka kriketi 1",
            "image": "https://www.forcetools.co.za/wp-content/uploads/2018/11/34805516T-web-2.jpg",
            "price": "L 23,000.00"
        },
        {
            "name": "Koka kriketi 2",
            "image": "https://www.forcetools.co.za/wp-content/uploads/2024/05/24606050-web.jpg",
            "price": "L 23,000.00"
        },
        {
            "name": "Koka kriketi 3",
            "image": "https://herramientasferreteria.cl/wp-content/uploads/2024/01/image_676.jpg",
            "price": "L 23,000.00"
        },
        {
            "name": "Celsa 1",
            "image": "https://www.forcetools.co.za/wp-content/uploads/2020/03/5116-web.jpg",
            "price": "L 23,000.00"
        },
        {
            "name": "Celsa 2",
            "image": "https://www.megateksa.com/media/catalog/product/cache/fbb2dc43818756b056bd8caf729c2982/1/7/17683_1.jpg",
            "price": "L 23,000.00"
        },
        {
            "name": "Celsa 3",
            "image": "https://m.media-amazon.com/images/I/51+gCxl7OGL._AC_.jpg",
            "price": "L 23,000.00"
        },
        {
            "name": "Ekstrator 1",
            "image": "https://www.electrotools.gr/1995-large_default/force-extractor-6590108.jpg",
            "price": "L 23,000.00"
        },
        {
            "name": "Ekstrator 2",
            "image": "https://www.forcetools.co.za/wp-content/uploads/2018/10/628E46-web.jpg",
            "price": "L 23,000.00"
        },
        {
            "name": "Adaptor 1",
            "image": "https://www.megateksa.com/media/catalog/product/cache/fbb2dc43818756b056bd8caf729c2982/1/2/12796_1.jpg",
            "price": "L 23,000.00"
        },
        {
            "name": "Adaptor 2",
            "image": "https://cdn11.bigcommerce.com/s-xsnp47c4d3/images/stencil/960w/products/8302/27039/80964mpb_2___93143.1698660244.png",
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
                                <div class="d-flex align-items-center justify-content-center mb-1">
                                    <small class="fa fa-star text-primary mr-1"></small>
                                    <small class="fa fa-star text-primary mr-1"></small>
                                    <small class="fa fa-star text-primary mr-1"></small>
                                    <small class="fa fa-star text-primary mr-1"></small>
                                    <small class="fa fa-star text-primary mr-1"></small>
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                        </div>
                 `
        categoriesElement.innerHTML += productComponent
    }
})()
