const overlay = document.getElementById('overlay')
const getEmail = document.getElementById('getmail')
const modal = document.getElementById('modal')
const login__submit = document.getElementById('login__submit')
const closeModal = document.getElementById('closeModal')

$(function() {
    var scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
    scanner.addListener('scan', function(content) {
        if (content) {
            var p = { content };
            alert()
            ValidarAcceso(p);
        }
    });

    Instascan.Camera.getCameras().then(function(cameras) {
        if (cameras.length > 0) {
            scanner.start(cameras[0]);
        } else {
            console.error('No cameras found.');
        }
    }).catch(function(e) {
        console.log(e);
    });

    getEmail.addEventListener('click', (event) => {
        /*  $modal.style.animation = 'modalOut .8s forwards'; */
        /*  $overlay.classList.remove('active'); */
        overlay.classList.add('active');
        modal.style.animation = 'modalIn 1.5s forwards';
    });

    closeModal.addEventListener('click', (event) => {
        /*  $modal.style.animation = 'modalOut .8s forwards'; */
        /*  $overlay.classList.remove('active'); */
        overlay.classList.remove('active');
        modal.style.animation = 'modalOut 1.5s forwards';
    })

    function ValidarAcceso(p) {
        $.ajax({
            async: true,
            type: "POST",
            data: p,
            success: (data) => {
                $("#datosleidos").empty().append(data);
                if (data == "Invitado") {
                    alert('Acceso Permitido');
                } else {
                    alert('No estas invitado');
                }
            },
            url: './functions/validarinvitacion.php'
        });
    }
});