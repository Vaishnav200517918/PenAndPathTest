// Projects / Initiatives List
const projectsList = [
  {
    id: 601,
    title: "Green Earth Initiative",
    shortDescription: "An environmental sustainability project.",
    longDescription:
      "A global effort to promote sustainable practices and reduce carbon footprints.",
    image: "image/placeholder.png",
  },
  {
    id: 602,
    title: "Tech for Education",
    shortDescription: "Bringing technology to classrooms.",
    longDescription:
      "A project focused on providing digital resources to underprivileged schools worldwide.",
    image: "image/placeholder.png",
  },
].reverse();

// News & Updates List
const newsList = [
  {
    id: 701,
    title: "New Research on Renewable Energy",
    shortDescription: "Scientists discover a new way to store solar energy.",
    longDescription:
      "A breakthrough in solar energy storage could revolutionize the renewable energy industry.",
    image: "image/placeholder.png",
  },
  {
    id: 702,
    title: "Tech Startup Raises $50M",
    shortDescription: "Innovative AI company secures funding for expansion.",
    longDescription:
      "A promising startup focused on AI technology just secured major investment backing.",
    image: "image/placeholder.png",
  },
].reverse();

// Function to display Projects/Initiatives
function displayProjects() {
  const container = document.getElementById("projects-container");
  container.innerHTML = projectsList
    .map(
      (project) => `
    <div class="col-md-4 mb-4">
      <div class="card">
        <img src="${project.image}" class="card-img-top" alt="${project.title}">
        <div class="card-body">
          <h5 class="card-title">${project.title}</h5>
          <p class="card-text">${project.shortDescription}</p>
          <a href="people-details.html?id=${project.id}" class="btn btn-primary orange-btn">Read More</a>
        </div>
      </div>
    </div>
  `
    )
    .join("");
}

// Function to display News & Updates
function displayNews() {
  const container = document.getElementById("news-container");
  container.innerHTML = newsList
    .map(
      (news) => `
    <div class="col-md-4 mb-4">
      <div class="card">
        <img src="${news.image}" class="card-img-top" alt="${news.title}">
        <div class="card-body">
          <h5 class="card-title">${news.title}</h5>
          <p class="card-text">${news.shortDescription}</p>
          <a href="people-details.html?id=${news.id}" class="btn btn-primary orange-btn">Read More</a>
        </div>
      </div>
    </div>
  `
    )
    .join("");
}
