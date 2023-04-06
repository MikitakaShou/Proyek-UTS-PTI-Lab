const tahu = document.getElementById("tahu");
const score = document.getElementById("score");
const moneyPerSecond = document.getElementById("moneypersecond");
const autoClickerButton = document.getElementById("auto1");

let money = 0;
let autoClickerCount = 0;
let autoClickerCost = 100;
let autoClickerInterval;
let clickingPower = 1;

tahu.addEventListener("click", function() {
  money += clickingPower;
  updateScore();
});

autoClickerButton.addEventListener("click", function() {
  buyAutoClicker();
});

function buyAutoClicker() {
  if (money >= autoClickerCost) {
    autoClickerCount++;
    money -= autoClickerCost;
    autoClickerCost = Math.floor(autoClickerCost * 1.1); // Naikkan harga setiap dibeli
    updateScore();
    updateAutoClicker();
    if (!autoClickerInterval) {
      autoClickerInterval = setInterval(function() {
        money += autoClickerCount;
        updateScore();
      }, 1000);
    }
  }
}

function updateScore() {
  score.innerHTML = money;
  moneyPerSecond.innerHTML = autoClickerCount;
}

function updateAutoClicker() {
  autoClickerButton.innerHTML = `
    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#foodModal">
      Auto Clicker <br />
      $ ${autoClickerCost}
    </button>
  `;
}

const burgerButton = document.getElementById("button1");

burgerButton.addEventListener("click", function() {
  buyBurger();
});

function buyBurger() {
  if (money >= 100) {
    money -= 100;
    updateScore();
    tahu.innerHTML = '<img src="asset/burger-unscreen.gif" />';
  }
}

const sushiButton = document.getElementById("button2");

sushiButton.addEventListener("click", function() {
  buySushi();
});

function buySushi() {
  if (money >= 100) {
    money -= 100;
    updateScore();
    tahu.innerHTML = '<img src="asset/sushi-unscreen.gif" />';
  }
}

const pineappleButton = document.getElementById("button3");

pineappleButton.addEventListener("click", function() {
  buyPineapple();
});

function buyPineapple() {
  if (money >= 100) {
    money -= 100;
    updateScore();
    tahu.innerHTML = '<img src="asset/nanas-unscreen.gif" />';
  }
}

const tahuImg = document.querySelector('#tahu img');
const button1 = document.querySelector('#button1 button');
const button2 = document.querySelector('#button2 button');
const button3 = document.querySelector('#button3 button');

button1.addEventListener('click', function() {
  if (money >= 100) {
    money -= 100;
    updateScore();
    tahuImg.src = 'asset/burger-unscreen.gif';
  }
});

button2.addEventListener('click', function() {
  if (money >= 100) {
    money -= 100;
    updateScore();
    tahuImg.src = 'asset/sushi-unscreen.gif';
  }
});

button3.addEventListener('click', function() {
  if (money >= 100) {
    money -= 100;
    updateScore();
    tahuImg.src = 'asset/nanas-unscreen.gif';
  }
});

let currentItem = null;

button1.addEventListener('click', function() {
  if (money >= 100) {
    money -= 100;
    updateScore();
    currentItem = 'burger';
    updateTahuImage();
  }
});

button2.addEventListener('click', function() {
  if (money >= 100) {
    money -= 100;
    updateScore();
    currentItem = 'sushi';
    updateTahuImage();
  }
});

button3.addEventListener('click', function() {
  if (money >= 100) {
    money -= 100;
    updateScore();
    currentItem = 'pineapple';
    updateTahuImage();
  }
});

function updateTahuImage() {
  if (currentItem === 'burger') {
    tahuImg.src = 'asset/burger-unscreen.gif';
  } else if (currentItem === 'sushi') {
    tahuImg.src = 'asset/sushi-unscreen.gif';
  } else if (currentItem === 'pineapple') {
    tahuImg.src = 'asset/nanas-unscreen.gif';
  } else {
    tahuImg.src = 'asset/Tahu botak.gif';
  }
}

function bukaCabang() {
  // Cek apakah uang mencukupi untuk membeli cabang
  if (money >= 100) {
      // Jika mencukupi, kurangi uang sebesar 100
      money -= 100;
      // Pindah ke halaman baru
      window.location.href = "cabang1.html";
  } else {
      // Jika tidak mencukupi, munculkan alert
      alert("Maaf, uang Anda tidak cukup untuk membeli cabang.");
  }
}


