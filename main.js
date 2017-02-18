//Second Commit
var Cart = document.getElementById("basket");
var CartTotal = document.getElementById("basket");
var groceries ={ 
things: [
				{item:"Chicken", price:4.65},
        {item:"Tomato",price:.68},
        {item:"Pasta",price:3.68},
        {item:"cheese",price:2.99},
],
total: function(){
var sum = 0;
for (var i = 0; i<=this.things.length-1; i++){
sum = this.things[i].price +sum}
return sum;
}
	
}
for (var i = 0; i<=groceries.things.length-1; i++) {
 Cart.innerHTML+= (groceries.things[i].item + " : " + groceries.things[i].price ) + "<br>";
  //console.log(groceries.things[i].item + " : " + groceries.things[i].price);
};
document.body.appendChild(Cart);
CartTotal.innerHTML += groceries.total();
console.log(groceries.total());
document.body.appendChild(CartTotal);
//groceries.total();
/*
//First Commit
var CartTotal = document.createElement('div');
var groceries ={ 
things: [
				{item:"Chicken", price:4.65},
        {item:"Tomato",price:.68},
        {item:"Pasta",price:3.68},
        {item:"cheese",price:2.99},
],
total: function(){
var sum = 0;
for (var i = 0; i<=this.things.length-1; i++){
sum = this.things[i].price +sum}
console.log(sum);
}
	
}
for (var i = 0; i<=groceries.things.length-1; i++) {
   console.log(groceries.things[i].item + " : " + groceries.things[i].price);
};
groceries.total();*/
