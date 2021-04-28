const comments = async () => {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/1/comments`);

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
comments();

const postDisplay = async () => {
    //retrieve the current post from local storage
    let post = JSON.parse(localStorage.getItem("currentPost"));
    //fetch comments by post id

    let html1 = "";
        html1 += `
        <div id="blogPost" class="blog-details">
            <img src="img/d.jpg" alt="image">
            <h3>${val.title}</h3>
            <p>${val.body}</p>
        </div>`;
        
    document.getElementById("blogPost").innerHTML = html1;
}
postDisplay()
