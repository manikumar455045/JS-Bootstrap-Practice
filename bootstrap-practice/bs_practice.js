$(".card .card-header").click(function(){
    if($(".icon i").hasClass("fa-caret-down")){
  $(".icon i").removeClass("fa-caret-down");
  $(".icon i").addClass("fa-caret-up");
    }
  else
  {
    $(".icon i").removeClass("fa-caret-up");
    $(".icon i").addClass("fa-caret-down");
  }

  
});
// $(document).ready(function(){
//   $("#register-modal").modal('show');
// });
