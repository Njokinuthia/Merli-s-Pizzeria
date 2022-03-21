// // TEST JS FILE LINK
// let body = document.getElementById("body");
//  body.style.backgroundColor ="red";


// FUNCTIONAL STYLING
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

// BUSINESS LOGIC CODE
// all choices from user
function Pizza(size, crust, topping) {
  this.size = size;
  this.crust = crust;
  this.topping = topping;
}
let custOrder = [];
let individualOrderCosts = [];

// TODO:ternary - ??return
//Topping Price
let toppingPrice = function (topping) {
  if (topping === "meaty" || topping === "cheesy") {
    return 5;
  }
  else {
    return 4;
  }
}

//Crust Price
let crustPrice = function (crust) {
  if (crust === "crispy") {
    return 1;
  }
  else if (crust === "stuffed") {
    return 2;
  }
  else {
    return 3;
  }

}

//Size Price
let sizePrice = function (size) {
  if (size === "small") {
    return 1;
  }
  else if (size === "medium") {
    return 2;
  }
  else {
    return 3;
  }
}

// prices calculation function

let price = function (single, quantity) {
  return single * quantity;
}

let finalPrice = function (pizzaPrices, deliveryCharge) {
  return pizzaPrices + deliveryCharge
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
    let deliveryCharge = 0;
    let location = 0;

    // validate form
    if (validate(size, crust, topping, quantity, delivery)) {


      let choice = new Pizza(size, crust, topping);
      custOrder.push(choice);


      // pricing   
      let singlePizzaPrice = toppingPrice(choice.topping) + crustPrice(choice.crust) + sizePrice(choice.size);

      // pricing with quantity
      let quantityPrice = price(singlePizzaPrice, quantity);
      individualOrderCosts.push(quantityPrice)


      $("ul#orders").append("<li><span class='order'><p>" + quantity + " " + choice.size + " " + choice.topping + " " + "pizza with" + " " + choice.crust + " " + "crust @ $" + singlePizzaPrice + " each = $" + quantityPrice + " " + "</p></span></li>");

      // TODO:Length of array????????
      let cost = 0;
      individualOrderCosts.forEach(function (individualOrderCost) {
        cost += individualOrderCost;
      })

      $(".checkout").click(function () {
        // delivery options

        // if (delivery === "deliver") {
        //   location = prompt("Please insert drop off location")
        //   deliveryCharge = 5;
        // }
        // else {
        //   deliveryCharge = 0;
        // }


        if (delivery === "deliver") {
          let withDeliveryCost = cost + 5;
          location = prompt("Please insert drop off location")


          $(".total").text("Delivery to ' " + location + " ' TOTAL PRICE: $ " + withDeliveryCost);
        }
        else {
          $(".total").text("Pick order from shop. TOTAL PRICE: $ " + cost);
        }
      })

    }
    else {
      alert("Please fill out out all the choices")
    }
  })
})



