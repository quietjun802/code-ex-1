const header = document.querySelector('header')
const navBtn = document.querySelector('.nav-btn')
const scrollTopBtn = document.querySelector('.scroll-top-btn')
const menuLinks = document.querySelectorAll('.menu-link')

navBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log('click')
    header.classList.toggle('open')
})

window.addEventListener('scroll', ()=>{
    let i = window.scrollY

    console.log(i)

    if ( i > 50 ) {
        header.classList.add('scroll')
    }
    else {
        header.classList.remove('scroll')
    }
})

scrollTopBtn.addEventListener('click', ()=>{
    console.log('top')
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    })
})

menuLinks.forEach(link=>{
    link.addEventListener('click',(e)=>{
        e.preventDefault()

        const targetId=link.getAttribute('href').substring(1)
        const targetElement = document.getElementById(targetId)

        console.log(targetId)

        if (targetElement) {
            window.scrollTo({
                top:targetElement.offsetTop,
                behavior: 'smooth'
            })
        }
    })
})