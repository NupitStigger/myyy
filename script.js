const toggleBtn = document.getElementById('theme-toggle');
const bodyElement = document.body;

toggleBtn.addEventListener('click', () => {
    // dark-mode класын қосу/алу
    bodyElement.classList.toggle('dark-mode');
    
    // Смайлды ауыстыру логикасы
    if (bodyElement.classList.contains('dark-mode')) {
        toggleBtn.textContent = '🌙'; // Қара режимде ай
    } else {
        toggleBtn.textContent = '☀️'; // Ақ режимде күн
    }
});