
function Check() {
    location = window.location;
    if (location.hash === "#Products-MontBlanc") {
      EnableMontBlanc();
    }
    if (location.hash === "#Products-Parker") {
      EnableParker();
    }
    if (location.hash === "#Products-Cross") {
      EnableCross();
    }
    if (location.hash === "#Products-Senator") {
      EnableSenator();
    }
    if (location.hash === "#Products-Embassador") {
      EnableEmbassador();
    }
    if (location.hash === "#Products-SanDisk") {
      EnableSanDisk();
    }
    if (location.hash === "#Products-Kingston") {
      EnableKingston();
    }
    if (location.hash === "#Products-HP") {
      EnableHP();
    }
    if (location.hash === "#Products-Samsung") {
      EnableSamsung();
    }
    if (location.hash === "#Products-Customized") {
      EnableCustomized();
    }
    if (location.hash === "#Products-Mugs-Customized") {
      EnableMugsCustomized();
    }
    if (location.hash === "#Products-PowerBanks-Customized") {
      EnablePowerBanksCustomized();
    }
    if (location.hash === "#Products-PowerBanks-Samsung") {
      EnablePowerBanksSamsung();
    }
    if (location.hash === "#Products-PowerBanks-Anker") {
      EnablePowerBanksAnker();
    }
    if (location.hash === "#Products-PowerBanks-Xiaomi") {
      EnablePowerBanksXiaomi();
    }
    if (location.hash === "#Products-PowerBanks-Infinix") {
      EnablePowerBanksInfinix();
    }
    if (location.hash === "#Products-PowerBanks-Romoss") {
      EnablePowerBanksRomoss();
    }
    if (location.hash === "#Products-TableClocks") {
      EnableTableClocks();
    }
    if (location.hash === "#Products-WallClocks") {
      EnableWallClocks();
    }
    if (location.hash === "#Products-T-Shirts") {
      EnableCustomizedTShirts();
    }
  }
  window.onload = function() {
    Check()
  }
  
  function EnableMontBlanc() {
    var MONTBLANC = document.getElementsByClassName("MontBlanc");
    document.getElementsByClassName("Products-Title")[0].innerHTML = "Mont Blanc";
    DisableParker();
    DisableCross();
    DisableSenator();
    DisableEmbassador();
    DisableMugsCustomized();
    DisableKingston();
    DisableSanDisk();
    DisableSamsung();
    DisableHP();
    DisableCustomized();
    DisablePowerBanksRomoss();
    DisablePowerBanksAnker();
    DisablePowerBanksXiaomi();
    DisablePowerBanksInfinix();
    DisablePowerBanksSamsung();
    DisablePowerBanksCustomized();
    DisableWallClocks();
    DisableTableClocks();
    DisableCustomizedTShirts();
    MONTBLANC[0].style.display = "flex";
  }
  
  function DisableMontBlanc() {
    var MONTBLANC = document.getElementsByClassName("MontBlanc");
    MONTBLANC[0].style.display = "none";
  }
  
  function EnableParker() {
    var PARKER = document.getElementsByClassName("Parker");
    document.getElementsByClassName("Products-Title")[0].innerHTML = "Parker";
    DisableMontBlanc();
    DisableCross();
    DisableSenator();
    DisableEmbassador();
    DisableKingston();
    DisableSanDisk();
    DisableSamsung();
    DisableHP();
    DisableMugsCustomized();
    DisableCustomized();
    DisablePowerBanksRomoss();
    DisablePowerBanksAnker();
    DisablePowerBanksXiaomi();
    DisablePowerBanksCustomized();
    DisablePowerBanksInfinix();
    DisablePowerBanksSamsung();
    DisableWallClocks();
    DisableTableClocks();
    DisableCustomizedTShirts();
    PARKER[0].style.display = "flex";
  }
  
  
  function DisableParker() {
    var PARKER = document.getElementsByClassName("Parker");
    PARKER[0].style.display = "none";
  }
  
  function EnableCross() {
    var CROSS = document.getElementsByClassName("Cross");
    document.getElementsByClassName("Products-Title")[0].innerHTML = "Cross"; 
    DisableMontBlanc();
    DisableParker();
    DisableSenator();
    DisableEmbassador();
    DisableKingston();
    DisableSanDisk();
    DisableSamsung();
    DisableHP();
    DisableMugsCustomized();
    DisableCustomized();
    DisablePowerBanksRomoss();
    DisablePowerBanksAnker();
    DisablePowerBanksXiaomi();
    DisablePowerBanksCustomized();
    DisablePowerBanksInfinix();
    DisablePowerBanksSamsung();
    DisableWallClocks();
    DisableTableClocks();
    DisableCustomizedTShirts();
    CROSS[0].style.display = "flex";
  }
  
  
  function DisableCross() {
    var CROSS = document.getElementsByClassName("Cross");
    CROSS[0].style.display = "none";
  }
  
  function EnableSenator() {
    var SENATOR = document.getElementsByClassName("Senator");
    document.getElementsByClassName("Products-Title")[0].innerHTML = "Senator"; 
    DisableMontBlanc();
    DisableCross();
    DisableParker();
    DisableEmbassador();
    DisableKingston();
    DisableSanDisk();
    DisableSamsung();
    DisableMugsCustomized();
    DisableHP();
    DisableCustomized();
    DisablePowerBanksRomoss();
    DisablePowerBanksXiaomi();
    DisablePowerBanksSamsung();
    DisablePowerBanksInfinix();
    DisablePowerBanksAnker();
    DisablePowerBanksCustomized();
    DisableWallClocks();
    DisableTableClocks();
    DisableCustomizedTShirts();
    SENATOR[0].style.display = "flex";
  }
  
  
  function DisableSenator() {
    var MONTBLANC = document.getElementsByClassName("Senator");
    MONTBLANC[0].style.display = "none";
  }
  
  function EnableEmbassador() {
    var EMBASSADOR = document.getElementsByClassName("Embassador");
    document.getElementsByClassName("Products-Title")[0].innerHTML = "Embassador"; 
    DisableMontBlanc();
    DisableCross();
    DisableSenator();
    DisableParker();
    DisableKingston();
    DisableSamsung();
    DisableHP();
    DisableSanDisk();
    DisableMugsCustomized();
    DisableCustomized();
    DisablePowerBanksRomoss();
    DisablePowerBanksXiaomi();
    DisablePowerBanksAnker();
    DisablePowerBanksSamsung();
    DisablePowerBanksInfinix();
    DisablePowerBanksCustomized();
    DisableWallClocks();
    DisableTableClocks();
    DisableCustomizedTShirts();
    EMBASSADOR[0].style.display = "flex";
  }
  
  
  function DisableEmbassador() {
    var EMBASSADOR = document.getElementsByClassName("Embassador");
    EMBASSADOR[0].style.display = "none";
  }
  
  function EnableSanDisk() {
    var SANDISK = document.getElementsByClassName("SanDisk");
    document.getElementsByClassName("Products-Title")[0].innerHTML = "SanDisk USB"; 
    DisableMontBlanc();
    DisableCross();
    DisableSenator();
    DisableParker();
    DisableKingston();
    DisableSamsung();
    DisableEmbassador();
    DisableHP();
    DisableCustomized();
    DisableMugsCustomized();
    DisablePowerBanksRomoss();
    DisablePowerBanksXiaomi();
    DisablePowerBanksAnker();
    DisablePowerBanksSamsung();
    DisablePowerBanksInfinix();
    DisablePowerBanksCustomized();
    DisableWallClocks();
    DisableTableClocks();
    DisableCustomizedTShirts();
    SANDISK[0].style.display = "flex";
  }
  
  
  function DisableSanDisk() {
    var SANDISK = document.getElementsByClassName("SanDisk");
    SANDISK[0].style.display = "none";
  }
  
  function EnableKingston() {
    var KINGSTON = document.getElementsByClassName("Kingston");
    document.getElementsByClassName("Products-Title")[0].innerHTML = "Kingston USB";
    DisableSanDisk();
    DisableMontBlanc();
    DisableCross();
    DisableEmbassador();
    DisableSenator();
    DisableParker();
    DisableSamsung();
    DisableHP();
    DisableCustomized();
    DisableMugsCustomized();
    DisablePowerBanksRomoss();
    DisablePowerBanksInfinix();
    DisablePowerBanksAnker();
    DisablePowerBanksXiaomi();
    DisablePowerBanksSamsung();
    DisablePowerBanksCustomized();
    DisableWallClocks();
    DisableTableClocks();
    DisableCustomizedTShirts();
    KINGSTON[0].style.display = "flex";
  }
  
  
  function DisableKingston() {
    var KINGSTON = document.getElementsByClassName("Kingston");
    KINGSTON[0].style.display = "none";
  }

  /*DOWN*/
  function EnableHP() {
    var HP = document.getElementsByClassName("HP");
    document.getElementsByClassName("Products-Title")[0].innerHTML = "HP USB";
    DisableSanDisk();
    DisableMontBlanc();
    DisableCross();
    DisableSenator();
    DisableEmbassador();
    DisableParker();
    DisableKingston();
    DisableSamsung();
    DisableMugsCustomized();
    DisableCustomized();
    DisablePowerBanksRomoss();
    DisablePowerBanksXiaomi();
    DisablePowerBanksInfinix();
    DisablePowerBanksAnker();
    DisablePowerBanksSamsung();
    DisablePowerBanksCustomized();
    DisableWallClocks();
    DisableTableClocks();
    DisableCustomizedTShirts();
    HP[0].style.display = "flex";
  }
  
  function DisableHP() {
    var HP = document.getElementsByClassName("HP");
    HP[0].style.display = "none";
  }

  function EnableSamsung() {
    var SAMSUNG = document.getElementsByClassName("Samsung");
    document.getElementsByClassName("Products-Title")[0].innerHTML = "Samsung USB";
    DisableSanDisk();
    DisableMontBlanc();
    DisableCross();
    DisableEmbassador();
    DisableSenator();
    DisableParker();
    DisableKingston();
    DisableHP();
    DisableCustomized();
    DisableMugsCustomized();
    DisablePowerBanksRomoss();
    DisablePowerBanksXiaomi();
    DisablePowerBanksInfinix();
    DisablePowerBanksSamsung();
    DisablePowerBanksAnker();
    DisablePowerBanksCustomized();
    DisableWallClocks();
    DisableTableClocks();
    DisableCustomizedTShirts();
    SAMSUNG[0].style.display = "flex";
  }
  
  function DisableSamsung() {
    var SAMSUNG = document.getElementsByClassName("Samsung");
    SAMSUNG[0].style.display = "none";
  }

  function EnableCustomized() {
    var Custom = document.getElementsByClassName("Customized");
    document.getElementsByClassName("Products-Title")[0].innerHTML = "Customized USB";
    DisableSanDisk();
    DisableMontBlanc();
    DisableCross();
    DisableSenator();
    DisableEmbassador();
    DisableParker();
    DisableKingston();
    DisableHP();
    DisableSamsung();
    DisableMugsCustomized();
    DisablePowerBanksInfinix();
    DisablePowerBanksRomoss();
    DisablePowerBanksAnker();
    DisablePowerBanksSamsung();
    DisablePowerBanksXiaomi();
    DisablePowerBanksCustomized();
    DisableWallClocks();
    DisableTableClocks();
    DisableCustomizedTShirts();
    Custom[0].style.display = "flex";
  }
  
  function DisableCustomized() {
    var Custom = document.getElementsByClassName("Customized");
    Custom[0].style.display = "none";
  }

  function EnableMugsCustomized() {
    var CustomMugs = document.getElementsByClassName("Mugs-Customized");
    document.getElementsByClassName("Products-Title")[0].innerHTML = "Customized Mugs";
    DisableSanDisk();
    DisableMontBlanc();
    DisableCross();
    DisableSenator();
    DisableEmbassador();
    DisableParker();
    DisableKingston();
    DisableHP();
    DisableCustomized();
    DisableSamsung();
    DisablePowerBanksRomoss();
    DisablePowerBanksXiaomi();
    DisablePowerBanksAnker();
    DisablePowerBanksInfinix();
    DisablePowerBanksSamsung();
    DisablePowerBanksCustomized();
    DisableWallClocks();
    DisableTableClocks();
    DisableCustomizedTShirts();
    CustomMugs[0].style.display = "flex";
  }
  
  function DisableMugsCustomized() {
    var CustomMugs = document.getElementsByClassName("Mugs-Customized");
    CustomMugs[0].style.display = "none";
  }

  //DOWN
  function EnablePowerBanksCustomized() {
    var CustomMugs = document.getElementsByClassName("PowerBanks-Customized");
    document.getElementsByClassName("Products-Title")[0].innerHTML = "Customized PowerBanks";
    DisableSanDisk();
    DisableMontBlanc();
    DisableCross();
    DisableSenator();
    DisableEmbassador();
    DisableParker();
    DisableKingston();
    DisableHP();
    DisableCustomized();
    DisableMugsCustomized();
    DisableSamsung();
    DisablePowerBanksRomoss();
    DisablePowerBanksXiaomi();
    DisablePowerBanksAnker();
    DisablePowerBanksSamsung();
    DisablePowerBanksInfinix();
    DisableWallClocks();
    DisableTableClocks();
    DisableCustomizedTShirts();
    CustomMugs[0].style.display = "flex";
  }
  
  function DisablePowerBanksCustomized() {
    var SUBCATEGORY = document.getElementsByClassName("PowerBanks-Customized");
    SUBCATEGORY[0].style.display = "none";
  }

  function EnablePowerBanksSamsung() {
    var SUBCATEGORY = document.getElementsByClassName("PowerBanks-Samsung");
    document.getElementsByClassName("Products-Title")[0].innerHTML = "Samsung PowerBanks";
    DisableSanDisk();
    DisableMontBlanc();
    DisableCross();
    DisableSenator();
    DisableEmbassador();
    DisableParker();
    DisableKingston();
    DisableHP();
    DisableCustomized();
    DisableMugsCustomized();
    DisablePowerBanksCustomized();
    DisableSamsung();
    DisablePowerBanksRomoss();
    DisablePowerBanksXiaomi();
    DisablePowerBanksAnker();
    DisablePowerBanksInfinix();
    DisableWallClocks();
    DisableTableClocks();
    DisableCustomizedTShirts();
    SUBCATEGORY[0].style.display = "flex";
  }
  
  function DisablePowerBanksSamsung() {
    var SUBCATEGORY = document.getElementsByClassName("PowerBanks-Samsung");
    SUBCATEGORY[0].style.display = "none";
  }

  function EnablePowerBanksAnker() {
    var SUBCATEGORY = document.getElementsByClassName("PowerBanks-Anker");
    document.getElementsByClassName("Products-Title")[0].innerHTML = "Anker PowerBanks";
    DisableSanDisk();
    DisableMontBlanc();
    DisableCross();
    DisableSenator();
    DisableEmbassador();
    DisableParker();
    DisableKingston();
    DisableHP();
    DisableCustomized();
    DisableMugsCustomized();
    DisablePowerBanksCustomized();
    DisablePowerBanksSamsung();
    DisableSamsung();
    DisablePowerBanksRomoss();
    DisablePowerBanksXiaomi();
    DisablePowerBanksAnker();
    DisablePowerBanksInfinix();
    DisableWallClocks();
    DisableTableClocks();
    DisableCustomizedTShirts();
    SUBCATEGORY[0].style.display = "flex";
  }
  
  function DisablePowerBanksAnker() {
    var SUBCATEGORY = document.getElementsByClassName("PowerBanks-Anker");
    SUBCATEGORY[0].style.display = "none";
  }

  function EnablePowerBanksXiaomi() {
    var SUBCATEGORY = document.getElementsByClassName("PowerBanks-Xiaomi");
    document.getElementsByClassName("Products-Title")[0].innerHTML = "Xiaomi PowerBanks";
    DisableSanDisk();
    DisableMontBlanc();
    DisableCross();
    DisableSenator();
    DisableEmbassador();
    DisableParker();
    DisableKingston();
    DisableHP();
    DisableCustomized();
    DisableMugsCustomized();
    DisablePowerBanksCustomized();
    DisablePowerBanksSamsung();
    DisableSamsung();
    DisablePowerBanksAnker();
    DisablePowerBanksRomoss();
    DisablePowerBanksInfinix();
    DisableWallClocks();
    DisableTableClocks();
    DisableCustomizedTShirts();
    SUBCATEGORY[0].style.display = "flex";
  }
  
  function DisablePowerBanksXiaomi() {
    var SUBCATEGORY = document.getElementsByClassName("PowerBanks-Xiaomi");
    SUBCATEGORY[0].style.display = "none";
  }

  function EnablePowerBanksRomoss() {
    var SUBCATEGORY = document.getElementsByClassName("PowerBanks-Romoss");
    document.getElementsByClassName("Products-Title")[0].innerHTML = "Romoss PowerBanks";
    DisableSanDisk();
    DisableMontBlanc();
    DisableCross();
    DisableSenator();
    DisableEmbassador();
    DisableParker();
    DisableKingston();
    DisableHP();
    DisableCustomized();
    DisableMugsCustomized();
    DisablePowerBanksCustomized();
    DisablePowerBanksSamsung();
    DisableSamsung();
    DisablePowerBanksAnker();
    DisablePowerBanksXiaomi();
    DisablePowerBanksInfinix();
    DisableWallClocks();
    DisableTableClocks();
    DisableCustomizedTShirts();
    SUBCATEGORY[0].style.display = "flex";
  }
  
  function DisablePowerBanksRomoss() {
    var SUBCATEGORY = document.getElementsByClassName("PowerBanks-Romoss");
    SUBCATEGORY[0].style.display = "none";
  }

  function EnablePowerBanksInfinix() {
    var SUBCATEGORY = document.getElementsByClassName("PowerBanks-Infinix");
    document.getElementsByClassName("Products-Title")[0].innerHTML = "Infinix PowerBanks";
    DisableSanDisk();
    DisableMontBlanc();
    DisableCross();
    DisableSenator();
    DisableEmbassador();
    DisableParker();
    DisableKingston();
    DisableHP();
    DisableCustomized();
    DisableMugsCustomized();
    DisablePowerBanksCustomized();
    DisablePowerBanksSamsung();
    DisableSamsung();
    DisablePowerBanksAnker();
    DisablePowerBanksXiaomi();
    DisablePowerBanksInfinix();
    DisablePowerBanksRomoss();
    DisableWallClocks();
    DisableTableClocks();
    DisableCustomizedTShirts();
    SUBCATEGORY[0].style.display = "flex";
  }
  
  function DisablePowerBanksInfinix() {
    var SUBCATEGORY = document.getElementsByClassName("PowerBanks-Infinix");
    SUBCATEGORY[0].style.display = "none";
  }

  function EnableTableClocks() {
    var SUBCATEGORY = document.getElementsByClassName("Clocks-TableClocks");
    document.getElementsByClassName("Products-Title")[0].innerHTML = "Table Clocks";
    DisableSanDisk();
    DisableMontBlanc();
    DisableCross();
    DisableSenator();
    DisableEmbassador();
    DisableParker();
    DisableKingston();
    DisableHP();
    DisableCustomized();
    DisableMugsCustomized();
    DisablePowerBanksCustomized();
    DisablePowerBanksSamsung();
    DisableSamsung();
    DisablePowerBanksAnker();
    DisablePowerBanksXiaomi();
    DisablePowerBanksRomoss();
    DisablePowerBanksInfinix();
    DisableWallClocks();
    DisableCustomizedTShirts();
    SUBCATEGORY[0].style.display = "flex";
  }
  
  function DisableTableClocks() {
    var SUBCATEGORY = document.getElementsByClassName("Clocks-TableClocks");
    SUBCATEGORY[0].style.display = "none";
  }

  function EnableWallClocks() {
    var SUBCATEGORY = document.getElementsByClassName("Clocks-WallClocks");
    document.getElementsByClassName("Products-Title")[0].innerHTML = "Wall Clocks";
    DisableSanDisk();
    DisableMontBlanc();
    DisableCross();
    DisableSenator();
    DisableEmbassador();
    DisableParker();
    DisableKingston();
    DisableHP();
    DisableCustomized();
    DisableMugsCustomized();
    DisablePowerBanksCustomized();
    DisablePowerBanksSamsung();
    DisableSamsung();
    DisablePowerBanksAnker();
    DisablePowerBanksXiaomi();
    DisablePowerBanksRomoss();
    DisablePowerBanksInfinix();
    DisableTableClocks();
    DisableCustomizedTShirts();
    SUBCATEGORY[0].style.display = "flex";
  }
  
  function DisableWallClocks() {
    var SUBCATEGORY = document.getElementsByClassName("Clocks-WallClocks");
    SUBCATEGORY[0].style.display = "none";
  }

  function EnableCustomizedTShirts() {
    var SUBCATEGORY = document.getElementsByClassName("T-Shirts");
    document.getElementsByClassName("Products-Title")[0].innerHTML = "T-Shirts";
    DisableSanDisk();
    DisableMontBlanc();
    DisableCross();
    DisableSenator();
    DisableEmbassador();
    DisableParker();
    DisableKingston();
    DisableHP();
    DisableCustomized();
    DisableMugsCustomized();
    DisablePowerBanksCustomized();
    DisablePowerBanksSamsung();
    DisableSamsung();
    DisablePowerBanksAnker();
    DisablePowerBanksXiaomi();
    DisablePowerBanksRomoss();
    DisablePowerBanksInfinix();
    DisableWallClocks();
    DisableTableClocks();
    SUBCATEGORY[0].style.display = "flex";
  }
  
  function DisableCustomizedTShirts() {
    var SUBCATEGORY = document.getElementsByClassName("T-Shirts");
    SUBCATEGORY[0].style.display = "none";
  }