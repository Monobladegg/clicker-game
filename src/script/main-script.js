function saveCookiesMoney() {
  document.cookie = `money=${money}; path=/`;
}
function displayMoney() {
  document.querySelector(".money").innerHTML = `У вас ${money} Монет`;
}
let money = parseInt(document.cookie.match(/money=([0-9]+)/)[1]) || 0
let autoAddMoney = 1
let addMoney = 1
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
  if (money >= 1000) {    
    money -= 1000;
    addMoney += 2;
    autoAddMoney += 1;
    displayMoney();
    // document.querySelector(".improvement-text-one").innerHTML = `Кам'яне покращення`;
    // document.querySelector(".improvement-text-two").innerHTML = `3000 монет`;
    document.querySelector(".indexes-text-one").innerHTML = `За 1 клік - ${addMoney} монет`;
    document.querySelector(".indexes-text-two").innerHTML = `За 1 секунду - ${autoAddMoney} монет`;
  }
})
document.querySelector('.js-cheats').addEventListener('click', () => {
  money += 10000;
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