const ID = window.location.search.substring(1);

const url = `http://localhost:3000/api/teddies/${ID}`;

fetch(url).then((Response) =>
  Response.json().then((data) => {
    console.log(data);
    const product = data;
    addCard(data);
    function addCard(product) {
      const contentSheet = document.getElementById("content_sheet");
      contentSheet.innerHTML += `<div class="col col-6" id="img_article">
      <img src=${product.imageUrl} class="card-img-top" alt="...">
      </div>
      <div class="col col-6" id="descreption_article">
        <div class="card-body">
          <h1 class="card-title">${product.name}</h1>
          <p class="card-text">${product.description}</p>
          <label for="colors">Couleur</label>
          <select name="colors" id="select_colors">
          </select>
           <button type="button" class="btn btn-secondary btn-sm add-cart">Ajouter au panier</button>
        </div>
      </div>`;
      // console.log(product.colors);
      select_colors(product);
    }
    function select_colors(product) {
      const couleur = document.getElementById("select_colors");

      for (colors of product.colors) {
        couleur.innerHTML += `<option value="${colors}">${colors}</option>`;
      }
    }
  })
);
