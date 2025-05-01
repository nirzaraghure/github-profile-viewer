async function getProfile() {
    const username = document.getElementById("username").value;
    const profileDiv = document.getElementById("profile");
    profileDiv.innerHTML = "Loading...";
  
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        profileDiv.innerHTML = "User not found!";
        return;
      }
  
      const data = await response.json();
      profileDiv.innerHTML = `
        <img src="${data.avatar_url}" alt="Avatar" />
        <h2>${data.name || data.login}</h2>
        <p>📍 ${data.location || 'Unknown'}</p>
        <p>💻 Public Repos: ${data.public_repos}</p>
        <p>👥 Followers: ${data.followers} | Following: ${data.following}</p>
        <a href="${data.html_url}" target="_blank">View Profile 🔗</a>
      `;
    } catch (error) {
      profileDiv.innerHTML = "Something went wrong!";
    }
  }
  