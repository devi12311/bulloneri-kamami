(function () {
    const categories = [
        {
            name: 'Vegla me bateri',
            image: './img/power_tools.svg',
            htmlPage: "vegla_bateri.html"
        },
        {
            name: 'Trapan Vidues Elektrik',
            image: './img/hand_tools.svg',
            htmlPage: "trapan.html"
        },
        {
            name: 'Matrapiket',
            image: './img/work_lights.svg',
            htmlPage: "matrapik.html"
        },
        {
            name: 'Elektroguret',
            image: './img/measuring_tools.svg',
            htmlPage: "elektrogur.html"
        },
        {
            name: 'Aspiratoret',
            image: './img/safety_equipment.svg',
            htmlPage: "aspirator.html"
        },
        {
            name: 'Vegla punim druri/metali',
            image: './img/tool_accessories.svg',
            htmlPage: "vegla_dru_metal.html"
        },
        {
            name: 'Vegla kopshtarie/pyje',
            image: './img/tools_storage.svg',
            htmlPage: "vegla_kopshtari.html"
        },
        {
            name: 'Vegla ndertimi',
            image: './img/lifting_equipment.svg',
            htmlPage: "ndertim.html"
        },
        {
            name: 'Saldatrice',
            image: './img/car_jacks.svg',
            htmlPage: "saldatrice.html"
        },
        {
            name: 'Kompresore',
            image: './img/lifting_equipment.svg',
            htmlPage: "kompresore.html"
        },
        {
            name: 'Instrumenta mates',
            image: './img/car_jacks.svg',
            htmlPage: "instrumenta_mates.html"
        },
        {
            name: 'Pinca/mekanika',
            image: './img/lifting_equipment.svg'    ,
            htmlPage: "pinca.html"
        },
        {
            name: 'Industria',
            image: './img/lifting_equipment.svg',
            htmlPage: "industria.html"
        },
        {
            name: 'Vegla dore',
            image: './img/car_jacks.svg',
            htmlPage: "vegla_dore.html"
        }
    ]
    const categoriesElement = document.getElementById('categories');
    const menuDropdownElement = document.getElementById('products-dropdown')

    for (let i = 0; i < categories.length; i++) {
        const categoryComponent = `
                    <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
                <a class="text-decoration-none" href="./categories/${categories[i].htmlPage}">
                    <div class="cat-item d-flex align-items-center mb-4">
                            <img class="img-fluid" style="padding-left: 10px" src="${categories[i].image}" alt="">
                        <div class="flex-fill pl-3">
                            <h6>${categories[i].name}</h6>
                            <small class="text-body">100 Products</small>
                        </div>
                    </div>
                </a>
            </div>`
        const menuDropDownItem = `                        
                        <a href="./categories/${categories[i].htmlPage}" class="nav-item nav-link">${categories[i].name}</a>
`
        if (categoriesElement) {
            categoriesElement.innerHTML += categoryComponent
        }
        menuDropdownElement.innerHTML += menuDropDownItem
    }
})()
