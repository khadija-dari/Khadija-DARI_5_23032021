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
          <p class="totalCost">${product.price}</p>
          <p class="card-text">${product.description}</p>
          <label for="colors">Couleur</label>
          <select name="colors" id="select_colors">
          </select>
           <button type="button" class="btn btn-secondary btn-sm add-cart"  id="addPanier">Ajouter au panier</button>
        </div>
      </div>`;
      // console.log(product.colors);
      select_colors(product);
      add_events(product);
    }
    function select_colors(product) {
      console.log(product.colors);
      const couleur = document.getElementById("select_colors");
      for (let index = 0; index < product.colors.length; index++) {
        const color = product.colors[index];
        couleur.innerHTML += `<option value="${color}">${color}</option>`;
      }
    }

    function add_events(product) {
      let addPanier = document.getElementById("addPanier");

      addPanier.addEventListener("click", (e) => {
        e.preventDefault();
        let selectedColor = document.getElementById("select_colors");
        //console.log(selectedColor.value);

        key = "Teddies";
        let productArray = localStorage.getItem(key);

        if (productArray == null) {
          productArray = [
            new Produit(
              ID,
              product.name,
              selectedColor.value,
              product.description,
              product.price,
              1,
              product.price
            ),
          ];
          localStorage.setItem(key, JSON.stringify(productArray));
        } else {
          productArray = JSON.parse(localStorage.getItem(key));
          foundProduct = false;

          for (let index = 0; index < productArray.length; index++) {
            const p = productArray[index];
            if (p.name === product.name && p.color === selectedColor.value) {
              foundProduct = true;
              p.quantity = p.quantity + 1;
              p.totalPrice = p.totalPrice + product.price;
              localStorage.setItem(key, JSON.stringify(productArray));
              break;
            }
          }

          if (!foundProduct) {
            singleProductArray = [
              new Produit(
                ID,
                product.name,
                selectedColor.value,
                product.description,
                product.price,
                1,
                product.price
              ),
            ];
            newProductArray = productArray.concat(singleProductArray);
            localStorage.setItem(key, JSON.stringify(newProductArray));
          }
        }
        calcNum();
      });
    }
  })
);

calcNum();

class Produit {
  constructor(i, n, c, d, p, q, t) {
    this.id = i;
    this.name = n;
    this.color = c;
    this.description = d;
    this.price = p;
    this.quantity = q;
    this.totalPrice = t;
  }
}
