response = fetch('http://localhost:4040/cart')
.then(res=> {
    return res.json()
})
.then(data =>{
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
        </div>
        `;
        dataContainer.appendChild(card);
    });
})
.catch(error => console.log(error));