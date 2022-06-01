{
  ('useStrict');
  const openButton = document.querySelector('#open-button');
  const closeButton = document.querySelector('#close-button');
  const overlay = document.querySelector('#overlay');
  const infoClick = document.querySelector('#pop-value');
  const resetButton = document.querySelector('#reset-button');
  

  openButton.addEventListener('click', () => {
    const popup = document.querySelector('#popup-content');
    openPopup(popup);
    addCountTimes();
  });

  closeButton.addEventListener('click', () => {
    const popup = document.querySelector('#popup-content');
    closePopup(popup);
  });



  function openPopup(popup) {
    if (popup == null) return;
    popup.classList.add('active');
    overlay.classList.add('active');
  }

  function closePopup(popup) {
    if (popup == null) return;
    popup.classList.remove('active');
    overlay.classList.remove('active');
  }


}
