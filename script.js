function downloadAllJPGs() {
  // Select all images with JPG format
  var images = document.querySelectorAll('img[src$=".jpg"]');

  images.forEach(function (image, index) {
    var link = document.createElement("a");
    link.href = image.src;
    link.download = "image_" + (index + 1) + ".jpg"; // Or any desired name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}
