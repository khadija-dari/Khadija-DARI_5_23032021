function mainFunction() {
  const url = "http://localhost:3000/api/teddies";

  fetch(url).then((Response) =>
    Response.json().then((data) => {
      console.log(data);
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
                  <p class="card-text">${product.price / 100}€</p>
                 <a href="pages/description.html"> <button type="button" class="btn btn-primary btn-sm">Description</button></a>
                  <button type="button" class="btn btn-secondary btn-sm add-cart">Ajouter au panier</button>
                </div>
              </div>
            </div>`;
        }
      }
      let product = data;
      let panier = document.querySelectorAll(".add-cart");
      for (let i = 0; i < panier.length; i++) {
        panier[i].addEventListener("click", () => {
          panierNum(product[i]);
          totalCost(product[i]);
        });
      }
      function panierNum(product) {
        let productNum = localStorage.getItem("panierNum");
        productNum = parseInt(productNum);
        if (productNum) {
          localStorage.setItem("panierNum", productNum + 1);
          document.querySelector(".nav-link span").textContent = productNum + 1;
        } else {
          localStorage.setItem("panierNum", 1);
          document.querySelector(".nav-link span").textContent = 1;
        }
        setItems(product);
      }
      function onloadpanierNum() {
        let productNum = localStorage.getItem("panierNum");
        if (productNum) {
          document.querySelector(".nav-link span").textContent = productNum;
        }
      }
      onloadpanierNum();

      function setItems(product) {
        let panierItems = localStorage.getItem("article");
        panierItems = JSON.parse(panierItems);
        if (panierItems != null) {
          if (panierItems[product.name] == undefined) {
            panierItems = {
              ...panierItems,
              [product.name]: product,
            };
          }
          panierItems[product.name]._id += 1;
        } else {
          product._id = 1;
          panierItems = {
            [product.name]: product,
          };
        }
        localStorage.setItem("article", JSON.stringify(panierItems));
      }
      function totalCost(product) {
        let panierCost = localStorage.getItem("totalCost");
        if (panierCost != null) {
          panierCost = parseInt(panierCost);
          localStorage.setItem("totalCost", panierCost + product.price / 100);
        } else {
          localStorage.setItem("totalCost", product.price / 100);
        }
      }
    })
  );
}
mainFunction();
