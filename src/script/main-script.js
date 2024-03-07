let money = parseInt(document.cookie.match(/money=([0-9]+)/)[1]) || 0
let autoAddMoney = 1
let addMoney = 1
let improvementUpdateCounter = 1
document.querySelector('.money').innerHTML = `У вас ${money} Монет`;
document.querySelector(".indexes-text-one").innerHTML = `За 1 клік - ${addMoney} монет`;
document.querySelector(".indexes-text-two").innerHTML = `За 1 секунду - ${autoAddMoney} монет`;
document.querySelector(".improvement-text-one").innerHTML = `Дерев'яне покращення`;
document.querySelector(".improvement-text-two").innerHTML = `1000 монет`
document.querySelector(".improvement-text-three").innerHTML = `В одну секунду +1 монета`
document.querySelector(".improvement-text-four").innerHTML = `За 1 клік +2 монети`
document.querySelector('.btn-click-counter').addEventListener('click', () => {
  money += addMoney;
  displayMoney();
  saveCookiesMoney();
})
document.querySelector('.improvement-btn').addEventListener('click', () => {
  if (money >= 1000 && improvementUpdateCounter === 1) {
    improvementUpdateCounter += 1;
    money -= 1000;
    addMoney += 2;
    autoAddMoney += 1;
    displayMoney();
    document.querySelector(".improvement-text-one").innerHTML = `Кам'яне покращення`;
    document.querySelector(".improvement-text-two").innerHTML = `3000 монет`;
    document.querySelector(".improvement-text-four").innerHTML = `За 1 клік +5 монети`
    document.querySelector(".improvement-text-three").innerHTML = `В одну секунду +2 монета`
    document.querySelector(".indexes-text-one").innerHTML = `За 1 клік - ${addMoney} монет`;
    document.querySelector(".indexes-text-two").innerHTML = `За 1 секунду - ${autoAddMoney} монет`;
  } else if (money >= 3000 && improvementUpdateCounter === 2) {
    improvementUpdateCounter += 1;
    money -= 3000;
    addMoney += 5;
    autoAddMoney += 2;
    displayMoney();
    document.querySelector(".improvement-text-one").innerHTML = `Бронзове покращення`;
    document.querySelector(".improvement-text-two").innerHTML = `10000 монет`;
    document.querySelector(".improvement-text-four").innerHTML = `За 1 клік +10 монет`
    document.querySelector(".improvement-text-three").innerHTML = `В одну секунду +4 монети`
    document.querySelector(".indexes-text-one").innerHTML = `За 1 клік - ${addMoney} монет`;
    document.querySelector(".indexes-text-two").innerHTML = `За 1 секунду - ${autoAddMoney} монет`;
    
  } else if (money >= 10000 && improvementUpdateCounter === 3) {
    improvementUpdateCounter += 1;
    money -= 10000;
    addMoney += 10;
    autoAddMoney += 4;
    displayMoney();
    document.querySelector(".improvement-text-one").innerHTML = `Мідне покращення`;
    document.querySelector(".improvement-text-two").innerHTML = `30000 монет`;
    document.querySelector(".improvement-text-four").innerHTML = `За 1 клік +20 монет`
    document.querySelector(".improvement-text-three").innerHTML = `В одну секунду +8 монети`
    document.querySelector(".indexes-text-one").innerHTML = `За 1 клік - ${addMoney} монет`;
    document.querySelector(".indexes-text-two").innerHTML = `За 1 секунду - ${autoAddMoney} монет`;
  } else if (money >= 30000 && improvementUpdateCounter === 4) {
    improvementUpdateCounter += 1;
    money -= 30000;
    addMoney += 20;
    autoAddMoney += 8;
    displayMoney();
    document.querySelector(".improvement-text-one").innerHTML = `Олов'яне покращення`;
    document.querySelector(".improvement-text-two").innerHTML = `70000 монет`;
    document.querySelector(".improvement-text-four").innerHTML = `За 1 клік +20 монет`
    document.querySelector(".improvement-text-three").innerHTML = `В одну секунду +8 монети`
    document.querySelector(".indexes-text-one").innerHTML = `За 1 клік - ${addMoney} монет`;
    document.querySelector(".indexes-text-two").innerHTML = `За 1 секунду - ${autoAddMoney} монет`;
  }
})
document.querySelector('.js-cheats').addEventListener('click', () => {
  money += 2000;
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