// Highlight list
const highlightsList = [
  {
    id: 1,
    title: "Latest Novel",
    description:
      "Stay updated with the latest news happening around the world.",
    image: "image/highlight-novel.jpeg",
    href: "",
  },
  {
    id: 2,
    title: "Featured Article",
    description: "Explore the most beautiful places around the globe.",
    image: "image/highlight-article.jpeg",
    href: "",
  },
  {
    id: 3,
    title: "Upcoming Events",
    description: "Cook up a storm with these mouthwatering recipes.",
    image: "image/highlight-event.jpeg",
    href: "",
  },
].reverse();

// Novel list
const novelsList = [
  {
    id: 101,
    title: "The Silent Witness",
    shortDescription: "A thrilling mystery novel.",
    longDescription:
      "Follow detective Jane as she unravels a web of deceit and crime in a sleepy town. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae explicabo incidunt eveniet veniam dignissimos laboriosam quidem ratione totam, tenetur corrupti sed ab cumque. Mollitia at praesentium ratione neque perferendis magnam?",
    image:
      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
  },
  {
    id: 102,
    title: "Into the Wild",
    shortDescription: "An adventure in the untamed wilderness.",
    longDescription:
      "Embark on an unforgettable journey through wild terrains and perilous adventures.",
    image:
      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
  },
  {
    id: 103,
    title: "A Tale of Two Hearts",
    shortDescription: "A heartwarming romance.",
    longDescription:
      "Two strangers meet under unexpected circumstances, finding love along the way.",
    image:
      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
  },
  {
    id: 104,
    title: "Chronicles of the Lost City",
    shortDescription: "An epic fantasy adventure.",
    longDescription:
      "A young hero must unlock ancient powers to save their homeland.",
    image:
      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
  },
  {
    id: 105,
    title: "The Final Frontier",
    shortDescription: "A space exploration saga.",
    longDescription:
      "Join Captain Stella and her crew as they venture into the far reaches of space.",
    image:
      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
  },
  {
    id: 106,
    title: "Whispers of the Past",
    shortDescription: "A haunting tale of mystery.",
    longDescription:
      "Old secrets come back to haunt a family living in a remote countryside manor.",
    image:
      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
  },
].reverse();

// Children's Writing list
const childrensWritingList = [
  {
    id: 201,
    title: "The Magical Forest",
    shortDescription: "An enchanting adventure in a mystical forest.",
    longDescription:
      "Follow young Ellie as she discovers a hidden world filled with magic and wonder.",
    image:
      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
  },
  {
    id: 202,
    title: "The Talking Cat",
    shortDescription: "A delightful story of a talking cat.",
    longDescription:
      "Max the cat helps his young owner solve mysteries in their town.",
    image:
      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
  },
].reverse();

// Short Stories list
const shortStoriesList = [
  {
    id: 301,
    title: "The Last Sunset",
    shortDescription: "A story of love and loss.",
    longDescription:
      "As the sun sets for the last time, memories of a beautiful life resurface.",
    image:
      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
  },
  {
    id: 302,
    title: "Whispers in the Wind",
    shortDescription: "A tale of hope and courage.",
    longDescription:
      "In a small village, whispers in the wind carry messages of hope.",
    image:
      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
  },
].reverse();

// Travelogues list
const traveloguesList = [
  {
    id: 401,
    title: "Journey Through the Alps",
    shortDescription: "A breathtaking travel experience.",
    longDescription: "Experience the beauty and serenity of the majestic Alps.",
    image:
      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
  },
  {
    id: 402,
    title: "Discovering Bali",
    shortDescription: "A tropical paradise adventure.",
    longDescription:
      "Immerse yourself in the vibrant culture and stunning landscapes of Bali.",
    image:
      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
  },
].reverse();

// Articles list
const articlesList = [
  {
    id: 501,
    title: "The Future of Technology",
    shortDescription: "Exploring advancements in AI and robotics.",
    longDescription:
      "An in-depth analysis of emerging technologies and their impact on society.",
    image:
      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
  },
  {
    id: 502,
    title: "Mindfulness for Mental Health",
    shortDescription: "The benefits of mindfulness practices.",
    longDescription:
      "Discover how mindfulness can improve your mental and emotional well-being.",
    image:
      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
  },
].reverse();

// Render highlights list on the index page
function renderHighlights() {
  const highlightsContainer = document.getElementById("highlights");
  highlightsList.forEach((highlight) => {
    const cardHTML = `
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <img src="${highlight.image}" class="card-img-top" alt="${highlight.title}">
          <div class="card-body">
            <h5 class="card-title">
              <a href="details.html?id=${highlight.id}" class="orange-solid-text">${highlight.title}</a>
            </h5>
            <p class="card-text truncate">${highlight.description}</p>
          </div>
        </div>
      </div>
    `;
    highlightsContainer.innerHTML += cardHTML;
  });
}

// Render novels list on the index page
function renderNovels() {
  const novelsContainer = document.getElementById("novels");
  novelsContainer.innerHTML = '<div class="row"></div>'; // Add Bootstrap row for better layout

  const rowContainer = novelsContainer.querySelector(".row");

  novelsList.forEach((novel) => {
    const cardHTML = `
      <div class="col-md-4 mb-4">
        <div class="card h-100" onclick="location.href='details.html?id=${novel.id}'" style="cursor: pointer;">
          <img src="${novel.image}" class="card-img-top" alt="${novel.title}">
          <div class="card-body">
            <h5 class="card-title">${novel.title}</h5>
            <p class="card-text">${novel.shortDescription}</p>
          </div>
        </div>
      </div>
    `;
    rowContainer.innerHTML += cardHTML;
  });
}

function displayHighlightDetails() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));

  let item =
    highlightsList.find((item) => item.id === id) ||
    novelsList.find((novel) => novel.id === id) ||
    childrensWritingList.find((item) => item.id === id) ||
    shortStoriesList.find((item) => item.id === id) ||
    traveloguesList.find((item) => item.id === id) ||
    articlesList.find((item) => item.id === id); // Add checks for new lists

  if (item) {
    const highlightDetailsContainer =
      document.getElementById("highlight-details");
    highlightDetailsContainer.innerHTML = `
      <div class="col-md-8">
        <div class="card">
          <img src="${item.image}" class="card-img-top" alt="${item.title}">
          <div class="card-body">
            <h1 class="card-title">${item.title}</h1>
            <p class="card-text">${item.longDescription || item.description}</p>
          </div>
        </div>
      </div>
    `;
  } else {
    document.getElementById("highlight-details").innerHTML = `
      <div class="alert alert-danger">Item not found!</div>
    `;
  }
}

// Call render functions if the containers exist
if (document.getElementById("highlights")) renderHighlights();
if (document.getElementById("novels")) renderNovels();
