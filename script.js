let current = 0;
const images = document.querySelectorAll(".slider img");

function showImage(index) {
  images.forEach((img, i) => {
    img.style.display = i === index ? "block" : "none";
  });
}

function nextImage() {
  current = (current + 1) % images.length;
  showImage(current);
}

showImage(current); // pehla image dikhane ke liye
