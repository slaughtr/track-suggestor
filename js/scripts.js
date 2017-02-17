$(document).ready(function() {

  // globals to keep score per track
  var rubyScore = 0;
  var phpScore = 0;
  var javaScore = 0;
  var cssScore = 0;
  var cSharpScore = 0;
  var userName = "";

  var beginnerExperience = 0;

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
      $(".backEndQuestions").show();
      $(".howMuchExperienceDiv").show(1400);
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

  $(".experienceHowMuchForm").submit(function() {
    event.preventDefault();

    var noIsChecked = $("#noExperience").is(':checked');
    var someIsChecked = $("#someExperience").is(':checked');
    var muchIsChecked = $("#muchExperiece").is(':checked');



    if (noIsChecked === true) {
      $(".howMuchExperienceDiv").hide(1000);
      $(".languagesDesireDiv").show(1000);
    } else if (someIsChecked === true) {
      $(".howMuchExperienceDiv").hide(1000);
      $(".languagesExperienceDiv").show(1000);
      beginnerExperience = 1;
    } else if (muchIsChecked === true) {
      $(".howMuchExperienceDiv").hide(1000);
      $(".languagesExperienceDiv").show(1000);
    }

  });

  $(".whatLanguageExperience").submit(function() {
    event.preventDefault();

    var choices = ["rubyExperience", "phpExperience", "javaExperience", "cssExperience", "cSharpExperience", "htmlExperience", "javaScriptExperience", "swiftExperience", "sqlExperience"];

    choices.forEach(function(info) {
      var userAnswer = ("#" + info).toString();
      var value = $(userAnswer).val();
      var isChecked = $(userAnswer).is(':checked');

      if ((isChecked === true) && beginnerExperience === 0) {
        value = value - 5;
      } else if ((isChecked ===true) && beginnerExperience === 1) {
        value = value - 2;
      }

    });
  });
});
