const projects = [
  {
    title: "demo_immobiliare",
    description:
      "End-to-end real estate demo project with dedicated frontend and backend components.",
    repoUrl: "https://github.com/SimoneFarallo/demo_immobiliare",
    frontendUrl: "https://demo-immobiliare.onrender.com/"
  }
];

const box = document.getElementById("projects");
const status = document.getElementById("status");

function renderProjects() {
  if (!projects.length) {
    status.textContent = "No projects added yet.";
    return;
  }

  projects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project";

    const title = document.createElement("h3");
    title.textContent = project.title;

    const desc = document.createElement("p");
    desc.textContent = project.description;

    const links = document.createElement("div");
    links.className = "project-links";

    const repoLink = document.createElement("a");
    repoLink.className = "project-link";
    repoLink.href = project.repoUrl;
    repoLink.target = "_blank";
    repoLink.rel = "noopener noreferrer";
    repoLink.textContent = "Repository";
    links.appendChild(repoLink);

    if (project.frontendUrl) {
      const feLink = document.createElement("a");
      feLink.className = "project-link";
      feLink.href = project.frontendUrl;
      feLink.target = "_blank";
      feLink.rel = "noopener noreferrer";
      feLink.textContent = "Frontend Demo";
      links.appendChild(feLink);
    }

    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(links);
    box.appendChild(card);
  });

  status.textContent = `Showing ${projects.length} selected project.`;
}

renderProjects();

