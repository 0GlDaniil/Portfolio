//Список выбранных тарифов-переменная
let chosen = document.querySelector('.tarifs__chosen-list');
//Смена языка-переменные
let lang_btn = document.querySelector('.header__language');
let rus_btn = document.querySelector('.header__lang-rus');
let eng_btn = document.querySelector('.header__lang-eng');
let lang_doc = document.querySelectorAll('.site__lang')
let rus_lang_doc = document.querySelectorAll('.rus');
let eng_lang_doc = document.querySelectorAll('.eng');
//закрытие модального окна
function close_modal() {
  for(let elem of document.querySelectorAll('.modal')){
    if(elem.classList.contains('is-active')){
      elem.classList.remove('is-active');
    }
  }
}

//события
document.addEventListener('click',function(event){
  let target = event.target;
  //список выбранных тарифов
  if(target.closest('.tarifs__list-item')){
    let target_main = target.closest('.tarifs__list-item');
    let title = target_main.firstElementChild.innerText;
    let li = document.createElement('li');
    li.className = "tarifs__chosen-item";
    li.innerText = title;
    if(!target_main.classList.contains('tarifs__is-active')){
      chosen.append(li);
    }
    else{
      let i = 0;
      for(let elem of chosen.children){
        if(elem.innerText == li.innerText){
          chosen.children[i].remove();
          chosen.style.counterReset = "unset";
          setTimeout(() => chosen.style.counterReset = "", 0);
        }
        else{
          i++;
          continue;
        }
      }
    }
    target_main.classList.toggle('tarifs__is-active');
  }
  //модальное окно входа
  if(target.closest('.header__login')){
    document.body.style.overflow = 'hidden';
    document.querySelector('.modal__login').classList.add('is-active')
  }
  //Модальное окно формы
  if(target.closest('.contacts__button')){
    event.preventDefault();
    document.body.style.overflow = 'hidden';
    document.querySelector('.modal__application').classList.add('is-active')
  }
  //закрытие модальных окон
  if(target.closest('.modal__close') || target.closest('.modal__btn-appl') || target.closest('.modal__btn-appl')){
    document.body.style.overflow = '';
    close_modal();
  }
  //Список языков-открыть
  if(target.closest('.header__language')){
    lang_btn.classList.toggle('header__language-active');
  }
});

// закрытие модалок escape-ом
document.addEventListener('keydown', function(event){
  for(let elem of document.querySelectorAll('.modal')){
    if(elem.classList.contains('is-active') && event.code == 'Escape'){ 
      document.body.style.overflow = ''; 
      close_modal();
    }
  }
});

//Смена языка
rus_btn.addEventListener('click',function(event){
  if(lang_btn.classList.contains('header__language-active')){
    event.target.closest('li').style.order = '-1';
    eng_btn.closest('li').style.order = '0';
    if(!rus_lang_doc[0].classList.contains('site__lang_active')){
      for(let elem of lang_doc){
        elem.classList.toggle('site__lang_active');
      }
    }
  }
});
eng_btn.addEventListener('click',function(event){
  if(lang_btn.classList.contains('header__language-active')){
    event.target.closest('li').style.order = '-1';
    rus_btn.closest('li').style.order = '0';
    if(!eng_lang_doc[0].classList.contains('site__lang_active')){
      for(let elem of lang_doc){
        elem.classList.toggle('site__lang_active');
      }
    }
  }
});

//плавный скролл
SmoothScroll({
// Время скролла 400 = 0.4 секунды
animationTime : 800,
// Размер шага в пикселях
stepSize : 75,

// Дополнительные настройки:

// Ускорение
accelerationDelta : 30,
// Максимальное ускорение
accelerationMax : 2,

// Поддержка клавиатуры
keyboardSupport : true,
// Шаг скролла стрелками на клавиатуре в пикселях
arrowScroll : 50,

// Pulse (less tweakable)
// ratio of "tail" to "acceleration"
pulseAlgorithm : true,
pulseScale : 4,
pulseNormalize : 1,

// Поддержка тачпада
touchpadSupport : true,
});