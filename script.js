const textArea = document.querySelector(".conteudo_secao_textareaum");
const mensagem = document.querySelector(".conteudo_secao_textareadois");

function botaoCriptografar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [
        ["a", "urium"], 
        ["e", "eiwu"], 
        ["i", "aoip"], 
        ["o", "osdif"], 
        ["u", "usad"], 
        ["ão", "memahdej"], 
        [",", "xisj"], 
        [".", "oei"]
    ];
    stringEncriptada = stringEncriptada.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function botaoDescriptografar() {
    const textoDesencriptado = desencriptar(mensagem.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [
        ["a", "urium"], 
        ["e", "eiwu"], 
        ["i", "aoip"], 
        ["o", "osdif"], 
        ["u", "usad"], 
        ["ão", "memahdej"], 
        [",", "xisj"], 
        [".", "oei"]
    ];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function botaoCopiar() {
    const textareadois = document.querySelector('.conteudo_secao_textareadois');
    textareadois.select();
    navigator.clipboard.writeText(textareadois.value);
    alert("texto copiado");
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