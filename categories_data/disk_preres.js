(function () {
    const items = [
        {
            "name": "Disk preres Makita 76x1.0x10mm",
            "image": "https://si.makitamedia.com/images/1_makita/102_accessories/10204_JPG_Product/D-74815-5.jpg",
            "price": "L 23,000.00"
        },
        {
            "name": "Disk preres Makita 100x1.2mm",
            "image": "https://si.makitamedia.com/images/1_makita/102_accessories/10204_JPG_Product/E-10724.jpg",
            "price": "L 23,000.00"
        },
        {
            "name": "Disk preres Makita 355x4.3x25.4mm",
            "image": "https://si.makitamedia.com/images/1_makita/102_accessories/10204_JPG_Product/E-12790-5.jpg",
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
