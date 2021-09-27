const articles = document.getElementById("articles");
let hakim = "hkm";
let key = "Teddies";
let productArray = JSON.parse(localStorage.getItem(key));
let innerHtml = "";
let T = 0;
if (productArray != null) {
  for (let index = 0; index < productArray.length; index++) {
    const p = productArray[index];
    articles.innerHTML += `<tr> 
           <th scope="row" id="th_product">${p.name}</th>
           <td id="td_price">${p.color}</td>
           <td id="td_price">${p.price / 100}€</td>
           <td id="td_quantity">${p.quantity}</td>
           <td id="td_total">${p.totalPrice / 100}€</td>
        </tr>`;
    T += p.totalPrice;
  }
}
let total = document.getElementById("totalPrice");
total.innerHTML = `${T / 100}€`;
calcNum();
