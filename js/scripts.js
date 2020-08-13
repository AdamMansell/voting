$(document).ready(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault();
const inputAge = parseInt($("#age").val());
if (inputAge >= 18) {
  $("#adult").show();
} else {
  $("#minor").show();
}

  });
});
