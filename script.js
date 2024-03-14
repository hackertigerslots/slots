// Variável para controlar se o texto está visível ou não
let textoVisivel = false;

// Função para gerar um número aleatório entre 1 e 9
function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 9) + 1;
}

// Função para obter o horário atual em São Paulo e adicionar 1 minuto
function obterHorarioValido() {
    const horarioAtualSaoPaulo = new Date();
    // São Paulo está no fuso horário UTC-3
    const horarioValido = new Date(horarioAtualSaoPaulo.getTime() + 60000); // Adicionar 1 minuto
    return horarioValido.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
}

// Adicionar um evento de clique ao botão
const botao = document.getElementById('mostrarBotao');
botao.addEventListener('click', function () {
    // Ocultar o botão
    botao.style.display = 'none';

    // Exibir a imagem (suponhamos que você tenha uma div com id "conteudoScript" que contém o GIF)
    document.getElementById('conteudoScript').style.display = 'block';

    // Verificar se o texto está visível e ocultá-lo se estiver
    if (textoVisivel) {
        document.getElementById('oportunidade').style.display = 'none';
    }

    // Aguardar 4 segundos e, em seguida, mostrar a mensagem
    setTimeout(function () {
        // Ocultar a imagem
        document.getElementById('conteudoScript').style.display = 'none';

        // Gerar números aleatórios para o número de jogadas TURBO e NORMAL
        const numeroJogadasTurbo = gerarNumeroAleatorio();
        const numeroJogadasNormal = gerarNumeroAleatorio();

        // Obter o horário válido
        const horarioValido = obterHorarioValido();

        // Construir a mensagem com quebras de linha usando a tag <br> e aplicando a classe CSS
        const mensagem = `<br><span style="font-size: 20px;">Fortune Tiger 🐯</span><br><span style="font-size: 20px;">🔥 Nº de Jogadas TURBO : ${numeroJogadasTurbo}</span><br><span style="font-size: 20px;">🔥 Nº de Jogadas NORMAL : ${numeroJogadasNormal}</span><br><span style="font-size: 20px;">🕐 Válido até: ${horarioValido}</span>`;

        // Exibir a mensagem na div com id "oportunidade" e interpretar as quebras de linha
        const oportunidadeDiv = document.getElementById('oportunidade');
        oportunidadeDiv.innerHTML = mensagem;

        // Reduzir a margem superior para diminuir o espaço entre o botão e o texto
        oportunidadeDiv.style.marginTop = '5px'; // Ajuste o valor conforme necessário

        // Exibir o bloco de mensagem
        oportunidadeDiv.style.display = 'block';

        // Marcar que o texto está visível
        textoVisivel = true;

        // Exibir o botão novamente
        botao.style.display = 'block';
    }, 4000); // 4 segundos de espera
});
