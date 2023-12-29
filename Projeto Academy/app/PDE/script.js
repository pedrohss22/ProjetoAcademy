document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get the username and password input values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Check credentials (This is just a simple example)
    if (username === 'user' && password === 'password') {
      document.getElementById('loginMessage').innerText = 'Login successful!';
      // Redirect to another page or perform further actions upon successful login
    } else {
      document.getElementById('loginMessage').innerText = 'Invalid username or password';
    }
  });
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    
    // Obtém os valores dos campos de usuário e senha
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Verifica as credenciais (Este é apenas um exemplo simples)
    if (username === 'Pedro' && password === '5546') {
      // Redireciona para a página de boas-vindas em caso de sucesso
      window.location.href = 'welcome.html';
    } else {
      document.getElementById('loginMessage').innerText = 'Usuário ou senha inválidos';
    }
  });
  