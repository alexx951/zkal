var questions = [
    {
        question: "Quelle est la capitale de la France ?",
        choices: ["Paris", "Londres", "Berlin", "Madrid"],
        correctAnswer: 0
    },
    {
        question: "Quelle est la plus grande planete du systeme solaire ?",
        choices: ["Terre", "Jupiter", "Venus", "Mars"],
        correctAnswer: 1
    },
    {
        question: "Quelle est la couleur du soleil ?",
        choices: ["Bleu", "Jaune", "Rouge", "Vert"],
        correctAnswer: 1
    }
];

var currentQuestion = 0;
var score = 0;

// Afficher la première question
function displayQuestion() {
    var questionElement = document.getElementById("question");
    var choicesElement = document.getElementById("choices");
    var scoreElement = document.getElementById("score");

    questionElement.textContent = questions[currentQuestion].question;
    choicesElement.innerHTML = "";

    for (var i = 0; i < questions[currentQuestion].choices.length; i++) {
        var choice = document.createElement("button");
        choice.className = "choice";
        choice.textContent = questions[currentQuestion].choices[i];
        choice.value = i;
        choice.onclick = checkAnswer;
        choicesElement.appendChild(choice);
    }

    scoreElement.textContent = "Score: " + score;
}

// Vérifier la réponse sélectionnée
function checkAnswer() {
    var selectedAnswer = this.value;

    if (selectedAnswer == questions[currentQuestion].correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

// Afficher le score final
function endQuiz() {
    var container = document.querySelector(".container");
    container.innerHTML = "<h2>Quiz terminé !</h2>" +
                          "<p>Score final: " + score + "</p>";
}

// Démarrer le quiz
displayQuestion();