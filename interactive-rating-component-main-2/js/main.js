const dotEls = document.querySelectorAll(".dot");

dotEls.forEach((dotEl) => {
  dotEl.addEventListener("click", () => {
    document.querySelector(".special")?.classList.remove("special");
    dotEl.classList.add("special");
  });
});

const submitBtn = document.querySelector(".btn");

const wrapper = document.querySelector(".wrapper");

const openPopup = () => {
  popup.classList.add("open-popup");
  wrapper.classList.add("close-popup");
};

submitBtn.addEventListener("click", openPopup);

const popup = document.getElementById("popup");
