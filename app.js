function pesquisar() {
  // Seleciona a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value
 
  campoPesquisa = campoPesquisa.toLowerCase()
  console.log(campoPesquisa)

  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada dado na array 'dados'
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()

    // Filtra para o item pesquisado no campo pesquisa.
    if( titulo.includes(campoPesquisa) ||
        descricao.includes(campoPesquisa) ||
	tags.includes(campoPesquisa)
      ){
        // Constrói o HTML para cada resultado da pesquisa, formatando os dados
        resultados += `
          <div class="item-resultado">
            <h2>
              <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Mais informações</a>
          </div>
        `;
    }

    

    // Se a pesquisa for vaiza.
    if( !campoPesquisa ){ 
        resultados = `
            <div class="item-resultado">
                  <h2>
	             Caixa de pesquisa vaiza!!! 
                  </h2>
            </div>
            ` 
    }
  }

     // Se nada for encontrado.
    if( !resultados ){ 
        resultados = `
            <div class="item-resultado">
                   <h2>
	              Não encontrei nada  :-/ 
                   </h2>
            </div>
        ` 
    }

  // Atribui o HTML gerado para a seção de resultados
  section.innerHTML = resultados;
}

// Função para listar os 7 primeiros registros
function listar() {
  let section = document.getElementById("resultados-pesquisa");
  let resultados = "";

  // Itera sobre os primeiros 7 dados
  for (let i = 0; i < 7 && i < dados.length; i++) {
    let dado = dados[i];
    resultados += `
      <div class="item-resultado">
        <h2>
          <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href="${dado.link}" target="_blank">Mais informações</a>
      </div>
    `;
  }

  section.innerHTML = resultados;
}

// Função para responder às perguntas do chatbot
function responderPergunta() {
  const perguntaUsuario = document.getElementById("chatbot-input").value.toLowerCase();
  const respostaElement = document.getElementById("chatbot-resposta");

  if (perguntaUsuario.trim() === "") { // Verifica se a pergunta está vazia
    respostaElement.innerHTML = "<p>Faça uma pergunta sobre plugins...</p>";
  } else {
    respostaElement.innerHTML = encontrarResposta(perguntaUsuario);
  }
}

// Função para encontrar a resposta na base de dados
function encontrarResposta(perguntaUsuario) {
  // 1. Tokenizar a pergunta do usuário (separar em palavras-chave)
  const tokensPergunta = perguntaUsuario.toLowerCase().split(" ");

  let melhorResposta = { correspondencias: 0, resposta: "Desculpe, não entendi sua pergunta. Tente reformular." };

  // 2. Iterar pelos plugins
  for (const plugin of dados) {
    // 3. Iterar pelas perguntas e respostas de cada plugin
    for (const parPerguntaResposta of plugin.perguntasERespostas) {
      let correspondencias = 0;

      // 4. Iterar pelos tokens da pergunta do usuário
      for (const token of tokensPergunta) {
        // 5. Verificar se a pergunta inclui o token
        if (parPerguntaResposta.pergunta.toLowerCase().includes(token)) {
          correspondencias++;
        }
      }

      // 6. Se a pergunta atual tiver mais correspondências, atualizar a melhor resposta
      if (correspondencias > melhorResposta.correspondencias) {
        melhorResposta = { correspondencias, resposta: parPerguntaResposta.resposta };
      }
    }
  }

  return melhorResposta.resposta;
}
