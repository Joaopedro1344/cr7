const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const imagem = document.getElementById('alienista');

themeToggleBtn.addEventListener('click', function() {
    body.classList.toggle("dark-theme");

    if (body.classList.contains('dark-theme')) {
        themeToggleBtn.textContent = 'Mudar para tema Claro';
        imagem.src = 'imagem/alienista.jpg'; 
    } else {
        themeToggleBtn.textContent = 'Mudar para Tema Escuro';
        imagem.src = 'imagem/gravity falss.png'; 
    }
});





function mudarCor() {
    const corAtual = document.body.style.backgroundColor;
    document.body.style.backgroundColor = corAtual === 'black' ? 'white' : 'black';}





