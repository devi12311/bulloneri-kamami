(function () {
    const items = [
        {
            "name": "Vidiator Makita Impakt 18V",
            "image": "https://si.makitamedia.com/images/1_makita/101_machines/10104_JPG_Product/DTD156SF.jpg",
            "price": "L 23,000.00"
        },
        {
            "name": "Vidiator Makita Impakt 18V set",
            "image": "https://si.makitamedia.com/images/1_makita/101_machines/10104_JPG_Product/DTD172RTJ.jpg",
            "price": "L 23,000.00"
        },
        {
            "name": "Vidiator Makita Impakt 16V set",
            "image": "https://si.makitamedia.com/images/1_makita/101_machines/10104_JPG_Product/DTD172RTJ.jpg",
            "price": "L 23,000.00"
        },
        {
            "name": "Vidiator Yato 18V 45Nm",
            "image": "https://shopic.mcmcclass.com/9180dfad6fe14b01932fd5bd1bfa2f45/20240705/image/1126539089751835499/YT-827790.jpg",
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
