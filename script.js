function downloadImages() {
  var images = ["image1.jpg", "image2.jpg", "image3.jpg"]; // Add more images here

  images.forEach(function (image) {
    var link = document.createElement("a");
    link.href = image;
    link.download = "";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}
