document.addEventListener("DOMContentLoaded", function() {
    const imagem = document.getElementById("imagemDinamica");
    
    imagem.addEventListener("mouseenter", function() {
        this.style.transform = "scale(1.2)";
        this.style.boxShadow = "0px 0px 15px 3px #00bcd4";
    });

    imagem.addEventListener("mouseleave", function() {
        this.style.transform = "scale(1)";
        this.style.boxShadow ="none";
    });

    // Garante que a imagem seja carregada corretamente
    imagem.onerror = function() {
        this.src = "https://via.placeholder.com/200"; // Imagem padrão caso a original falhe
    };
});





