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





document.addEventListener("DOMContentLoaded", function() {
    const imagem = document.getElementById("imagemDinamica");
    
    imagem.addEventListener("mouseenter", function() {
        this.style.transform = "scale(1.2)";
        this.style.boxShadow = "0px 0px 15px 3px #00bcd4";
    });

    imagem.addEventListener("mouseleave", function() {
        this.style.transform = "scale(1)";
        this.style.boxShadow = "none";
    });

    function criarBinarios(secao) {
        setInterval(() => {
            const binario = document.createElement("div");
            binario.classList.add("binario");
            binario.innerText = Math.random() > 0.5 ? "1" : "0";
            binario.style.left = `${Math.random() * 100}%`;
            secao.appendChild(binario);
            setTimeout(() => binario.remove(), 3000);
        }, 200);
    }
    
    const home = document.querySelector("#home");
    const sobreMim = document.querySelector(".sobre-mim");
    const projetos = document.querySelector(".projetos");
    
    criarBinarios(home);
    criarBinarios(sobreMim);
    criarBinarios(projetos);

    
});

document.addEventListener("DOMContentLoaded", () => {
  const secoes = document.querySelectorAll(".secao-animada");

  const observer = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("secao-visivel");
      }
    });
  }, { threshold: 0.2 });

  secoes.forEach(secao => {
    observer.observe(secao);
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const botaoMais = document.getElementById('botaoMais');
    const todosOsCards = document.querySelectorAll('.card');
    
    const cardsVisiveisInicialmente = 3;
  
    // Verifica quantos cards tem
    if (todosOsCards.length <= cardsVisiveisInicialmente) {
      botaoMais.style.display = 'none';
    }
  
    // Deixa apenas os 3 primeiros visíveis
    todosOsCards.forEach((card, index) => {
      if (index < cardsVisiveisInicialmente) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  
    botaoMais.addEventListener('click', () => {
      const projetosOcultos = document.querySelectorAll('.card.hidden');
  
      for (let i = 0; i < 3 && i < projetosOcultos.length; i++) {
        projetosOcultos[i].classList.remove('hidden');
      }
  
      if (document.querySelectorAll('.card.hidden').length === 0) {
        botaoMais.style.display = 'none';
      }
    });
  });