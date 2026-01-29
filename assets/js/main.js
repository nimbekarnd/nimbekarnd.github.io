// simplified loader
fetch(`https://api.github.com/users/${RESUME_CONFIG.githubUsername}/repos?per_page=100`)
.then(r=>r.json())
.then(repos=>{
  const featured = document.querySelector("[data-featured-repos]");
  const pinned = document.querySelector("[data-pinned-repos]");
  if(featured){
    featured.innerHTML = repos.slice(0,6).map(r=>`
<<<<<<< HEAD
=======
      <a class="card" href="${r.html_url}" target="_blank">
        <strong>${r.name}</strong><br/>
        <small>${r.description||""}</small>
      </a>`).join("");
  }

  if(pinned){
    pinned.innerHTML = repos.slice(0,6).map(r=>`
>>>>>>> b9e3745 ([Phase 1] Test visualization)
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