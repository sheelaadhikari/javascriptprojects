 const questions=[{
    'que': 'Which of the following is a markup language?',
    'a': 'HTML',
    'b': 'CSS',
    'c': 'JavaScript',
    'd': 'PHP',
    'correct': 'a'
 }, {
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
}]


let index=0;
const quesBox= document.getElementById("quesBox")
const loadQuestion=() =>{
    const data =questions[index]
quesBox.innerText=   ` ${index+1} ${data.que}`  ;
}
loadQuestion();
