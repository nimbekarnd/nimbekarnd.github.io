const RESUME_CONFIG = window.RESUME_CONFIG;
if (!RESUME_CONFIG) {
  console.error("RESUME_CONFIG not loaded. Check script order in HTML.");
}

// Wire buttons ASAP (before fetch)
function wireLink(selector, url) {
  const el = document.querySelector(selector);
  if (!el) return;

  if (url && url.trim() !== "") {
    el.href = url;
  } else {
    el.style.display = "none";
  }
}

wireLink("[data-link-linkedin]", RESUME_CONFIG?.links?.linkedin);
wireLink("[data-link-github]", RESUME_CONFIG?.links?.github);

// Load repos
fetch(`https://api.github.com/users/${RESUME_CONFIG.githubUsername}/repos?per_page=100&sort=updated`)
  .then(r => r.json())
  .then(repos => {
    const pinned = document.querySelector("[data-pinned-repos]");
    const moreRepo = document.querySelector("[data-more-repos]");

    const cardHTML = (r) => `
      <a class="card" href="${r.html_url}" target="_blank" rel="noreferrer">
        <strong>${escapeHtml(r.name)}</strong><br/>
        <small>${escapeHtml(r.description || "")}</small>
      </a>`;

    if (pinned) pinned.innerHTML = repos.slice(6, 12).map(cardHTML).join("");
    if (moreRepo) moreRepo.innerHTML = repos.slice(12, 24).map(cardHTML).join("");
  })
  .catch(err => console.error("GitHub API error:", err));

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderHomeFeatured() {
  const wrap = document.querySelector("[data-featured-manual]");
  if (!wrap) return;

  const projects = window.RESUME_CONFIG?.featuredProjects || [];
  if (!projects.length) return;

  wrap.innerHTML = projects.map(p => `
  <a class="card project-card horizontal"
     href="${p.repoUrl}"
     target="_blank"
     rel="noreferrer">

    ${p.image ? `
      <img class="project-img-left"
           src="${p.image}"
           alt="${escapeHtml(p.title)}">
    ` : ""}

    <div class="project-content">
      <h3 class="project-title">${escapeHtml(p.title)}</h3>
      ${p.subtitle ? `<div class="project-sub">${escapeHtml(p.subtitle)}</div>` : ""}
      <p class="project-desc">${escapeHtml(p.description || "")}</p>
      <div class="project-actions">
        <span class="btn">View repo →</span>
      </div>
    </div>

  </a>
`).join("");

}
renderHomeFeatured();

