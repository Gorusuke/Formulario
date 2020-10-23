const button = document.querySelector('.banner-btn');
const xButton = document.querySelector('.x-btn');
const banner = document.querySelector('.banner');
const formContainer = document.querySelector('.form-container');
const container = document.querySelector('.container');

button.addEventListener('click', function(){
    banner.style.display = 'none';
    formContainer.style.cssText = 'opacity: 1; visibility: visible';
    container.style.background = 'none';
    container.style.backgroundColor = '#cc683c';
})

xButton.addEventListener('click', function(){
    banner.style.display = 'flex';
    formContainer.style.cssText = 'opacity: 0; visibility: hidden';
    container.style.cssText = 'linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)), url(../images/bg1.jpeg) center no-repeat; backgroundColor: none';
    // container.style.backgroundColor = 'none';
})