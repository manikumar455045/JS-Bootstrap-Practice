
let gmBtn = document.querySelector("#good-morning").addEventListener('click', function () {
   printMessage("Good Morning", "#7fdfff");
});

let gaBtn = document.querySelector("#good-afternoon").addEventListener('click', function () {
   printMessage("Good Afternoon", "yellow");
});

let geBtn = document.querySelector("#good-evening").addEventListener('click', function () {
   printMessage("Good Evening", "red");
});

let printMessage = function (message, color) {
   let text = document.querySelector("#heading")
   text.innerText = message;
   text.style.backgroundColor = color;
};

//Key up event function
let text = document.querySelector("#username")
text.addEventListener('keyup', function () {
   let textvalue = text.value;
   document.querySelector("#value").innerText = textvalue;
});

//alert togggle functionality
$("#btnSubmit").click(function () {
   let text = document.querySelector("#username")
   if (text.value == "") {
      $("#text-status").text("Please enter text in text-box");
      $(".alert").addClass("alert-danger")
      $(".alert").removeClass("alert-success");
      $(".alert").show()
   }
   else {
      $("#text-status").text("Text entered");
      $(".alert").addClass("alert-success");
      $(".alert").removeClass("alert-danger");
      $(".alert").show()
   }

});