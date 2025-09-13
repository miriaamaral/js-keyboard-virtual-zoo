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