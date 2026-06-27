/* ==========================================================================
   4. INTERATIVIDADE E VALIDAÇÃO DO FORMULÁRIO 
   ========================================================================== */

// Espera o HTML carregar completamente antes de rodar o script
document.addEventListener("DOMContentLoaded", function () {
    
    // Seleciona o formulário pelo ID correto
    const formulario = document.getElementById("form-contato");

    // Ouve o momento em que o usuário tenta enviar o formulário
    formulario.addEventListener("submit", function (evento) {
        
        // Impede o envio padrão da página (que recarregaria o site)
        evento.preventDefault();

        // Pega os valores digitados nos campos e remove espaços extras
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        // Validação extra de segurança: verifica se algum campo ficou vazio
        if (nome === "" || email === "" || mensagem === "") {
            alert("⚠️ Por favor, preencha todos os campos antes de enviar.");
            return; // Interrompe a execução aqui caso falte algo
        }

        // Exibe o alerta personalizado de sucesso usando o nome de quem mandou
        alert(`🚀 Sucesso!\n\nObrigado pelo contato, ${nome}! Sua mensagem foi enviada de mentirinha (já que não temos um servidor real rodando atrás), mas o JavaScript funcionou perfeitamente!`);

        // Limpa todos os campos do formulário automaticamente após o sucesso
        formulario.reset();
    });
});