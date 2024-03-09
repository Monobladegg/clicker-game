function displayImprovement0() {
  document.querySelector(".improvement-text-one").innerHTML = `Дерев'яне покращення`;
  document.querySelector(".improvement-text-two").innerHTML = `1000 монет`
  document.querySelector(".improvement-text-three").innerHTML = `За 1 клік +2 монети`
  document.querySelector(".improvement-text-four").innerHTML = `За 1 секунду +1 монета`
}
function displayImprovement1() {
  document.querySelector(".improvement-text-one").innerHTML = `Кам'яне покращення`;
  document.querySelector(".improvement-text-two").innerHTML = `3000 монет`
  document.querySelector(".improvement-text-three").innerHTML = `За 1 клік +5 монети`
  document.querySelector(".improvement-text-four").innerHTML = `За 1 секунду +2 монета`
}
function displayImprovement2() {
  document.querySelector(".improvement-text-one").innerHTML = `Бронзове покращення`;
  document.querySelector(".improvement-text-two").innerHTML = `10000 монет`
  document.querySelector(".improvement-text-three").innerHTML = `За 1 клік +10 монети`
  document.querySelector(".improvement-text-four").innerHTML = `За 1 секунду +4 монета`
}
function displayImprovement3() {
    document.querySelector(".improvement-text-one").innerHTML = `Мідне покращення`;
    document.querySelector(".improvement-text-two").innerHTML = `30000 монет`;
    document.querySelector(".improvement-text-three").innerHTML = `За 1 клік +20 монет`
    document.querySelector(".improvement-text-four").innerHTML = `За 1 секунду +8 монети`
}
function displayImprovement4() {
    document.querySelector(".improvement-text-one").innerHTML = `Олов'яне покращення`;
    document.querySelector(".improvement-text-two").innerHTML = `70000 монет`;
    document.querySelector(".improvement-text-three").innerHTML = `За 1 клік +45 монет`
    document.querySelector(".improvement-text-four").innerHTML = `За 1 секунду +15 монети`
}
function displayImprovement5() {
    document.querySelector(".improvement-text-one").innerHTML = `Золоте покращення`;
    document.querySelector(".improvement-text-two").innerHTML = `150000 монет`;
    document.querySelector(".improvement-text-three").innerHTML = `За 1 клік +60 монет`
    document.querySelector(".improvement-text-four").innerHTML = `За 1 секунду +25 монети`
}
function displayImprovement6() {
    document.querySelector(".improvement-text-one").innerHTML = `Емеральдове покращення`;
    document.querySelector(".improvement-text-two").innerHTML = `275000 монет`;
    document.querySelector(".improvement-text-three").innerHTML = `За 1 клік +100 монет`
    document.querySelector(".improvement-text-four").innerHTML = `За 1 секунду +40 монети`
}
function displayImprovement7() {
    document.querySelector(".improvement-text-one").innerHTML = `Діамантове покращення`;
    document.querySelector(".improvement-text-two").innerHTML = `500000 монет`;
    document.querySelector(".improvement-text-three").innerHTML = `За 1 клік +200 монет`
    document.querySelector(".improvement-text-four").innerHTML = `За 1 секунду +60 монети`
}
function displayImprovement8() {
    document.querySelector(".improvement-text-one").innerHTML = `Рубінове покращення`;
    document.querySelector(".improvement-text-two").innerHTML = `1000000 монет`;
    document.querySelector(".improvement-text-three").innerHTML = `За 1 клік +300 монет`
    document.querySelector(".improvement-text-four").innerHTML = `За 1 секунду +80 монети`
}
function displayImprovement9() {
    document.querySelector(".improvement-text-one").innerHTML = `Кристалічне покращення`;
    document.querySelector(".improvement-text-two").innerHTML = `2000000 монет`;
    document.querySelector(".improvement-text-three").innerHTML = `За 1 клік +500 монет`
    document.querySelector(".improvement-text-four").innerHTML = `За 1 секунду +100 монети`
}

let money = parseInt(document.cookie.match(/money=([0-9]+)/)[1]) || 1
let addMoney = parseInt(document.cookie.match(/addMoney=([0-9]+)/)[1]) || 1
let autoAddMoney = parseInt(document.cookie.match(/autoAddMoney=([0-9]+)/)[1]) || 1
let improvementUpdateCounter = parseInt(document.cookie.match(/improvementUpdateCounter=([0-9]+)/)[1]) || 1
if (improvementUpdateCounter === 1) {
  displayImprovement0()
} else if (improvementUpdateCounter === 2) {
  displayImprovement1()
} else if (improvementUpdateCounter === 3) {
  displayImprovement2()
} else if (improvementUpdateCounter === 4) {
  displayImprovement3()
} else if (improvementUpdateCounter === 5) {
  displayImprovement4()
} else if (improvementUpdateCounter === 6) {
  displayImprovement5()
} else if (improvementUpdateCounter === 7) {
  displayImprovement6()
} else if (improvementUpdateCounter === 8) {
  displayImprovement7()
} else if (improvementUpdateCounter === 9) {
  displayImprovement8()
} else if (improvementUpdateCounter === 10) {
  displayImprovement9()
}


document.querySelector('.money').innerHTML = `У вас ${money} Монет`;

document.querySelector(".indexes-text-one").innerHTML = `За 1 клік - ${addMoney} монет`;
document.querySelector(".indexes-text-two").innerHTML = `За 1 секунду - ${autoAddMoney} монет`;

document.querySelector('.btn-click-counter').addEventListener('click', () => {
  money += addMoney;
  displayMoney();
  saveCookiesMoney();
})
document.querySelector('.improvement-btn').addEventListener('click', () => {
  if (money >= 1000 && improvementUpdateCounter === 1) {
    improvementUpdateCounter++;
    money -= 1000;
    addMoney += 2;
    autoAddMoney += 1;
    displayMoney();
    document.querySelector(".improvement-text-one").innerHTML = `Кам'яне покращення`;
    document.querySelector(".improvement-text-two").innerHTML = `3000 монет`;
    document.querySelector(".improvement-text-three").innerHTML = `За 1 клік +5 монети`
    document.querySelector(".improvement-text-four").innerHTML = `За 1 секунду +2 монета`
    document.querySelector(".indexes-text-one").innerHTML = `За 1 клік - ${addMoney} монет`;
    document.querySelector(".indexes-text-two").innerHTML = `За 1 секунду - ${autoAddMoney} монет`;
    saveCookiesAddMoneyandAutoAddMoney();
    saveCookiesImprovementUpdateCounter();
  } else if (money >= 3000 && improvementUpdateCounter === 2) {
    improvementUpdateCounter++;
    money -= 3000;
    addMoney += 5;
    autoAddMoney += 2;
    displayMoney();
    document.querySelector(".improvement-text-one").innerHTML = `Бронзове покращення`;
    document.querySelector(".improvement-text-two").innerHTML = `10000 монет`;
    document.querySelector(".improvement-text-three").innerHTML = `За 1 клік +10 монет`
    document.querySelector(".improvement-text-four").innerHTML = `За 1 секунду +4 монети`
    document.querySelector(".indexes-text-one").innerHTML = `За 1 клік - ${addMoney} монет`;
    document.querySelector(".indexes-text-two").innerHTML = `За 1 секунду - ${autoAddMoney} монет`;
    saveCookiesAddMoneyandAutoAddMoney();
    saveCookiesImprovementUpdateCounter();
  } else if (money >= 10000 && improvementUpdateCounter === 3) {
    improvementUpdateCounter++;
    money -= 10000;
    addMoney += 10;
    autoAddMoney += 4;
    displayMoney();
    document.querySelector(".improvement-text-one").innerHTML = `Мідне покращення`;
    document.querySelector(".improvement-text-two").innerHTML = `30000 монет`;
    document.querySelector(".improvement-text-three").innerHTML = `За 1 клік +20 монет`
    document.querySelector(".improvement-text-four").innerHTML = `За 1 секунду +8 монети`
    document.querySelector(".indexes-text-one").innerHTML = `За 1 клік - ${addMoney} монет`;
    document.querySelector(".indexes-text-two").innerHTML = `За 1 секунду - ${autoAddMoney} монет`;
    saveCookiesAddMoneyandAutoAddMoney();
    saveCookiesImprovementUpdateCounter();
  } else if (money >= 30000 && improvementUpdateCounter === 4) {
    improvementUpdateCounter++;
    money -= 30000;
    addMoney += 20;
    autoAddMoney += 8;
    displayMoney();
    document.querySelector(".improvement-text-one").innerHTML = `Олов'яне покращення`;
    document.querySelector(".improvement-text-two").innerHTML = `70000 монет`;
    document.querySelector(".improvement-text-three").innerHTML = `За 1 клік +45 монет`
    document.querySelector(".improvement-text-four").innerHTML = `За 1 секунду +15 монети`
    document.querySelector(".indexes-text-one").innerHTML = `За 1 клік - ${addMoney} монет`;
    document.querySelector(".indexes-text-two").innerHTML = `За 1 секунду - ${autoAddMoney} монет`;
    saveCookiesAddMoneyandAutoAddMoney();
    saveCookiesImprovementUpdateCounter();
  } else if (money >= 70000 && improvementUpdateCounter === 5) {
    improvementUpdateCounter++;
    money -= 70000;
    addMoney += 45;
    autoAddMoney += 15;
    displayMoney();
    document.querySelector(".improvement-text-one").innerHTML = `Золоте покращення`;
    document.querySelector(".improvement-text-two").innerHTML = `150000 монет`;
    document.querySelector(".improvement-text-three").innerHTML = `За 1 клік +60 монет`
    document.querySelector(".improvement-text-four").innerHTML = `За 1 секунду +25 монети`
    document.querySelector(".indexes-text-one").innerHTML = `За 1 клік - ${addMoney} монет`;
    document.querySelector(".indexes-text-two").innerHTML = `За 1 секунду - ${autoAddMoney} монет`;
    saveCookiesAddMoneyandAutoAddMoney();
    saveCookiesImprovementUpdateCounter();
  } else if (money >= 150000 && improvementUpdateCounter === 6) {
    improvementUpdateCounter++;
    money -= 150000;
    addMoney += 60;
    autoAddMoney += 25;
    displayMoney();
    document.querySelector(".improvement-text-one").innerHTML = `Емеральдове покращення`;
    document.querySelector(".improvement-text-two").innerHTML = `275000 монет`;
    document.querySelector(".improvement-text-three").innerHTML = `За 1 клік +100 монет`
    document.querySelector(".improvement-text-four").innerHTML = `За 1 секунду +40 монети`
    document.querySelector(".indexes-text-one").innerHTML = `За 1 клік - ${addMoney} монет`;
    document.querySelector(".indexes-text-two").innerHTML = `За 1 секунду - ${autoAddMoney} монет`;
    saveCookiesAddMoneyandAutoAddMoney();
    saveCookiesImprovementUpdateCounter();
  } else if (money >= 275000 && improvementUpdateCounter === 7) {
    improvementUpdateCounter++;
    money -= 275000;
    addMoney += 100;
    autoAddMoney += 40;
    displayMoney();
    document.querySelector(".improvement-text-one").innerHTML = `Діамантове покращення`;
    document.querySelector(".improvement-text-two").innerHTML = `500000 монет`;
    document.querySelector(".improvement-text-three").innerHTML = `За 1 клік +200 монет`
    document.querySelector(".improvement-text-four").innerHTML = `За 1 секунду +60 монети`
    document.querySelector(".indexes-text-one").innerHTML = `За 1 клік - ${addMoney} монет`;
    document.querySelector(".indexes-text-two").innerHTML = `За 1 секунду - ${autoAddMoney} монет`;
    saveCookiesAddMoneyandAutoAddMoney();
    saveCookiesImprovementUpdateCounter();
  } else if (money >= 500000 && improvementUpdateCounter === 8) {
    improvementUpdateCounter++;
    money -= 500000;
    addMoney += 200;
    autoAddMoney += 60;
    displayMoney();
    document.querySelector(".improvement-text-one").innerHTML = `Рубінове покращення`;
    document.querySelector(".improvement-text-two").innerHTML = `1000000 монет`;
    document.querySelector(".improvement-text-three").innerHTML = `За 1 клік +300 монет`
    document.querySelector(".improvement-text-four").innerHTML = `За 1 секунду +80 монети`
    document.querySelector(".indexes-text-one").innerHTML = `За 1 клік - ${addMoney} монет`;
    document.querySelector(".indexes-text-two").innerHTML = `За 1 секунду - ${autoAddMoney} монет`;
    saveCookiesAddMoneyandAutoAddMoney();
    saveCookiesImprovementUpdateCounter();
  } else if (money >= 1000000 && improvementUpdateCounter === 9) {
    improvementUpdateCounter++;
    money -= 1000000;
    addMoney += 300;
    autoAddMoney += 80;
    displayMoney();
    document.querySelector(".improvement-text-one").innerHTML = `Кристалічне покращення`;
    document.querySelector(".improvement-text-two").innerHTML = `2000000 монет`;
    document.querySelector(".improvement-text-three").innerHTML = `За 1 клік +500 монет`
    document.querySelector(".improvement-text-four").innerHTML = `За 1 секунду +100 монети`
    document.querySelector(".indexes-text-one").innerHTML = `За 1 клік - ${addMoney} монет`;
    document.querySelector(".indexes-text-two").innerHTML = `За 1 секунду - ${autoAddMoney} монет`;
    saveCookiesAddMoneyandAutoAddMoney();
    saveCookiesImprovementUpdateCounter();
  }
})
document.querySelector(".js-cheats-100000").addEventListener("click", () => {
  money += 100000;
  displayMoney();
  saveCookiesMoney();
});
document.querySelector(".js-cheats-0").addEventListener("click", () => {
  money = 0;
  addMoney = 1;
  autoAddMoney = 1;
  improvementUpdateCounter = 1;
  document.querySelector(".indexes-text-one").innerHTML = `За 1 клік - ${addMoney} монет`;
  document.querySelector(".indexes-text-two").innerHTML = `За 1 секунду - ${autoAddMoney} монет`;
  displayImprovement0();
  saveCookiesAddMoneyandAutoAddMoney();
  saveCookiesImprovementUpdateCounter();
  displayMoney();
  saveCookiesMoney();
})
function addMoneyAuto() {
  setInterval(() => {
    money += autoAddMoney;
    displayMoney();
    saveCookiesMoney();
  }, 1000);
}
addMoneyAuto();
function saveCookiesMoney() {
  document.cookie = `money=${money}; path=/`;
}
function displayMoney() {
  document.querySelector(".money").innerHTML = `У вас ${money} Монет`;
}
function saveCookiesAddMoneyandAutoAddMoney() {
  document.cookie = `addMoney=${addMoney}; path=/`;
  document.cookie = `autoAddMoney=${autoAddMoney}; path=/`;
}
function saveCookiesImprovementUpdateCounter() {
  document.cookie = `improvementUpdateCounter=${improvementUpdateCounter}; path=/`;
}