// Função de cifra de César
function caesarCipher(text, shift) {
    return text.split('').map(function(char) {
        if (char.match(/[a-z]/i)) {
            var code = char.charCodeAt();
            var base = (code >= 65 && code <= 90) ? 65 : 97;
            return String.fromCharCode((code - base + shift + 26) % 26 + base);
        }
        return char;
    }).join('');
}

// Função para criptografar o texto
function BotaoCriptografar() {
    const textareaum = document.querySelector('.conteudo_secao_textareaum');
    const textareadois = document.querySelector('.conteudo_secao_textareadois');
    const shift = 3; // Número de posições para deslocamento
    textareadois.value = caesarCipher(textareaum.value, shift);
    updateBackgroundImage();
}

// Função para descriptografar o texto
function BotaoDescriptografar() {
    const textareaum = document.querySelector('.conteudo_secao_textareaum');
    const textareadois = document.querySelector('.conteudo_secao_textareadois');
    const shift = -3; // Deslocamento negativo para reverter a criptografia
    textareadois.value = caesarCipher(textareaum.value, shift);
    updateBackgroundImage();
}

// Função para copiar o texto para a área de transferência
function BotaoCopiar() {
    const textareadois = document.querySelector('.conteudo_secao_textareadois');
    textareadois.select();
    document.execCommand('copy');
}

// Função para limpar o texto de saída quando o texto de entrada é apagado
function limparSaidaSeEntradaLimpa() {
    const textareaum = document.querySelector('.conteudo_secao_textareaum');
    const textareadois = document.querySelector('.conteudo_secao_textareadois');
    if (textareaum.value === '') {
        textareadois.value = '';
        updateBackgroundImage();
    }
}

// Função para atualizar a imagem de fundo do textarea de saída
function updateBackgroundImage() {
    const textareadois = document.querySelector('.conteudo_secao_textareadois');
    if (textareadois.value === '') {
        textareadois.style.backgroundImage = "url('/Imagens/Code review-bro.svg')";
    } else {
        textareadois.style.backgroundImage = 'none';
    }
}

// Adiciona o evento 'input' ao textarea de entrada
document.querySelector('.conteudo_secao_textareaum').addEventListener('input', limparSaidaSeEntradaLimpa);

// Adiciona o evento 'input' ao textarea de saída para atualizar a imagem de fundo
document.querySelector('.conteudo_secao_textareadois').addEventListener('input', updateBackgroundImage);