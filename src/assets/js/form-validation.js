function validateLoginForm() {
    var login = document.forms["signin-form"]["login"];
    var password = document.forms["signin-form"]["inputPassword"];

    if (login.value === "" || login.value.length < 8) return false;
    if (password.value === "" || password.value.length < 8) return false;
}

loginParagraph = false;
passwordParagraph = false;
confirmParagraph = false;
var logParagraph;
var passParagraph;
var confParagraph;

function validateRegisterForm() {
    var login = document.forms["register-form"]["login"];
    var password = document.forms["register-form"]["inputPassword"];
    var confirmPassword = document.forms["register-form"]["confirmPassword"];

    if (login.value.length < 8) {
        if(!loginParagraph) {
            logParagraph = document.createElement("p");
            logParagraph.setAttribute("id", "pargraph");
            var node = document.createTextNode("Login must contain at least 8 characters.");
            logParagraph.appendChild(node);
            var element = document.getElementById("form-div");
            if(passwordParagraph) element.replaceChild(logParagraph, passParagraph);
            else element.appendChild(logParagraph);
            loginParagraph = true;
            passwordParagraph = false;
            confirmPassword = false;
        }
        return false;
    }
    if (password.value.length < 8) { 
        if(!passwordParagraph) {
            passParagraph = document.createElement("p");
            passParagraph.setAttribute("id", "pargraph");
            var node = document.createTextNode("Password must contain at least 8 characters.");
            passParagraph.appendChild(node);
            var element = document.getElementById("form-div");
            if(loginParagraph) element.replaceChild(passParagraph, logParagraph);
            else if(confirmParagraph) element.replaceChild(passParagraph, confParagraph);
            else element.appendChild(passParagraph);
            passwordParagraph = true;
            loginParagraph = false;
            confirmPassword = false;
        }
        return false;
    }
    if (password.value !== confirmPassword.value) {
        if(!confirmParagraph) {
            confParagraph = document.createElement("p");
            confParagraph.setAttribute("id", "pargraph");
            var node = document.createTextNode("Passwords must be the same.");
            confParagraph.appendChild(node);
            var element = document.getElementById("form-div");
            if(loginParagraph) element.replaceChild(confParagraph, logParagraph);
            else if(passwordParagraph) element.replaceChild(confParagraph, passParagraph);
            else element.appendChild(confParagraph);
            confirmParagraph = true;
            loginParagraph = false;
            passwordParagraph = false;
        }
        return false;
    }

    var paragraph = document.createElement("p");
    var node = document.createTextNode("Wrong password");
}
