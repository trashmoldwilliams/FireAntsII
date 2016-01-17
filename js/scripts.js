$(document).ready(function() {

  //Set Base Stat Variables
  var player_level = 15;
  var strength = 1;
  var endurance = 1;
  var finesse = 1;
  var perception = 1;
  var wits = 1;
  var intelligence = 1;

  //Set Sub Stat Variables
  var max_hp = 5;
  var current_hp = 5;
  var max_sp = 1;
  var current_sp = 1;
  var max_mp = 1;
  var current_mp = 1;

  var attack = 1;
  var carry_weight = 2;
  var sense = 1;
  var stealth = 1;
  var charisma = 1;
  var knowledge = 1;

  //Set Base Stat Limit
  var limit = 9;

  $(".strength-value").text([strength]);
  $(".endurance-value").text([endurance]);
  $(".finesse-value").text([finesse]);
  $(".perception-value").text([perception]);
  $(".wits-value").text([wits]);
  $(".intelligence-value").text([intelligence]);
  $(".attack-value").text([attack]);
  $(".carry-weight-value").text([carry_weight]);
  $(".stealth-value").text([stealth]);
  $(".sense-value").text([sense]);
  $(".charisma-value").text([charisma]);
  $("span#stat-limit-value").text([limit]);


  //Start Menu
  $("#start-game").click(function() {
    $('#game-log').prepend("<li>name your character, and choose your base stats</li>")
    $("#title-screen").hide();
    $("#set-stats-screen").show();
    $("#hud-info").show();
    $("#stat-sub-menu").show();
    $(".stat-menu").show();
  });


  //Stat Builder Controls
  $("span#strength-left").click(function() {
      if (strength > 1) {
      strength -= 1;
      attack -= 1;
      carry_weight -= 1;
      limit += 1;
      $(".strength-value").text([strength]);
      $(".attack-value").text([attack]);
      $(".carry-weight-value").text([carry_weight]);
      $("span#stat-limit-value").text([limit]);
    }
  });

  $("span#strength-right").click(function() {
      if (strength < 10 && limit > 0) {
      strength += 1;
      attack += 1;
      carry_weight += 1;
      limit -= 1;
      $(".strength-value").text([strength]);
      $(".attack-value").text([attack]);
      $(".carry-weight-value").text([carry_weight]);
      $("span#stat-limit-value").text([limit]);
    }
  });

  $("span#endurance-left").click(function() {
      if (endurance > 1) {
      endurance -= 1;
      current_hp -= 5;
      max_hp -= 5;
      carry_weight -= 1;
      limit += 1;
      $(".endurance-value").text([endurance]);
      $(".carry-weight-value").text([carry_weight]);
      $("span#stat-limit-value").text([limit]);
      $("span#current-hp-hud").text([current_hp]);
      $("span#max-hp-hud").text([max_hp]);
    }
  });

  $("span#endurance-right").click(function() {
      if (endurance < 10 && limit > 0) {
      endurance += 1;
      current_hp += 5;
      max_hp += 5;
      carry_weight += 1;
      limit -= 1;
      $(".endurance-value").text([endurance]);
      $(".carry-weight-value").text([carry_weight]);
      $("span#stat-limit-value").text([limit]);
      $("span#current-hp-hud").text([current_hp]);
      $("span#max-hp-hud").text([max_hp]);
    }
  });

    $("span#finesse-left").click(function() {
      if (finesse > 1) {
      finesse -= 1;
      current_sp -= 1;
      max_sp -= 1;
      stealth -= 1;
      limit += 1;
      $(".finesse-value").text([finesse]);
      $(".stealth-value").text([stealth]);
      $("span#stat-limit-value").text([limit]);
      $("span#current-sp-hud").text([current_sp]);
      $("span#max-sp-hud").text([max_sp]);
    }
  });

  $("span#finesse-right").click(function() {
      if (finesse < 10 && limit > 0) {
      finesse += 1;
      current_sp += 1;
      max_sp += 1;
      stealth += 1;
      limit -= 1;
      $(".finesse-value").text([finesse]);
      $(".stealth-value").text([stealth]);
      $("span#stat-limit-value").text([limit]);
      $("span#current-sp-hud").text([current_sp]);
      $("span#max-sp-hud").text([max_sp]);
    }
  });

    $("span#perception-left").click(function() {
      if (perception > 1) {
      perception -= 1;
      current_mp -= 1;
      max_mp -= 1;
      sense -= 1;
      limit += 1;
      $(".perception-value").text([perception]);
      $(".sense-value").text([sense]);
      $("span#stat-limit-value").text([limit]);
      $("span#current-mp-hud").text([current_mp]);
      $("span#max-mp-hud").text([max_mp]);
    }
  });

  $("span#perception-right").click(function() {
      if (perception < 10 && limit > 0) {
      perception += 1;
      current_mp += 1;
      max_mp += 1;
      sense += 1;
      limit -= 1;
      $(".perception-value").text([perception]);
      $(".sense-value").text([sense]);
      $("span#stat-limit-value").text([limit]);
      $("span#current-mp-hud").text([current_mp]);
      $("span#max-mp-hud").text([max_mp]);
    }
  });

    $("span#wits-left").click(function() {
      if (wits > 1) {
      wits -= 1;
      current_mp -= 1;
      max_mp -= 1;
      charisma -= 1;
      limit += 1;
      $(".wits-value").text([wits]);
      $(".charisma-value").text([charisma]);
      $("span#stat-limit-value").text([limit]);
      $("span#current-mp-hud").text([current_mp]);
      $("span#max-mp-hud").text([max_mp]);
    }
  });

  $("span#wits-right").click(function() {
      if (wits < 10 && limit > 0) {
      wits += 1;
      current_mp += 1;
      max_mp += 1;
      charisma += 1;
      limit -= 1;
      $(".wits-value").text([wits]);
      $(".charisma-value").text([charisma]);
      $("span#stat-limit-value").text([limit]);
      $("span#current-mp-hud").text([current_mp]);
      $("span#max-mp-hud").text([max_mp]);
    }
  });

    $("span#intelligence-left").click(function() {
      if (intelligence > 1) {
      intelligence -= 1;
      current_mp -= 1;
      max_mp -= 1;
      limit += 1;
      $(".intelligence-value").text([intelligence]);
      $("span#stat-limit-value").text([limit]);
      $("span#current-mp-hud").text([current_mp]);
      $("span#max-mp-hud").text([max_mp]);
    }
  });

  $("span#intelligence-right").click(function() {
      if (intelligence < 10 && limit > 0) {
      intelligence += 1;
      current_mp += 1;
      max_mp += 1;
      limit -= 1;
      $(".intelligence-value").text([intelligence]);
      $("span#stat-limit-value").text([limit]);
      $("span#current-mp-hud").text([current_mp]);
      $("span#max-mp-hud").text([max_mp]);
    }
  });

  //Character Confirmation Button
  $("button#confirm-character").click(function() {
    if ($("input#name-entry").val() !== "" && limit === 0) {
      var player_name = $("input#name-entry").val().toUpperCase();
      $(".show_player_name").text([player_name]);
      $(".show_player_level").text([player_level]);
      $("#stats-menu-label").text("- LEVEL ");
      $("#stat-menu").hide();
      $("#item-menu").show();


    }else if ($("input#name-entry").val() === "") {
      alert("Name your character, pal.");

    }else if (limit !== 0) {
      alert("Use all of your stat points, pal.");
    }
  });

});
