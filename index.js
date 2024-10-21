const products = [
    { id: 1, name: "Apple iPhone 12", price: 799, categoryId: 1, supplierIds: [1, 2], image: './img/1.jpeg'},
    { id: 2, name: "Samsung Galaxy S21", price: 699, categoryId: 1, supplierIds: [2, 3], image: './img/2.jpeg' },
    { id: 3, name: "Google Pixel 5", price: 599, categoryId: 1, supplierIds: [1, 3], image: './img/1.jpeg' },
    { id: 4, name: "OnePlus 9", price: 729, categoryId: 1, supplierIds: [2], image: './img/3.jpeg' },
    { id: 5, name: "Sony Xperia 5", price: 649, categoryId: 1, supplierIds: [3], image: './img/2.jpeg' },
    { id: 6, name: "Xiaomi Mi 11", price: 749, categoryId: 1, supplierIds: [1], image: './img/4.jpeg' },
    { id: 7, name: "HP Spectre x360", price: 1200, categoryId: 2, supplierIds: [4], image: './img/1.jpeg' },
    { id: 8, name: "Dell XPS 13", price: 1100, categoryId: 2, supplierIds: [5], image: './img/3.jpeg' },
    { id: 9, name: "Apple MacBook Air", price: 999, categoryId: 2, supplierIds: [1, 4], image: './img/4.jpeg' },
    { id: 10, name: "Microsoft Surface Laptop 4", price: 1029, categoryId: 2, supplierIds: [5], image: './img/2.jpeg' },
    { id: 11, name: "Asus ZenBook 13", price: 899, categoryId: 2, supplierIds: [4], image: './img/1.jpeg' },
    { id: 12, name: "Acer Swift 3", price: 670, categoryId: 2, supplierIds: [3], image: './img/2.jpeg' },
    { id: 13, name: "Lenovo Yoga 9i", price: 1399, categoryId: 2, supplierIds: [5], image: './img/1.jpeg' },
    { id: 14, name: "Apple iPad Pro", price: 799, categoryId: 3, supplierIds: [1], image: './img/4.jpeg' },
    { id: 15, name: "Samsung Galaxy Tab S7", price: 649, categoryId: 3, supplierIds: [2], image: './img/4.jpeg'}
];

const categories = [
    { id: 1, name: "Smartphones", description: "Portable mobile devices for communication and entertainment." },
    { id: 2, name: "Laptops", description: "Portable computers for professional and personal use." },
    { id: 3, name: "Tablets", description: "Touchscreen devices suitable for browsing, reading, and multimedia consumption." }
];

const suppliers = [
    { id: 1, name: "Global Electronics Inc.", location: "New York, NY" },
    { id: 2, name: "Tech Distributors LLC", location: "San Francisco, CA" },
    { id: 3, name: "Mobile World Supplies", location: "London, UK" },
    { id: 4, name: "Computing MegaStore", location: "Austin, TX" },
    { id: 5, name: "Ultimate Tech Source", location: "Seattle, WA" }
];

const sort = document.getElementById('sort'),
    sortBy = document.getElementById('sortBy'),
    categoryFilter = document.getElementById('categoryFilter'),
    supplierFilter = document.getElementById('supplierFilter'),
    productsWrap = document.getElementById('products');

/*
  map
  forEach
*/

const renderProds = (arr) => {
    arr.forEach((prod) => {
        const prodDiv = document.createElement('div');
        prodDiv.classList.add('product-card')
        productsWrap.appendChild(prodDiv);
    
        const category = categories.find(cat => cat.id === prod.categoryId)
    
        prodDiv.innerHTML = `
            <img src="${prod.image}"/>
            <h3>${prod.name}</h3>
            <span>$${prod.price}</span>
            <div>Category: ${category ? category.name : 'Unknown'}</div>
        `
    });
}

categories.forEach((category) => {
    const categoryOption = document.createElement('option');
    categoryOption.value = category.id;
    categoryFilter.appendChild(categoryOption)
    categoryOption.innerHTML = `<p>${category.name}</p>`
});

suppliers.forEach((supplier) => {
    const supplierOption = document.createElement('option');
    supplierOption.value = supplier.id;
    supplierFilter.appendChild(supplierOption)
    supplierOption.innerHTML = `<p>${supplier.name}</p>`
});

function filterProds () {
    let selectedCategory = categoryFilter.value;
    let selectedSuppliers = supplierFilter.value;

    let filteredProds = products;

    console.log(selectedSuppliers)
    if(selectedCategory) {
        filteredProds = filteredProds.filter(prod => prod.categoryId == parseInt(selectedCategory))
    }

    if(selectedSuppliers) {
        filteredProds = filteredProds.filter(prod => prod.supplierIds.includes(parseInt(selectedSuppliers)))
    }
    productsWrap.innerHTML = ''

    renderProds(filteredProds)
}
categoryFilter.addEventListener('change', filterProds);
supplierFilter.addEventListener('change', filterProds);
renderProds(products);

