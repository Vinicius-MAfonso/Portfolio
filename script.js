const btnNav = document.getElementById('btn-nav')

toggleMenu = () => {
  const nav = document.getElementById('nav')
  nav.classList.toggle('active')
  console.log('Ativo!')
}

btnNav.addEventListener('click', toggleMenu)
