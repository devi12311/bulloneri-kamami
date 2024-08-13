(function () {
    const items = [
        {
            "name": "Bullon I zi 10x30",
            "image": "https://i.ebayimg.com/images/g/IxUAAOSwfrJkVUOW/s-l1600.webp",
            "price": "L 23,000.00"
        },
        {
            "name": "Bullon I zi 18x180x1.5",
            "image": "https://gpmsurplus.com/wp-content/uploads/2023/03/P1290332-scaled-247x296.jpg",
            "price": "L 23,000.00"
        },
        {
            "name": "Bullon I zi 16x180x1.5",
            "image": "https://i.ebayimg.com/images/g/WU8AAOSw14NkxTWM/s-l1600.webp",
            "price": "L 23,000.00"
        },
        {
            "name": "Bullon I bardhe 8x30",
            "image": "https://www.megateksa.com/media/catalog/product/cache/fbb2dc43818756b056bd8caf729c2982/4/7/47192_1.jpg",
            "price": "L 23,000.00"
        },
        {
            "name": "Bullona rondele dhe vida te ndryshme",
            "image": "https://www.megateksa-ks.com/media/catalog/category/Bullona_inoksi.jpg",
            "price": "L 23,000.00"
        },
        {
            "name": "Dado",
            "image": "https://scontent.ftia8-1.fna.fbcdn.net/v/t1.6435-9/172521224_1157340554715489_7733923381201053948_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=ML3j90UC8y0Q7kNvgHCOkr5&_nc_ht=scontent.ftia8-1.fna&oh=00_AYB5goJS2BxS-kstO9rvL2cvQbfEaH5oAemZGD9llDJo5g&oe=66C1A959",
            "price": "L 23,000.00"
        },
        {
            "name": "Rondele",
            "image": "https://www.megateksa.com/media/catalog/category/Rondele_e_trashe.jpg",
            "price": "L 23,000.00"
        },
        {
            "name": "Vida",
            "image": "https://www.megateksa-ks.com/media/catalog/category/Vida_vetefiletuese_celiku.jpg \n",
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
