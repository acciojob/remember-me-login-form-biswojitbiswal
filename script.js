//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
    let existingBtn = document.getElementById("existing")
    let usernameInput = document.getElementById("username");
    let passwordInput = document.getElementById("password");

    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if(savedUsername && savedPassword){
        existingBtn.style.display = "block";
    }

    document.getElementById("submit").addEventListener("click", (e) => {
        e.preventDefault();
        let checkBox = document.getElementById("checkbox");
        let userName = usernameInput.value;
        let passWord = passwordInput.value;
         
        if(checkBox.checked){
            localStorage.setItem("username", userName);
            localStorage.setItem("password", passWord);
        } else {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        }
    
        alert(`Logged in as.`);
    })

    existingBtn.addEventListener("click", () => {
        alert(`Logged in as`)
    })
})
