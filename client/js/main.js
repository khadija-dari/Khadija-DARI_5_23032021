function mainFunction() {
  const url = "http://localhost:3000/api/teddies";

  fetch(url).then((Response) =>
    Response.json().then((data) => {
      console.log(data);
      for (let product of data) {
        console.log(product);
        let main_container = document.getElementById("main_container");
        main_container.innerHTML += `
            <div class="col">
              <div class="card">
                <img src=${product.imageUrl} class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${product.name}</h5>
                  <p class="card-text">${product.price / 100}€</p>
                 <a href="pages/produit.html?${
                   product._id
                 }"> <button type="button" class="btn btn-primary btn-sm">Description</button></a>
                </div>
              </div>
            </div>`;
      }
    })
  );
  calcNum();
}

mainFunction();
