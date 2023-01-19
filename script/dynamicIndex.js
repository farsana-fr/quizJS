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
        opt:2,
      head: "2. Object",
      para: "Object is declared inside curly braces with key value pair separated by :",
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
        opt:4,
      head: "4. const and var:",
      para: "the variables declared using let or const cannot be accessed before that block.(errors out as varaible is not defined) Whereas var has immediate parent scope and the variables will be accessible from the parent block.",
    },
  },
  {
    question: "4. Which one of the below gives true?",
    choices: [`1. Boolean(0)`, `2. Boolean("")`, `3. Boolean("false")`, `4. Boolean(NaN)`],
    correct: {
        opt:3,
      head: `3. Boolean("false")`,
      para: `Here false is given as string within double quotes.
      values like false,0,null,undefined are Falsy Values whereas above 1,true,(4,30)any number are Truthy Values.
      This feature helps us to validate the variables`,
    },
  },
  {
    question: `5. Given a string as below, how to access 'w'?\n
    <h6>const str="welcome"</h6>`,
    choices: [`1. str.at(0)`, `2. str(1)`, `3. str[-1]`, `4. String.str[0]`],
    correct: {
        opt:1,
      head: "1. str.at(0)",
      para: "at(0) is same as string_name[0], at(index) return the value at that index",
    },
  },
  {
    question: `6. Select the appropriate code to convert below array to a string ?\n
    <h6>const fruits=["Apple","Orange","Grapes","Mango"]
    Result should be "Apple Orange Grapes Mango"</h6>`,
    choices: [`1. fruits.join()`, `2. fruits.join(" ")`, `3. fruits.tostring()`, `4. join(fruits,"")`],
    correct: {
        opt:2,
      head: `2. fruits.join(" ")`,
      para: "join() method is used to return a string with the separator mentioned in join method. If there are no separator mentioned, by default the resultant string will have elements separated by comma.\n ",
    },
  },
  {
    question: `7. The data type of values received from HTML Input field are always  \n`,
    choices: [`1. Number`, `2. Object`, `3. String `, `4. HTMLCollection`],
    correct: {
        opt:3,
      head: `3. String`,
      para: "Values from HTML input are always a string, we can convert it to desired type using appropriate JS functions.",
    },
  },
  {
    question: `8. Which one of the below will give an error<h6 class="text-danger fw-bold">(Note: not in strict mode)</h6>`,
    choices: [`1. double a=5;`, `2. let a=5;`, `3. var a=5; `, `4. a=5`],
    correct: {
        opt:1,
      head: `1. double a=5;`,
      para: `double is not an identifier of JS. Error:Uncaught SyntaxError: unexpected token: identifier`,
    },
  }
];


//The heart of quiz page
function constrQuiz() {
    let questionHTML = `<div class="quizStart ">`;
    quiz.forEach((e, i) => {
      let imageCode = "";
   
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
                <div class="row">
                  <button type="button" class="col-lg-3 col-md-3 submitAns submitAns--${
                    i + 1
                  } btn btn-success mb-5">Submit Answer</button><div class="col-lg-6 col-md-6 eachResultq${i + 1} fw-bold"></div>
                </div>
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
if(secQuiz)
  secQuiz.innerHTML = "";

//Starting the quiz on click of Start Button 
//Note: I have added this event on the complete quiz area, so it eases our effort to handle all the buttons within the same handler

if(btnSubmit)
{
  btnSubmit.addEventListener("click", function () {
  secWelcome.classList.add("hidden");
  secWelcome.textContent = "";
  secQuiz.classList.remove("hidden");
  secQuiz.innerHTML = constrQuiz();

  const btnCheck = document.querySelector(".checkB");
  const answer = document.querySelectorAll(".answer");
  const quizArea = document.querySelector(".quizStart");
  if(!secQuiz.classList.contains('hidden'))
  {
    console.log("HELLO");
    document.querySelector('.btnFinish').addEventListener('click',function()
    {
      secQuiz.innerHTML=`
      <div class=" mt-5">
          <h3>You have scored</h3>
          <h3 class="displayScore text-green fw-bold"></h3>
      </div>
      `;
      // window.location="result.html";
      console.log(document.querySelector('.displayScore'));
      const scored=localStorage.getItem("score")?localStorage.getItem("score"):0;
      const perc=(scored/8)*100;
      document.querySelector('.displayScore').textContent=`${scored} out of 8 which is ${perc}%`;
      localStorage.removeItem("score");
    })
    
  }
  //Listening to all events from quiz section
  quizArea.addEventListener("click", function (e) {
    // console.log(e.target);
    const getTargetClass=e.target.getAttribute("class");


    //Handle for Submit Answer Starts
    
    let answered=((getTargetClass.split(" ")).filter(e=>e.startsWith("submitAns--")).join());
    // console.log(answered);
    if(answered)
    {
        // console.log(answered[answered.length-1]);
        answered=answered[answered.length-1];
        let selectedOption=0;

        //Correct answer is on array that starts from index 0.
        //Here we have stored the submited question on answered with is index+1
        //Hence to trace back the index of quiz to get the current question, we need to do answered-1
            const correctAns=quiz[answered-1].correct.opt;
            console.log("Answered",answered);
            //  console.log(document.querySelectorAll(`.form-check-inputq${answered}`));
            
            document.querySelectorAll(`.form-check-inputq${answered}`).forEach(
                (e,i)=>{
                    // console.log("Inside loop 152");
                    console.log("ELEM",e,"Checked?",e.checked);
                    if(e.checked )
                    {
                    
                        selectedOption=i+1;
                        // console.log("selected",selectedOption);
                        // console.log("correct",correctAns);
                        if(selectedOption==correctAns)
                        {
                            
                            localStorage.setItem("score",++score);
                            document.querySelector(`.eachResultq${answered}`).innerHTML=`<h6 class="text-success fw-bold">Correct Answer 🎉</h6>`
                        }
                        else
                        {
                            document.querySelector(`.eachResultq${answered}`).innerHTML=`<h6 class="fw-bold text-danger">Wrong Answer, take a lot at correct answer</h6>`;

                        }
                        document.querySelector(`.checkB--${answered}`).classList.remove('disabled');
                        //disable the radio buttons
                        
                        [1,2,3,4].forEach(
                            e=>
                            {
                                
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
   
    let toShow=checkAns[checkAns.length-1];
   
    if(checkAns)
    {
        const btnCheck=document.querySelector(`.${checkAns}`);
        document.querySelector(`.answer--${toShow}`).classList.toggle('show');
        btnCheck.textContent=btnCheck.textContent=="Check Answer"?"Hide Answer":"Check Answer";
    }

    //Handle the Check Answer functionality End
  });

});


}