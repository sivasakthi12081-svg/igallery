function openModal(element) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImage");

  modal.style.display = "block";
  modalImg.src = element.querySelector("img").src;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}