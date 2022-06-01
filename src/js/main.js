const openButton = document.querySelector('#open-button');
const closeButton = document.querySelector('#close-button');
const overlay = document.querySelector('#overlay');
const infoClick = document.querySelector('#pop-value');
const popup = document.querySelector('#popup-content');
const resetButton = document.querySelector('#reset-button');
const loading = document.querySelector('#loader');
let clickedResults = JSON.parse(localStorage.getItem('click'));
console.log(clickedResults);

getCountTimes();

function getCountTimes() {
  if (clickedResults == null) {
    localStorage.setItem('click', JSON.stringify(0));
  }
  if (clickedResults >= 5) {
    resetButton.classList.add('active');
    console.log('button');
  }
  infoClick.innerHTML = clickedResults;
}

overlay.addEventListener('click', () => {
  closePopup();
})
openButton.addEventListener('click', () => {
  openPopup(popup);
  addCountTimes();
  fetchData();
});

closeButton.addEventListener('click', () => {
  closePopup();
});

resetButton.addEventListener('click', () => {
  localStorage.clear();
  window.location.reload();
});

function openPopup(popup) {
  if (popup == null) return;
  popup.classList.add('active');
  overlay.classList.add('active');
}

function closePopup() {
  popup.classList.remove('active');
  overlay.classList.remove('active');
}

function addCountTimes() {
  clickedResults++
  localStorage.setItem('click', JSON.stringify(clickedResults));
  getCountTimes();
}

function fetchData(){
  loading.classList.remove('finished');
  //setTimeout dodany celowo aby można było zobaczyć animację ładowania danych
  setTimeout(function () {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      GenerateTable(data);
      loading.classList.add('finished');
    })
  }, 3000);

}

function GenerateTable(data) {
  const table = document.createElement('TABLE');
  table.border = '1';
  let customers = [];
  customers.push(['NAME', 'EMAIL', 'ADRESS', 'PHONE', 'COMPANY']);
  data.map(item => {
    let adress = `${item.address.city}, ${item.address.street}, ${item.address.suite}`;
    customers.push([item.name, item.email, adress, item.phone, item.company.name]);
  });

  const columnCount = customers[0].length;
  let row = table.insertRow(-1);
  for (let i = 0; i < customers.length; i++) {
    row = table.insertRow(-1);
    for (let j = 0; j < columnCount; j++) {
      const cell = row.insertCell(-1);
      cell.innerHTML = customers[i][j];
    }
  }
  const dvTable = document.querySelector('#dvTable');
  dvTable.innerHTML = '';
  dvTable.appendChild(table);
}

