document.body.innerHTML = `
<input type="text" name="search" id="catSearch" class = "catSearch" placeholder = "Enter Cat type">
<button onclick ="search(catSearch.value)"  class = "SearchBtn">Search</button>
<section class = "container"></section>`;

async function getAllCats() {
  const data = await fetch("https://cataas.com/api/cats");
  const cats = await data.json();
  const catsContainer = document.querySelector(".container");

  cats.forEach((cat) => {
    catsContainer.innerHTML += `
    <img src="https://cataas.com/cat/${cat.id}" class = "catimg" onclick="window.open('https://cataas.com/cat/${cat.id}','targetWindow', 'toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1090px, height=550px, top=25px left=120px'); return false;">
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
    <img src="https://cataas.com/cat/${cat.id}" class = "catimg" onclick="window.open('https://cataas.com/cat/${cat.id}','targetWindow', 'toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1090px, height=550px, top=25px left=120px'); return false;">
    `;
  });
}
