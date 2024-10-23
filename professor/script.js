document.addEventListener('DOMContentLoaded', function() {
    const pergaminhoContainer = document.querySelector('.pergaminho-container');

    // Configuração do IntersectionObserver
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe que inicia a animação
                pergaminhoContainer.classList.add('active');
                // Desativa o observador após a primeira execução
                observer.disconnect();
            }
        });
    }, { threshold: 0.5 }); // O threshold indica que 50% do elemento precisa estar visível

    observer.observe(pergaminhoContainer);
});
