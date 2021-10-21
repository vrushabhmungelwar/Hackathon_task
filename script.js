document.body.innerHTML = `
<input type="text" name="search" id="catSearch" placeholder = "enter">
<button onclick ="search(catSearch.value)"  class = "SearchBtn">Search</button>
<section class = "container"></section>`;

async function getAllCats() {
  const data = await fetch("https://cataas.com/api/cats");
  const cats = await data.json();
  const catsContainer = document.querySelector(".container");

  cats.forEach((cat) => {
    catsContainer.innerHTML += `
    <h2>${cat.tags}  <a href = "https://cataas.com/cat/${cat.id}"><input type = "button" value = "Get_img"></a></h2>
    `;
  });
}
getAllCats();

async function search(searchText) {
  const catsContainer = document.querySelector(".container");
  catsContainer.innerHTML = "";

  const data = await fetch("https://cataas.com/api/cats?tags=" + searchText);
  const cats = await data.json();

  cats.forEach((cat) => {
    catsContainer.innerHTML += `
    <h2>${cat.tags}  <a href = "https://cataas.com/cat/${cat.id}"><input type = "button" value = "Get_img"></a></h2>
    `;
  });
}

