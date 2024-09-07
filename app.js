function pesquisar() {
  let section = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  // Verifica se o campo de pesquisa está vazio
  if (campoPesquisa === "") {
      section.innerHTML = "<p class='resultado-aviso'>Busca vazia</p>";
      return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  // Itera sobre os dados para encontrar correspondências
  for (let dado of dados) {
      titulo = dado.titulo.toLowerCase();
      descricao = dado.descricao.toLowerCase();
      tags = dado.tags.toLowerCase();

      // Verifica se o campo de pesquisa está contido no título, descrição ou tags
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
          resultados += `
              <div class="item-resultado">
                  <h2><a href="${dado.link}" target="_blank">${dado.titulo}</a></h2>
                  <p class="descricao-meta">${dado.descricao}</p>
                  <a href="${dado.link}" target="_blank">Acompanhe mais conteúdos no nosso blog</a>
              </div>
          `;
      }
  }

  // Caso não haja resultados
  if (!resultados) {
      resultados = `
          <p class="resultado-aviso">
            Nada foi encontrado. Você precisa digitar o nome de uma linguagem ou área de atuação
          </p>
         
      `;
  }

  section.innerHTML = resultados;
}

// Função para limpar o campo de pesquisa e os resultados
function limpar() {
  document.getElementById("campo-pesquisa").value = ""; // Limpa o campo de pesquisa
  document.getElementById("resultados-pesquisa").innerHTML = ""; // Limpa a seção de resultados
}
