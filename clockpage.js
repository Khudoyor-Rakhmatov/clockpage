time();

function time() {

  //User's browser time
  const dateTime = new Date();
  // let h = dateTime.getHours();
  // let m = dateTime.getMinutes().toString().padStart(2, "0");
  // let s = dateTime.getSeconds().toString().padStart(2, "0");;
  // let sessions = document.getElementById('localsessions');

  // if (h >= 12) {
  //   h = h % 12 || 12;
  //   h = h.toString().padStart(2, "0");
  //   sessions.innerHTML = 'PM';
  // } else {
  //   sessions.innerHTML = 'AM';
  // }

  // let hours = document.getElementById('localhrs');
  // let minutes = document.getElementById('localmins');
  // let seconds = document.getElementById('localsecs');
  

  // hours.innerHTML = h;
  // minutes.innerHTML = m;
  // seconds.innerHTML = s;

  // Thailand Time
  const bangkokTime = dateTime.toLocaleString('en-US', {timeZone:'Asia/Bangkok', timeStyle: 'medium', hourCycle: 'h24'});

  const bangkokHrs = document.getElementById('bangkok-hrs');
  const bangkokMins = document.getElementById('bangkok-mins');
  const bangkokSecs = document.getElementById('bangkok-secs');

  let hoursBangkok = bangkokTime.toString().substring(0, 2);
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

  let hoursManila = manilaTime.toString().substring(0, 2);
  hoursManila = hoursManila.toString().padStart(2, "0");
  let minutesManila = manilaTime.toString().substring(3, 5);
  minutesManila = minutesManila.toString().padStart(2, "0");
  let secondsManila = manilaTime.toString().substring(6, 8);

  manilaHrs.textContent = hoursManila;
  manilaMins.textContent = minutesManila;
  manilaSecs.textContent = secondsManila;

  // Manila Time
  const jakartaTime = dateTime.toLocaleString('en-US', {timeZone:'Asia/Jakarta', timeStyle: 'medium', hourCycle: 'h24'});

  const jakartaHrs = document.getElementById('jakarta-hrs');
  const jakartaMins = document.getElementById('jakarta-mins');
  const jakartaSecs = document.getElementById('jakarta-secs');

  let hoursJakarta = jakartaTime.toString().substring(0, 2);
  hoursJakarta = hoursJakarta.toString().padStart(2, "0");
  let minutesJakarta = jakartaTime.toString().substring(3, 5);
  minutesJakarta = minutesJakarta.toString().padStart(2, "0");
  let secondsJakarta = jakartaTime.toString().substring(6, 8);

  jakartaHrs.textContent = hoursJakarta;
  jakartaMins.textContent = minutesJakarta;
  jakartaSecs.textContent = secondsJakarta;


  const dubaiTime = dateTime.toLocaleString('en-US', {timeZone:'Asia/Dubai', timeStyle: 'medium', hourCycle: 'h24'});

  const dubaiHrs = document.getElementById('dubai-hrs');
  const dubaiMins = document.getElementById('dubai-mins');
  const dubaiSecs = document.getElementById('dubai-secs');

  let hoursDubai = dubaiTime.toString().substring(0, 2);
  hoursDubai = hoursDubai.toString().padStart(2, "0");
  let minutesDubai = dubaiTime.toString().substring(3, 5);
  minutesDubai = minutesDubai.toString().padStart(2, "0");
  let secondsDubai = dubaiTime.toString().substring(6, 8);

  dubaiHrs.textContent = hoursDubai;
  dubaiMins.textContent = minutesDubai;
  dubaiSecs.textContent = secondsDubai;

  const yangonTime = dateTime.toLocaleString('en-US', {timeZone:'Asia/Yangon', timeStyle: 'medium', hourCycle: 'h24'});

  const yangonHrs = document.getElementById('yangon-hrs');
  const yangonMins = document.getElementById('yangon-mins');
  const yangonSecs = document.getElementById('yangon-secs');

  let hoursYangon = yangonTime.toString().substring(0, 2);
  hoursYangon = hoursYangon.toString().padStart(2, "0");
  let minutesYangon = yangonTime.toString().substring(3, 5);
  minutesYangon = minutesYangon.toString().padStart(2, "0");
  let secondsYangon = yangonTime.toString().substring(6, 8);

  yangonHrs.textContent = hoursYangon;
  yangonMins.textContent = minutesYangon;
  yangonSecs.textContent = secondsYangon;

}

setInterval(time, 1000);
