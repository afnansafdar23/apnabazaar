var openButton = document.getElementById('open');
var dialog = document.getElementById('dialog');
var closeButton = document.getElementById('close');
var overlay = document.getElementById('overlay');

// show the overlay and the dialog
openButton.addEventListener('click', function () {
    dialog.classList.remove('hidden');
    overlay.classList.remove('hidden');
});

// hide the overlay and the dialog
closeButton.addEventListener('click', function () {
    dialog.classList.add('hidden');
    overlay.classList.add('hidden');
});
$(document).ready(function () {
    $('#show').click(function () {
        $('#menu').toggle("slide");
    });
});

$(document).ready(function () {
    $('#show1').click(function () {
        $('#menu1').toggle("slide");
    });
});
$(document).ready(function () {
    $('#show2').click(function () {
        $('#menu2').toggle("slide");
    });
});
$(document).ready(function () {
    $('#show3').click(function () {
        $('#menu3').toggle("slide");
    });
});
$(document).ready(function () {
    $('#show4').click(function () {
        $('#menu4').toggle("slide");
    });
});