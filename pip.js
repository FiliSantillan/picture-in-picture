const video = document.getElementById("video"),
      button = document.getElementById("button");

button.addEventListener("click", async () => {
  button.disabled = true;

  try {
    if (document.pictureInPictureElement === video) {
      await document.exitPictureInPicture();
      button.innerText = "Activar PIP";
    } else {
      await video.requestPictureInPicture();
      button.innerText = "Desactivar PIP";
    }
  } catch (error) {
    console.log(`Ocurrión un error: ${error}`);
  } finally {
    // Habilitamos el botón después del evento.
    button.disabled = false;
  }
});

video.addEventListener("enterpictureinpicture", function(event) { 
  console.log(event);
 });

 video.addEventListener("leavepictureinpicture", function(event) {
   console.log(event);
 });