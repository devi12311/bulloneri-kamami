(function () {
    const items = [
        {
            "name": "Koka kriketi Force te bardhe",
            "image": "https://www.forcetools.co.za/wp-content/uploads/2018/11/34805516T-web-2.jpg",
            "price": "L 23,000.00"
        },
        {
            "name": "Koka kriketi Force te zi",
            "image": "https://www.forcetools.co.za/wp-content/uploads/2024/05/24606050-web.jpg",
            "price": "L 23,000.00"
        },
        {
            "name": "Koka kriketi Force",
            "image": "https://herramientasferreteria.cl/wp-content/uploads/2024/01/image_676.jpg",
            "price": "L 23,000.00"
        },
        {
            "name": "Celes Force hexagonal",
            "image": "https://www.forcetools.co.za/wp-content/uploads/2020/03/5116-web.jpg",
            "price": "L 23,000.00"
        },
        {
            "name": "Celes Force I thjesht",
            "image": "https://www.megateksa.com/media/catalog/product/cache/fbb2dc43818756b056bd8caf729c2982/1/7/17683_1.jpg",
            "price": "L 23,000.00"
        },
        {
            "name": "Celes Yato set",
            "image": "https://m.media-amazon.com/images/I/51+gCxl7OGL._AC_.jpg",
            "price": "L 23,000.00"
        },
        {
            "name": "Ekstrator Force",
            "image": "https://www.electrotools.gr/1995-large_default/force-extractor-6590108.jpg",
            "price": "L 23,000.00"
        },
        {
            "name": "Adaptor Force te bardhe",
            "image": "https://www.forcetools.co.za/wp-content/uploads/2018/10/628E46-web.jpg",
            "price": "L 23,000.00"
        },
        {
            "name": "Adaptor Force te zi",
            "image": "https://www.megateksa.com/media/catalog/product/cache/fbb2dc43818756b056bd8caf729c2982/1/2/12796_1.jpg",
            "price": "L 23,000.00"
        },
        {
            "name": "Adaptor Force te zi",
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
                                
                            </div>
                        </div>
                        </div>
                 `
        categoriesElement.innerHTML += productComponent
    }
})()
