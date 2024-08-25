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

function botaoCriptografar() {
    const textareaUm = document.querySelector('.conteudo_secao_textareaum');
    const textareaDois = document.querySelector('.conteudo_secao_textareadois');
    const shift = 3;
    textareaDois.value = caesarCipher(textareaUm.value, shift);
    updateBackgroundImage();
}

function botaoDescriptografar() {
    const textareaum = document.querySelector('.conteudo_secao_textareaum');
    const textareadois = document.querySelector('.conteudo_secao_textareadois');
    const shift = -3;
    textareadois.value = caesarCipher(textareaum.value, shift);
    updateBackgroundImage();
}

function botaoCopiar() {
    const textareadois = document.querySelector('.conteudo_secao_textareadois');
    textareadois.select();
    navigator.clipboard.writeText(textareadois.value);
    alert("texto copiado")
}

function limparSaidaSeEntradaLimpa() {
    const textareaum = document.querySelector('.conteudo_secao_textareaum');
    const textareadois = document.querySelector('.conteudo_secao_textareadois');
    if (textareaum.value === '') {
        textareadois.value = '';
        updateBackgroundImage();
    }
}

function updateBackgroundImage() {
    const textareadois = document.querySelector('.conteudo_secao_textareadois');
    if (textareadois.value === '') {
        textareadois.style.backgroundImage = "url('/Imagens/Code review-bro.svg')";
    } else {
        textareadois.style.backgroundImage = 'none';
    }
}

document.querySelector('.conteudo_secao_textareaum').addEventListener('input', limparSaidaSeEntradaLimpa);

document.querySelector('.conteudo_secao_textareadois').addEventListener('input', updateBackgroundImage);
