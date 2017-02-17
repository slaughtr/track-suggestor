$(document).ready(function() {

  // globals to keep score per track
  var rubyScore = 0;
  var phpScore = 0;
  var javaScore = 0;
  var cssScore = 0;
  var cSharpScore = 0;
  var userName = "";

  $(".frontBackEndForm").submit(function(){
    event.preventDefault();
    userName = $("#userName").val();
    var isFrontChecked = $("#frontEndButton").is(':checked');
    var isBackChecked = $("#backEndButton").is(':checked');


    if (isFrontChecked === true) {
      cssScore = cssScore + 10;
      $(".introQuestions").hide(700);
      $(".frontEndPage").slideDown(1400).delay(2000).slideUp(700, function(){
      $(".backEndQuestions").show(1400);
      });
    } else if (isBackChecked === true) {
      rubyScore = rubyScore + 5;
      phpScore = phpScore + 5;
      javaScore = javaScore + 5;
      cSharpScore = cSharpScore + 5;
      $(".introQuestions").hide(700);
      $(".backEndQuestions").show(1400);
    } else {
      alert("Gotta pick one!");
      //fancy bit of code that makes stuff red or whatever
    }

    console.log("rubyScore = " + rubyScore);
    console.log("phpScore = " + phpScore);
    console.log("javaScore = " + javaScore);
    console.log("cSharpScore = " + cSharpScore);
    console.log("cssScore = " + cssScore);
  });


  $(".muchExperienceForm").submit(function() {
    event.preventDefault();
    score = 0;
    var choices = ["rubyExperience", "phpExperience", "javaExperience", "cssExperience", "cSharpExperience", "htmlExperience", "javaScriptExperience", "swiftExperience", "sqlExperience"];

    choices.forEach(function(info) {
      var userAnswer = ("#" + info).toString();
      var value = $(userAnswer).val();
      var isChecked = $(userAnswer).is(':checked');

      if (isChecked === true) {
        value = value - 5;
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
