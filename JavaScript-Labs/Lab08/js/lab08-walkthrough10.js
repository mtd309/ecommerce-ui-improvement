function Order(product,price,quantity) {
 this.product=product;this.price=price;this.quantity=quantity;
 this.total=function(){return this.price*this.quantity;};
 this.output=function(){
   document.write('<p>Product='+this.product+'<br>Price='+this.price+'<br>Quantity='+this.quantity+'<br>Total='+this.total()+'</p>');
 };
}
new Order('Self Portrait in a Straw Hat',15,2).output();
new Order('Untitled #23',10,4).output();
