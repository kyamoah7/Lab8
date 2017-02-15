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
groceries.total();