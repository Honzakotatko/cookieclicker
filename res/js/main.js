const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const autoclicker = document.getElementById("autoclicker");
const clickerupgrade = document.getElementById("clickerupgrade");

let cookies = 0;
let autoclickerPrice = 100;
let autoclickerIncrease = 0;
let clickerupgradePrice = 50;
let clickerupgradeIncrease = 1;

cookie.onclick = () => {
  cookies += clickerupgradeIncrease;
  counter.innerHTML = cookies;
};

clickerupgrade.onclick = () => {
    if (cookies >= clickerupgradePrice){
        cookies-= clickerupgradePrice;
        counter.innerHTML = cookies;
    clickerupgradePrice *= 2
clickerupgrade.innerHTML = `Buy click upgrade: ${ clickerupgradePrice}`;
clickerupgradeIncrease++;
}
}

autoclicker.onclick = () => {
  if (cookies >= autoclickerPrice) {
    cookies -= autoclickerPrice;
    counter.innerHTML = cookies;
    autoclickerPrice *= 2;
    autoclicker.innerHTML = `Buy autoclicker: ${autoclickerPrice}`;
    if (autoclickerIncrease == 0) {
      setInterval(() => {
cookies += autoclickerIncrease;
counter.innerHTML = cookies;
      }, 1000);
    }
    autoclickerIncrease++;
  }
};
