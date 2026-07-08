/* ===================================================================
   LC TRANSPORTATION CO. -- site-wide script
   =================================================================== */

// ---------- FLEET DATA ----------
var fleet = {
  camry: {
    tag: "Executive Sedan", name: "2026 Toyota Camry",
    desc: "Our standard for-hire sedan -- quiet, comfortable, and immaculately maintained. Ideal for solo travelers, business trips, and short hops around LIC and Manhattan.",
    pax: "4", bags: "3", base: "$45", best: "City & Airport",
    svg: '<svg viewBox="0 0 300 130" xmlns="http://www.w3.org/2000/svg">' +
      '<defs><linearGradient id="body1" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0%" stop-color="#5a5a5a"/><stop offset="45%" stop-color="#1c1c1c"/><stop offset="100%" stop-color="#000"/>' +
      '</linearGradient></defs>' +
      '<ellipse cx="150" cy="115" rx="130" ry="8" fill="#000" opacity=".35"/>' +
      '<path d="M20,95 Q25,55 70,50 Q95,25 150,25 Q205,25 235,50 Q275,55 280,95 Z" fill="url(#body1)" stroke="#000" stroke-width="2"/>' +
      '<path d="M85,50 Q105,32 150,32 Q195,32 215,50 Z" fill="#0a0a0a" stroke="#333"/>' +
      '<rect x="20" y="88" width="260" height="10" fill="#050505"/>' +
      '<circle cx="75" cy="98" r="17" fill="#111" stroke="#555" stroke-width="3"/>' +
      '<circle cx="225" cy="98" r="17" fill="#111" stroke="#555" stroke-width="3"/>' +
      '<rect x="30" y="60" width="240" height="6" fill="rgba(255,255,255,.25)" rx="3"/>' +
      '</svg>'
  },
  rav4: {
    tag: "Compact SUV", name: "2026 Toyota RAV4",
    desc: "A step up in space without sacrificing agility. Great for small groups, extra luggage, or riders who prefer a higher ride.",
    pax: "4", bags: "4", base: "$55", best: "City & Suburbs",
    svg: '<svg viewBox="0 0 300 140" xmlns="http://www.w3.org/2000/svg">' +
      '<defs><linearGradient id="body2" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0%" stop-color="#5a5a5a"/><stop offset="45%" stop-color="#1c1c1c"/><stop offset="100%" stop-color="#000"/>' +
      '</linearGradient></defs>' +
      '<ellipse cx="150" cy="122" rx="132" ry="8" fill="#000" opacity=".35"/>' +
      '<path d="M18,100 Q20,50 65,45 Q90,18 150,18 Q210,18 235,45 Q280,50 282,100 Z" fill="url(#body2)" stroke="#000" stroke-width="2"/>' +
      '<path d="M80,45 Q102,26 150,26 Q198,26 220,45 Z" fill="#0a0a0a" stroke="#333"/>' +
      '<rect x="18" y="92" width="264" height="12" fill="#050505"/>' +
      '<circle cx="78" cy="106" r="19" fill="#111" stroke="#555" stroke-width="3"/>' +
      '<circle cx="222" cy="106" r="19" fill="#111" stroke="#555" stroke-width="3"/>' +
      '<rect x="28" y="55" width="244" height="6" fill="rgba(255,255,255,.25)" rx="3"/>' +
      '</svg>'
  },
  highlander: {
    tag: "Full-Size SUV", name: "2026 Toyota Highlander",
    desc: "Maximum room for up to 6 passengers with full luggage. The choice for group airport runs and family travel across the city.",
    pax: "6", bags: "6", base: "$65", best: "Groups & Airports",
    svg: '<svg viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg">' +
      '<defs><linearGradient id="body3" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0%" stop-color="#5a5a5a"/><stop offset="45%" stop-color="#1c1c1c"/><stop offset="100%" stop-color="#000"/>' +
      '</linearGradient></defs>' +
      '<ellipse cx="150" cy="130" rx="135" ry="9" fill="#000" opacity=".35"/>' +
      '<path d="M15,108 Q17,45 60,40 Q85,12 150,12 Q215,12 240,40 Q283,45 285,108 Z" fill="url(#body3)" stroke="#000" stroke-width="2"/>' +
      '<path d="M75,40 Q100,20 150,20 Q200,20 225,40 Z" fill="#0a0a0a" stroke="#333"/>' +
      '<rect x="15" y="98" width="270" height="14" fill="#050505"/>' +
      '<circle cx="80" cy="114" r="21" fill="#111" stroke="#555" stroke-width="3"/>' +
      '<circle cx="220" cy="114" r="21" fill="#111" stroke="#555" stroke-width="3"/>' +
      '<rect x="25" y="50" width="250" height="6" fill="rgba(255,255,255,.25)" rx="3"/>' +
      '</svg>'
  },
  sienna: {
    tag: "Minivan", name: "2026 Toyota Sienna",
    desc: "Maximum passenger and cargo capacity in one vehicle. Perfect for families, larger groups, and airport runs with heavy luggage.",
    pax: "7", bags: "7", base: "$75", best: "Families & Large Groups",
    svg: '<svg viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg">' +
      '<defs><linearGradient id="body4" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0%" stop-color="#5a5a5a"/><stop offset="45%" stop-color="#1c1c1c"/><stop offset="100%" stop-color="#000"/>' +
      '</linearGradient></defs>' +
      '<ellipse cx="150" cy="130" rx="138" ry="9" fill="#000" opacity=".35"/>' +
      '<path d="M14,110 Q16,40 55,36 Q80,14 150,14 Q220,14 245,36 Q284,40 286,110 Z" fill="url(#body4)" stroke="#000" stroke-width="2"/>' +
      '<path d="M65,36 Q95,22 150,22 Q205,22 235,36 Z" fill="#0a0a0a" stroke="#333"/>' +
      '<rect x="14" y="100" width="272" height="14" fill="#050505"/>' +
      '<circle cx="82" cy="116" r="21" fill="#111" stroke="#555" stroke-width="3"/>' +
      '<circle cx="218" cy="116" r="21" fill="#111" stroke="#555" stroke-width="3"/>' +
      '<rect x="24" y="48" width="252" height="6" fill="rgba(255,255,255,.25)" rx="3"/>' +
      '</svg>'
  }
};

function loadCar(key){
  var c = fleet[key];
  if(!c) return;
  document.getElementById('carTag').textContent = c.tag;
  document.getElementById('carName').textContent = c.name;
  document.getElementById('carDesc').textContent = c.desc;
  document.getElementById('carPax').textContent = c.pax;
  document.getElementById('carBags').textContent = c.bags;
  document.getElementById('carBase').textContent = c.base;
  document.getElementById('carBest').textContent = c.best;
  document.getElementById('carStage').innerHTML = c.svg;
}

document.addEventListener('DOMContentLoaded', function(){

  // ---------- FLEET TABS (fleet.html) ----------
  var tabs = document.querySelectorAll('.fleet-tab');
  if(tabs.length){
    tabs.forEach(function(tab){
      tab.addEventListener('click', function(){
        tabs.forEach(function(t){ t.classList.remove('active'); });
        tab.classList.add('active');
        loadCar(tab.dataset.car);
      });
    });
    loadCar('camry');
  }

  // ---------- FARE ESTIMATOR (estimate.html) ----------
  var calcBtn = document.getElementById('calcBtn');
  if(calcBtn){
    calcBtn.addEventListener('click', function(){
      var base = parseFloat(document.getElementById('estCar').value);
      var mult = parseFloat(document.getElementById('estTrip').value);
      var miles = parseFloat(document.getElementById('estMiles').value) || 1;
      var total = Math.round((base + miles * 2.75) * mult);
      document.getElementById('estAmt').textContent = '$' + total;
    });
  }

  // ---------- GUESTBOOK / TESTIMONIAL AUTO-HIGHLIGHT (reviews.html) ----------
  var entries = document.querySelectorAll('.gbentry');
  if(entries.length){
    var gi = 0;
    setInterval(function(){
      entries.forEach(function(e){ e.style.background = '#fffef0'; });
      entries[gi].style.background = '#fff6cf';
      gi = (gi + 1) % entries.length;
    }, 2200);
  }

  // ---------- HIT COUNTER (all pages) ----------
  var counters = document.querySelectorAll('.hitcounter');
  if(counters.length){
    var base = 48213; // "established" base count
    var epoch = new Date(2013,0,1).getTime();
    var days = Math.floor((Date.now() - epoch) / 86400000);
    var stored = parseInt(localStorage.getItem('lc_hits') || '0', 10);
    var count = base + days * 7 + stored;
    localStorage.setItem('lc_hits', stored + 1);
    var padded = String(count).padStart(7,'0');
    counters.forEach(function(c){ c.textContent = padded; });
  }

  // ---------- CLOCK IN UTILITY BAR ----------
  var clockEl = document.getElementById('todayDate');
  if(clockEl){
    var d = new Date();
    var opts = { weekday:'long', year:'numeric', month:'long', day:'numeric' };
    clockEl.textContent = d.toLocaleDateString('en-US', opts);
  }

});
