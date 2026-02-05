document.addEventListener("DOMContentLoaded", () => {

    /* ===========================================================
       IMAGEM DINÂMICA (hover + fallback)
    ============================================================ */
    const imagem = document.getElementById("imagemDinamica");

    if (imagem) {
        imagem.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.2)";
            this.style.boxShadow = "0px 0px 15px 3px #00bcd4";
        });

        imagem.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
            this.style.boxShadow = "none";
        });

        imagem.onerror = function () {
            this.src = "https://via.placeholder.com/200";
        };
    }

    /* ===========================================================
       EFEITO DE BINÁRIOS CAINDO
    ============================================================ */
    function criarBinarios(secao) {
        if (!secao) return;

        setInterval(() => {
            const binario = document.createElement("div");
            binario.classList.add("binario");
            binario.innerText = Math.random() > 0.5 ? "1" : "0";
            binario.style.left = `${Math.random() * 100}%`;

            secao.appendChild(binario);

            setTimeout(() => binario.remove(), 3000);
        }, 200);
    }

    criarBinarios(document.querySelector("#home"));
    criarBinarios(document.querySelector(".sobre-mim"));
    criarBinarios(document.querySelector(".projetos"));

    /* ===========================================================
       ANIMAÇÕES DE ENTRADA (IntersectionObserver)
    ============================================================ */
    const secoes = document.querySelectorAll(".secao-animada");

    const observer = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("secao-visivel");
            }
        });
    }, { threshold: 0.2 });

    secoes.forEach(secao => observer.observe(secao));

    updateCarousel(); // inicializa
});
