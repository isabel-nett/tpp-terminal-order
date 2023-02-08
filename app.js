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

// cart functionality

const terminals = [
        {
            title: "Conventional Terminal",
            price: "499.00",
            qty: [0],
        },
        {
            title: "Mobile Wireless Terminal",
            price: "499.00",
            qty:  [0],
        },
        {
            title: "Desktop Terminal",
            price: "499.00",
            qty:  [0],
        },
];

function addToCart() {
    if (terminals.qty > 0) {
        var cartRow = document.createElement('div');
        cartRow.classList.add('cart-row');
        var cartRowContents = `
        <div class="item-name cart-column">${title}</div>
        <div class="item-quantity cart-column">${price}</div>
        <div class="item-price cart-column">${qty * price}</div>
        <button class="remove-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-x-circle" viewBox="0 0 16 16" id="removeItem">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg></button>`;
        cartRow.innerHTML = cartRowContents;
    };
};

// function addToCart(terminals, event) {
//     event.preventDefault();
//     forEach (terminal in terminals) {
//         if (terminals.qty > 0) {
//             var cartRow = document.createElement('div');
//             cartRow.classList.add('cart-row');
//             var cartRowContents = `
//             <div class="item-name cart-column">${title}</div>
//             <div class="item-quantity cart-column">${price}</div>
//             <div class="item-price cart-column">${qty * price}</div>
//             <button class="remove-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-x-circle" viewBox="0 0 16 16" id="removeItem">
//                 <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
//                 <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
//             </svg></button>`;
//             cartRow.innerHTML = cartRowContents;
//         };
// }};