const comments = async (id) => {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    const resul = await resp.json();
    let html2 = "";
    resul.forEach(valu => {
        html2 += `
        <div class="blog-details">
            <h3>${valu.name}</h3>
            <p>${valu.body}</p>
        </div>`;
    });
    document.getElementById('comments').innerHTML = html2
}


const postDisplay = async () => {
    // retrieve the current post from localstorage
    let post = JSON.parse(localStorage.getItem("currentPost"))
    // fetch comments by post id
    await comments(post.id)
    let html1 = "";
    html1 += `
        <div id="blogPost" class="blog-details">
            <img src="img/d.jpg" alt="image">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        </div>`;

    document.getElementById("blogPost").innerHTML = html1;
}
postDisplay()

