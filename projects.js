const user = "SimoneFarallo";
const box = document.getElementById("projects");
const status = document.getElementById("status");

async function load() {
  try {
    const res = await fetch(`https://api.github.com/users/${user}/repos?sort=updated&per_page=100`);
    if (!res.ok) throw new Error("API error");
    const repos = (await res.json()).filter(r => !r.fork && !r.archived).slice(0, 30);

    if (!repos.length) {
      status.textContent = "No repositories found.";
      return;
    }

    repos.forEach(r => {
      const a = document.createElement("a");
      a.className = "repo";
      a.href = r.html_url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.innerHTML = `<strong>${r.name}</strong><p>${r.description || "No description yet."}</p>`;
      box.appendChild(a);
    });

    status.textContent = `Showing ${repos.length} repositories.`;
  } catch {
    status.textContent = "Could not load repositories right now.";
  }
}

load();
