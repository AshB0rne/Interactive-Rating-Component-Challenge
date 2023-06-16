const homePageDiv = document.querySelector('.inner-wrapper');
const thankYouStateDiv = document.querySelector('.thank-you-state-wrapper');
const starInThankYouState = document.querySelector('.stars-decider');
const errorMessage = document.querySelector('.error-message');
const rateButtons = document.querySelector('.rate-buttons');
const star1 = document.querySelector('.star1');
const star2 = document.querySelector('.star2');
const star3 = document.querySelector('.star3');
const star4 = document.querySelector('.star4');
const star5 = document.querySelector('.star5');

const toSubmit = () => {
  // activates when the user didn't pick what his/her rate before clicking the submit button
  if (rateButtons.classList.contains('clicked')) {
    errorMessage.innerText = '';
  } else if (!rateButtons.classList.contains('clicked')) {
    errorMessage.innerText = `Error! You haven't chose your rate yet. Please choose a rating before submitting`;
    return;
  }

  // have to declare it here so that we could get the rate of the user
  getRate();

  homePageDiv.style.display = 'none';
  thankYouStateDiv.style.display = 'flex';
}

const getRate = (userRate) => {
  rateButtons.classList.add('clicked');

  if (userRate === '5') {
    starInThankYouState.innerText = '5';
    star1.style.display = 'flex';
    star2.style.display = 'flex';
    star3.style.display = 'flex';
    star4.style.display = 'flex';
    star5.style.display = 'flex';
  } else if (userRate === '4') {
    starInThankYouState.innerText = '4';
    star1.style.display = 'flex';
    star2.style.display = 'flex';
    star3.style.display = 'flex';
    star4.style.display = 'flex';
    star5.style.display = 'none';
  } else if (userRate === '3') {
    starInThankYouState.innerText = '3';
    star1.style.display = 'flex';
    star2.style.display = 'flex';
    star3.style.display = 'flex';
    star4.style.display = 'none';
    star5.style.display = 'none';
  } else if (userRate === '2') {
    starInThankYouState.innerText = '2';
    star1.style.display = 'flex';
    star2.style.display = 'flex';
    star3.style.display = 'none';
    star4.style.display = 'none';
    star5.style.display = 'none';
  } else if (userRate === '1') {
    starInThankYouState.innerText = '1';
    star1.style.display = 'flex';
    star2.style.display = 'none';
    star3.style.display = 'none';
    star4.style.display = 'none';
    star5.style.display = 'none';
  }
}
