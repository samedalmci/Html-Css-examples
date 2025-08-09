const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
];

let container = document.getElementById("posts");



posts.forEach(post => {
    container.innerHTML += `
    <section class="postcard">
        <div class="postinfo">
            <img class="avatar" src="${post.avatar}" alt="mini avatar">
            <div>
                <h3>${post.name}</h3>
                <p>${post.location}</p>
            </div>
        </div>
        <img class="post" src="${post.post}" alt="postpng">
        <div class="icons">
            <img class="btn" src="images/icon-heart.png" alt="like buttons">
            <img class="btn" src="images/icon-comment.png" alt="comment button">
            <img class="btn" src="images/icon-dm.png" alt="dm button">
        </div>
        <p id="likes"><strong>${post.likes} likes</strong></p>
        <p><strong id="username">${post.username}</strong> ${post.comment}</p>
    </section>
    
    `
})


  