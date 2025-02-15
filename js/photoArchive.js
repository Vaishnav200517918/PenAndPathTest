const imageFolder = "photos/"; // Folder path
const images = [
  { filename: "image1.jpeg" },
  { filename: "placeholder.png" },
  { filename: "placeholder.png" },
  { filename: "placeholder.png" },
  { filename: "placeholder.png" },
  { filename: "placeholder.png" },
  { filename: "placeholder.png" },
  { filename: "placeholder.png" },
  { filename: "placeholder.png" },
];

const youtubeVideos1 = [
  {
    url: "https://www.youtube.com/watch?v=SXpAOKY6g48",
    title: "Tile 1",
  },
  {
    url: "https://www.youtube.com/watch?v=cCgn3H4UJr0",
    title: "Tile 2",
  },
  {
    url: "https://www.youtube.com/watch?v=IkudDf-qRrY",
    title: "Tile 3",
  },
  { url: "https://www.youtube.com/watch?v=xnWBZQ7wkb4", title: "Tile 4" },
  {
    url: "https://www.youtube.com/watch?v=iy5SqM0bnqI",
    title: "Tile 5",
  },
];

// Get the Swiper wrapper
const swiperWrapper = document.getElementById("swiperWrapper1");

// Loop through images and create slides
images.forEach((img) => {
  let slide = document.createElement("div");
  slide.classList.add("swiper-slide");
  slide.innerHTML = `<img src="${imageFolder + img.filename}" alt="${
    img.filename
  }">`;
  swiperWrapper.appendChild(slide);
});

// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },

  grid: {
    rows: 2,
  },
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      grid: { rows: 2 },
    },
    1024: {
      slidesPerView: 3,
      grid: { rows: 2 },
    },
  },
});

// List of YouTube videos
