/*
Lucas Spartacus Vieira Carvalho 
BELLOSOFT PROGRAMAS DE COMPUTADOR EIRELI
Back end
*/

// Função para mostrar o formulário de login e esconder o de registro
function showLogin() {
    document.getElementById('loginForm').style.display = 'block';  // Exibe o formulário de login
    document.getElementById('registerForm').style.display = 'none';  // Esconde o formulário de registro
    document.getElementById('loginBtn').classList.add('active');  
    document.getElementById('registerBtn').classList.remove('active');  
}

// Função para mostrar o formulário de registro e esconder o de login
function showRegister() {
    document.getElementById('loginForm').style.display = 'none';  // Esconde o formulário de login
    document.getElementById('registerForm').style.display = 'block';  // Exibe o formulário de registro
    document.getElementById('loginBtn').classList.remove('active');  
    document.getElementById('registerBtn').classList.add('active');  
}

// Função para validar o formato do email
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;  // Expressão regular para validar email. Retorna verdadeiro se o email for válido, falso caso contrário
    return re.test(email);  
}
// Função para validar a força da senha
function validatePassword(password) {
    // A senha deve ter pelo menos 8 caracteres, uma letra maiúscula, uma minúscula e um número
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;  // Expressão regular para validar senha. Retorna verdadeiro se a senha for forte, falso caso contrário
    return re.test(password);  
}

// Adiciona um evento de submit ao formulário de login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    const email = document.getElementById('loginEmail').value;  // Obtém o valor do campo de email
    const password = document.getElementById('loginPassword').value;  // Obtém o valor do campo de senha

    if (!validateEmail(email) || email == "") {  // Verifica se o email é inválido ou está vazio
        alert('Por favor, insira um email válido.');  // Exibe um alerta ao usuário
        event.preventDefault();  // Previne o envio do formulário
    } else if (!validatePassword(password) || password == ""){  // Verifica se a senha é fraca ou está vazia
        alert('A senha deve ter pelo menos 8 caracteres, uma letra maiúscula, uma minúscula e um número.');  
        event.preventDefault(); 
    }
});

 //  Adiciona um evento de submit ao formulário de registro
document.getElementById('registerForm').addEventListener('submit', function(event) {
    const email = document.getElementById('registerEmail').value;  
    const password = document.getElementById('registerPassword').value;  

    if (!validateEmail(email)) {  o
        alert('Por favor, insira um email válido.'); 
        event.preventDefault();  
    } else if (!validatePassword(password)) { 
        alert('A senha deve ter pelo menos 8 caracteres, uma letra maiúscula, uma minúscula e um número.'); 
        event.preventDefault();  
    }
});

// Função para exibir/ocultar a senha
function showPassword() {
    var x = document.getElementById("loginPassword");  // Obtém o campo de senha
    if (x.type === "password") {  // Verifica se o tipo do campo é "password"
      x.type = "text";  // Altera o tipo para "text" para exibir a senha
    } else {
      x.type = "password";  // Altera o tipo para "password" para ocultar a senha
    }
}
