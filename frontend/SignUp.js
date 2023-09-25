document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let rpassword = document.getElementById("rpassword").value;

    if(password!=rpassword)
    alert("Passwords don't match Re-enter");
    else{
        response = fetch(`http://localhost:4040/login/${username}`)
    // .then(res=> {
    //     return res.json()
    // })
    .then(data =>{
            if(data.username!=null)
            alert("user already present, kindly change your username");
            else
            saveInfo(username,password);
        });
    }
    });

    function saveInfo(username,password){

        let options = {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                username:username,
                password:password
            }),
        }
    
        fetch('http://localhost:4040/login',options)
        .then((response) => response.json())
        .then((json) => console.log(json));

        alert("Login Successful",loggedIn())
    }
    function loggedIn(){
        window.location.href="Login.html";
    }
    