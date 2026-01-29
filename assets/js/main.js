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

    if (featured) {
      featured.innerHTML = repos.slice(0, 6).map(cardHTML).join("");
    }

    if (pinned) {
      pinned.innerHTML = repos.slice(6, 12).map(cardHTML).join(""); // different slice
    }

    if (moreRepo) {
      moreRepo.innerHTML = repos.slice(12, 24).map(cardHTML).join(""); // different slice
    }
  })
  .catch(err => console.error("GitHub API error:", err));

// // Wire buttons
// const linkedinBtn = document.querySelector("[data-link-linkedin]");
// const gitBtn = document.querySelector("[data-link-github]");

// if (linkedinBtn) {
//   const url = RESUME_CONFIG?.links?.linkedin;
//   if (url) linkedinBtn.href = url;
//   else linkedinBtn.style.display = "none";
// }

// if (gitBtn) {
//   const url = RESUME_CONFIG?.links?.github;
//   if (url) gitBtn.href = url;
//   else gitBtn.style.display = "none";
// }

function wireLink(selector, url) {
  const el = document.querySelector(selector);
  if (!el) return;

  if (url && url.trim() !== "") {
    el.href = url;
  } else {
    el.style.display = "none";
  }
}

wireLink(
  "[data-link-linkedin]",
  window.RESUME_CONFIG?.links?.linkedin
);

wireLink(
  "[data-link-github]",
  window.RESUME_CONFIG?.links?.github
);

// Basic HTML escaping (prevents odd characters breaking markup)
function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
