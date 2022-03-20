// // TEST JS FILE LINK
// let body = document.getElementById("body");
//  body.style.backgroundColor ="red";


// BUSINESS LOGIC CODE
// menu hover
$(document).ready(function () {
  $("#meatPizza").hover(function () {
    $(".meatHidden").toggle()
  })
  $("#cheesePizza").hover(function () {
    $(".cheeseHidden").toggle()
  })
  $("#vegPizza").hover(function () {
    $(".vegHidden").toggle()
  })
})

// all choices from user
function Pizza(size, crust, topping) {
  this.size = size;
  this.crust = crust;
  this.topping = topping;
}

//Topping Price
let toppingPrice = function(topping){	
	if (topping === "meaty" || topping === "cheesy"){
  	return 5;}
  else{
 		 return 4;}
}

//Crust Price
let crustPrice = function(crust){	
	if (crust === "crispy"){
  	return 1;}
  else if(crust === "stuffed" ){
 		 return 2;}
  else{
  return 3; } 
}

//Size Price
let sizePrice = function(size){	
	if (size === "small"){
  	return 1;}
  else if(size === "medium" ){
 		 return 2;}
  else{
  return 3;} 
}


// prices callculation function
let prices = function (toppingPrice, crustPrice, sizePrice) {
  return toppingPrice + crustPrice + sizePrice;
}

let totalPrice = function (prices, quantity, delivery) {
  return (prices * quantity) + delivery
}




// Validation of form function
let validate = function (size, crust, topping, quantity, delivery) {
  if (!size || !crust || !topping || !quantity || !delivery) return false;
  return true
}

// clear form code function

// USER INTERFACE CODE
$(document).ready(function () {
  $(".submit").submit(function (event) {
    event.preventDefault();
    // get user input
    let size = $("input:radio[name=size]:checked").val();
    let crust = $("input:radio[name=crust]:checked").val();
    let topping = $("input:radio[name=topping]:checked").val()
    let quantity = $("input#quantity").val();
    let delivery = $("input:radio[name=delivery]:checked").val();

    // validate form
    if (validate(size, crust, topping, quantity, delivery)) {
      alert("Order received.Will be ready in 30 minutes")

      // delivery options
      if (delivery === "deliver") {
        prompt("Please insert drop off location")
      }
      else {
        alert("Please pick your order from the shop")
      }
    }
    else {
      alert("Please fill out out all the choices")
    }
    
    let choice = new Pizza(size, crust, topping);
    alert(toppingPrice(choice.topping) + crustPrice(choice.crust) + sizePrice(choice.size))
 


    $("ul#orders").append("<li><span class='order'><p>Order One: " + custOrder.topping + "</p></span></li>");
  })
})



