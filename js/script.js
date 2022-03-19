// // TEST JS FILE LINK
// let body = document.getElementById("body");
//  body.style.backgroundColor ="red";


// BUSINESS LOGIC CODE
// Validation of form function
let validate = function(size, crust, topping,quantity,delivery){
  if (!size || !crust || !topping || !quantity ||!delivery) return false;
  return true
}


// clear form code function

// USER INTERFACE CODE
$(document).ready(function() { 
  $(".submit").submit(function(event){
    event.preventDefault();
    // get user input
    let size = $("input:radio[name=size]:checked").val();
    let crust = $("input:radio[name=crust]:checked").val();
    let topping = $("input:radio[name=topping]:checked").val()    
    let quantity = $("input#quantity").val();
    let delivery = $("input:radio[name=delivery]:checked").val();

    // validate form
    if(validate(size,crust,topping,quantity,delivery)){
      alert("Order received.Will be ready in 30 minutes")

      // delivery options
      if(delivery==="deliver"){
        prompt("Please insert drop off location")
      }
      else{
        alert("Please pick your order from the shop")
      }
    }



    else{
      alert("Please fill out out all the choices")     
    }     
  })
})


