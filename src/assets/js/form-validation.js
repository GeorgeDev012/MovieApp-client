function validateLoginForm() {
    var login = document.forms["signin-form"]["login"];
    var password = document.forms["signin-form"]["inputPassword"];

    if (login.value == "" || login.value.length < 8) return false;
    if (password.value == "" || password.value.length < 8) return false;

}