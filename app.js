const body = document.body
const menu = document.getElementById('menu')
const pages = document.getElementById('nav__right-container');
const input = document.getElementById('checkbox')
const ball = document.getElementById('ball')
const label = document.getElementById('label')
const line = document.getElementsByClassName('nav__center-container-line')



// making hamburger
menu.addEventListener('click',()=>{
    pages.classList.toggle('active')
})

// changing the background color of document

input.addEventListener('change',()=>{
    body.classList.toggle('change'); 
    ball.classList.toggle('bg-white');
    label.classList.toggle('bg-black');
    for(let i=0;i<line.length;i++){
        line[i].classList.toggle('bg-black')
    }
})

function scrollAppear(){

// variable for fade in-out
const about = document.getElementById('about');
const capability = document.getElementById('capa')

// fade in out on about

const aboutPosition = about.getBoundingClientRect().top;
const capabilityPosition = capability.getBoundingClientRect().top;
const height = window.innerHeight / 1.2;

if(aboutPosition<height){
    about.classList.add('appear')
}
if(capabilityPosition<height){
    capability.classList.add('appear')
}
}

window.addEventListener('scroll', scrollAppear)



