const quizDatabase = [
    {
        question: "Q1. What does HTML stand for?",
        a : "Hello To My Land",
        b : "Home Tool Markup Language",
        c : "Hyper Text Markup Language",
        d : "Hyper Text Markup Tool",
        ans : "ans3"
    },
    {
        question : "Q2. What does CSS stand for?",
        a : "Computer Style Sheets",
        b : "Cascading Style Sheets",
        c : "Colourful Style Sheets",
        d : "None Of These",
        ans : "ans2"
    },
    {
        question : "Q3. Inside which HTML element do we put the JavaScript?",
        a : "<scripting>",
        b : "<js>",
        c : "<script>",
        d : "<javascript>",
        ans : "ans3"
    },
    {
        question : "Q4. Choose the correct HTML element for the largest heading:",
        a : "<head></head>",
        b : "<h1></h1>",
        c : "<h6></h6>",
        d : "<heading></heading>",
        ans : "ans2"
    },
    {
        question : "Q5. Where in an HTML document is the correct place to refer to an external style sheet?",
        a : "In the <head> section",
        b : "At the end of the document",
        c : "In the <body> section",
        d : "Before <head> section",
        ans : "ans1"
    },
    {
        question: "What is full form of DOM",
        a : "Download Object Model",
        b : "Doctor Of Marvel",
        c : "Document Object Model",
        d : "Dumb of Multiverse",
        ans : "ans3" 
    },
    {
        question : "Q.7 Choose the correct HTML element to define important text",
        a : "<strong>",
        b : "<b>",
        c : "<i>",
        d : "<important>",
        ans : "ans1"
    },
    {
        question : "Q8. Which HTML tag is used to define an internal style sheet?",
        a : "<script>",
        b : "<link>",
        c : "<style>",
        d : "<css>",
        ans : "ans3"
    },
    {
        question : "Q9. What is the correct syntax for referring to an external script called 'script.js'?",
        a : "<script src = 'script.js'></script>",
        b : "<script href = 'script.js'></script>",
        c : "<script src = 'scrpt.js></script>",
        d : "None of these",
        ans : "ans1"
    },
    {
        question : "Q.10 Choose the correct HTML element to define emphasized text",
        a : "<italic>",
        b : "<i>",
        c : "<em>",
        d : "<bold>",
        ans : "ans3"
    },
    {
        question : "Q11. Which is the correct CSS syntax?",
        a : "{ body; color:black; }",
        b : "body { color : black }",
        c : "body:color = black",
        d : "{ body:color = black }",
        ans : "ans2"
    },
    {
        question : "Q12. How do you call a function named 'myFunction'?",
        a : "call function myFunction",
        b : "call myFunction",
        c : "myFunction();",
        d : "None of these",
        ans : "ans3"
    }
    
]

SoloAlert.alert({
    title:"Welcome to my code",
    body:"There are 12 questions to answer ",
  });

let question = document.querySelector(".question");
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");
let submit = document.querySelector("#submit");
let answers = document.querySelectorAll(".answer")
let score = 0;
let showScore = document.querySelector("#showScore")

let questionCount = 0;

const loadQuestion = () => {
    const questionList = quizDatabase[questionCount];
    question.textContent = questionList.question;

    option1.textContent = questionList.a;
    option2.textContent = questionList.b;
    option3.textContent = questionList.c;
    option4.textContent = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    var answer;
    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    
    return answer;
};

const desall = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false)
}

submit.addEventListener("click", () => {
    const checkedAnswer = getCheckAnswer();
    // console.log(checkedAnswer);

    if (checkedAnswer == quizDatabase[questionCount].ans){
        score++;
        showScore.innerHTML = "Your answer was correct👌"
        // console.log(showScore)
    }else {
        showScore.innerHTML = "Your answer was incorrect! 🤦‍♂️"
        // console.log(showScore)
    }
    
    questionCount++;

    desall();

    if (questionCount < quizDatabase.length){
        loadQuestion();
    }else{
        showScore.innerHTML = `
        <h3>You scored ${score}/${quizDatabase.length} 👍</h3>
        </br>
        <button class="btn" onclick="location.reload()">Play Again?</button>
        `;

        // showScore.classList.remove('scoreArea')
    }
})