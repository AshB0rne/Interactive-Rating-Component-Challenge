const toSubmit = document.querySelector('#submitButton').onclick = () => {
  const divElement = document.querySelector('.thank-you-state-wrapper');
  const divElement2 = document.querySelector('.inner-wrapper');

  divElement.style.opacity = '1';
  divElement2.style.opacity = '0';
};