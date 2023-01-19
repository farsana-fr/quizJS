//Authored by (Farsana Rahim)[https://github.com/farsana-fr]
//First coded on 13 Jan 2023


'use strict'


//quiz stores all the details such as question, options, correct answer
// this will help to maintain everything in an ordered manner

let score=0;
const quiz = [
  {
    question: `1. Select the correct answer to change color of below paragraph.\n
        <h6 class="fw-bold text-danger">(Read options carefully)</h6>`,
    screenshot: "./images/snippet1.png",
    choices: [
      `1. document.p.style.color="red";`,
      `2. document.querySelector('#msg').style.color="red";`,
      `3. document.getElementById('#para1').style.color="red";`,
      `4. document.getElementById('para1').style.color="red";`,
    ],
    correct: {
        opt:4,
      head: `4. document.getElementById('para1').style.color="red";`,
      para: "getElementById is one of the method to select the HTML elements. It received the id name as the arguments, no predecessors required",
    },
  },
  {
    question: "1. Select combinations that has block scope",
    choices: [
      "1. var,let and const",
      "2. const",
      "3. let and var",
      "4. const and var",
    ],
    correct: {
        opt:4,
      head: "4. const and var:",
      para: "the variables declared using let or const cannot be accessed before that block.(errors out as varaible is not defined) Whereas var has immediate parent scope and the variables will be accessible from the parent block.",
    },
  },
  {
    question: "1. Select combinations that has block scope",
    choices: ["1. gi", "2. gi", "3. gi", "4. r"],
    correct: {
        opt:1,
      head: "const and var:",
      para: "the variables declared using let or const cannot be accessed before that block.(errors out as varaible is not defined) Whereas var has immediate parent scope and the variables will be accessible from the parent block.",
    },
  },
];


//The heart of quiz page
function constrQuiz() {
    let questionHTML = `<div class="quizStart ">`;
    quiz.forEach((e, i) => {
      let imageCode = "";
      console.log(e.question);
      if (e.screenshot) {
        imageCode = `<img src=${e.screenshot}>;`;
      }
      questionHTML += `
      
              <h2>${e.question}</h2>
              ${imageCode}
              <div class="mt-4">
              <div class="form-check">
                  <input
                  class="form-check-input form-check-inputq${i + 1}"
                  type="radio" name="q${i + 1}" 
                  id="q${i + 1}a1"
                  />
                  <label class="form-check-label" for="q${i + 1}a1">
                  ${e.choices[0]}
                  </label>
              </div>
              <div class="form-check">
                  <input
                  class="form-check-input form-check-inputq${i + 1}"
                  type="radio" name="q${i + 1}" 
                  id="q${i + 1}a2"
                  />
                  <label class="form-check-label" for="q${i + 1}a2">${
        e.choices[1]
      }</label>
              </div>
              <div class="form-check">
                  <input
                  class="form-check-input form-check-inputq${i + 1}"
                  type="radio" name="q${i + 1}" 
                  id="q${i + 1}a3"
                  />
                  <label class="form-check-label" for="q${i + 1}a3">${
        e.choices[2]
      }</label>
              </div>
              <div class="form-check">
                  <input
                  class="form-check-input form-check-inputq${i + 1}"
                  type="radio" name="q${i + 1}" 
                  id="q${i + 1}a4"
                  />
                  <label class="form-check-label" for="q${i + 1}a4">${
        e.choices[3]
      }</label>
                  <br />
                  </div>
              </div>
              <button type="button" class="submitAns submitAns--${
                i + 1
              } btn btn-success mb-5">Submit Answer</button><div class="eachResultq${i + 1} fw-bold"></div>
              <br>
              <button type="button" class="checkB checkB--${
                i + 1
              } btn btn-primary disabled">Check Answer</button>
              <div class=" answer answer--${i + 1} border mt-5 p-4">
                  <h5>${e.correct.head}</h5>
                  <p>
                  ${e.correct.para}
                  </p>
              </div>
          
      `;
    });
    questionHTML += "</div>";
    return questionHTML;
}

const btnSubmit = document.querySelector(".submitB");
const secWelcome = document.querySelector(".welcome");
const secQuiz = document.querySelector(".quiz");
secQuiz.innerHTML = "";

//Starting the quiz on click of Start Button 
//Note: I have added this event on the complete quiz area, so it eases our effort to handle all the buttons within the same handler
btnSubmit.addEventListener("click", function () {
  secWelcome.classList.add("hidden");
  secWelcome.textContent = "";
  secQuiz.classList.remove("hidden");
  secQuiz.innerHTML = constrQuiz();

  const btnCheck = document.querySelector(".checkB");
  const answer = document.querySelectorAll(".answer");
  const quizArea = document.querySelector(".quizStart");

  //Listening to all events from quiz section
  quizArea.addEventListener("click", function (e) {
    console.log(e.target);
    const getTargetClass=e.target.getAttribute("class");


    //Handle for Submit Answer Starts
    
    let answered=((getTargetClass.split(" ")).filter(e=>e.startsWith("submitAns--")).join());
    console.log(answered);
    if(answered)
    {
        console.log(answered[answered.length-1]);
        answered=answered[answered.length-1];
        let selectedOption=0;

            const correctAns=quiz[0].correct.opt;
            console.log(answered);
            // console.log(document.querySelectorAll(`.form-check-inputq${answered}`));
            document.querySelectorAll(`.form-check-inputq${answered}`).forEach(
                (e,i)=>{
                    console.log("Inside loop 152");
                    console.log(e.checked);
                    if(e.checked)
                    {
                        selectedOption=i+1;
                        console.log("selected",selectedOption);
                        console.log("correct",correctAns);
                        if(selectedOption==correctAns)
                        {
                            
                            localStorage.setItem("score",++score);
                            document.querySelector(`.eachResultq${answered}`).innerHTML=`<h6 class="text-success">Correct Answer 🎉</h6>`
                        }
                        else
                        {
                            document.querySelector(`.eachResultq${answered}`).innerHTML=`<h6 class="fw-bold text-danger">Wrong Answer, take a lot at correct answer</h6>`;

                        }
                        document.querySelector(`.checkB--${answered}`).classList.remove('disabled');
                        //disable the radio buttons
                        console.log("HI");
                        [1,2,3,4].forEach(
                            e=>
                            {
                                console.log(`q${answered}a${e}`);
                                console.log(document.getElementById(`q${answered}a${e}`))
                                document.getElementById(`q${answered}a${e}`).disabled=true;
                            }
                        )
                    }
                }
            )

    }
    //Handle for Submit Answer Ends

    //Handle the Check Answer functionality Starts

    let checkAns=((getTargetClass.split(" ")).filter(e=>e.startsWith("checkB--")).join());
    console.log(checkAns);
    let toShow=checkAns[checkAns.length-1];
    console.log(toShow);
    if(checkAns)
    {
        const btnCheck=document.querySelector(`.${checkAns}`);
        document.querySelector(`.answer--${toShow}`).classList.toggle('show');
        btnCheck.textContent=btnCheck.textContent=="Check Answer"?"Hide Answer":"Check Answer";
    }

    //Handle the Check Answer functionality End
  });

});

