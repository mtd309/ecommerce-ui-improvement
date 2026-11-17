var isCanadian = true;
function calculateTax(amount) {
  var rate = function () { return isCanadian ? 0.05 : 0; };
  return amount * rate();
}
function calculateTotal(price, quantity) {
 return price * quantity + calculateTax(price * quantity);
}
