const decreases  = document.querySelectorAll('.product__quantity-control_dec');
const increases  = document.querySelectorAll('.product__quantity-control_inc');
const addButtons = document.querySelectorAll('.product__add');
const cartProducts = document.querySelector('.cart__products');

decreases.forEach(decrease => {
    decrease.addEventListener('click', (event) => {
        let quantityValue = event.currentTarget.closest('.product').querySelector('.product__quantity-value');
        let quantityValueNumber = Number(quantityValue.textContent);
        quantityValueNumber = Math.max(quantityValueNumber - 1, 1); 
        quantityValue.textContent = quantityValueNumber;
    });
})

increases.forEach(increase => {
    increase.addEventListener('click', (event) => {
        let quantityValue = event.currentTarget.closest('.product').querySelector('.product__quantity-value');
        let quantityValueNumber = Number(quantityValue.textContent); 
        quantityValueNumber += 1; 
        quantityValue.textContent = quantityValueNumber;
    })
})

addButtons.forEach(addButton => {
    addButton.addEventListener('click', (event) => {
        const productCard = event.currentTarget.closest('.product');
        const productId = productCard.getAttribute('data-id');
        const productImageSrc = productCard.querySelector('.product__image').getAttribute('src');
        const productQuantity = Number(productCard.querySelector('.product__quantity-value').textContent);

        const existingCartItem = cartProducts.querySelector(`.cart__product[data-id="${productId}"]`);

        if (existingCartItem) {
            const existingCartItemQuantity = Number(existingCartItem.querySelector('.cart__product-count').textContent);
            existingCartItem.querySelector('.cart__product-count').textContent = existingCartItemQuantity + productQuantity;
        } else {
            const cartProduct = document.createElement('div');
            cartProduct.classList.add('cart__product');
            cartProduct.setAttribute('data-id', productId);
            cartProduct.innerHTML = `
                <img class="cart__product-image" src="${productImageSrc}">
                <div class="cart__product-count">${productQuantity}</div>
            `;
            cartProducts.appendChild(cartProduct);
        }
    });
});
