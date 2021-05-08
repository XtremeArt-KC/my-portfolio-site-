// ====menu====
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId)
    const nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', () =>{
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

// vanish-mobile-menu 
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


// scroll-to-section-on-active-link 
const activeSection = document.querySelectorAll('section[id]')

function scrollToActiveSection(){
    const scrollY = window.pageYOffset

    activeSection.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollToActiveSection)

// change-header-background-on-scroll 
function headerOnScroll(){
    const header = document.getElementById('header')

    if(this.scrollY >= 200) header.classList.add('header-on-scroll'); else header.classList.remove('header-on-scroll')
}

window.addEventListener('scroll', headerOnScroll)


// show-scroll-to-top 
function scrollToTop(){
    const scrollTop = document.getElementById('scroll-to-top')

    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll-btn'); else scrollTop.classList.remove('show-scroll-btn')
}

window.addEventListener('scroll', scrollToTop)

// mixitup-animation 
const mixer = mixitup('.portfolio-container', {
    selectors: {
        target: '.portfolio-content'
    },
    animation: {
        duration: 400
    }
});

// =====active portfolio-item======
const portfolioItem = document.querySelectorAll('.portfolio-item')

function activportfolio(){
    if(portfolioItem){
        portfolioItem.forEach(p => p.classList.remove('active-portfolio'))
        this.classList.add('active-portfolio')
    }
}

portfolioItem.forEach(p => p.addEventListener('click', activportfolio))

// ==========swiper carousel=======
const swiper = new Swiper('.testimonial-container', {
  // Optional parameters
  spaceBetween: 16,
  loop: true,
  grabCursor: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints:{
    640:{
        slidesPerView: 2,
    },
    1024:{
        slidesPerView: 3,
    },
  }
});

// ====gsap-animation=====
gsap.from('.home-img', {opacity: 0, duration: 2, delay: .5, x:60})
gsap.from('.home-data', {opacity: 0, duration: 2, delay: .8, y:25})
gsap.from('.home-greeting, .home-name, .home-profession, .home-button', {opacity: 0, duration: 2, delay: 1, y:25, ease: 'expo.out', stagger: .2 })
gsap.from('.nav-logo, .nav-toggle', {opacity: 0, duration: 2, delay: 1.5, y:25, ease: 'expo.out', stagger: .2 })
gsap.from('.nav-item', {opacity: 0, duration: 2, delay: 1.8, y:25, ease: 'expo.out', stagger: .2 })
gsap.from('.home-social', {opacity: 0, duration: 2, delay: 1.5, y:25, ease: 'expo.out', stagger: .2 })