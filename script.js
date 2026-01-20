function mostrarTela(id) {
    document.querySelectorAll('.screen').forEach(t => t.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function abrirConteudo(tipo) {
    let titulo = '';
    let texto = '';

    if (tipo === 'computador') {
        titulo = 'Introdução';
        texto = 'O computador é usado para escrever, acessar a internet e aprender. Nele vocÊ consegue fazer diversas coisas e desenvolver sistemas, programas e etc..';
    } else if (tipo === 'internet') {
        titulo = 'Internet Básica';
        texto = 'A internet conecta pessoas e informações no mundo todo.';
    } else if (tipo === 'email') {
        titulo = 'Criar E-mail';
        texto = 'O e-mail permite enviar e receber mensagens.';
    }

    document.getElementById('tituloConteudo').innerText = titulo;
    document.getElementById('textoConteudo').innerText = texto;
    mostrarTela('conteudo');
}
