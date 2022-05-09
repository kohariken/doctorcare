window.addEventListener('scroll', onscroll)

onscroll()
function onscroll() {
  shownavonscroll()
  showbacktotopbuttononscroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  // verificar se a seção passou da linha
  // quais dados vou precisar?
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  // verificar se a base está abaixo da linha alvo

  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

  // limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function shownavonscroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

// button top

function showbacktotopbuttononscroll() {
  if (scrollY > 500) {
    backtotopbutton.classList.add('show')
  } else {
    backtotopbutton.classList.remove('show')
  }
}

// abrir menu

function openmenu() {
  document.body.classList.add('menu-expanded')
}

// fechar menu

function closemenu() {
  document.body.classList.remove('menu-expanded')
}
// scroll reveal

ScrollReveal({
  origin: 'top',
  distance: '30px'
}).reveal(`
#home,
#home img,
#home .stats,
#services,
#services header,
#services .card
#about,
#about header,
#about .content,
#about img`)
