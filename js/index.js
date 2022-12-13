function getUsers() {
    let list = document.getElementById("github-form").addEventListener("submit", (e) => {
        e.preventDefault();

        let user = e.target.search.value;
        // console.log(user);

        fetch(`https://api.github.com/search/users?q=${user}`)
        .then(response => response.json())
        .then(display)
    })

}

function display(data) {
    data.items.map(value => {
        let ul = document.getElementById("user-list")
        let usernames = document.createElement("li")
        let userpic = document.createElement("img")
        let userlink = document.createElement("a")


        usernames.textContent = value.login
        userpic.src = value.avatar_url
        userlink.href = value.html_url
        userlink.textContent = `This is ${value.login}'s Repo`

        usernames.appendChild(userpic)
        usernames.appendChild(userlink)

        ul.appendChild(usernames)
    })
    
}

getUsers()

