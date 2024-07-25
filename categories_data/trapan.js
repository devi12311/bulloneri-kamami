(function () {
    const items = [
        {
            "name": "Trapan 1",
            "image": "https://si.makitamedia.com/images/1_makita/101_machines/10104_JPG_Product/DA001GM101.jpg",
            "price": "L 23,000.00"
        },
        {
            "name": "Trapan 2",
            "image": "https://si.makitamedia.com/images/1_makita/101_machines/10104_JPG_Product/6413.jpg",
            "price": "L 23,000.00"
        },
        {
            "name": "Trapan 3",
            "image": "https://si.makitamedia.com/images/1_makita/101_machines/10104_JPG_Product/DDF453SYE.jpg",
            "price": "L 23,000.00"
        },
        {
            "name": "Trapan 4",
            "image": "https://ronixtools.com/img/media/products/2210/modeling-638064227236621993.webp",
            "price": "L 23,000.00"
        },
        {
            "name": "Trapan 5",
            "image": "https://ronixtools.com/img/media/products/8014/modeling-637484222477821336.webp",
            "price": "L 23,000.00"
        },
        {
            "name": "Trapan 6",
            "image": "https://ronixtools.com/img/media/products/8014/original-637627389635261608.webp",
            "price": "L 23,000.00"
        },
        {
            "name": "Trapan 7",
            "image": "https://ronixtools.com/img/media/products/2210/original-637483821059703288.webp",
            "price": "L 23,000.00"
        },
        {
            "name": "Trapan 8",
            "image": "https://shopic.mcmcclass.com/9180dfad6fe14b01932fd5bd1bfa2f45/20240626/image/1123254886167750523/YT-8277915.jpg",
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
