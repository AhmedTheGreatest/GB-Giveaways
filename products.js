
function Check() {
    location = window.location;
    if (location.hash === "#Products-MontBlanc") {
      EnableMontBlanc()
    }
    if (location.hash === "#Products-Parker") {
      EnableParker()
    }
    if (location.hash === "#Products-Cross") {
      EnableCross()
    }
    if (location.hash === "#Products-Senator") {
      EnableSenator()
    }
    if (location.hash === "#Products-Embassador") {
      EnableEmbassador()
    }
  }
  window.onload = function() {
    Check()
  }
  
  function EnableMontBlanc() {
    var MONTBLANC = document.getElementsByClassName("MontBlanc");
    document.getElementsByClassName("Pens-Title")[0].innerHTML = "Mont Blanc";
    DisableParker();
    DisableCross();
    DisableSenator();
    DisableEmbassador();
    MONTBLANC[0].style.display = "flex";
  }
  
  
  function DisableMontBlanc() {
    var MONTBLANC = document.getElementsByClassName("MontBlanc");
    MONTBLANC[0].style.display = "none";
  }
  
  function EnableParker() {
    var MONTBLANC = document.getElementsByClassName("Parker");
    document.getElementsByClassName("Pens-Title")[0].innerHTML = "Parker";
    DisableMontBlanc();
    DisableCross();
    DisableSenator();
    DisableEmbassador();
    MONTBLANC[0].style.display = "flex";
  }
  
  
  function DisableParker() {
    var MONTBLANC = document.getElementsByClassName("Parker");
    MONTBLANC[0].style.display = "none";
  }
  
  function EnableCross() {
    var MONTBLANC = document.getElementsByClassName("Cross");
    document.getElementsByClassName("Pens-Title")[0].innerHTML = "Cross"; 
    DisableMontBlanc();
    DisableParker();
    DisableSenator();
    DisableEmbassador();
    MONTBLANC[0].style.display = "flex";
  }
  
  
  function DisableCross() {
    var MONTBLANC = document.getElementsByClassName("Cross");
    MONTBLANC[0].style.display = "none";
  }
  
  function EnableSenator() {
    var MONTBLANC = document.getElementsByClassName("Senator");
    document.getElementsByClassName("Pens-Title")[0].innerHTML = "Senator"; 
    DisableMontBlanc();
    DisableCross();
    DisableParker();
    DisableEmbassador();
    MONTBLANC[0].style.display = "flex";
  }
  
  
  function DisableSenator() {
    var MONTBLANC = document.getElementsByClassName("Senator");
    MONTBLANC[0].style.display = "none";
  }
  
  function EnableEmbassador() {
    var MONTBLANC = document.getElementsByClassName("Embassador");
    document.getElementsByClassName("Pens-Title")[0].innerHTML = "Embassador"; 
    DisableMontBlanc();
    DisableCross();
    DisableSenator();
    DisableParker();
    MONTBLANC[0].style.display = "flex";
  }
  
  
  function DisableEmbassador() {
    var MONTBLANC = document.getElementsByClassName("Embassador");
    MONTBLANC[0].style.display = "none";
  }
  
  