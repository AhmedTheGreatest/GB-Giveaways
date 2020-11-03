
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
    if (location.hash === "#Products-Customized-Keychains") {
      EnableCustomizedKeychains();
    }
    if (location.hash === "#Products-EmergencyLights") {
      EnableEL();
    }
    if (location.hash === "#Products-Torches") {
      EnableTorches();
    }
    if (location.hash === "#Products-LeatherWallets") {
      EnableLeatherWallets();
    }
    if (location.hash === "#Products-LeatherMousePads") {
      EnableLeatherMousePads();
    }
    if (location.hash === "#Products-LeatherPhoneCovers") {
      EnableLeatherPhoneCovers();
    }
    if (location.hash === "#Products-LeatherSets") {
      EnableLeatherSets();
    }
    if (location.hash === "#Products-LeatherLaptopBags") {
      EnableLeatherLaptopBags();
    }
    if (location.hash === "#Products-Masks") {
      EnableMasks();
    }
    if (location.hash === "#Products-Gloves") {
      EnableGloves();
    }
    if (location.hash === "#Products-Thermometer") {
      EnableThermometer();
    }
    if (location.hash === "#Products-TableCalendars") {
      EnableTableCalendars();
    }
    if (location.hash === "#Products-WallCalendars") {
      EnableWallCalendars();      
    }
    if (location.hash === "#Products-Diaries") {
      EnableDiary();
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
    DisableEL();
    DisableCustomizedKeychains();
    DisableLeatherSets();
    DisableLeatherMousePads();
    DisableLeatherPhoneCovers();
    DisableLeatherWallets();
    DisableLeatherLaptopBags();
    DisableMasks();
    DisableGloves();
    DisableThermometer();
    DisableTableCalendars();
    DisableWallCalendars();
    DisableDiary();
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
    DisableEL();
    DisableCustomizedKeychains();
    DisableLeatherSets();
    DisableLeatherMousePads();
    DisableLeatherPhoneCovers();
    DisableLeatherWallets();
    DisableLeatherLaptopBags();
    DisableMasks();
    DisableGloves();
    DisableThermometer();
    DisableTableCalendars();
    DisableWallCalendars();
    DisableDiary();
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
    DisableEL();
    DisableCustomizedKeychains();
    DisableLeatherSets();
    DisableLeatherMousePads();
    DisableLeatherPhoneCovers();
    DisableLeatherWallets();
    DisableLeatherLaptopBags();
    DisableMasks();
    DisableGloves();
    DisableThermometer();
    DisableTableCalendars();
    DisableWallCalendars();
    DisableDiary();
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
    DisableEL();
    DisableCustomizedKeychains();
    DisableLeatherSets();
    DisableLeatherMousePads();
    DisableLeatherPhoneCovers();
    DisableLeatherWallets();
    DisableLeatherLaptopBags();
    DisableMasks();
    DisableGloves();
    DisableThermometer();
    DisableTableCalendars();
    DisableWallCalendars();
    DisableDiary();
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
    DisableCustomizedKeychains();
    DisableTorches();
    DisableEL();
    DisableLeatherSets();
    DisableLeatherMousePads();
    DisableLeatherPhoneCovers();
    DisableLeatherWallets();
    DisableLeatherLaptopBags();
    DisableMasks();
    DisableGloves();
    DisableThermometer();
    DisableTableCalendars();
    DisableWallCalendars();
    DisableDiary();
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
    DisableCustomizedKeychains();
    DisableTorches();
    DisableEL();
    DisableLeatherSets();
    DisableLeatherMousePads();
    DisableLeatherPhoneCovers();
    DisableLeatherWallets();
    DisableLeatherLaptopBags();
    DisableMasks();
    DisableGloves();
    DisableThermometer();
    DisableTableCalendars();
    DisableWallCalendars();
    DisableDiary();
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
    DisableCustomizedKeychains();
    DisableTorches();
    DisableEL();
    DisableLeatherSets();
    DisableLeatherMousePads();
    DisableLeatherPhoneCovers();
    DisableLeatherWallets();
    DisableLeatherLaptopBags();
    DisableMasks();
    DisableGloves();
    DisableThermometer();
    DisableTableCalendars();
    DisableWallCalendars();
    DisableDiary();
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
    DisableCustomizedKeychains();
    DisableTorches();
    DisableEL();
    DisableLeatherSets();
    DisableLeatherMousePads();
    DisableLeatherPhoneCovers();
    DisableLeatherWallets();
    DisableLeatherLaptopBags();
    DisableMasks();
    DisableGloves();
    DisableThermometer();
    DisableTableCalendars();
    DisableWallCalendars();
    DisableDiary();
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
    DisableCustomizedKeychains();
    DisableTorches();
    DisableEL();
    DisableLeatherSets();
    DisableLeatherMousePads();
    DisableLeatherPhoneCovers();
    DisableLeatherWallets();
    DisableLeatherLaptopBags();
    DisableMasks();
    DisableGloves();
    DisableThermometer();
    DisableTableCalendars();
    DisableWallCalendars();
    DisableDiary();
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
    DisableCustomizedKeychains();
    DisableTorches();
    DisableEL();
    DisableLeatherSets();
    DisableLeatherMousePads();
    DisableLeatherPhoneCovers();
    DisableLeatherWallets();
    DisableLeatherLaptopBags();
    DisableMasks();
    DisableGloves();
    DisableThermometer();
    DisableTableCalendars();
    DisableWallCalendars();
    DisableDiary();
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
    DisableCustomizedKeychains();
    DisableCustomizedTShirts();
    DisableTorches();
    DisableEL();
    DisableLeatherSets();
    DisableLeatherMousePads();
    DisableLeatherPhoneCovers();
    DisableLeatherWallets();
    DisableLeatherLaptopBags();
    DisableMasks();
    DisableGloves();
    DisableThermometer();
    DisableTableCalendars();
    DisableWallCalendars();
    DisableDiary();
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
    DisableCustomizedKeychains();
    DisableTorches();
    DisableEL();
    DisableLeatherSets();
    DisableLeatherMousePads();
    DisableLeatherPhoneCovers();
    DisableLeatherWallets();
    DisableLeatherLaptopBags();
    DisableMasks();
    DisableGloves();
    DisableThermometer();
    DisableTableCalendars();
    DisableWallCalendars();
    DisableDiary();
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
    DisableCustomizedKeychains();
    DisableTorches();
    DisableEL();
    DisableLeatherSets();
    DisableLeatherMousePads();
    DisableLeatherPhoneCovers();
    DisableLeatherWallets();
    DisableLeatherLaptopBags();
    DisableMasks();
    DisableGloves();
    DisableThermometer();
    DisableTableCalendars();
    DisableWallCalendars();
    DisableDiary();
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
    DisableCustomizedKeychains();
    DisableTorches();
    DisableEL();
    DisableLeatherSets();
    DisableLeatherMousePads();
    DisableLeatherPhoneCovers();
    DisableLeatherWallets();
    DisableLeatherLaptopBags();
    DisableMasks();
    DisableGloves();
    DisableThermometer();
    DisableTableCalendars();
    DisableWallCalendars();
    DisableDiary();
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
    DisableCustomizedKeychains();
    DisableTorches();
    DisableEL();
    DisableLeatherSets();
    DisableLeatherMousePads();
    DisableLeatherPhoneCovers();
    DisableLeatherWallets();
    DisableLeatherLaptopBags();
    DisableMasks();
    DisableGloves();
    DisableThermometer();
    DisableTableCalendars();
    DisableWallCalendars();
    DisableDiary();
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
    DisableCustomizedKeychains();
    DisableTorches();
    DisableEL();
    DisableLeatherSets();
    DisableLeatherMousePads();
    DisableLeatherPhoneCovers();
    DisableLeatherWallets();
    DisableLeatherLaptopBags();
    DisableMasks();
    DisableGloves();
    DisableThermometer();
    DisableTableCalendars();
    DisableWallCalendars();
    DisableDiary();
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
    DisableCustomizedKeychains();
    DisableTorches();
    DisableEL();
    DisableLeatherSets();
    DisableLeatherMousePads();
    DisableLeatherPhoneCovers();
    DisableLeatherWallets();
    DisableLeatherLaptopBags();
    DisableMasks();
    DisableGloves();
    DisableThermometer();
    DisableTableCalendars();
    DisableWallCalendars();
    DisableDiary();
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
    DisableCustomizedKeychains();
    DisableTorches();
    DisableEL();
    DisableLeatherSets();
    DisableLeatherMousePads();
    DisableLeatherPhoneCovers();
    DisableLeatherWallets();
    DisableLeatherLaptopBags();
    DisableMasks();
    DisableGloves();
    DisableThermometer();
    DisableTableCalendars();
    DisableWallCalendars();
    DisableDiary();
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
    DisableCustomizedKeychains();
    DisableTorches();
    DisableEL();
    DisableLeatherSets();
    DisableLeatherMousePads();
    DisableLeatherPhoneCovers();
    DisableLeatherWallets();
    DisableLeatherLaptopBags();
    DisableMasks();
    DisableGloves();
    DisableThermometer();
    DisableTableCalendars();
    DisableWallCalendars();
    DisableDiary();
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
    DisableTableClocks()
    DisableCustomizedKeychains();
    DisableTorches();
    DisableEL();
    DisableLeatherSets();
    DisableLeatherMousePads();
    DisableLeatherPhoneCovers();
    DisableLeatherWallets();
    DisableLeatherLaptopBags();
    DisableMasks();
    DisableGloves();
    DisableThermometer();
    DisableTableCalendars();
    DisableWallCalendars();
    DisableDiary();
    SUBCATEGORY[0].style.display = "flex";
  }
  
  function DisableCustomizedTShirts() {
    var SUBCATEGORY = document.getElementsByClassName("T-Shirts");
    SUBCATEGORY[0].style.display = "none";
  }

  function EnableCustomizedKeychains() {
    var SUBCATEGORY = document.getElementsByClassName("Keychains-Customized");
    document.getElementsByClassName("Products-Title")[0].innerHTML = "Keychains";
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
    DisableCustomizedTShirts();
    DisableTorches();
    DisableEL();
    DisableLeatherSets();
    DisableLeatherMousePads();
    DisableLeatherPhoneCovers();
    DisableLeatherWallets();
    DisableLeatherLaptopBags();
    DisableMasks();
    DisableGloves();
    DisableThermometer();
    DisableTableCalendars();
    DisableWallCalendars();
    DisableDiary();
    SUBCATEGORY[0].style.display = "flex";
  }
  
  function DisableCustomizedKeychains() {
    var SUBCATEGORY = document.getElementsByClassName("Keychains-Customized");
    SUBCATEGORY[0].style.display = "none";
  }

  function EnableTorches() {
    var SUBCATEGORY = document.getElementsByClassName("Torches");
    document.getElementsByClassName("Products-Title")[0].innerHTML = "Torches";
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
    DisableCustomizedTShirts();
    DisableCustomizedKeychains();
    DisableEL();
    DisableLeatherSets();
    DisableLeatherMousePads();
    DisableLeatherPhoneCovers();
    DisableLeatherWallets();
    DisableLeatherLaptopBags();
    DisableMasks();
    DisableGloves();
    DisableThermometer();
    DisableTableCalendars();
    DisableWallCalendars();
    DisableDiary();
    SUBCATEGORY[0].style.display = "flex";
  }
  
  function DisableTorches() {
    var SUBCATEGORY = document.getElementsByClassName("Torches");
    SUBCATEGORY[0].style.display = "none";
  }

  function EnableEL() {
    var SUBCATEGORY = document.getElementsByClassName("Emergency Lights");
    document.getElementsByClassName("Products-Title")[0].innerHTML = "Emergency Lights";
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
    DisableCustomizedTShirts();
    DisableCustomizedKeychains();
    DisableTorches();
    DisableLeatherSets();
    DisableLeatherMousePads();
    DisableLeatherPhoneCovers();
    DisableLeatherWallets();
    DisableLeatherLaptopBags();
    DisableMasks();
    DisableGloves();
    DisableThermometer();
    DisableTableCalendars();
    DisableWallCalendars();
    DisableDiary();
    SUBCATEGORY[0].style.display = "flex";
  }
  
  function DisableEL() {
    var SUBCATEGORY = document.getElementsByClassName("Emergency Lights");
    SUBCATEGORY[0].style.display = "none";
  }

  function EnableLeatherWallets() {
    var SUBCATEGORY = document.getElementsByClassName("Leather-Wallets");
    document.getElementsByClassName("Products-Title")[0].innerHTML = "Leather Wallets";
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
    DisableCustomizedTShirts();
    DisableCustomizedKeychains();
    DisableTorches();
    DisableEL();
    DisableLeatherSets();
    DisableLeatherMousePads();
    DisableLeatherPhoneCovers();
    DisableLeatherLaptopBags();
    DisableMasks();
    DisableGloves();
    DisableThermometer();
    DisableTableCalendars();
    DisableWallCalendars();
    DisableDiary();
    SUBCATEGORY[0].style.display = "flex";
  }
  
  function DisableLeatherWallets() {
    var SUBCATEGORY = document.getElementsByClassName("Leather-Wallets");
    SUBCATEGORY[0].style.display = "none";
  }
  
  function EnableLeatherPhoneCovers() {
    var SUBCATEGORY = document.getElementsByClassName("Leather-Phone-Covers");
    document.getElementsByClassName("Products-Title")[0].innerHTML = "Leather Phone Covers";
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
    DisableCustomizedTShirts();
    DisableCustomizedKeychains();
    DisableTorches();
    DisableEL();
    DisableLeatherWallets();
    DisableLeatherSets();
    DisableLeatherMousePads();
    DisableLeatherLaptopBags();
    DisableMasks();
    DisableGloves();
    DisableThermometer();
    DisableTableCalendars();
    DisableWallCalendars();
    DisableDiary();
    SUBCATEGORY[0].style.display = "flex";
  }
  
  function DisableLeatherPhoneCovers() {
    var SUBCATEGORY = document.getElementsByClassName("Leather-Phone-Covers");
    SUBCATEGORY[0].style.display = "none";
  }

  function EnableLeatherMousePads() {
    var SUBCATEGORY = document.getElementsByClassName("Leather-MousePads");
    document.getElementsByClassName("Products-Title")[0].innerHTML = "Leather Mouse Pads";
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
    DisableCustomizedTShirts();
    DisableCustomizedKeychains();
    DisableTorches();
    DisableEL();
    DisableLeatherWallets();
    DisableLeatherPhoneCovers();
    DisableLeatherSets();
    DisableLeatherLaptopBags();
    DisableMasks();
    DisableGloves();
    DisableThermometer();
    DisableTableCalendars();
    DisableWallCalendars();
    DisableDiary();
    SUBCATEGORY[0].style.display = "flex";
  }
  
  function DisableLeatherMousePads() {
    var SUBCATEGORY = document.getElementsByClassName("Leather-MousePads");
    SUBCATEGORY[0].style.display = "none";
  }

  function EnableLeatherSets() {
    var SUBCATEGORY = document.getElementsByClassName("Leather-Sets");
    document.getElementsByClassName("Products-Title")[0].innerHTML = "Leather Sets";
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
    DisableCustomizedTShirts();
    DisableCustomizedKeychains();
    DisableTorches();
    DisableEL();
    DisableLeatherWallets();
    DisableLeatherPhoneCovers();
    DisableLeatherMousePads();
    DisableLeatherLaptopBags();
    DisableMasks();
    DisableGloves();
    DisableThermometer();
    DisableTableCalendars();
    DisableWallCalendars();
    DisableDiary();
    SUBCATEGORY[0].style.display = "flex";
  }
  
  function DisableLeatherSets() {
    var SUBCATEGORY = document.getElementsByClassName("Leather-Sets");
    SUBCATEGORY[0].style.display = "none";
  }

  function EnableLeatherLaptopBags() {
    var SUBCATEGORY = document.getElementsByClassName("Leather-LaptopBags");
    document.getElementsByClassName("Products-Title")[0].innerHTML = "Leather Laptop Bags";
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
    DisableCustomizedTShirts();
    DisableCustomizedKeychains();
    DisableTorches();
    DisableEL();
    DisableLeatherWallets();
    DisableLeatherPhoneCovers();
    DisableLeatherMousePads();
    DisableLeatherSets();
    DisableMasks();
    DisableGloves();
    DisableThermometer();
    DisableTableCalendars();
    DisableWallCalendars();
    DisableDiary();
    SUBCATEGORY[0].style.display = "flex";
  }
  
  function DisableLeatherLaptopBags() {
    var SUBCATEGORY = document.getElementsByClassName("Leather-LaptopBags");
    SUBCATEGORY[0].style.display = "none";
  }

  function EnableMasks() {
    var SUBCATEGORY = document.getElementsByClassName("Masks");
    document.getElementsByClassName("Products-Title")[0].innerHTML = "Masks";
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
    DisableCustomizedTShirts();
    DisableCustomizedKeychains();
    DisableTorches();
    DisableEL();
    DisableLeatherWallets();
    DisableLeatherPhoneCovers();
    DisableLeatherMousePads();
    DisableLeatherSets();
    DisableLeatherLaptopBags();
    DisableGloves();
    DisableThermometer();
    DisableTableCalendars();
    DisableWallCalendars();
    DisableDiary();
    SUBCATEGORY[0].style.display = "flex";
  }
  
  function DisableMasks() {
    var SUBCATEGORY = document.getElementsByClassName("Masks");
    SUBCATEGORY[0].style.display = "none";
  }

  function EnableGloves() {
    var SUBCATEGORY = document.getElementsByClassName("Gloves");
    document.getElementsByClassName("Products-Title")[0].innerHTML = "Gloves";
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
    DisableCustomizedTShirts();
    DisableCustomizedKeychains();
    DisableTorches();
    DisableEL();
    DisableLeatherWallets();
    DisableLeatherPhoneCovers();
    DisableLeatherMousePads();
    DisableLeatherSets();
    DisableLeatherLaptopBags();
    DisableMasks();
    DisableThermometer();
    DisableTableCalendars();
    DisableWallCalendars();
    DisableDiary();
    SUBCATEGORY[0].style.display = "flex";
  }
  
  function DisableGloves() {
    var SUBCATEGORY = document.getElementsByClassName("Gloves");
    SUBCATEGORY[0].style.display = "none";
  }

  function EnableThermometer() {
    var SUBCATEGORY = document.getElementsByClassName("Thermometer");
    document.getElementsByClassName("Products-Title")[0].innerHTML = "Thermometer";
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
    DisableCustomizedTShirts();
    DisableCustomizedKeychains();
    DisableTorches();
    DisableEL();
    DisableLeatherWallets();
    DisableLeatherPhoneCovers();
    DisableLeatherMousePads();
    DisableLeatherSets();
    DisableLeatherLaptopBags();
    DisableMasks();
    DisableGloves();
    DisableTableCalendars();
    DisableWallCalendars();
    DisableDiary();
    SUBCATEGORY[0].style.display = "flex";
  }
  
  function DisableThermometer() {
    var SUBCATEGORY = document.getElementsByClassName("Thermometer");
    SUBCATEGORY[0].style.display = "none";
  }

  function EnableTableCalendars() {
    var SUBCATEGORY = document.getElementsByClassName("Table-Calendars");
    document.getElementsByClassName("Products-Title")[0].innerHTML = "Table Calendars";
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
    DisableCustomizedTShirts();
    DisableCustomizedKeychains();
    DisableTorches();
    DisableEL();
    DisableLeatherWallets();
    DisableLeatherPhoneCovers();
    DisableLeatherMousePads();
    DisableLeatherSets();
    DisableLeatherLaptopBags();
    DisableMasks();
    DisableGloves();
    DisableThermometer();
    DisableWallCalendars();
    DisableDiary();
    SUBCATEGORY[0].style.display = "flex";
  }
  
  function DisableTableCalendars() {
    var SUBCATEGORY = document.getElementsByClassName("Table-Calendars");
    SUBCATEGORY[0].style.display = "none";
  }

  function EnableWallCalendars() {
    var SUBCATEGORY = document.getElementsByClassName("Wall-Calendars");
    document.getElementsByClassName("Products-Title")[0].innerHTML = "Wall Calendars";
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
    DisableCustomizedTShirts();
    DisableCustomizedKeychains();
    DisableTorches();
    DisableEL();
    DisableLeatherWallets();
    DisableLeatherPhoneCovers();
    DisableLeatherMousePads();
    DisableLeatherSets();
    DisableLeatherLaptopBags();
    DisableMasks();
    DisableGloves();
    DisableThermometer();
    DisableTableCalendars();
    DisableDiary();
    SUBCATEGORY[0].style.display = "flex";
  }
  
  function DisableWallCalendars() {
    var SUBCATEGORY = document.getElementsByClassName("Wall-Calendars");
    SUBCATEGORY[0].style.display = "none";
  }

  function EnableDiary() {
    var SUBCATEGORY = document.getElementsByClassName("Diary");
    document.getElementsByClassName("Products-Title")[0].innerHTML = "Diary";
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
    DisableCustomizedTShirts();
    DisableCustomizedKeychains();
    DisableTorches();
    DisableEL();
    DisableLeatherWallets();
    DisableLeatherPhoneCovers();
    DisableLeatherMousePads();
    DisableLeatherSets();
    DisableLeatherLaptopBags();
    DisableMasks();
    DisableGloves();
    DisableThermometer();
    DisableTableCalendars();
    DisableWallCalendars();
    SUBCATEGORY[0].style.display = "flex";
  }
  
  function DisableDiary() {
    var SUBCATEGORY = document.getElementsByClassName("Diary");
    SUBCATEGORY[0].style.display = "none";
  }