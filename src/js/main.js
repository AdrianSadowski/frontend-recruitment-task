{
  ('useStrict');
  const openButton = document.querySelector('#open-button');
  const closeButton = document.querySelector('#close-button');
  const overlay = document.querySelector('#overlay');
  const infoClick = document.querySelector('#pop-value');
  const popup = document.querySelector('#popup-content');
  const resetButton = document.querySelector('#reset-button');
  let clickedResults = JSON.parse(localStorage.getItem('click'));

  function getCountTimes(){
    if (clickedResults == null) {
      localStorage.setItem('click', JSON.stringify(0));
    }
    if(clickedResults >= 5){
      resetButton.classList.add('active');
      console.log('button');
    }
    infoClick.innerHTML = clickedResults;
  }

  openButton.addEventListener('click', () => {
    openPopup(popup);
    addCountTimes();
  });

  closeButton.addEventListener('click', () => {
    closePopup();
  });

  resetButton.addEventListener('click', () => {
    localStorage.clear()
    window.location.reload();
  });

  function openPopup(popup) {
    if (popup == null) return;
    popup.classList.add('active');
    overlay.classList.add('active');
  }

  function closePopup() {
    if (popup == null) return;
    popup.classList.remove('active');
    overlay.classList.remove('active');
  }

  function addCountTimes(){
    localStorage.setItem('click', JSON.stringify(clickedResults++));
    getCountTimes()
  }

  getCountTimes();
}
