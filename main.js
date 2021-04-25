

const getPost = async () =>{

    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data)

    let html = "";
    data.filter(val => val.id<= 12).forEach( post => {
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

const postDisplay = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1');
    const result = await res.json();
    console.log(result) 

    let html1 = "";
    result.forEach(val => {
        html1 += `
        <div id="blogPost" class="blog-details">
            <img src="img/d.jpg" alt="image">
            <h3>${val.title}</h3>
            <p>${val.body}</p>
        </div>`;
    });
    
    document.getElementById("blogPost").innerHTML = html1;
}
postDisplay() 

const comments = async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
    const resul = await resp.json();
    console.log(resul);

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
