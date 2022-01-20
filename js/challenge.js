//1) ++make a counter that counts up from zero
//2) give the counter the ability to pause/resume
//2a) pause should disable all other input functions
//2b) change the text on the button from pause to resume
//3) ++manually increment and decrement the counter with + / - buttons
//4) leave comments below
//5) add a restart/reset button

//1) counter from zero

//prevents the script from running until DOM content load
//document.addEventListener("DOMContentLoaded", () => {
    // creates event listener for submit button to fire the li addition handler


//   });

//dom selectors
const counterEl = document.getElementById('counter')//h1
const minusBtn = document.getElementById('minus')//button
const plusBtn = document.getElementById('plus')//button
const heartBtn = document.getElementById('heart')//button
const pauseBtn = document.getElementById('pause')//button
const likeSection = document.querySelector('ul.likes')//ul
const commentList = document.getElementById('list')//div
const form = document.getElementById('comment-form')//form with submit button
const inputBox = document.getElementById('comment-input')
const fieldsToDisable = document.querySelectorAll('#minus, #plus, #heart, #comment-input, #submit') 

//event listeners
minusBtn.addEventListener('click', minus) //minus button fires the minus function
plusBtn.addEventListener('click', plus) //plus button fires plus function
heartBtn.addEventListener('click', heartLike) //heart button fires the heartLike func
pauseBtn.addEventListener('click', pause) //pause button fires pause function (this might need more)
form.addEventListener('submit', submitForm) //submit button fires the submit function

//button killer

//lets start our counters with zero
let counter = 0
let hearts = 1

//make the counter
function counting(){
    countUp = setInterval(function(){
    counterEl.textContent = counter
    counter++
    }, 1000)
}
//timer controls
function pause() {
    clearInterval(countUp)
    if (minusBtn.disabled === false || "") {
        fieldsToDisable.forEach((element) => {
            element.disabled = true
        })    
    }
    else {
        counting()
        fieldsToDisable.forEach((element) => {
            element.disabled = false
        })
    }
}
function plus() {
    counter++
    counterEl.textContent = counter
}
function minus() {
    counter--
    counterEl.textContent = counter
}

//comments and like controls ++ current issue: like button creates new li each time
//should test whether the current count number is the same as the previous, if so no new li, else new li
function heartLike(event) {
    let li = document.createElement('li')
    likeSection.appendChild(li)
    if (counter === counter){
        li.innerHTML = `${counter} has been liked ${hearts++ } times`
    }
    else {
        li.innerHTML = `${counter++} has been liked ${ hearts++ } times`
    }
    hearts++
}
//give the submitform() a parameter so it knows what to pass
function submitForm(event) {
    event.preventDefault()
    let p = document.createElement('p')
    p.textContent = inputBox.value
    commentList.appendChild(p)
    form.reset()
}

counting()//make it count yo

