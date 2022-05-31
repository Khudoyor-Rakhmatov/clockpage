time();

function time() {

  //User's browser time
  const dateTime = new Date();

  // Thailand Time
  const bangkokTime = dateTime.toLocaleString('en-US', {timeZone:'Asia/Bangkok', timeStyle: 'medium', hourCycle: 'h24'});

  const bangkokHrs = document.getElementById('bangkok-hrs');
  const bangkokMins = document.getElementById('bangkok-mins');
  const bangkokSecs = document.getElementById('bangkok-secs');

  let hoursBangkok = bangkokTime.toString().substring(0, 2) % 24 || 00;
  hoursBangkok = hoursBangkok.toString().padStart(2, "0");
  let minutesBangkok = bangkokTime.toString().substring(3, 5);
  minutesBangkok = minutesBangkok.toString().padStart(2, "0");
  let secondsBangkok = bangkokTime.toString().substring(6, 8);

  bangkokHrs.textContent = hoursBangkok;
  bangkokMins.textContent = minutesBangkok;
  bangkokSecs.textContent = secondsBangkok;


// Manila Time
  const manilaTime = dateTime.toLocaleString('en-US', {timeZone:'Asia/Manila', timeStyle: 'medium', hourCycle: 'h24'});

  const manilaHrs = document.getElementById('manila-hrs');
  const manilaMins = document.getElementById('manila-mins');
  const manilaSecs = document.getElementById('manila-secs');

  let hoursManila = manilaTime.toString().substring(0, 2) % 24 || 00;
  hoursManila = hoursManila.toString().padStart(2, "0");
  let minutesManila = manilaTime.toString().substring(3, 5);
  minutesManila = minutesManila.toString().padStart(2, "0");
  let secondsManila = manilaTime.toString().substring(6, 8);

  manilaHrs.textContent = hoursManila;
  manilaMins.textContent = minutesManila;
  manilaSecs.textContent = secondsManila;

  // Jakarta Time
  const jakartaTime = dateTime.toLocaleString('en-US', {timeZone:'Asia/Jakarta', timeStyle: 'medium', hourCycle: 'h24'});

  const jakartaHrs = document.getElementById('jakarta-hrs');
  const jakartaMins = document.getElementById('jakarta-mins');
  const jakartaSecs = document.getElementById('jakarta-secs');

  let hoursJakarta = jakartaTime.toString().substring(0, 2) % 24 || 00;
  hoursJakarta = hoursJakarta.toString().padStart(2, "0");
  let minutesJakarta = jakartaTime.toString().substring(3, 5);
  minutesJakarta = minutesJakarta.toString().padStart(2, "0");
  let secondsJakarta = jakartaTime.toString().substring(6, 8);

  jakartaHrs.textContent = hoursJakarta;
  jakartaMins.textContent = minutesJakarta;
  jakartaSecs.textContent = secondsJakarta;

  // Dubai Time
  const dubaiTime = dateTime.toLocaleString('en-US', {timeZone:'Asia/Dubai', timeStyle: 'medium', hourCycle: 'h24'});

  const dubaiHrs = document.getElementById('dubai-hrs');
  const dubaiMins = document.getElementById('dubai-mins');
  const dubaiSecs = document.getElementById('dubai-secs');

  let hoursDubai = dubaiTime.toString().substring(0, 2) % 24 || 00;
  hoursDubai = hoursDubai.toString().padStart(2, "0");
  let minutesDubai = dubaiTime.toString().substring(3, 5);
  minutesDubai = minutesDubai.toString().padStart(2, "0");
  let secondsDubai = dubaiTime.toString().substring(6, 8);

  dubaiHrs.textContent = hoursDubai;
  dubaiMins.textContent = minutesDubai;
  dubaiSecs.textContent = secondsDubai;

  // Yangon Time
  const yangonTime = dateTime.toLocaleString('en-US', {timeZone:'Asia/Yangon', timeStyle: 'medium', hourCycle: 'h24'});

  const yangonHrs = document.getElementById('yangon-hrs');
  const yangonMins = document.getElementById('yangon-mins');
  const yangonSecs = document.getElementById('yangon-secs');

  let hoursYangon = yangonTime.toString().substring(0, 2) % 24 || 00;
  hoursYangon = hoursYangon.toString().padStart(2, "0");
  let minutesYangon = yangonTime.toString().substring(3, 5);
  minutesYangon = minutesYangon.toString().padStart(2, "0");
  let secondsYangon = yangonTime.toString().substring(6, 8);

  yangonHrs.textContent = hoursYangon;
  yangonMins.textContent = minutesYangon;
  yangonSecs.textContent = secondsYangon;

  // Guayaquil Time
  const guayaquilTime = dateTime.toLocaleString('en-US', {timeZone:'America/Guayaquil', timeStyle: 'medium', hourCycle: 'h24'});

  const guayaquilHrs = document.getElementById('guayaquil-hrs');
  const guayaquilMins = document.getElementById('guayaquil-mins');
  const guayaquilSecs = document.getElementById('guayaquil-secs');

  let hoursGuayaquil = guayaquilTime.toString().substring(0, 2) % 24 || 00;
  hoursGuayaquil = hoursGuayaquil.toString().padStart(2, "0");
  let minutesGuayaquil = guayaquilTime.toString().substring(3, 5);
  minutesGuayaquil = minutesGuayaquil.toString().padStart(2, "0");
  let secondsGuayaquil = guayaquilTime.toString().substring(6, 8);

  guayaquilHrs.textContent = hoursGuayaquil;
  guayaquilMins.textContent = minutesGuayaquil;
  guayaquilSecs.textContent = secondsGuayaquil;
  
  // Phnom Penh Time
  const phnompenhTime = dateTime.toLocaleString('en-US', {timeZone:'Asia/Phnom_Penh', timeStyle: 'medium', hourCycle: 'h24'});

  const phnompenhHrs = document.getElementById('phnom_penh-hrs');
  const phnompenhMins = document.getElementById('phnom_penh-mins');
  const phnompenhSecs = document.getElementById('phnom_penh-secs');

  let hoursPhnomPenh = phnompenhTime.toString().substring(0, 2) % 24 || 00;
  hoursPhnomPenh = hoursPhnomPenh.toString().padStart(2, "0");
  let minutesPhnomPenh = phnompenhTime.toString().substring(3, 5);
  minutesPhnomPenh = minutesPhnomPenh.toString().padStart(2, "0");
  let secondsPhnomPenh = phnompenhTime.toString().substring(6, 8);

  phnompenhHrs.textContent = hoursPhnomPenh;
  phnompenhMins.textContent = minutesPhnomPenh;
  phnompenhSecs.textContent = secondsPhnomPenh;

}

setInterval(time, 1000);
