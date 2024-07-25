(function () {
    const items = [
        {
            "name": "Zmerilues 1",
            "image": "https://si.makitamedia.com/images/1_makita/101_machines/10104_JPG_Product/9046.jpg",
            "price": "L 23,000.00"
        },
        {
            "name": "Zmerilues 2",
            "image": "https://si.makitamedia.com/images/1_makita/101_machines/10104_JPG_Product/BO4555.jpg",
            "price": "L 23,000.00"
        },
        {
            "name": "Zmerilues 3",
            "image": "https://si.makitamedia.com/images/1_makita/101_machines/10104_JPG_Product/9404.jpg",
            "price": "L 23,000.00"
        },
        {
            "name": "Zmerilues 4",
            "image": "https://ronixtools.com/img/media/products/6401/modeling-638120414672695633.webp",
            "price": "L 23,000.00"
        },
        {
            "name": "Zmerilues 5",
            "image": "https://ronixtools.com/img/media/products/6401/original-638120416402544909.webp",
            "price": "L 23,000.00"
        },
        {
            "name": "Zmerilues 6",
            "image": "https://ronixtools.com/img/media/products/6401/original-638120416402544909.webp",
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
