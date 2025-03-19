document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('unlock-btn').addEventListener('click', function() {
    var password = document.getElementById('password-input').value;
    var correctPassword = '25019700'; // Substitua pela sua senha real

    if (password === correctPassword) {
      // Esconde a área de senha
      document.getElementById('password-container').style.display = 'none';

      // Exibe a galeria de imagens
      document.getElementById('image-gallery').style.display = 'block';
    } else {
      document.getElementById('error-message').textContent = 'Senha incorreta!';
    }
  });
});
