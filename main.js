// initialize global variable to keep track of all posts
let data

const getPost = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    data = await response.json();
    let html = "";
    data.filter(val => val.id <= 12).forEach(post => {
        html += `
        <a href="#" class="post" onclick="viewPost(${post.id})"> 
            <img src="img/a.jpg" alt="post">
            <p style = "font-style:italic">Maret 01, 2021</p>
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        </a>
        `;
        document.getElementById('getRequest').innerHTML = html;
    });
}
getPost();

const viewPost = (id) => {
    // get post by id
    let currentPost = data.filter((post) => post.id == id)[0]
    // save the post in the localstorage
    localStorage.setItem("currentPost", JSON.stringify(currentPost))
    // redirect the user to the post page
    window.location.href = `${location.pathname}post.html`
}
