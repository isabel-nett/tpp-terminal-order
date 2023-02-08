const triple = new Triple('testapikey');

triple.generatePaymentForm({
	containerSelector: '#iFrame',
	amount: 10.00,
    paymentOptions: ['credit_card'],
    tokenMode: false,
	onError: (errorData) => {
		console.log('Error');
		console.log(errorData);
	},
	onSuccess: (data) => {
		console.log('Success');
		console.log(data);
	},
});

var removeCartItemButtons = document.getElementsByClassName('remove-item');
for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i];
    button.addEventListener('click', removeCartItem);
};

var quantityInputs = document.getElementsByClassName('quantity-input');
var addToCartButtons = document.getElementsByClassName('add-to-cart');
for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i];
    button.addEventListener('click', addToCartClicked);
};


// Remove from cart
function removeCartItem(event) {
    event.preventDefault()
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
};

// Add to cart button
function addToCartClicked(event) {
    event.preventDefault()
    var button = event.target;
    var addItem = button.parentElement.parentElement;
    var title = addItem.getElementsByClassName('title')[0].innerText;
    var price = addItem.getElementsByClassName('price')[0].innerText;
    var quantity = document.getElementsByClassName('quantity-input')[0].innerText;
    if (isNaN(quantity.value) || quantity.value <= 0) {
        quantity.value = 1
    };
    addItemToCart(title, price, quantity);
    updateCartTotal();
};

function addItemToCart(title, price, quantity) {
    var cartRow = document.createElement('div');
    cartRow.classList.add('cart-row');
    var cartItems = document.getElementsByClassName('cart-items')[0];
    var cartRowContents = `
    <div class="item-name cart-column">${title}</div>
    <div class="item-quantity cart-column">${quantity}</div>
    <div class="item-price cart-column">${price}</div>
    <button class="remove-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-x-circle" viewBox="0 0 16 16" id="removeItem">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg></button>`;
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    cartRow.getElementsByClassName('remove-item')[0].addEventListener('click', removeCartItem);
};

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-row');
    var total = 0;
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('item-price')[0];
        var quantityElement = cartRow.getElementsByClassName('item-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace('$', ''));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }
    total = Math.round(total * 100) / 100;
    document.getElementById('#totalPrice')[0].innerText = '$' + total;
};


// iFrame Style

triple.generatePaymentForm({
	// ... Payment properties
	styles: {
		// button styling
		button: {
			// Color
			color: '#fff',
			// Backgroung
			background: '#93e368',
			// Border radius
			borderRadius: '15px',
			// Font size
			fontSize: '18px',
			// Handle :active pseudo class
			active: {
				// Change color on active state
				color: '#eef7e9',
				// Change background on active state
				background: '#82cf59',
			},
			// Handle :hover pseudo class
			hover: {
				color: '#eef7e9',
				background: '#8ed667',
			},
		},
	},
});