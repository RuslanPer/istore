const switcher = document.querySelector('.switch');

function nightMode(){
  if(night === false){
    night = true;

    document.body.classList.add("night");

    document.querySelector('.header > h1').style.color = "#fff";
    document.querySelector('.header-text').style.color = "#fff";
    document.querySelector('.header').classList.add('header-night__mode');
    document.querySelectorAll('.wrap-block').forEach(element => {
      element.classList.add('wrap-block__night');
    });
    document.querySelectorAll('.btn-block').forEach(element => {
      element.style.backgroundColor = "rgb(75, 0, 130, 0.4)";
      element.style.color = '#fff';
    });
    document.querySelectorAll('.wrap-block > h2').forEach(element =>{
      element.style.color = '#fff';
    });
    document.querySelectorAll('.btn-size').forEach(element =>{
      element.style.backgroundColor = "rgb(75, 0, 130, 0.4)";
      element.classList.add('btn-size__night-mode');
      element.style.color = '#fff';
    });
    document.querySelectorAll('.price').forEach(element => {
      element.style.color = '#fff';
    });
    document.querySelector('.btn-add').classList.add('btn-add__night');
  }else{
    night = false;

    document.body.classList.remove("night");
    document.querySelector('.header > h1').style.color = "#000";
    document.querySelector('.header-text').style.color = "#000";
    document.querySelector('.header').classList.remove('header-night__mode');
    document.querySelectorAll('.wrap-block').forEach(element => {
      element.classList.remove('wrap-block__night');
    });
    document.querySelectorAll('.btn-block').forEach(element => {
      element.style.backgroundColor = "rgb(0, 0, 0 , 0.07)";
      element.style.color = '#000';
    });
    document.querySelectorAll('.wrap-block > h2').forEach(element =>{
      element.style.color = '#000';
    });
    document.querySelectorAll('.btn-size').forEach(element =>{
      element.style.backgroundColor = "#fff";
      element.classList.remove('btn-size__night-mode');
      element.style.color = '#000';
    });
    document.querySelectorAll('.price').forEach(element => {
      element.style.color = '#000';
    });
    document.querySelector('.btn-add').classList.remove('btn-add__night');
  }
}

let night = false;

switcher.addEventListener('change', () =>{
  nightMode();
});


function imgChange(){
  document.getElementById('btn-black__12-mini').addEventListener('click', () => {
    document.getElementById('iphone12mini').src = './img/12mini/black.jpg';
  });
  document.getElementById('btn-green__12-mini').addEventListener('click', () => {
    document.getElementById('iphone12mini').src = './img/12mini/green.jpg';
  });
  document.getElementById('btn-blue__12-mini').addEventListener('click', () => {
    document.getElementById('iphone12mini').src = './img/12mini/blue.jpg';
  });

  document.getElementById('btn-purple__12').addEventListener('click', () => {
    document.getElementById('iphone12').src = './img/12/purple.jpg';
  });
  document.getElementById('btn-green__12').addEventListener('click', () => {
    document.getElementById('iphone12').src = './img/12/green.jpg';
  });
  document.getElementById('btn-black__12').addEventListener('click', () => {
    document.getElementById('iphone12').src = './img/12/black.jpg';
  });

  document.getElementById('btn-gold__12-Pro-Max').addEventListener('click', () => {
    document.getElementById('iphone12ProMax').src = './img/12promax/gold.jpg';
  });
  document.getElementById('btn-black__12-Pro-Max').addEventListener('click', () => {
    document.getElementById('iphone12ProMax').src = './img/12promax/black.jpg';
  });
  document.getElementById('btn-white__12-Pro-Max').addEventListener('click', () => {
    document.getElementById('iphone12ProMax').src = './img/12promax/white.jpg';
  });

  document.getElementById('btn-yellow__11').addEventListener('click', () => {
    document.getElementById('iphone11').src = './img/11/yellow.jpg';
  });
  document.getElementById('btn-black__11').addEventListener('click', () => {
    document.getElementById('iphone11').src = './img/11/black.jpg';
  });
  document.getElementById('btn-red__11').addEventListener('click', () => {
    document.getElementById('iphone11').src = './img/11/red.jpg';
  });

  document.getElementById('btn-red__XR').addEventListener('click', () => {
    document.getElementById('iphoneXR').src = './img/xr/red.jpg';
  });
  document.getElementById('btn-black__XR').addEventListener('click', () => {
    document.getElementById('iphoneXR').src = './img/xr/black.jpg';
  });
  document.getElementById('btn-white__XR').addEventListener('click', () => {
    document.getElementById('iphoneXR').src = './img/xr/white.jpg';
  });
}




const prices12mini = ['65 990 руб.','70 990 руб.','80 990 руб.'],
      prices12 = ['74 990 руб.', '79 990 руб.', '89 990 руб.'],
      prices12ProMax = ['109 990 руб.', '119 990 руб.', '139 990 руб.'],
      prices11 = ['54 990 руб.', '59 990 руб.', '69 990 руб.'],
      pricesXR = ['44 990 руб.', '48 990 руб.'];

function btnSize(btn1Size, btn2Size, btn3Size, textBlock, pricesBlock) {
  document.querySelector(btn1Size).addEventListener('click', () => {
    document.querySelector(textBlock).innerHTML = pricesBlock[0];
  });
  document.querySelector(btn2Size).addEventListener('click', () => {
    document.querySelector(textBlock).innerHTML = pricesBlock[1];
  });
  document.querySelector(btn3Size).addEventListener('click', () => {
    document.querySelector(textBlock).innerHTML = pricesBlock[2];
  });
}

function priceChange() {
  btnSize('#btn64-12-mini','#btn128-12-mini','#btn256-12-mini', '#iphone12mini-text', prices12mini);
  btnSize('#btn64-12','#btn128-12','#btn256-12', '#iphone12-text', prices12);
  btnSize('#btn128-12-Pro-Max','#btn256-12-Pro-Max', '#btn512-12-Pro-Max', '#iphone12-Pro-Max-text', prices12ProMax);
  btnSize('#btn64-11','#btn128-11','#btn256-11', '#iphone11-text', prices11);
  btnSize('#btn64-XR','#btn128-XR', null, '#iphoneXR-text', pricesXR);
}



const btnAdd = document.querySelector('.btn-add');

function addItems() {
  btnAdd.addEventListener('click', () => {
    document.querySelectorAll('#newiphone').forEach(element => {
      element.classList.remove('display-none');
    });
    btnAdd.remove();
  });
}


imgChange();
addItems();
priceChange();