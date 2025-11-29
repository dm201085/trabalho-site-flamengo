// -------------------------------
// FUNÇÃO PARA CAPTURAR OS DADOS DO FORMULÁRIO
// -------------------------------

// Espera o HTML carregar completamente
document.addEventListener("DOMContentLoaded", function() {

    // Seleciona o formulário pelo ID 
    const formulario = document.getElementById("form-contato");

    // Adiciona um evento quando o usuário clicar em "Enviar"
    formulario.addEventListener("submit", function(evento) {

        // Impede que o formulário recarregue a página
        evento.preventDefault();

        // -------------------------
        // CAPTURANDO OS CAMPOS
        // -------------------------

        // Pegando o valor digitado no nome
        const nome = document.getElementById("nome").value;

        // Pegando o valor do email
        const email = document.getElementById("email").value;

        // Pegando o valor da mensagem
        const mensagem = document.getElementById("mensagem").value;

 
     
        // -------------------------
        // MENSAGEM FINAL PARA O USUÁRIO
        // -------------------------
        alert("Mensagem enviada com sucesso! Obrigado pelo contato, " + nome + ".");

        // Limpa o formulário depois de enviar
        formulario.reset();

    });

});
