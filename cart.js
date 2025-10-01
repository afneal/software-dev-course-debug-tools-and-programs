const cartItems = [ //Dev Tools: Console identified error with undefined price
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 200 }
];
//changed const to cartItems so that variables in functions are defined
function calculateTotal(cartItems) {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) { // Bug: <= should be <
      total += cartItems[i].price; // Bug: cartItems[i] is undefined on the last iteration
  } 
  return total;
}
//cartItems was undefined in console. Edited const to cartItems
//for loop was off-by-one so could not read "price". Edited for loop to <
//scope tab in 'sources' showed total was undefined due to <= in loop

function applyDiscount(total, discountRate) {
  if(discountRate > 0 && discountRate < 1) {
  return total - total * discountRate; // Bug: Missing validation for discountRate
} else {
  console.error("discountRate must be between 0 and 1");
}
}
//used console to see discountRate of 1 resulted in a price of 0
//added an if statement to validate

function generateReceipt(cartItems, total) {
  let receipt = "Items:\n";
  cartItems.forEach(item => {
      receipt += `${item.name}: $${item.price}\n`;
  });
  if (typeof total === 'number') {
  receipt += `Total: $${total.toFixed(2)}`; // Bug: total may not be a number
  return receipt;
}else {
  console.error("Total must be a valid number");
}
}
//discount rate of 1 or 0 resulted in error in console.
//Used an if statement to diplay error message.

// Debugging entry point
console.log("Starting shopping cart calculation...");
const total = calculateTotal(cartItems);
const discountedTotal = applyDiscount(total, 0.2); // 20% discount
const receipt = generateReceipt(cartItems, discountedTotal);

document.getElementById("total").textContent = `Total: $${discountedTotal}`;
document.getElementById("receipt").textContent = receipt;
