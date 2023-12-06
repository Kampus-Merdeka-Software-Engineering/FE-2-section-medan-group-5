/* Preloader */

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.querySelector(".spinner-wrapper").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  }, 2000);
  fetchData();
});

const menuBar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".menu");

menuBar.addEventListener("click", () => {
  menuNav.classList.toggle("menu-active");
});

const navBar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  const windowPosition = window.scrollY > 0;
  navBar.classList.toggle("scrolling-active", windowPosition);
  menuNav.classList.remove("menu-active");
});

function fetchData() {
  const apiUrl = 'http://localhost:3001/api/v1/comment/';
  fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    displayData(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
}

function displayData(data) {
  const dataContainer = document.getElementById('comment-post');
  dataContainer.innerHTML = ``
  for (let i = 0; i < data.results.length; i++) {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('row')
    
    itemDiv.innerHTML = `
    <div class="user-post">
    <div class="image-user">
    <span class="material-symbols-outlined">
    account_circle
    </span>
    </div>
    <div class="info-user">
    <p>${data.results[i].name}</p>
    <p>${data.results[i].createdAt}</p>
    </div>
    </div>
    <div class="description">
    ${data.results[i].content}
    </div>
    `;
    
    dataContainer.appendChild(itemDiv);
  }
}

