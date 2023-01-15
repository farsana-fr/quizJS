const btnSubmit=document.querySelector('.submitB');
const secWelcome=document.querySelector('.welcome');
const secQuiz=document.querySelector('.quiz');
const btnCheck=document.querySelector('.check');
const answer=document.querySelectorAll('.answer')
const allQuestion=secQuiz.innerHTML;
secQuiz.textContent="";
btnSubmit.addEventListener('click',function()
{
    secWelcome.classList.add('hidden');
    secWelcome.textContent="";
    secQuiz.classList.remove('hidden');
    secQuiz.innerHTML=allQuestion;
})

btnCheck.addEventListener('click',function()
{
    for(i of answer)
    {
        console.log(i);
        i.classList.remove('hidden')
    }
})