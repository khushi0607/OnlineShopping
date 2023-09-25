let name=document.getElementById("nameId");
nameId.textContent=localStorage.getItem("username");

response = fetch('http://localhost:4040/cart')
    .then(res => {
        return res.json()
    })
    .then(data => {
        const dataContainer = document.getElementById("data-container");
        dataContainer.innerHTML = "";

        data.forEach(item => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
            <div class="card-body" style="width:18rem" >
                <h3 class="card-title">${item.product.prodName}</h5>
                <p class="card-title"><label style="font-size:15px" class="fw-bold">Category: </label> ${item.product.prodCategory}</p>
                <p class="card-text"><label style="font-size:15px" class="fw-bold" >Description: </label> ${item.product.prodDesc}</p>
                <div class="row">
                    <div class="col"><label style="font-size:15px" class="fw-bold">Price: </label> ${item.product.prodPrice}</div>
                    <div class="col"><label style="font-size:15px" class="fw-bold">Ratings: </label> ${item.product.prodRating}</div>
                </div>
                <button onclick="increaseQuantity(${item.prodId})">+</button>
                <input type="number" id="noOfProduct${item.prodId}" value="1">
                <button onclick="decreaseQuantity(${item.prodId})">-</button>
                <br>
                <br>
                <button onclick="remove(${item.prodId})">Remove</button>
        </div>
        `;
            dataContainer.appendChild(card);
        });
    })
    .catch(error => console.log(error));

const receivedData = localStorage.getItem("data");

function increaseQuantity(productId) {

    let quant = document.getElementById(`noOfProduct${productId}`);
    let quantity = parseInt(quant.value);
    let newQuantity = (quantity + 1);
    quant.value = newQuantity;
    let options = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            prodId: productId,
            quantity: newQuantity
        }),
    }
    fetch('http://localhost:4040/cart', options)
        .then((response) => response.json())
        .then((json) => console.log(json));
}

function decreaseQuantity(productId) {

    let quant = document.getElementById(`noOfProduct${productId}`);
    let quantity = parseInt(quant.value);
    let newQuantity = 0;
    if (quantity > 0)
        newQuantity = (quantity - 1);
    quant.value = newQuantity;

    let options = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            prodId: productId,
            quantity: newQuantity
        }),
    }

    fetch('http://localhost:4040/cart', options)
        .then((response) => response.json())
        .then((json) => console.log(json));
}

function remove(productId) {

    const pId = productId;
    let options = {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        },
    }
    fetch(`http://localhost:4040/cart/${pId}`, options)
        .then((response) => response.json())
        .then((json) => console.log(json));

    window.location.href="cartDetail.html";

}

function productList(){
    localStorage.setItem('hasRun','false');
    window.location.href="index.html";
}
