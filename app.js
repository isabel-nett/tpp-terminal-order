const triple = new Triple('testapikey');

options = {
   containerSelector: '#iFrame',
   amount: 0.00,
    paymentOptions: ['credit_card'],
    tokenMode: false,
    styles: {
      // button styling
      button: {
         // Color
         color: '#fff',
         // Backgroung
         background: 'rgb(248, 150, 31)',
         // Border radius
         borderRadius: '15px',
         // Font size
         fontSize: '16px',
         // Handle :active pseudo class
         active: {
            // Change color on active state
            color: '#eef7e9',
            // Change background on active state
            background: 'rgb(70, 83, 130)',
         },
         // Handle :hover pseudo class
         hover: {
            color: '#eef7e9',
            background: 'rgb(70, 83, 130)',
         },
      },
      input: {
        color: 'black',
        background: 'white',
        borderRadius: '5px',
        borderColor: 'gray',
        borderWidth: '1px',
        height: '40px',
        fontSize: '16px',
        fontWeight: '300',
        // Handle focus pseudo class
        focus: {
            borderColor: 'gray',
            background: 'white',
            color: 'gray',
        },
        // Handle error state (when input contains incorrect data)
        error: {
            borderColor: '#cf6565',
            background: 'white',
            color: '#bfbfbf',
        },
        // Placeholder style
        placeholder: {
            color: 'gray',
            fontSize: '16px',
            fontWeight: '300',
        },
        // Error text style (text below input in error state)
        errorText: {
            color: 'red',
            fontSize: '12px',
            fontWeight: '500',
        },
    },
   },
   onError: (errorData) => {
      console.log('Error');
      console.log(errorData);
   },
   onSuccess: (data) => {
      console.log('Success');
      console.log(data);
   },
}

// cart functionality

const terminals = {
        "qtyT1":{
            title: "Conventional Terminal",
            price: "499.00",
            qty: [0],
        },
        "qtyT2":{
            title: "Mobile Wireless Terminal",
            price: "269.00",
            qty:  [0],
        },
        "qtyT3":{
            title: "Desktop Terminal",
            price: "299.00",
            qty:  [0],
        },
};

total = 0
total_qty = 0
_html = ''

function addToCart() {
    triple.clear();
    total = 0;
    total_qty = 0;
    _html = '';
    for (terminal in terminals) {
        _t = document.getElementById(terminal);
        total_qty = total_qty + parseInt(_t.value||0);
        total = total + parseInt(_t.value||0) * parseFloat(terminals[terminal].price);
        if (parseInt(_t.value||0) > 0) {
            _html = _html+'<div class="cart-row"><div class="item-name cart-column">'+terminals[terminal].title+'</div><div class="item-quantity cart-column">'+parseInt(_t.value||0)+'</div><div class="item-price cart-column">$'+terminals[terminal].price * parseInt(_t.value||0)+'</div></div>'};
        };
    options.amount = total;
    document.getElementById('cartItems').innerHTML= _html;
    document.getElementById('totalPrice').innerHTML= `Total: $${total}`;
    triple.generatePaymentForm(options);
};