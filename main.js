let data

const getPost = async () =>{

    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data)

    let html = "";
    data.filter(val => val.id <= 12).forEach( post => {
        html +=`
        <a href="post.html" class="post">
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
    //get post by id
    let currentPost = data.filter((post) => post.id) [0];
    
    //save the post with localstorage
    localStorage.setItem("currentPost", JSON.stringify(currentPost));
    
    //redirect to the post
    window.location.href = `${location.pathname}post.html`;

    console.log(currentPost)
}
