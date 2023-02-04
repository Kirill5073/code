function initPopup({ id, crossId, time = 3, moreThan = 768, lessThan }) {
  const modal = document.getElementById(id);
  const closeButton = document.getElementById(crossId);

  function countDown() {
    closeButton.innerHTML = time;

    const intervalId = setInterval(() => {
      if (time === 1) {
        closeButton.innerHTML = "&times;";
        clearInterval(intervalId);
        closeButton.removeAttribute("disabled");
      } else {
        time = time - 1;
        closeButton.innerText = time;
      }
    }, 1000);
  }

  const shouldShowPopup =
    (window.innerWidth >= moreThan && !lessThan) ||
    (window.innerWidth >= moreThan && window.innerWidth < lessThan);

  if (shouldShowPopup) {
    setTimeout(() => {
      modal.classList.add(`${id}__show`);
      countDown();
    }, 1000);
  }

  closeButton.onclick = function () {
    modal.classList.remove(`${id}__show`);
  };
}

window.onload = () => {
  initPopup({
    id: "ad_custom_popup",
    crossId: "ad_custom_popup__cross",
    moreThan: 786,
    lessThan: 1786,
  });
  initPopup({
    id: "ad_custom_popup-left",
    crossId: "ad_custom_popup-left__cross",
    moreThan: 1786,
  });
  initPopup({
    id: "ad_custom_popup-right",
    crossId: "ad_custom_popup-right__cross",
    moreThan: 1786,
  });
};
