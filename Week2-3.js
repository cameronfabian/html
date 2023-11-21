// script.js
const form = document.getElementById('multiStepForm');
const steps = form.querySelectorAll('.step');
let currentStep = 0;

function showStep(stepIndex) {
    steps.forEach((step, index) => {
        if (index === stepIndex) {
            step.style.display = 'block';
        } else {
            step.style.display = 'none';
        }
    });
}

function nextStep() {
    currentStep++;
    showStep(currentStep);
}

function prevStep() {
    currentStep--;
    showStep(currentStep);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Form submitted successfully!');
});

form.querySelector('.next').addEventListener('click', nextStep);
form.querySelector('.prev').addEventListener('click', prevStep);

showStep(currentStep);
