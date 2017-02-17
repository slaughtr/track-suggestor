$(document).ready(function() {
  var score = 0; // global
  var userName = "";

  $(".frontBackEndForm").submit(function(){
    event.preventDefault();

    var isFrontChecked = $("#frontEndButton").is(':checked');
        var isBackChecked = $("#backEndButton").is(':checked');

        console.log("front " + isFrontChecked);
        console.log("back " + isBackChecked);

  //   userName = $("#userName").val();
    $(".introQuestions").hide(700);
  
    if (isFrontChecked === true) {
      $(".frontEndPage").show(1400);
    } else if (isBackChecked === true) {
      $(".backEndQuestions").show(1400);
  } else {
      alert("Gotta pick something here dude");
  }

    console.log("user name is " + userName);
  });

//   $('frontOrBackEndButtonsRow button').click(function() {
//     $(this).addClass('active').siblings().removeClass('active');
//
//
// });

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
