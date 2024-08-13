(function () {
    const items = [
        {
            "name": "Sharre Makita 450W 500",
            "image": "https://si.makitamedia.com/images/1_makita/101_machines/10104_JPG_Product/4326.jpg",
            "price": "L 23,000.00"
        },
        {
            "name": "Sharre Makita 240V 210mm",
            "image": "https://si.makitamedia.com/images/1_makita/101_machines/10104_JPG_Product/5008MG.jpg",
            "price": "L 23,000.00"
        },
        {
            "name": "Sharre Makita 36V 190mm",
            "image": "https://si.makitamedia.com/images/1_makita/101_machines/10104_JPG_Product/DHS710Z.jpg",
            "price": "L 23,000.00"
        },
        {
            "name": "Sharre Ronix 2300W 355mm",
            "image": "https://ronixtools.com/img/media/products/5901/modeling-638029189701018606.webp",
            "price": "L 23,000.00"
        },
        {
            "name": "Sharre Ronix 220V 365mm",
            "image": "https://ronixtools.com/img/media/products/5901/original-638029190421055444.webp",
            "price": "L 23,000.00"
        },
        {
            "name": "Sharre Ronix 2000W 355mm",
            "image": "https://ronixtools.com/img/media/products/5901/original-638029191099965823.webp",
            "price": "L 23,000.00"
        },
        {
            "name": "Sharre Yato 230V 185mm",
            "image": "https://shopic.mcmcclass.com/9180dfad6fe14b01932fd5bd1bfa2f45/20240628/image/1124017234176397227/YT-8281185.jpg",
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
