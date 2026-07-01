function gerarSenha() {

    const tamanho = document.getElementById("tamanho").value;

    const maiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const minusculas = "abcdefghijklmnopqrstuvwxyz";
    const numeros = "0123456789";
    const simbolos = "!@#$%&*()_-+=<>?/{}[]";

    let caracteres = "";

    if(document.getElementById("maiusculas").checked)
        caracteres += maiusculas;

    if(document.getElementById("minusculas").checked)
        caracteres += minusculas;

    if(document.getElementById("numeros").checked)
        caracteres += numeros;

    if(document.getElementById("simbolos").checked)
        caracteres += simbolos;

    if(caracteres.length === 0){
        alert("Selecione pelo menos uma opção.");
        return;
    }

    let senha = "";

    for(let i = 0; i < tamanho; i++){
        const indice = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[indice];
    }

    document.getElementById("senha").value = senha;
}

function copiarSenha(){

    const senha = document.getElementById("senha");

    senha.select();
    senha.setSelectionRange(0,99999);

    navigator.clipboard.writeText(senha.value);

    alert("Senha copiada!");
}

gerarSenha();