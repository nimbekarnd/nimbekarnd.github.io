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
    const featured = document.querySelector("[data-featured-repos]");
    const pinned = document.querySelector("[data-pinned-repos]");
    const moreRepo = document.querySelector("[data-more-repos]");

    const cardHTML = (r) => `
      <a class="card" href="${r.html_url}" target="_blank" rel="noreferrer">
        <strong>${escapeHtml(r.name)}</strong><br/>
        <small>${escapeHtml(r.description || "")}</small>
      </a>`;

    if (featured) featured.innerHTML = repos.slice(0, 6).map(cardHTML).join("");
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

  const p = window.RESUME_CONFIG?.featuredProjects?.[0];
  if (!p) return;

  wrap.innerHTML = `
    <a class="card project-card" href="${p.repoUrl}" target="_blank" rel="noreferrer">
      ${p.image ? `<img class="project-img" src="${p.image}" alt="${p.title}">` : ""}
      <h3 class="project-title">${p.title}</h3>
      ${p.subtitle ? `<div class="project-sub">${p.subtitle}</div>` : ""}
      <p class="project-desc">${p.description || ""}</p>
      <div class="project-actions"><span class="btn">View repo →</span></div>
    </a>
  `;
}
renderHomeFeatured();