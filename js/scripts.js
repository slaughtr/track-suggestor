var rubyScore = 0; //have to declare these out here for the window[] function to work
var phpScore = 0;
var javaScore = 0;
var cssScore = 0;
var cSharpScore = 0;

$(document).ready(function() {
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
      $(".frontEndPage").slideDown(1500, function() {
        $(".frontEndPage").slideUp(3000, function(){
          $(".backEndQuestions").show();
          $(".howMuchExperienceDiv").show(1400);
        });
      });
      // $(".backEndQuestions").show(1000);
      // $(".howMuchExperienceDiv").show(1400, function(){
      //   $(".frontEndPage").slideUp(1000);
      // });
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


  });

  $(".experienceHowMuchForm").submit(function() {
    event.preventDefault();

    var noIsChecked = $("#noExperience").is(':checked');
    var someIsChecked = $("#someExperience").is(':checked');
    var muchIsChecked = $("#muchExperience").is(':checked');

    if (noIsChecked === true) {
      $(".howMuchExperienceDiv").hide(1000);
      $(".languagesDesireDiv").show(1000);
    } else if (someIsChecked === true) {
      $(".howMuchExperienceDiv").hide(1000);
      $(".languagesExperienceDiv").show(1000);
      beginnerExperience = beginnerExperience + 1;
    } else if (muchIsChecked === true) {
      $(".howMuchExperienceDiv").hide(1000);
      $(".languagesExperienceDiv").show(1000);
    } else {
      alert("Gotta pick something!");
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
        window[value] = window[value] - 5;
      } else if ((isChecked ===true) && beginnerExperience === 1) {
        window[value] = window[value] - 2;
      }
    });
    $(".languagesExperienceDiv").hide(1000);
    $(".languagesDesireDiv").show(1000);
  });

  $(".whatLanguageDesire").submit(function() {
    event.preventDefault();

    var choices = ["rubyDesire", "phpDesire", "javaDesire", "cssDesire", "cSharpDesire", "htmlDesire", "javaScriptDesire"];

    choices.forEach(function(info) {
      var userAnswer = ("#" + info).toString();
      var value = $(userAnswer).val();
      var isChecked = $(userAnswer).is(':checked');

      if (isChecked === true) {
        window[value] = window[value] + 7;
      }
    });

    rubyFinal = {name: 'Ruby/Rails', points: rubyScore};
    phpFinal = {name: 'PHP/Drupal'  ,points: phpScore };
    javaFinal = {name: 'Java/Android'  ,points: javaScore };
    cssFinal = {name: 'CSS/Design'  ,points: cssScore };
    cSharpFinal = {name: 'C#/.NET'  ,points: cSharpScore };

    var finalScore = [rubyFinal, phpFinal, javaFinal, cssFinal, cSharpFinal];
    finalScore.sort(function(x, y) { return y.points - x.points; });

    var bestChoice = finalScore[0];
    var backupChoice = finalScore[1];

    console.log(bestChoice.name + " is best: " + bestChoice.points + " " + backupChoice.name + " and backup: " + backupChoice.points);

    if (bestChoice.name === 'Ruby/Rails') {
      console.log("ruby");
      $(".languagesDesireDiv").slideUp(777);
      $(".rubyWinDiv").slideDown(666);
    } else if (bestChoice.name === 'PHP/Drupal') {
      console.log("php");
      $(".languagesDesireDiv").slideUp(777);
      $(".phpWinDiv").slideDown(666);
    } else if (bestChoice.name === 'Java/Android') {
      console.log("java");
      $(".languagesDesireDiv").slideUp(777);
      $(".javaWinDiv").slideDown(666);
    } else if (bestChoice.name === 'CSS/Design') {
      console.log("css");
      $(".languagesDesireDiv").slideUp(777);
      $(".cssWinDiv").slideDown(666);
    } else if (bestChoice.name === 'C#/.NET') {
      console.log("c#");
      $(".languagesDesireDiv").slideUp(777);
      $(".cSharpWinDiv").slideDown(666);
    }

    if (backupChoice.name === 'Ruby/Rails') {
      console.log("ruby2nd");
      $(".rubyWinDiv").slideDown(666);
    } else if (backupChoice.name === 'PHP/Drupal') {
      console.log("php2nd");
      $(".phpWinDiv").slideDown(666);
    } else if (backupChoice.name === 'Java/Android') {
      console.log("java2nd");
      $(".javaWinDiv").slideDown(666);
    } else if (backupChoice.name === 'CSS/Design') {
      console.log("css2nd");
      $(".cssWinDiv2nd").slideDown(666);
    } else if (backupChoice.name === 'C#/.NET') {
      console.log("c#");
      $(".cSharpWinDiv2nd").slideDown(666);
    }
  });
});
