// Import html elements
const counter = document.querySelector("#counter");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const heart = document.querySelector("#heart");
const pause = document.querySelector("#pause");
const likes = document.querySelector(".likes");
const submit = document.querySelector("#submit");
const commentBar = document.querySelector("#comment-input");
const list = document.querySelector("#list");

// All my disable buttons in one place

const buttons = [minus, plus, heart, submit];

// Helps with the counter pause/resume

let isRunning = true;

// Makes the counter work

function countUp() { 
  setInterval(() => {
    if (isRunning === true) {parseInt(counter.innerText); 
    return ++counter.innerText
    }
    else if (!isRunning) {
      clearInterval(countUp)
    }
  }, 1000)
};

countUp();

// Will reduce the counter one every click

minus.addEventListener("click", () => --counter.innerText);

// Will increase the counter one every click

plus.addEventListener("click", () => ++counter.innerText);

// Will add a liked comment per number: ***WIP***

heart.addEventListener("click", function() {
  
  let num = 0;
  if (counter.innerText === counter.innerText) {
    let li = document.createElement("li");
    likes.append(li)
    li.innerText = `${counter.innerText} has been liked ${num+1} times`
  }
  else (li.innerText = `${counter.innerText} has been liked 1 time`)
})

// Will pause the counter

pause.addEventListener("click", function() {
  if (pause.innerText === "pause") {
    pause.innerText = "resume"
    isRunning = false
    buttons.forEach(element => element.disabled = true)
  }
  else if (pause.innerText === "resume") {
    pause.innerText = "pause"
    isRunning = true
    buttons.forEach(element => element.disabled = false)
  }
})

// Will leave a comment

submit.addEventListener("click", function(e) {
  e.preventDefault();
  const li = document.createElement("li");
  list.appendChild(li)
  li.innerText = commentBar.value;
})
