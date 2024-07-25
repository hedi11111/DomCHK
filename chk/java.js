// Helper function to update total price
function updateTotalPrice() {
    const quantities = document.querySelectorAll('.quantity');
    console.log(quantities)
    const prices = document.querySelectorAll('.unit-price');
    console.log(prices)
    let total = 0;
    quantities.forEach((quantity, index) => {
        total += parseInt(quantity.textContent) * parseFloat(prices[index].textContent.replace(' $', ''));
    });
    document.getElementById('total-price').textContent = total.toFixed(2) + ' $';
}

// Function to increase quantity
function increaseQuantity(productId) {
    const quantityElement = document.getElementById(`quantity-${productId}`);
    let currentQuantity = parseInt(quantityElement.textContent);
    quantityElement.textContent = currentQuantity + 1;
    updateTotalPrice();
}

// Function to decrease quantity
function decreaseQuantity(productId) {
    const quantityElement = document.getElementById(`quantity-${productId}`);
    let currentQuantity = parseInt(quantityElement.textContent);
    if (currentQuantity > 0) {
        quantityElement.textContent = currentQuantity - 1;
        updateTotalPrice();
    }
}

// Function to reset quantity
function resetQuantity(productId) {
    document.getElementById(`quantity-${productId}`).textContent = '0';
    updateTotalPrice();
}

// Function to toggle heart color
function toggleHeart(productId) {
    const heartElement = document.getElementById(`heart-${productId}`);
    heartElement.classList.toggle('heart-active');
}

// Attach event listeners to the buttons
document.getElementById('increase-baskets').addEventListener('click', () => increaseQuantity('baskets'));
document.getElementById('decrease-baskets').addEventListener('click', () => decreaseQuantity('baskets'));
document.getElementById('delete-baskets').addEventListener('click', () => resetQuantity('baskets'));
document.getElementById('heart-baskets').addEventListener('click', () => toggleHeart('baskets'));

document.getElementById('increase-socks').addEventListener('click', () => increaseQuantity('socks'));
document.getElementById('decrease-socks').addEventListener('click', () => decreaseQuantity('socks'));
document.getElementById('delete-socks').addEventListener('click', () => resetQuantity('socks'));
document.getElementById('heart-socks').addEventListener('click', () => toggleHeart('socks'));

document.getElementById('increase-bag').addEventListener('click', () => increaseQuantity('bag'));
document.getElementById('decrease-bag').addEventListener('click', () => decreaseQuantity('bag'));
document.getElementById('delete-bag').addEventListener('click', () => resetQuantity('bag'));
document.getElementById('heart-bag').addEventListener('click', () => toggleHeart('bag'));
