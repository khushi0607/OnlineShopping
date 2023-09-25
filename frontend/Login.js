localStorage.removeItem("username");

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    response = fetch(`http://localhost:4040/login/${username}`)
    .then(res=> {
        return res.json()
    })
    .then(data =>{
        
            if(username==data.username && password==data.password){
                localStorage.setItem("username",username);
                localStorage.setItem('hasRun','false');
                window.location.href="index.html";
            }
            else if(username!=data.username){
                alert("username is incorrect, re-enter");
            }
            else{
                alert("Password is incorrect, re-enter");
            }
        });
    });
