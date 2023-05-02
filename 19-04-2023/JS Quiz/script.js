let quizData = [
  {
    question: "Which framework is related to JavaScript ?",
    a: '.net',
    b: 'flask',
    c: 'react',
    d: 'django',
    answer: 'c'
  },
  {
    question: "Which is not programming language ?",
    a: 'HTML',
    b: 'Python',
    c: 'Java',
    d: 'JavaScript',
    answer: 'a'
  },
  {
    question: "Which is not framework",
    a: 'react',
    b: 'JavaScript',
    c: 'angular',
    d: 'django',
    answer: 'b'
  },
  {
    question: "CSS stands for ?",
    a: 'cascadign style state',
    b: 'cascading style sheet',
    c: 'cascading sheet of style',
    d: 'none',
    answer: 'b'
  },
];

let quiz = document.getElementById('quiz');
let answer = document.querySelectorAll('.answer');
let question = document.getElementById('question');

let option_a = document.getElementById('a_value');
let option_b = document.getElementById('b_value');
let option_c = document.getElementById('c_value');
let option_d = document.getElementById('d_value');

let submitbtn = document.getElementById('submit');

let currentQuestion = 0;
let quizScore = 0;

loadQuiz()  //when page will load quiz will show automatically

const loadQuiz = () => {

  deSelect();

  question.innerHTML = quizData[currentQuestion].question;

  option_a.innerText = quizData[currentQuestion].a;
  option_b.innerText = quizData[currentQuestion].b;
  option_d.innerText = quizData[currentQuestion].c;
  option_d.innerText = quizData[currentQuestion].d;
}

const deSelect = () => {
  answer.forEach(answer => answer.checked = false);
}


submitbtn.addEventListener('click', ()=>{

  let selectedOption;

  answer.forEach(answer ()=>{
    if (answer.checked) {
      selectedOption = answer.id;
    }
  })

  if (selectedOption == quizData[currentQuestion].correct) {
    quizScore += 1;
  }
  currentQuestion += 1;
  
  if (currentQuestion == quizData.length) {
    document.getElementById('quizdiv').innerHTML = `<h1> You have answered ${quizScore} correctly.</h1>`
  } else {
    loadQuiz();
  }
});