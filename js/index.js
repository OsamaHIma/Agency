const navbar = document.getElementById('navbar');
const year = document.getElementById('year');

function scroll() {
    if (document.documentElement.scrollTop > 200) {
        navbar.classList.add('noTrans');
    } else {
        navbar.classList.remove('noTrans');
    }
};

window.onscroll = function () {
    scroll()
};

window.onload = function () {
    let website = new CountUp('count1', 0, 250, 0, 4.5);
    website.start();
    let mobile = new CountUp('count2', 0, 170, 0, 4.5);
    mobile.start();
    let user = new CountUp('count3', 0, 103200, 0, 4.5);
    user.start();
    let video = new CountUp('count4', 0, 50, 0, 4.5);
    video.start();
};

year.innerHTML = new Date().getFullYear();

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()