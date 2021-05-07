let data
const getPost = async () =>{

    const response = await fetch("./posts.JSON");
    const data = await response.json();

    let html = "";
    data.filter(post => post.id <= 12).forEach( post => {
        html +=`
        <div class="post">
            <img src="img/a.jpg" alt="post">
            <p style = "font-style:italic">Maret 01, 2021</p>
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        </div>
        `;
        document.getElementById('getRequest').innerHTML = html;
    });

    currentPost = data.filter(value => value.id)[1];
    const post = document.getElementById('getRequest');
    post.addEventListener('click', viewpost);

    console.log(currentPost)
}
getPost();

const viewpost = () =>{
    console.log('clicked')
    localStorage.setItem('currentPost', JSON.stringify(currentPost));
    //location.pathname = 'post.html';
    //window.location.href = `${location.pathname}post.html`;
    window.location.href = 'post.html';
}


/*const viewPost = (id) => {
    //get post by id
    let currentPost = data.filter((post) => post.id) [0];
    
    //save the post with localstorage
    localStorage.setItem("currentPost", JSON.stringify(currentPost));
    
    //redirect to the post
    window.location.href = `${location.pathname}post.html`;

    console.log(currentPost)
}
*/

