// // JavaScript to toggle between light and dark themes
// const themeToggleBtn = document.querySelector('.theme-toggle');
// const body = document.body;

// themeToggleBtn.addEventListener('click', () => {
//     body.classList.toggle('dark-theme');
//     body.classList.toggle('light-theme');
// });

document.getElementById('light-btn').addEventListener('click', function() {
    document.body.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
});

document.getElementById('dark-btn').addEventListener('click', function() {
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
});