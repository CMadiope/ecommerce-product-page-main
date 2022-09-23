const popUp = document.getElementById('pop')

const cartBtn = document.querySelector('.cart')

cartBtn.addEventListener('click', (e) => {
  popUp.classList.toggle('show')
  
})