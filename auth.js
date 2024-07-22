function checkPassword() {
    const correctPassword = "4alltheD@wgZ"; 
    const userPassword = prompt("Please enter the password to access this page:");

    if (userPassword === correctPassword) {
        document.getElementById("protected-content").style.display = "block";
    } else {
        alert("Nah that ain't gang nt. You will be redirected to the homepage.");
        window.location.href = "index.html"; 
    }
}
