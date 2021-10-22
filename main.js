// O código abaixo serve para substituir os valores das redes sociais
const LinksSocialMedia = {
  github: "Isilva95",
  youtube: "",
  facebook: "isac.santos.79274",
  instagram: "isac_isilva",
  twitter: "isac17silva"
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`

    // alert(li.children[0].href)
  }
}
changeSocialMediaLinks()


// O código abaixo serve para trocar os dados do HTML pelos dados que vem da API do Github
function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`
  
  fetch(url)
  .then(response => response.json())
  .then(data => {
    userPhoto.src = data.avatar_url
    userName.textContent = data.name
    userLink.href = data.html_url
    userLogin.textContent = data.login
    userBio.textContent = data.bio
  })
}
getGitHubProfileInfos()