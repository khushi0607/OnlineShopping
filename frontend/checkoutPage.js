let total=document.getElementById("total");
let totalAmount=0;
let name=document.getElementById("nameId");
nameId.textContent=localStorage.getItem("username");

response = fetch('http://localhost:4040/cart/total')
.then(res=> {
    return res.json()
})
.then(data =>{
        totalAmount=data;
        total.innerHTML="&#8377; "+data;
        final.innerHTML="&#8377; "+data;
    });

function addBillingDetails(){

    let username=localStorage.getItem("username");
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let address = document.getElementById("Address").value;
    let email = document.getElementById("Email").value;
    let phone = document.getElementById("Phone").value;

    console.log("post")

    let options = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            username:username,
            firstName:firstName,
            lastName:lastName,
            address:address,
            email:email,
            phone:phone,
            total:totalAmount
        }),
    }
    fetch('http://localhost:4040/billingDetails',options)
    .then((response) => response.json())
    .then((json) => console.log(json));

    const apiUrl = 'http://localhost:4040/cart';

    const requestOptions = {
    method: 'DELETE', 
    headers: {
        'Content-Type': 'application/json', 
        },
    };
    fetch(apiUrl, requestOptions)
    .then((response) => {
        if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log('Resource deleted successfully.');
    })
    .catch((error) => {
        console.error('Error:', error);
    });

    alert("Order Placed",thankYou());
}

function thankYou(){
    window.location.href="ThankYou.html";
}

function productList(){
    localStorage.setItem('hasRun','false');
    window.location.href="index.html";
}


