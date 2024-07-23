function checkPassword() {
    const correctPassword = "4alltheD@wgZ"; 
    const userPassword = prompt("Please enter the password to see my stats, awards, resume, and more!: ");

    if (userPassword === correctPassword) {
        document.getElementById("protected-content").style.display = "block";
    } else {
        alert("Nah that ain't gang nt. Back to the lobby bro.");
        window.location.href = "index.html"; 
    }
}
