
const info = document.querySelector('.info');
const buybtn = document.querySelectorAll('.buy');
buybtn.forEach((e)=>{
    e.addEventListener('click',()=>{
info.style.display="block";
})
})
const i = document.querySelector('.ri-menu-3-line');
const sl = document.querySelector('.slider');
i.addEventListener('click',()=>{
    sl.style.display = "block";
})
i.addEventListener('dblclick',()=>{
    sl.style.display = "none";
})
console.log(buybtn);

const sbtn = document.querySelector('#sbtn');
sbtn.addEventListener('click',()=>{
    info.style.display="none";
  
})
document.addEventListener('DOMContentLoaded', function() {
    const cartContainer = document.getElementById('cartContainer');
    const cartIcon = document.querySelector('.ri-shopping-bag-4-fill');
    const addCartButtons = document.querySelectorAll('.addcart');
    const cartItems = document.getElementById('cartItems');
    const closeCartButton = document.getElementById('closeCart');

    cartIcon.addEventListener('click', function() {
        cartContainer.style.display = cartContainer.style.display === 'block' ? 'none' : 'block';
    });

    cartIcon.addEventListener('dblclick', function() {
        cartContainer.style.display = 'none';
    });

    addCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const product = e.target.closest('.box1, .box2, .box3, .box4');
            const productName = product.querySelector('p').innerText;
            const productPrice = product.querySelectorAll('p')[1].innerText;

            const cartItem = document.createElement('li');
            cartItem.innerHTML = `
                ${productName} - ${productPrice}
                <button class="removeItem">Remove</button>
            `;

            cartItems.appendChild(cartItem);

            cartItem.querySelector('.removeItem').addEventListener('click', function() {
                cartItem.remove();
            });
        });
    });
});
