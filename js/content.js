//

function renderContentList(contentList, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = '<div class="row"></div>';
  const rowContainer = container.querySelector(".row");

  contentList.forEach((content) => {
    const cardHTML = `
      <div class="col-md-4 mb-4">
        <div class="card h-100" onclick="location.href='details.html?id=${content.id}'" style="cursor: pointer;">
          <img src="${content.image}" class="card-img-top" alt="${content.title}">
          <div class="card-body">
            <h5 class="card-title">${content.title}</h5>
            <p class="card-text">${content.shortDescription}</p>
          </div>
        </div>
      </div>
    `;
    rowContainer.innerHTML += cardHTML;
  });
}

// Render all new content sections
function renderAllContentSections() {
  renderContentList(childrensWritingList, "childrens-writing");
  renderContentList(shortStoriesList, "short-stories");
  renderContentList(traveloguesList, "travelogues");
  renderContentList(articlesList, "articles");
}

renderAllContentSections();
