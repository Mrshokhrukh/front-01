let products = [
    {
        id: 1,
        img: 'https://m.media-amazon.com/images/I/71FuI8YvCNL.jpg',
        name: 'iphone 12 pro max',
        price: 1200
    },
    {
        id: 2,
        img: 'https://www.apple.com/v/macbook-pro-13/p/images/meta/macbook-pro-13_overview__bcsyunk73i2a_og.jpg?202308230252',
        name: 'Macbook pro',
        price: 1600
    },
]

let products_space = document.querySelector('.products')
let product_quant = document.querySelector('#product_quant')
let id = 2;

function addProduct() {
    let productName = document.getElementById('name').value
    let productPrice = document.getElementById('price').value
    let productUrl = document.getElementById('img').value

    if (productName && productPrice) {
        products.push({
            id: id += 1,
            name: productName,
            price: productPrice,
            img: (productUrl ? productUrl : 'https://static.vecteezy.com/system/resources/thumbnails/008/015/799/small/illustration-of-no-image-available-icon-template-for-no-image-or-picture-coming-soon-free-vector.jpg')
        })
    }


    ekrangaChiqarish()
}
ekrangaChiqarish()
function ekrangaChiqarish() {
    products_space.innerHTML = ''
    product_quant.innerHTML = `PRODUCT QUANT : ${products.length}`;
    products.map((product) => {
        return (
            products_space.innerHTML += `
            <tr class="product">
                  <td>
                    <img src='${product.img}' alt="" />
                  </td>
                  <td>${product.name}</td>
                  <td>$${product.price}</td>
                  <td class="actions">
                    <button onclick="deleteProduct(${product.id})">delete</button> <button>edit</button>
                  </td>
            </tr>
            `
        )
    })
}

function deleteProduct(id) {
    let newArr = products.filter((item) => item.id !== id);
    products = newArr;
    ekrangaChiqarish()
}