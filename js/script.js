// // TEST JS FILE LINK
// let body = document.getElementById("body");
//  body.style.backgroundColor ="red";

$(document).ready(function() { 
  $(".submit").submit(function(event){
    event.preventDefault();
    let size = $("input:radio[name=size]:checked").val();
    let crust = $("input:radio[name=crust]:checked").val();
    let topping = $("input:radio[name=topping]:checked").val()
    
    let quantity = $("input#quantity").val();
    let delivery = $("input:radio[name=delivery]:checked").val();

    alert(quantity)
  })
})

