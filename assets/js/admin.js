window.addEventListener('scroll', function () {
    var nav = document.querySelector('nav');
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition >= 10) {
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
    }
});

/*-----========== =========-----*/

// Función para obtener el nombre del mes a partir de su número
function obtenerMes(monthNumber) {
    var meses = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];
    return meses[monthNumber];
}

// Esperar a que el DOM esté listo
document.addEventListener("DOMContentLoaded", function() {
    // Obtener el elemento con la clase "date"
    var dateElement = document.querySelector(".date");
    
    // Obtener la fecha actual
    var currentDate = new Date();
    
    // Formatear la fecha como texto (por ejemplo, "7 de noviembre de 2023")
    var formattedDate = currentDate.getDate() + " de " + obtenerMes(currentDate.getMonth()) + " de " + currentDate.getFullYear();
    
    // Actualizar el contenido del elemento con la fecha actual
    dateElement.textContent = formattedDate;
});

/*-----========== =========-----*/

document.addEventListener('DOMContentLoaded', function() {
    const adminUserElement = document.querySelector('.admin-user'); // Elemento donde mostrar el nombre del usuario

    // Obtén el correo y la contraseña del usuario autenticado (puedes obtenerlos desde una sesión o cookie)
    // Supongamos que tienes el correo y la contraseña almacenados en dos variables: enteredEmail y enteredPassword.
    const enteredEmail = "seba.val.garat@gmail.com"; // Reemplaza con el correo ingresado
    const enteredPassword = "ChlArg02"; // Reemplaza con la contraseña ingresada

    // Cargar el archivo JSON de usuarios del equipo
    fetch('assets/json/team-data.json')
        .then(response => response.json())
        .then(data => {
            const user = data.team.find(user => user.email === enteredEmail && user.password === enteredPassword);

            if (user) {
                adminUserElement.textContent = `Bienvenido, ${user.name}`;
            } else {
                adminUserElement.textContent = "Bienvenido, Usuario";
            }
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON de equipo:', error);
            adminUserElement.textContent = "Bienvenido, Usuario"; // En caso de error
        });
});

document.addEventListener('DOMContentLoaded', function() {
    const adminUserElement = document.querySelector('.admin-user');
    const loggedInUserName = localStorage.getItem('loggedInUserName');

    if (loggedInUserName) {
        adminUserElement.textContent = `Bienvenido, ${loggedInUserName}`;
    }
});