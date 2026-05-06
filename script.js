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