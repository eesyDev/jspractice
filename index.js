const products = [
    { id: 1, name: "Apple iPhone 12", price: 799, categoryId: 1, supplierIds: [1, 2] },
    { id: 2, name: "Samsung Galaxy S21", price: 699, categoryId: 1, supplierIds: [2, 3] },
    { id: 3, name: "Google Pixel 5", price: 599, categoryId: 1, supplierIds: [1, 3] },
    { id: 4, name: "OnePlus 9", price: 729, categoryId: 1, supplierIds: [2] },
    { id: 5, name: "Sony Xperia 5", price: 649, categoryId: 1, supplierIds: [3] },
    { id: 6, name: "Xiaomi Mi 11", price: 749, categoryId: 1, supplierIds: [1] },
    { id: 7, name: "HP Spectre x360", price: 1200, categoryId: 2, supplierIds: [4] },
    { id: 8, name: "Dell XPS 13", price: 1100, categoryId: 2, supplierIds: [5] },
    { id: 9, name: "Apple MacBook Air", price: 999, categoryId: 2, supplierIds: [1, 4] },
    { id: 10, name: "Microsoft Surface Laptop 4", price: 1029, categoryId: 2, supplierIds: [5] },
    { id: 11, name: "Asus ZenBook 13", price: 899, categoryId: 2, supplierIds: [4] },
    { id: 12, name: "Acer Swift 3", price: 670, categoryId: 2, supplierIds: [3] },
    { id: 13, name: "Lenovo Yoga 9i", price: 1399, categoryId: 2, supplierIds: [5] },
    { id: 14, name: "Apple iPad Pro", price: 799, categoryId: 3, supplierIds: [1] },
    { id: 15, name: "Samsung Galaxy Tab S7", price: 649, categoryId: 3, supplierIds: [2]}
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

products.forEach((prod) => {
    const prodDiv = document.createElement('div');
    prodDiv.classList.add('product-card')
    productsWrap.appendChild(prodDiv);

    const category = categories.find(cat => cat.id === prod.categoryId)

    prodDiv.innerHTML = `
        <h3>${prod.name}</h3>
        <span>$${prod.price}</span>
        <div>Category: ${category ? category.name : 'Unknown'}</div>
    `
});

categories.forEach((category) => {
    const categoryDiv = document.createElement('option');
    categoryDiv.value = category.id;
    categoryFilter.appendChild(categoryDiv)
    categoryDiv.innerHTML = `<p>${category.name}</p>`
});

categoryFilter.addEventListener('change', function() {
    let selectedCategory = this.value;

    let filteredProds = products;
    
    if(selectedCategory) {
        filteredProds = filteredProds.filter(prod => prod.categoryId === selectedCategory)
    }
})