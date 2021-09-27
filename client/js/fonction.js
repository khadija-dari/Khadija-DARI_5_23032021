function calcNum() {
  let span = document.querySelector(".nav-link span");
  let productArray = JSON.parse(localStorage.getItem("Teddies"));
  let num = 0;
  if (productArray != null) {
    for (let index = 0; index < productArray.length; index++) {
      const p = productArray[index];
      num += p.quantity;
    }
  }
  span.textContent = `${num}`;
}
