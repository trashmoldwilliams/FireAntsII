$(document).ready(function() {

  //Set Base Stat Variables
  var strength = 1;
  var endurance = 1;
  var finesse = 1;
  var perception = 1;
  var wits = 1;
  var intelligence = 1;
  var limit = 9;

  $("span#strength-value").text([strength]);
  $("span#endurance-value").text([endurance]);
  $("span#finesse-value").text([finesse]);
  $("span#perception-value").text([perception]);
  $("span#wits-value").text([wits]);
  $("span#intelligence-value").text([intelligence]);
  $("span#stat-limit-value").text([limit]);


  //Stat Builder Controls
  $("span#strength-left").click(function() {
      if (strength > 1) {
      strength -= 1;
      limit += 1;
      $("span#strength-value").text([strength]);
      $("span#stat-limit-value").text([limit]);
    }
  });

  $("span#strength-right").click(function() {
      if (strength < 10 && limit > 0) {
      strength += 1;
      limit -= 1;
      $("span#strength-value").text([strength]);
      $("span#stat-limit-value").text([limit]);
    }
  });

  $("span#endurance-left").click(function() {
      if (endurance > 1) {
      endurance -= 1;
      limit += 1;
      $("span#endurance-value").text([endurance]);
      $("span#stat-limit-value").text([limit]);
    }
  });

  $("span#endurance-right").click(function() {
      if (endurance < 10 && limit > 0) {
      endurance += 1;
      limit -= 1;
      $("span#endurance-value").text([endurance]);
      $("span#stat-limit-value").text([limit]);
    }
  });

    $("span#finesse-left").click(function() {
      if (finesse > 1) {
      finesse -= 1;
      limit += 1;
      $("span#finesse-value").text([finesse]);
      $("span#stat-limit-value").text([limit]);
    }
  });

  $("span#finesse-right").click(function() {
      if (finesse < 10 && limit > 0) {
      finesse += 1;
      limit -= 1;
      $("span#finesse-value").text([finesse]);
      $("span#stat-limit-value").text([limit]);
    }
  });

    $("span#perception-left").click(function() {
      if (perception > 1) {
      perception -= 1;
      limit += 1;
      $("span#perception-value").text([perception]);
      $("span#stat-limit-value").text([limit]);
    }
  });

  $("span#perception-right").click(function() {
      if (perception < 10 && limit > 0) {
      perception += 1;
      limit -= 1;
      $("span#perception-value").text([perception]);
      $("span#stat-limit-value").text([limit]);
    }
  });

    $("span#wits-left").click(function() {
      if (wits > 1) {
      wits -= 1;
      limit += 1;
      $("span#wits-value").text([wits]);
      $("span#stat-limit-value").text([limit]);
    }
  });

  $("span#wits-right").click(function() {
      if (wits < 10 && limit > 0) {
      wits += 1;
      limit -= 1;
      $("span#wits-value").text([wits]);
      $("span#stat-limit-value").text([limit]);
    }
  });

    $("span#intelligence-left").click(function() {
      if (intelligence > 1) {
      intelligence -= 1;
      limit += 1;
      $("span#intelligence-value").text([intelligence]);
      $("span#stat-limit-value").text([limit]);
    }
  });

  $("span#intelligence-right").click(function() {
      if (intelligence < 10 && limit > 0) {
      intelligence += 1;
      limit -= 1;
      $("span#intelligence-value").text([intelligence]);
      $("span#stat-limit-value").text([limit]);
    }
  });

  $("button#confirm-character").click(function() {
    if ($("input#name-entry").val() !== "" && limit === 0) {
      var player-name = 
      alert("Confirmed");
    }else if ($("input#name-entry").val() === "") {
      alert("Name your character, pal.");
    }else if (limit !== 0) {
      alert("Use all of your stat points, pal.");
    }
  });
});
