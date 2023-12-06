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
    console.log('Test');
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
}

function displayData(data) {
  console.log('cek')
  const dataContainer = document.getElementById('comment-post');
  dataContainer.innerHTML = ``
  for (let i = 0; i < data.results.length; i++) {
    // ini isinya
    console.log('test')
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('row')
    
    // Isi elemen div dengan informasi dari item
    itemDiv.innerHTML = `
    <div class="user-post">
    <div class="image-user">
    <img src="assets/img/beach.jpg" width="33">
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
    
    // Tambahkan elemen div ke dalam container
    dataContainer.appendChild(itemDiv);
  }
}

