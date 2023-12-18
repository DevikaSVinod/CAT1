let cart = [];
let total = 0;

function addToCart(productName, price) {
    cart.push({ productName, price });
    total += price;

    // Update the cart summary on the cart.html page
    updateCartSummary();

    // You can also store the cart data in localStorage or send it to a server for further processing
    // For simplicity, we'll use localStorage in this example
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('total', total.toFixed(2));
}

function updateCartSummary() {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    // Clear previous items
    cartItems.innerHTML = '';

    // Add current items
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.productName} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });

    // Update total
    totalElement.textContent = total.toFixed(2);
}

function goBack() {
    window.location.href = 'index.html';
}

// Function to initialize the cart summary when the cart.html page loads
function initializeCartSummary() {
    // Retrieve cart data from localStorage
    const storedCart = localStorage.getItem('cart');
    const storedTotal = localStorage.getItem('total');

    if (storedCart && storedTotal) {
        cart = JSON.parse(storedCart);
        total = parseFloat(storedTotal);

        // Update the cart summary on the cart.html page
        updateCartSummary();
    }
}

// Call the function to initialize the cart summary when the cart.html page loads
initializeCartSummary();
