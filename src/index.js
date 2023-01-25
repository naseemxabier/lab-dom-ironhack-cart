// ITERATION 1

function updateSubtotal(product) {
  
  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input[type=Number]').value;
  let subTotalMul = (price * quantity);
  return product.querySelector('.subtotal span').innerHTML = subTotalMul;
}

function calculateAll() {
/*   const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct); */

  // end of test

  // ITERATION 2
let products = document.getElementsByClassName('product');
let suma = 0;
for (let i = 0; i < products.length; i++) {
  suma += updateSubtotal(products[i])
}

  // ITERATION 3
  
let total = document.querySelector("#total-value span");
total.innerHTML = suma;

}
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
