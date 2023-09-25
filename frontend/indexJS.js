let name = document.getElementById("nameId");
nameId.textContent = localStorage.getItem("username");
localStorage.setItem('hasRun', 'false');

if (localStorage.getItem('hasRun') == 'false') {
    runOnLoad();
}

function runOnLoad() {
    localStorage.setItem('hasRun', 'true');
    console.log("1");
    response = fetch('http://localhost:4040/products')
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
                    <h3 class="card-title">${item.prodName}</h5>
                    <p class="card-title"><label style="font-size:15px" class="fw-bold">Category: </label> ${item.prodCategory}</p>
                    <p class="card-text"><label style="font-size:15px" class="fw-bold" >Description: </label> ${item.prodDesc}</p>
                    <div class="row">
                        <div class="col"><label style="font-size:15px" class="fw-bold">Price: </label> ${item.prodPrice}</div>
                        <div class="col"><label style="font-size:15px" class="fw-bold">Ratings: </label> ${item.prodRating}</div>
                    </div>
                    <br>
                    <button class="btn btn-primary" id="${item.prodId}" onclick="Product(${item.prodId})" >Add</button>
                    <!--<button class="btn btn-primary" id="add${item.prodId}" onclick="addProduct(${item.prodId})" >Add</button>-->
                    <!--<button class="btn btn-primary" id="sub${item.prodId}" onclick="removeProduct(${item.prodId})">Remove</button> -->
            </div>
            `;
                dataContainer.appendChild(card);
            });
        })
        .catch(error => console.log(error));
}

function Product(productId){

    let prod = document.getElementById(`${productId}`);
    if(prod.textContent == "Add")
    {
        prod.textContent="Remove";
        addProduct(productId);
    }
    else{
        prod.textContent="Add";
        removeProduct(productId);
    }
}

function addProduct(productId) {

    let options = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            prodId: productId,
            quantity: 1
        }),
    }

    fetch('http://localhost:4040/cart', options)
        .then((response) => response.json())
        .then((json) => console.log(json));

    
}

function removeProduct(productId) {

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
}


function searchByCategory() {

    let searchCategory = document.getElementById("searchCategory").value;

    fetch(`http://localhost:4040/products/${searchCategory}`)
        .then(res => {
            return res.json()
        })
        .then(data => {
            const dataContainer = document.getElementById("data-container");
            dataContainer.innerHTML = "";
            console.log(data);
                data.forEach(item => {
                    const card = document.createElement("div");
                    card.classList.add("card");
                    card.innerHTML = `
                        <div class="card-body" style="width:18rem" >
                            <h3 class="card-title">${item.prodName}</h3>
                            <p class="card-title"><label style="font-size:15px" class="fw-bold">Category: </label> ${item.prodCategory}</p>
                            <p class="card-text"><label style="font-size:15px" class="fw-bold" >Description: </label> ${item.prodDesc}</p>
                            <div class="row">
                                <div class="col"><label style="font-size:15px" class="fw-bold">Price: </label> ${item.prodPrice}</div>
                                <div class="col"><label style="font-size:15px" class="fw-bold">Ratings: </label> ${item.prodRating}</div>
                            </div>
                            <br>
                            <button class="btn btn-primary" id="add${item.prodId}" onclick="addProduct(${item.prodId})" >Add</button>
                            <button class="btn btn-primary" id="sub${item.prodId}" onclick="removeProduct(${item.prodId})">Remove</button> 
                    </div>
                    `;
                    dataContainer.appendChild(card);
                });
        })
        .catch(error => console.log(error));
}
