$(document).ready(function () {
    let DateNow = new Date().getDate() + "." + new Date().getMonth() + "." + new Date().getFullYear();
    $('#time').text(DateNow);
});
