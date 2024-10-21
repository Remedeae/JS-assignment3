function isValidPassword(password, username) {
    if (password.length < 8) {
        return false;
    } 
    else if (password.includes(" ")) {
        return false;
    }
    else if (password.includes(username)) {
        return false;
    }
    else {
        return true;
    }
}

if (isValidPassword("kak0000", "katt") == true) {
    console.log("Password confirmed");
}
else {
    console.log("Please selecent another password");
}

