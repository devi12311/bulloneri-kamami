(function () {
    const items = [
        {
            "name": "Matrapik Makita 18V 16mm",
            "image": "https://si.makitamedia.com/images/1_makita/101_machines/10104_JPG_Product/DHR165Z.jpg",
            "price": "L 23,000.00"
        },
        {
            "name": "Matrapik Makita 18V 24mm set",
            "image": "https://si.makitamedia.com/images/1_makita/101_machines/10104_JPG_Product/DHR182RTJ.jpg",
            "price": "L 23,000.00"
        },
        {
            "name": "Matrapik Makita 18V 38mm",
            "image": "https://si.makitamedia.com/images/1_makita/101_machines/10104_JPG_Product/DHR243RFJ.jpg",
            "price": "L 23,000.00"
        },
        {
            "name": "Matrapik Ronix 18V 32mm",
            "image": "https://ronixtools.com/img/media/products/2632/modeling-637610885084174811.webp",
            "price": "L 23,000.00"
        },
        {
            "name": "Matrapik Ronix 800W 26mm",
            "image": "https://ronixtools.com/img/media/products/2703/original-638082664326720668.webp",
            "price": "L 23,000.00"
        },
        {
            "name": "Matrapik Ronix 230V 38mm",
            "image": "https://ronixtools.com/img/media/products/2701/original-637605741053724045.webp",
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
