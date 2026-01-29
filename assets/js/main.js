// simplified loader
fetch(`https://api.github.com/users/${RESUME_CONFIG.githubUsername}/repos?per_page=100`)
.then(r=>r.json())
.then(repos=>{
  const featured = document.querySelector("[data-featured-repos]");
  const pinned = document.querySelector("[data-pinned-repos]");
  const more_repo = document.querySelector("[data-more-repos]");
  if(featured){
    featured.innerHTML = repos.slice(0,6).map(r=>`
      <a class="card" href="${r.html_url}" target="_blank">
        <strong>${r.name}</strong><br/>
        <small>${r.description||""}</small>
      </a>`).join("");
  }

  if(pinned){
    pinned.innerHTML = repos.slice(0,6).map(r=>`
      <a class="card" href="${r.html_url}" target="_blank">
        <strong>${r.name}</strong><br/>
        <small>${r.description||""}</small>
      </a>`).join("");
  }

  if(more_repo){
    more_repo.innerHTML = repos.slice(0,6).map(r=>`
      <a class="card" href="${r.html_url}" target="_blank">
        <strong>${r.name}</strong><br/>
        <small>${r.description||""}</small>
      </a>`).join("");
  }

  if(pinned){
    pinned.innerHTML = repos.slice(0,6).map(r=>`
      <a class="card" href="${r.html_url}" target="_blank">
        <strong>${r.name}</strong><br/>
        <small>${r.description||""}</small>
      </a>`).join("");
  }
});