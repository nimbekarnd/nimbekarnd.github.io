// simplified loader
fetch(`https://api.github.com/users/${RESUME_CONFIG.githubUsername}/repos?per_page=100`)
.then(r=>r.json())
.then(repos=>{
  const featured = document.querySelector("[data-featured-repos]");
  if(featured){
    featured.innerHTML = repos.slice(0,3).map(r=>`
      <a class="card" href="${r.html_url}" target="_blank">
        <strong>${r.name}</strong><br/>
        <small>${r.description||""}</small>
      </a>`).join("");
  }
});