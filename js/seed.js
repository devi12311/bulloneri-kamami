(function () {
    const categories = [
        {
            name: 'Vidator',
            image: './img/power_tools.svg',
            htmlPage: "vidator.html"
        },
        {
            name: 'Trapan Vidues Elektrik',
            image: './img/hand_tools.svg',
            htmlPage: "trapan.html"
        },
        {
            name: 'Zmerilues',
            image: './img/work_lights.svg',
            htmlPage: "zmerilues.html"
        },
        {
            name: 'Sharra',
            image: './img/measuring_tools.svg',
            htmlPage: "sharra.html"
        },
        {
            name: 'Matrapik',
            image: './img/safety_equipment.svg',
            htmlPage: "matrapik.html"
        },
        {
            name: 'Ajerngrohese',
            image: './img/tool_accessories.svg',
            htmlPage: "ajerngrohese.html"
        },
        {
            name: 'Punto',
            image: './img/tools_storage.svg',
            htmlPage: "punto.html"
        },
        {
            name: 'Disk Preres',
            image: './img/lifting_equipment.svg',
            htmlPage: "disk_preres.html"
        },
        {
            name: 'Rakorderi',
            image: './img/car_jacks.svg',
            htmlPage: "rakorderi.html"
        },
        {
            name: 'Pinca',
            image: './img/lifting_equipment.svg',
            htmlPage: "pinca.html"
        },
        {
            name: 'Dare',
            image: './img/car_jacks.svg',
            htmlPage: "dare.html"
        },
        {
            name: 'Gershere',
            image: './img/lifting_equipment.svg'    ,
            htmlPage: "gershere.html"
        },
        {
            name: 'Buloneri',
            image: './img/lifting_equipment.svg',
            htmlPage: "buloneri.html"
        },
        {
            name: 'Force',
            image: './img/car_jacks.svg',
            htmlPage: "force.html"
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
