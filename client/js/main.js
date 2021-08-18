const url = "http://localhost:3001/api/teddies";

fetch(url).then((Response) =>
  Response.json().then((data) => {
    console.log(data)}));
