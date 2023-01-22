const questions = [{
    'que': 'Which of the following is a markup language?',
    'a': 'HTML',
    'b': 'CSS',
    'c': 'JavaScript',
    'd': 'PHP',
    'correct': 'a'
},
{
    'que': 'when was javascript launched?',
    'a': '1999',
    'b': '1995',
    'c': '1000',
    'd': '1888',
    'correct': 'b'
},
{
    'que': 'what does css stands for?',
    'a': 'HTML',
    'b': 'cascading style sheet',
    'c': 'JavaScript',
    'd': 'PHP',
    'correct': 'b'
}];


let index = 0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll(".options")
const loadQuestion = () => {
    const data = questions[index]
    quesBox.innerText = ` ${index + 1} )${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;

}

const submitQuiz=()=>{
    const ans=getAnswer()
}
const getAnswer=()=>

loadQuestion();
