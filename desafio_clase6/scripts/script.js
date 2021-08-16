function addUser() {
    const userBD = []
    const usr = userBD.push(prompt('user'));
    const pwd = prompt('password');
    const newUser = new user(usr, pwd);
    newUser.login();
    newUser.inicio();
    newUser.viewlog();
    console.log('- - - - - - - - - - - - - -');
}
addUser();