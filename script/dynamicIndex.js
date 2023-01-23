//Authored by (Farsana Rahim)[https://github.com/farsana-fr]
//First coded on 13 Jan 2023

"use strict";

//quiz stores all the details such as question, options, correct answer
// this will help to maintain everything in an ordered manner

let score = 0;
const quiz = [
  {
    question: `1. Select the correct answer to change color of below paragraph.<br>
        <h6 class="fw-bold text-danger">(Read options carefully)</h6>`,
    screenshot: "./images/snippet1.png",
    choices: [
      `1. document.p.style.color="red";`,
      `2. document.querySelector('#msg').style.color="red";`,
      `3. document.getElementById('#para1').style.color="red";`,
      `4. document.getElementById('para1').style.color="red";`,
    ],
    correct: {
      opt: 4,
      head: `4. document.getElementById('para1').style.color="red";`,
      para: "getElementById is one of the method to select the HTML elements. It receives the id given in Element as argument. The argument does not need a predecessors as in querySelector(), where querySelector needs # to indicate that it is an ID",
    },
  },
  {
    question: `2. Given below data type is?\n
    <h6>
      const item={
        pID:1,
        pName:"chocolate",
        pBrand:"Galaxy"
      };
    </h6>`,
    choices: [`1. Map`, `2. Object`, `3. List`, `4. JSON`],
    correct: {
      opt: 2,
      head: "2. Object",
      para: "Object is declared inside curly braces with key value pair separated by a colon(:)",
    },
  },
  {
    question: "3. Select combinations that has block scope",
    choices: [
      "1. var,let and const",
      "2. const",
      "3. let and var",
      "4. const and var",
    ],
    correct: {
      opt: 4,
      head: "4. const and var:",
      para: "the variables declared using let or const cannot be accessed before that block.(errors out as varaible is not defined). Whereas var declared in a block will be accessible from its immediate parent scope.",
    },
  },
  {
    question: "4. Which one of the below gives true?",
    choices: [
      `1. Boolean(0)`,
      `2. Boolean("")`,
      `3. Boolean("false")`,
      `4. Boolean(NaN)`,
    ],
    correct: {
      opt: 3,
      head: `3. Boolean("false")`,
      para: `Here false is given as string within double quotes. So it is a string of value false, not a Boolean value false.
      Values like false,0,null,undefined are Falsy Values whereas 1,true,(4,30)any number,"xyz"(any non empty string) are Truthy Values.
      This feature can be used as a shortcut for validation`,
    },
  },
  {
    question: `5. Given a string as below, how to access 'w'?\n
    <h6>const str="welcome"</h6>`,
    choices: [`1. str.at(0)`, `2. str(1)`, `3. str[-1]`, `4. String.str[0]`],
    correct: {
      opt: 1,
      head: "1. str.at(0)",
      para: "at(0) is same as string_name[0], at(index) return the value at that index",
    },
  },
  {
    question: `6. Select the appropriate code to convert below array to a string ?\n
    <h6>const fruits=["Apple","Orange","Grapes","Mango"]
    Result should be "Apple Orange Grapes Mango"</h6>`,
    choices: [
      `1. fruits.join()`,
      `2. fruits.join(" ")`,
      `3. fruits.tostring()`,
      `4. join(fruits,"")`,
    ],
    correct: {
      opt: 2,
      head: `2. fruits.join(" ")`,
      para: `join() method is used to return convert an array to string separated by the separator passed in to join method. If there are no separator mentioned, by default the resultant string will have elements separated by comma. join(" ") separates it with a space as passed in the method.  \n `,
    },
  },
  {
    question: `7. The data type of values received from HTML Input field are always  \n`,
    choices: [`1. Number`, `2. Object`, `3. String `, `4. HTMLCollection`],
    correct: {
      opt: 3,
      head: `3. String`,
      para: "Values from HTML input are always a string, we can convert it to desired type using appropriate JS functions when needed.",
    },
  },
  {
    question: `8. Which one of the below will give an error<h6 class="text-danger fw-bold">(Note: not in strict mode)</h6>`,
    choices: [`1. double a=5;`, `2. let a=5;`, `3. var a=5; `, `4. a=5`],
    correct: {
      opt: 1,
      head: `1. double a=5;`,
      para: `double is not an identifier of JS. Error:Uncaught SyntaxError: unexpected token: identifier`,
    },
  },
  {
    question: `9. What will be the output of below code snippet
    <h6 class="text-danger fw-bold">
    console.log("Hi");<br>
    setTimeout(()=>console.log("World"),0);<br>
    console.log("I am JS");
    </h6>`,
    choices: [
      `1. Hi<br>World <br> I am JS<br>`,
      `2. Hi <br> I am JS<br>`,
      `3. Hi <br> I am JS <br> World <br>`,
      `4. World <br> Hi <br> I am JS<br>`,
    ],
    correct: {
      opt: 3,
      head: `3. Hi <br> I am JS <br> World`,
      para: `JS Engine will consider callback queue once the call stack is empty(once every synchornous tasks are done)`,
    },
  },
  {
    question: `10. What does 500 series indicate in Response status`,
    choices: [
      `1. Server side error`,
      `2. Success`,
      `3. Unauthorized`,
      `4. There are only responses till 400 series`,
    ],
    correct: {
      opt: 1,
      head: `1. Server side error`,
      para: `AT&T definition: A first digit of 5 represents a server—side error, with the most common codes in the range of 500 to 510. Because the codes in 400 and 500 range represent errors, they are also referred to as HTTP Error Codes.`,
    },
  },
];

//The heart of quiz page
function constrQuiz() {
  let questionHTML = `<div class="quizStart ">`;
  quiz.forEach((e, i) => {
    let imageCode = "";

    if (e.screenshot) {
      imageCode = `<img src=${e.screenshot}>`;
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
                <div class="row">
                  <button type="button" class="col-lg-3 col-md-3 submitAns submitAns--${
                    i + 1
                  } btn btn-success mb-5">Submit Answer</button><div class="col-lg-6 col-md-6 eachResultq${
      i + 1
    } fw-bold"></div>
                </div>
                <br>
                <button type="button" class="checkB checkB--${
                  i + 1
                } btn btn-primary disabled hide">Check Answer</button>
                <div class=" answer answer--${i + 1} border mt-5 p-4">
                    <h5>${e.correct.head}</h5>
                    <p>
                    ${e.correct.para}
                    </p>
                    
              </div>
          
      `;
  });
  questionHTML += `</div>
    <hr>
    <div class="finishQuiz text-center mt-5">
                    <button type="button" class="btnFinish btn btn-danger w-50">Finish</button>
                  </div>`;
  return questionHTML;
}

const btnSubmit = document.querySelector(".submitB");
const secWelcome = document.querySelector(".welcome");
const secQuiz = document.querySelector(".quiz");
const timer = document.querySelector(".displayTimer");
if (secQuiz) secQuiz.innerHTML = "";

//Starting the quiz on click of Start Button
//Note: I have added this event on the complete quiz area, so it eases our effort to handle all the buttons within the same handler

if (btnSubmit) {
  btnSubmit.addEventListener("click", function () {
    secWelcome.classList.add("hidden");
    secWelcome.textContent = "";
    secQuiz.classList.remove("hidden");
    secQuiz.innerHTML = constrQuiz();
    timer.classList.remove('hidden');
    //23-Jan-2023 : Add Timer Starts
    // let quizAllowedTime=10*60*1000;
    let sec = 0;
    let min = 5;
    let remaining='';
    let tim=setInterval(
      () =>
        // timer.textContent;
        {
          // let wat=Intl.DateTimeFormat('en-US').format(new Date(quizAllowedTime));
          if (min == 0 && sec == 0) {
            document
              .querySelectorAll(`.form-check-input`)
              .forEach((e) => (e.disabled = true));

            document
              .querySelectorAll(`.submitAns`)
              .forEach((e) => e.classList.add("disabled"));
              timer.innerHTML=`<h4 class="text-center p-1">TIMED OUT!!</h4>`;
              timer.classList.add('hidden');
              clearInterval(tim);
              
          } else if (sec == 0) {
            min--;
            sec = 60;
          }
          else 
          {
            remaining=`${min}`.padStart(2,0)+`:${sec--}`.padStart(2,0);
            timer.innerHTML=`<h4 class="text-center p-1">TIME LEFT: ${remaining}</h4>`
            // timer.textContent=remaining;
            // console.log("remaining",remaining);
          }
        },

      1000
    );
    //23-Jan-2023 : Add Timer Ends
    const quizArea = document.querySelector(".quizStart");
    if (!secQuiz.classList.contains("hidden")) {
      document
        .querySelector(".btnFinish")
        .addEventListener("click", function () {
          timer.classList.add('hidden');
          secQuiz.innerHTML = `
      <div class=" mt-5">
          <h3>You have scored</h3>
          <h3 class="displayScore text-green fw-bold"></h3>
      </div>
      `;

          //May be will uncomment in future
          // window.location="result.html";
          console.log(document.querySelector(".displayScore"));
          const scored = localStorage.getItem("score")
            ? localStorage.getItem("score")
            : 0;
          const perc = (scored / `${quiz.length}`) * 100;
          document.querySelector(
            ".displayScore"
          ).textContent = `${scored} out of ${quiz.length} which is ${perc}%`;
          localStorage.removeItem("score");
        });
    }
    //Listening to all events from quiz section
    quizArea.addEventListener("click", function (e) {
      // console.log(e.target);
      const getTargetClass = e.target.getAttribute("class");

      //Handle for Submit Answer Starts

      let answered = getTargetClass
        .split(" ")
        .filter((e) => e.startsWith("submitAns--"))
        .join();
      console.log("answered", answered);
      if (answered) {
        // console.log(answered[answered.length-1]);
        // answered=answered[answered.length-1];);
        //Updated the logic on Jan 23 to handle 2 digit question numbers
        answered = answered.slice(answered.lastIndexOf("-") + 1);
        let selectedOption = 0;

        //Correct answer is on array that starts from index 0.
        //Here we have stored the submited question on answered with is index+1
        //Hence to trace back the index of quiz to get the current question, we need to do answered-1
        const correctAns = quiz[answered - 1].correct.opt;
        console.log("Answered", answered);
        //  console.log(document.querySelectorAll(`.form-check-inputq${answered}`));

        document
          .querySelectorAll(`.form-check-inputq${answered}`)
          .forEach((e, i) => {
            // console.log("Inside loop 152");
            console.log("ELEM", e, "Checked?", e.checked);
            if (e.checked) {
              selectedOption = i + 1;
              // console.log("selected",selectedOption);
              // console.log("correct",correctAns);
              if (selectedOption == correctAns) {
                localStorage.setItem("score", ++score);
                document.querySelector(
                  `.eachResultq${answered}`
                ).innerHTML = `<h6 class="text-success fw-bold">Correct Answer 🎉</h6>`;
              } else {
                document.querySelector(
                  `.eachResultq${answered}`
                ).innerHTML = `<h6 class="fw-bold text-danger">Wrong Answer, take a lot at correct answer</h6>`;
              }
              document
                .querySelector(`.checkB--${answered}`)
                .classList.remove("disabled");
              document
                .querySelector(`.checkB--${answered}`)
                .classList.remove("hide");
              //disable the radio buttons

              quiz[answered - 1].choices.forEach((_, i) => {
                document.getElementById(
                  `q${answered}a${i + 1}`
                ).disabled = true;
              });
            }
          });
      }
      //Handle for Submit Answer Ends

      //Handle the Check Answer functionality Starts

      let checkAns = getTargetClass
        .split(" ")
        .filter((e) => e.startsWith("checkB--"))
        .join();

      // let toShow=checkAns[checkAns.length-1];
      //Updated the logic on Jan 23 to handle 2 digit question numbers
      let toShow = checkAns.slice(checkAns.lastIndexOf("-") + 1);

      if (checkAns) {
        const btnCheck = document.querySelector(`.${checkAns}`);
        document.querySelector(`.answer--${toShow}`).classList.toggle("show");
        btnCheck.textContent =
          btnCheck.textContent == "Check Answer"
            ? "Hide Answer"
            : "Check Answer";
      }

      //Handle the Check Answer functionality End
    });
  });
}
