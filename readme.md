# 🎹 JS Keyboard Virtual Zoo: Sons e Diversão com JavaScript Puro e Muito Amor! ✨

[![GitHub last commit](https://img.shields.io/github/last-commit/miriaamaral/js-keyboard-virtual-zoo)](https://github.com/miriaamaral/js-keyboard-virtual-zoo/commits/main)
[![GitHub contributors](https://img.shields.io/github/contributors/miriaamaral/js-keyboard-virtual-zoo)](https://github.com/miriaamaral/js-keyboard-virtual-zoo/graphs/contributors)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

E aí, meu 🐙! Prepare-se para uma aventura divertida e cheia de carinho no meu **Zoológico Virtual Interativo**! 🦁🐘🐒

Este projeto super criativo e didático foi desenvolvido usando **JavaScript puro, HTML e CSS** para simular um teclado musical, onde cada tecla reproduz o som e exibe a imagem de um animal diferente.

**A inspiração para este zoológico veio do lugar mais especial:** pensando no meu **bebê, que na época tinha apenas 6 meses de vida!** Ele adorava um tecladinho, e eu personalizei este projeto com sons e imagens de animais para que ele pudesse interagir e se divertir explorando o mundo animal de um jeito único. ❤️

É uma demonstração prática de como a manipulação do DOM e a gestão de eventos podem criar experiências interativas no Frontend, com um toque extra de propósito e afeto!

---

### **✨ Destaques do Projeto:**

* **Teclado Interativo:** Pressione as teclas do seu teclado (A, S, D, F, G, H, J, K, L) para "tocar" os animais e interagir.
* **Experiência Multimídia:** Sons de animais e imagens dinâmicas que aparecem ao toque.
* **JavaScript Puro:** Uma ótima forma de ver o poder e a flexibilidade do JS sem a complexidade de frameworks.
* **Manipulação do DOM:** Uso prático de `querySelector`, `addEventListener`, manipulação de classes CSS e gerenciamento de áudio/imagem.
* **HTML Semântico e CSS Estilizado:** Estrutura clara e um design responsivo, divertido e funcional.
* **Projeto com Afeto:** Uma prova de que a programação pode ser feita com muito amor e pensando em quem a gente mais ama!

---

### **🧠 Desvendando a Interatividade: Implementação dos Eventos DOM**

Que tal a gente mergulhar um pouquinho no como funciona por trás da mágica do Zoológico Virtual? A interatividade de pressionar uma tecla e ver/ouvir um animal é toda orquestrada pelos **Eventos DOM (Document Object Model)** do JavaScript puro!

**Aqui está o passo a passo de como foi implementado:**

1.  **Mapeando os Elementos HTML:**
    * Primeiro, com `document.querySelector`, "selecionamos" cada elemento do nosso teclado visual (`div.key`) no HTML. Cada tecla tem um `data-key` (ex: `data-key="65"` para a letra 'A') que corresponde ao `keyCode` do teclado real.
    * Também selecionamos os elementos de áudio (`audio`) correspondentes, usando o mesmo `data-key` para associá-los.

2.  **Escutando Eventos de Teclado (keydown):**
    * Adicionamos um "ouvinte de evento" (`addEventListener`) ao `window` (ou `document`) para o evento `keydown`. Isso significa que, a cada vez que *qualquer* tecla é pressionada no teclado físico, o JavaScript detecta.
    * A função que "escuta" esse evento recebe um objeto `event` que contém informações sobre a tecla pressionada, incluindo o `event.keyCode`.

3.  **Filtrando e Selecionando o Animal:**
    * Dentro da função do `keydown`, verificamos se o `event.keyCode` da tecla pressionada corresponde a algum dos nossos `data-key` de animais.
    * Se houver uma correspondência, selecionamos o elemento de áudio e a `div.key` correspondente.

4.  **Reproduzindo o Som e Exibindo a Imagem:**
    * Com o elemento de áudio em mãos, usamos `audio.currentTime = 0;` para garantir que o som sempre comece do início, mesmo que a tecla seja pressionada rapidamente várias vezes.
    * Em seguida, `audio.play();` para reproduzir o som do animal.
    * Adicionamos uma classe CSS (ex: `playing`) à `div.key` do animal correspondente. Essa classe é responsável por aplicar um estilo visual (como um destaque ou uma animação) que indica que a tecla foi "tocada".

5.  **Removendo o Destaque Visual (transitionend):**
    * Para que o destaque visual não fique permanente, cada `div.key` recebe um `addEventListener` para o evento `transitionend`.
    * Quando a transição CSS (definida na classe `playing`) termina, essa função é acionada e remove a classe `playing` da `div.key`, fazendo com que ela volte ao seu estado normal. Isso garante uma animação fluida e responsiva.

Entender essa dinâmica de `eventos`, `manipulação do DOM` e `CSS` é a chave para criar interatividade robusta no Frontend! É a mágica do JS puro em ação! ✨

---

### **🎥 Veja o Projeto em Ação!**

Quer brincar no Zoológico Virtual agora mesmo? Clique aqui para acessar a demo online!
[**https://miriaamaral.github.io/js-keyboard-virtual-zoo/**](https://miriaamaral.github.io/js-keyboard-virtual-zoo/)

---

### **🚀 Tecnologias Envolvidas:**

* **HTML5:** Estrutura semântica do teclado e dos elementos visuais.
* **CSS3:** Estilização responsiva dos botões, layout, transições e efeitos visuais.
* **JavaScript (ES6+):** Lógica principal para interatividade, manipulação do DOM, controle de áudio e eventos de teclado.

---

### **⚙️ Como Rodar o Projeto (Localmente):**

1.  **Clone este repositório:**
    ```bash
    git clone [https://github.com/miriaamaral/js-keyboard-virtual-zoo.git](https://github.com/miriaamaral/js-keyboard-virtual-zoo.git)
    ```
2.  **Entre na pasta do projeto:**
    ```bash
    cd js-keyboard-virtual-zoo
    ```
3.  **Abra o arquivo `index.html` no seu navegador.**
    * Para uma experiência de desenvolvimento local mais robusta (com live-reload), considere usar a extensão "Live Server" no VS Code.

---

### **🤝 Como Contribuir (Opcional):**

Sinta-se à vontade para explorar o código, sugerir melhorias ou até mesmo adicionar novos animais e sons! Para contribuir:

1.  Faça um `fork` deste repositório.
2.  Crie uma nova `branch` para sua feature (`git checkout -b feature/minha-feature`).
3.  Faça suas alterações e `commit` as mudanças (`git commit -m 'feat: minha nova feature'`).
4.  Envie para sua `branch` (`git push origin feature/minha-feature`).
5.  Abra um `Pull Request` detalhando suas alterações.

Toda contribuição é bem-vinda e apreciada! ✨

---

### **📝 Licença:**

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

### **Conecte-se Comigo! 👋**

Gostou do Zoológico Virtual, da história por trás dele, ou quer trocar uma ideia sobre JavaScript e criatividade? Ficarei super feliz!

* **LinkedIn:** [https://www.linkedin.com/in/miriaamaralcs](https://www.linkedin.com/in/miriaamaralcs)
* **GitHub:** [https://github.com/miriaamaral](https://github.com/miriaamaral)
* **Plataforma de Estudos (DIO):** [https://www.dio.me/sign-up?ref=6F1F401485F9459BA6AC879FEA95D1B5](https://www.dio.me/sign-up?ref=6F1F401485F9459BA6AC879FEA95D1B5)

Vamos juntos construir o futuro da tecnologia (e se divertir no caminho)! ✨

---

#### **Tópicos (Tags) para este Repositório:**

`JavaScript HTML CSS Frontend Interativo Audio EventosDOM Portfólio Educacional Brincadeira Afeto WebDev`