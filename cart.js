const cart = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 200 }
];

function calculateTotal(cartItems) {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) { // Bug: <= should be <
      total += cartItems[i].price; // Bug: cartItems[i] is undefined on the last iteration
      //here the loop did not stop once the last element in the array was reached
  }
  return total;
}

function applyDiscount(total, discountRate) {
  if (discountRate >= 0 && discountRate <= 1 ){
    return total - total * discountRate; // Bug: Missing validation for discountRate
    //Validation added, discountRate must be a number between 0 and 1
  }
}

function generateReceipt(cartItems, total) {
  if (total === Number(total)){
  let receipt = "Items:\n";
  cartItems.forEach(item => {
      receipt += `${item.name}: $${item.price}\n`;
  });
  receipt += `Total: $${total.toFixed(2)}`; // Bug: total may not be a number
  //checking that the total is to itself cast as an number
  return receipt;
  }
}

// Debugging entry point
console.log("Starting shopping cart calculation...");
const total = calculateTotal(cart);
const discountedTotal = applyDiscount(total, 0.2); // 20% discount
const receipt = generateReceipt(cart, discountedTotal);

document.getElementById("total").textContent = `Total: $${discountedTotal}`;
document.getElementById("receipt").textContent = receipt;
