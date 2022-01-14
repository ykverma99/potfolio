const body = document.body
const menu = document.getElementById('menu')
const pages = document.getElementById('nav__right-container');
const input = document.getElementById('checkbox')
const ball = document.getElementById('ball')
const label = document.getElementById('label')
const line = document.getElementsByClassName('nav__center-container-line')

// variable for fade in-out
const about = document.getElementById('about');
const capability = document.getElementById('capa')
const meetChat = document.getElementById('meetchat');
const homebase = document.getElementById('homebase');
const rps = document.getElementById('rps');
const drum = document.getElementById('drum');
const playing = document.getElementById('playing');
const cursor = document.getElementById('cursor');
const jacpiro = document.getElementById('jackpiro');
const gym = document.getElementById('gym');

// form validation variables

const form = document.getElementById('form');
const firstName = document.getElementById('first')
const lastName = document.getElementById('last')
const email = document.getElementById('email')

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




// function for scrolling animation

window.addEventListener('scroll', ()=>{
    
    // fade in out on about
    const aboutPosition = about.getBoundingClientRect().top;
    const capabilityPosition = capability.getBoundingClientRect().top;
    const jacpiroPosition = jacpiro.getBoundingClientRect().top;
    const playingPosition = playing.getBoundingClientRect().top;
    const cursorPosition = cursor.getBoundingClientRect().top;
    const homeBasePosition = homebase.getBoundingClientRect().top;
    const meetChatPosition = meetChat.getBoundingClientRect().top;
    const drumPosition = drum.getBoundingClientRect().top;
    const rpsPosition = rps.getBoundingClientRect().top;
    const gymPosition = gym.getBoundingClientRect().top;

    // height of window
    const height = window.innerHeight / 1.2;

    if(aboutPosition<height){
        about.classList.add('appear')
    }

    if(capabilityPosition<height){
        capability.classList.add('appear')
    }

    if(jacpiroPosition<height){
        jacpiro.classList.add('appear');
    }
    if(homeBasePosition<height){
        homebase.classList.add('appear');
    }
    if(playingPosition<height){
        playing.classList.add('appear');
    }
    if(drumPosition<height){
        drum.classList.add('appear');
    }
    if(meetChatPosition<height){
        meetChat.classList.add('appear');
    }
    if(rpsPosition<height){
        rps.classList.add('appear');
    }
    if(gymPosition<height){
        gym.classList.add('appear');
    }
    if(cursorPosition<height){
        cursor.classList.add('appear');
    }
})



// function for onpen page link 

meetChat.addEventListener('click',()=>{
    window.open('https://ykverma99.github.io/Meet-chat/')
})

jacpiro.addEventListener('click',()=>{
    window.open('https://ykverma99.github.io/first-project/')
})

homebase.addEventListener('click',()=>{
    window.open('https://ykverma99.github.io/homebase/')
})

cursor.addEventListener('click',()=>{
    window.open('https://ykverma99.github.io/fun-game/')
})

playing.addEventListener('click',()=>{
    window.open('https://ykverma99.github.io/css-js-variables/')
})

drum.addEventListener('click',()=>{
    window.open('https://ykverma99.github.io/drum-kit/')
})

rps.addEventListener('click',()=>{
    window.open('https://ykverma99.github.io/rock-paper-scissor/')
})

gym.addEventListener('click',()=>{
    window.open('https://ykverma99.github.io/Gym/')
})


// form validation 
form.addEventListener('submit', e =>{
    e.preventDefault();

    validateForm();
})

// function for showing error

const setError = (element,message) =>{
    const inputController = element.parentElement;
    const error = inputController.querySelector('.error')
    
    error.innerText = message;
}

// function for succes
const setSucess = (element) =>{
    const inputController = element.parentElement;
    const error = inputController.querySelector('.error')
    
    error.innerText = ' ';
}

// regular expression function for email
const isEmail = email => {
    const re = /[A-Z a-z ._0-9]{3,}[@][A-Z a-z]{3,5}[.][A-z a-z]{2,6}/;
    return re.test(String(email).toLowerCase)
}

// function to check the form is valid or not
const validateForm = ()=>{

    // trim all the value so they dont include the space
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    // check firstname 

    if(firstNameValue === ''){
        setError(firstName, 'Please fill the first name');
    }else{
        setSucess(firstName);
    }

    if(lastNameValue === ''){
        setError(lastName, 'Please fill the last name');
    }else{
        setSucess(lastName);
    }

    if(!isEmail(emailValue)){
        setError(email, 'Please enter the correct email')
    }else if(emailValue === ''){
        setError(email, 'Please fill the email')
    }else{
        setSucess(email);
    }
}



