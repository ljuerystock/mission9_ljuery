document.addEventListener('DOMContentLoaded', () => {
    
    const questions = document.querySelectorAll('.question');
    const scoreDisplay = document.getElementById('scoreDisplay');
    
    document.getElementById('btnCheck').addEventListener('click', () => {
        let score = 0;

        questions.forEach(question => {
            const correctAnswer = question.getAttribute('data-correct');
            const userChoice = question.querySelector('input:checked');
            const feedback = question.querySelector('.feedback');

            feedback.className = 'feedback'; 

            if (userChoice) {
                if (userChoice.value === correctAnswer) {
                    score++;
                    feedback.textContent = "Correct !";
                    feedback.classList.add('text-success');
                } else {
                    feedback.textContent = "Faux !";
                    feedback.classList.add('text-error');
                }
            } else {
                feedback.textContent = "Aucune réponse choisie.";
                feedback.classList.add('text-error');
            }
        });

        displayScore(score, questions.length);
    });

    document.getElementById('btnReveal').addEventListener('click', () => {
        questions.forEach(question => {
            const correctAnswer = question.getAttribute('data-correct');
            const feedback = question.querySelector('.feedback');
            feedback.textContent = `La bonne réponse était : ${correctAnswer}`;
            feedback.className = 'feedback text-success';
        });
    });

    document.getElementById('btnReset').addEventListener('click', () => {
        document.querySelectorAll('input[type="radio"]').forEach(input => input.checked = false);
        document.querySelectorAll('.feedback').forEach(p => p.textContent = '');
        scoreDisplay.textContent = '';
        scoreDisplay.style.background = 'transparent';
    });

    function displayScore(score, total) {
        scoreDisplay.textContent = `Votre score : ${score} / ${total}`;
        
        if (score === total) {
            scoreDisplay.style.background = "#dcfce7";
            scoreDisplay.textContent += " — Magnifique c'est 10/10 ! 🏆";
        } else if (score > total / 2) {
            scoreDisplay.style.background = "#e0f2fe"; 
            scoreDisplay.textContent += " — Pas mal pas mal !";
        } else {
            scoreDisplay.style.background = "#fee2e2"; 
            scoreDisplay.textContent += " — Aïe, veuillez quitter cette page je vous pris !";
        }
    }
});