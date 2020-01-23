const video = document.getElementById("video"),
      button = document.getElementById("button");

button.addEventListener("click", async () => {

  if(document.pictureInPictureElement === video) {
    await document.exitPictureInPicture();
    button.innerText = "Activar PIP";
  } else {
    await video.requestPictureInPicture();
    button.innerText = "Desactivar PIP";
  }

});