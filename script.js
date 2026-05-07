const ownerCards = document.querySelectorAll('.owner-card');

let current = 0;

function switchOwner(){

  if(window.innerWidth <= 768){

    ownerCards.forEach(card => {
      card.classList.remove('active');
    });

    current++;

    if(current >= ownerCards.length){
      current = 0;
    }

    ownerCards[current].classList.add('active');
  }
}

setInterval(switchOwner,5000);

/* PWA */

if ('serviceWorker' in navigator) {

  window.addEventListener('load', () => {

    navigator.serviceWorker.register('service-worker.js')
      .then(() => {
        console.log('PWA Ready');
      });

  });

}

/* IMPORTED PHONES */

const mainVideo =
document.getElementById('mainVideo');

const mainImage =
document.getElementById('mainImage');

const phoneTitle =
document.getElementById('phoneTitle');

const phoneDesc =
document.getElementById('phoneDesc');

const thumbs =
document.querySelectorAll('.thumb');


/* SHOW REEL */

function showReel(){

  mainVideo.style.display = 'block';

  mainImage.style.display = 'none';

  mainVideo.play();

  phoneTitle.innerText =
  'Imported Collection';

  phoneDesc.innerText =
  'Latest Premium Smartphones Available';

  removeActive();

  thumbs[0].classList.add('active-thumb');

}


/* SHOW PHONE */

function showPhone(image,title,desc){

  mainVideo.pause();

  mainVideo.style.display = 'none';

  mainImage.style.display = 'block';

  mainImage.src = image;

  phoneTitle.innerText = title;

  phoneDesc.innerText = desc;

  removeActive();

  event.currentTarget.classList
  .add('active-thumb');

}


/* REMOVE ACTIVE */

function removeActive(){

  thumbs.forEach((thumb)=>{
    thumb.classList.remove('active-thumb');
  });

}