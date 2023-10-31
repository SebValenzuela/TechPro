document.addEventListener('DOMContentLoaded', function() {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });

    const showPasswordCheckbox = document.getElementById("showPassword");

    showPasswordCheckbox.addEventListener("change", function () {
        const passwordInput = document.getElementById("password");
        passwordInput.type = showPasswordCheckbox.checked ? "text" : "password";
    });

    const loginForm = document.getElementById('loginForm');
    const alertElement = document.querySelector('.form-container.sign-in-container .alert'); // Selección del elemento .alert

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Evita el envío del formulario por defecto

        const emailInput = document.querySelector('.form-container.sign-in-container input[type="email"]');
        const passwordInput = document.getElementById('password');

        const checkAndRedirect = (users, enteredEmail, enteredPassword, redirectPage) => {
            const user = users.find(user => user.email === enteredEmail && user.password === enteredPassword);
            if (user) {
                window.location.href = redirectPage; // Redirige a la página especificada
            } else {
                // Muestra la alerta y establece su contenido
                alertElement.style.display = 'block'; // Muestra la alerta
                alertElement.style.margin = '10px 0';
                alertElement.textContent = 'El correo y/o contraseña son incorrectos. Inténtelo de nuevo.';
            }
        };

        // Cargar el archivo JSON de usuarios del equipo
        fetch('assets/json/team-data.json')
            .then(response => response.json())
            .then(data => {
                checkAndRedirect(data.team, emailInput.value, passwordInput.value, '../../admin/controller.html');
            })
            .catch(error => {
                console.error('Error al cargar el archivo JSON de equipo:', error);
            });
    });
});