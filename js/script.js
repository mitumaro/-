"use strict";

const modal = document.querySelector('.js-modal1');
const modalButton = document.querySelector('.button1');


const modalClose = document.querySelector('.js-close-button1');

modalButton.addEventListener('click', () => {
  modal.classList.add('is-open1');

});

modalClose.addEventListener('click', () => {
  modal.classList.remove('is-open1');

});


// 画面移行ボタン

// const sections = document.querySelectorAll('.page');
// const upButton = document.querySelector('.goToList');
// const downButton = document.querySelector('.goToSlideshow');
// let currentSection = 0;

// // スクロール関数
// function scrollToSection(index) {
//   if (index < 0 || index >= sections.length) return;

//   currentSection = index;
//   const offset = -currentSection * window.innerHeight;
//   document.getElementById('container').style.transform = `translateY(${offset}px)`;

//   // ボタンの状態を更新
//   updateButtonState();
// }

// // ボタンの有効/無効を更新
// function updateButtonState() {
//   upButton.disabled = currentSection === 0;
//   downButton.disabled = currentSection === sections.length - 1;
// }

// // ボタンのクリックイベント
// upButton.addEventListener('click', () => scrollToSection(currentSection - 1));
// downButton.addEventListener('click', () => scrollToSection(currentSection + 1));

// // 初期状態を設定
// updateButtonState();



document.querySelector(".goToSlideshow").addEventListener("click", function () {
  const slider = document.getElementById("section2");
  const content = document.getElementById("section1");

  // 最初の2秒後にtranslateY(100%)を設定
  setTimeout(() => {
      slider.style.transition = "transform 0.01s";
    slider.style.transform = "translateY(100%)";
  },);

  // 次の2秒後にz-indexを変更
  setTimeout(() => {
    slider.style.zIndex = "2";
    content.style.zIndex = "1";
  }, 100);

  // 最終的にもう一度translateY(100%)を2秒後に設定
  setTimeout(() => {
    slider.style.transition = "transform 1s";
    slider.style.transform = "translateY(0)";
  }, 200);
});

// 閉じるボタンの動作
document.querySelector(".goToList").addEventListener("click", function () {
  const slider = document.getElementById("section2");
  const content = document.getElementById("section1");

  setTimeout(() => {
      content.style.transition = "transform 0.01s";
      content.style.transform = "translateY(-100%)";
    }, );
  
    // 次の2秒後にz-indexを変更
    setTimeout(() => {
      content.style.zIndex = "2";
      slider.style.zIndex = "1";
    }, 100);
  
    // 最終的にもう一度translateY(100%)を2秒後に設定
    setTimeout(() => {
      content.style.transition = "transform 1s";
      content.style.transform = "translateY(0)";
    }, 200);
  });


// section2

const modal2 = document.querySelector('.js-modal2');
const modalButton2 = document.querySelector('.button2');


const modalClose2 = document.querySelector('.js-close-button2');

modalButton2.addEventListener('click', () => {
  modal2.classList.add('is-open2');

});

modalClose2.addEventListener('click', () => {
  modal2.classList.remove('is-open2');

});


document.addEventListener("DOMContentLoaded", () => {
  const swiperContainers = document.querySelectorAll(".swiper-container");
  const swiperInstances = [];

  // 各Swiperを初期化
  swiperContainers.forEach((container) => {
    const swiper = new Swiper(container, {
      grabCursor: true,
      loop: true,
      effect: "slide",  
      speed: 1200,  
      loopAdditionalSlides: 1,
      direction: "vertical",
      initialSlide: 2,
      slidesPerView: 1,
      centeredSlides: true,
      allowTouchMove: true,
      navigation: {
        nextEl: ".slick-next", // 共通ボタン
        prevEl: ".slick-prev", // 共通ボタン
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });

    // 初期状態でautoplayを停止
    swiper.autoplay.stop();
    swiperInstances.push(swiper);
  });
  swiperInstances[0].allowTouchMove = false;
  let syncing = false;
  let lastIndex = swiperInstances[1].realIndex;
  swiperInstances[1].on("slideChangeTransitionStart", () => {
    if(!syncing){
      syncing = true;
      if(lastIndex === 6 && swiperInstances[1].realIndex === 0){
        swiperInstances[0].slideNext();
      }else if (lastIndex === 0 && swiperInstances[1].realIndex === 6){
        swiperInstances[0].slidePrev();
      }else if (lastIndex < swiperInstances[1].realIndex){
        swiperInstances[0].slideNext();
      }else{
        swiperInstances[0].slidePrev();
      }
      swiperInstances[0].once("transitionEnd",()=>{
        syncing = false;
      });
      lastIndex = swiperInstances[1].realIndex;
    }
  });




  // 共通のAutoplay切り替えボタンの処理
  const autoplayToggle = document.querySelector(".toggle-button");
  autoplayToggle.addEventListener("click", () => {
    let isRunning = false;

    swiperInstances.forEach((swiper) => {
      if (swiper.autoplay.running) {
        swiper.autoplay.stop();
      } else {
        swiper.autoplay.start();
        isRunning = true; // 少なくとも1つが再生中であればON状態に
      }
    });

    // ボタンの見た目とテキストを更新
    if (isRunning) {
      autoplayToggle.classList.add("stop");
    } else {
      autoplayToggle.classList.remove("stop");
    }
  });
});








