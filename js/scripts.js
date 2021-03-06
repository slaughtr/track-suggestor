 var rubyScore = 0; //have to declare these out here for the window[] function to work
var phpScore = 0;
var javaScore = 0;
var cssScore = 0;
var cSharpScore = 0;

$(document).ready(function() {
  var userName = "";
  var beginnerExperience = 0;
  var reverseScore = 0; // if the user wants to learn new or old things more, this variable changes their final outcome

  $(".frontBackEndForm").submit(function(){
    event.preventDefault();
    userName = $("input#userName").val();
    var isFrontChecked = $("#frontEndButton").is(':checked');
    var isBackChecked = $("#backEndButton").is(':checked');
    $(".userNameSpan").text(userName);
    if (isFrontChecked === true) {
      cssScore = cssScore + 10;
      $(".introQuestions").hide(700);
      $(".frontEndPage").slideDown(1500, function() {
        $(".frontEndPage").slideUp(3000, function(){
          $(".backEndQuestions").show();
          $(".howMuchExperienceDiv").show(1400);
        });
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
      //this part needs a fancy bit of code that makes stuff red or whatever
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
      alert("Gotta pick something!"); //need better ways to alert user
    }
  });

  $(".whatLanguageExperience").submit(function() {
    event.preventDefault();
    var choices = ["rubyExperience", "phpExperience", "javaExperience", "cssExperience", "cSharpExperience", "htmlExperience", "javaScriptExperience", "swiftExperience", "sqlExperience"];

    choices.forEach(function(info) {
      var userAnswer = ("#" + info).toString();
      var value = $(userAnswer).val(); //get the value= value from different inputs so we don't have to use a 30 line if/else check to find out which items they selected
      var isChecked = $(userAnswer).is(':checked');

      if ((isChecked === true) && beginnerExperience === 0) {
        window[value] = window[value] - 5; //in this situation, value becomes rubyScore etc. crafty stuff!
      } else if ((isChecked ===true) && beginnerExperience === 1) {
        window[value] = window[value] - 2;
      }
    });
    $(".languagesExperienceDiv").hide(1000);
    $(".learnNewOrOld").show(1000);
  });

  $(".learnNewOrOldForm").submit(function() {
    event.preventDefault();
    var oldIsChecked = $("#learnOldThings").val();
    if (oldIsChecked === "Old") {
      reverseScore = 1;
    }

    $(".learnNewOrOld").hide(1000);
    $(".languagesDesireDiv").slideDown(1000);
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


    if (reverseScore === 1) {
          finalScore.sort(function(x, y) { return y.points - x.points; });
      finalScore.reverse();
    } else {
          finalScore.sort(function(x, y) { return y.points - x.points; });
    }

    var bestChoice = finalScore[0];
    var backupChoice = finalScore[1];

    if (bestChoice.name === 'Ruby/Rails') {
      $(".languagesDesireDiv").slideUp(777);
      $(".rubyWinDiv").slideDown(666);
    } else if (bestChoice.name === 'PHP/Drupal') {
      $(".languagesDesireDiv").slideUp(777);
      $(".phpWinDiv").slideDown(666);
    } else if (bestChoice.name === 'Java/Android') {
      $(".languagesDesireDiv").slideUp(777);
      $(".javaWinDiv").slideDown(666);
    } else if (bestChoice.name === 'CSS/Design') {
      $(".languagesDesireDiv").slideUp(777);
      $(".cssWinDiv").slideDown(666);
    } else if (bestChoice.name === 'C#/.NET') {
      $(".languagesDesireDiv").slideUp(777);
      $(".cSharpWinDiv").slideDown(666);
    }

    if (backupChoice.name === 'Ruby/Rails') {
      $(".rubyWinDiv2nd").slideDown(666);
    } else if (backupChoice.name === 'PHP/Drupal') {
      $(".phpWinDiv2nd").slideDown(666);
    } else if (backupChoice.name === 'Java/Android') {
      $(".javaWinDiv2nd").slideDown(666);
    } else if (backupChoice.name === 'CSS/Design') {
      $(".cssWinDiv2nd").slideDown(666);
    } else if (backupChoice.name === 'C#/.NET') {
      $(".cSharpWinDiv2nd").slideDown(666);
    }
  });
});
