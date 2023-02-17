window.addEventListener("load", event => {
    var image = document.querySelector('img');
    var load = image.complete;
    console.log(image)
    alert(load);
  });