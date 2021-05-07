const comments = async () => {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/1/comments`);

    const result = await resp.json();

    let html2 = "";
    result.forEach(val => {
        html2 += `
        <div class="blog-details">
            <h3>${val.name}</h3>
            <p>${val.body}</p>
        </div>`;
    });
    document.getElementById('comments').innerHTML = html2
}
comments();

const postDisplay = async () => {
    //retrieve the current post from local storage
    retrieved = localStorage.getItem('currentPost');
    post = JSON.parse(retrieved);
    console.log(post)

    //fetch comments by post id
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

/*const postDisplay = async () => {
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
*/