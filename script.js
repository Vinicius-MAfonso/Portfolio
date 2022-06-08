const btnNav = document.querySelector('#btn-nav')

function toggleMenu() {
  const nav = document.querySelector('#nav')
  nav.classList.toggle('active')
}

btnNav.addEventListener('click', toggleMenu)

function scroll() {}
