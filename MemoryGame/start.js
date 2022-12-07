let userForm = document.getElementById('userInfo');
userForm.addEventListener('submit', setUpUserInfo);

function setUpUserInfo(e) {
    e.preventDefault();

    let userName = userForm.querySelector('#userName').value;


    console.log(userForm);
    console.log(userName);

    localStorage.setItem('userName', userName)

    userForm.submit();
    redirectToGame();
}

function redirectToGame() {
    window.location.href = "game.html";
}
