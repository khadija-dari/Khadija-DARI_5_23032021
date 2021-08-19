const url = "http://localhost:3001/api/teddies";

fetch(url).then((Response) =>
  Response.json().then((data) => {
    console.log(data)
    for (let product of data) {
      console.log(product);
      let main_container = document.getElementById("main_container");

      if (document.getElementById("main_container") != null) {
        main_container.innerHTML += `
        
          <div class="col">
            <div class="card">
              <img src=${product.imageUrl} class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.price}€</p>
                <button type="button" class="btn btn-primary btn-sm">Description</button>
                <button type="button" class="btn btn-secondary btn-sm">Ajouter au panier</button>
              </div>
            </div>
          </div>`;
      }
    }

  }));
