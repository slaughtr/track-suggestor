$(document).ready(function() {
  var score = 0; // global
  var userName = "";

  $(".frontBackEndForm").submit(function(){
    event.preventDefault();
    userName = $("#userName").val();
    $(".introQuestions").hide(700);
    $(".backEndQuestions").show(1400);

    console.log("user name is " + userName);
  });

  $(".formOne").submit(function() {
    event.preventDefault();
    score = 0;
    var choices = ["red", "blue", "green", "dog", "cat", "young", "middleAge", "old"];

    choices.forEach(function(info) {
      var userAnswer = ("#" + info).toString();
      var value = parseInt($(userAnswer).val());
      var isChecked = $(userAnswer).is(':checked');

      if (isChecked === true) {
        score = score + value;
      }
    });

    if (score <= 5 && score > 0) {
      console.log("the score is " + score);
      $(".neilTyson").show();
    } else if (score > 5 && score <= 10) {
      $(".carlSagan").show();
    } else if (score > 10) {
      $(".richardDawkins").show();
    }
  });
});
