//Second Commit
//Created variables that get several ID's to place list object array
var Cart = document.getElementById("basketItems");

// 2 variables were created to get id in input tags to take input new item and price and add to things array
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value*1;
//created groceries object that holds things array and object function to calculate total of prices 
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
/*newItem:  function(){

  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value*1;

  //var addItem = {item:'', price:b};
//  if ( a!=''){
    things.push({item:'a',price:b});
   
    //return addItem;
  }*/

};
/* var add = document.getElementById("add").addEventListener("click",newItem);*/

	
//set for loop for things array to display as string in #basketItems section
for (var i = 0; i<=groceries.things.length-1; i++) {
 Cart.innerHTML+= (groceries.things[i].item + " : " + groceries.things[i].price ) + "<br>";
  /*console.log(groceries.things[i].item + " : " + groceries.things[i].price);*/
};
// placing variable a & b from input box into things array into the html
Cart.innerHTML +=groceries.things.push({item:'a',price:b});

/*for (var i = 0; i<=groceries.things.length-1; i++) {}
  Cart.innerHTML += (groceries.newItem())+"<br>" ;
console.log(groceries.newItem())*/
//appending Cart variable into parent section to display things array
document.body.getElementsByTagName('section')[0].appendChild(Cart);
//inputting total object into html that calculates total price of things array
Cart.innerHTML += groceries.total();
console.log(groceries.total());



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
