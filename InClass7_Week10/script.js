console.log("Script is running...");

document.addEventListener("DOMContentLoaded", () => {
    // This will execute as soon as the HTML has completed loading i.e. at the begining of our program
    new Blog();
})

class BlogPost {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }
    render() {
        return `
            <div class="post">
                <h2>${this.title}</h2>
                <p>${this.content}</p>
            </div>
        `;
    }
}

class Blog {
    constructor() { // Always runs by default when you use the 'new' keyword i.e. when we call 'new Blog()'
        this.posts = []; // This variable will house the list of blogposts for our blog
        this.initialize();
    }
    render() {
        let blogPostsContainer = document.getElementById("blog-posts");
        blogPostsContainer.innerHTML = ""; // Reset the HTML inside to an empty String
        this.posts.forEach(function (post) {
            blogPostsContainer.innerHTML += post.render();
        });
    }
    addPost(title, content) {
        const newPost = new BlogPost(title, content);
        // We are adding our new post to our record of posts
        this.posts.push(newPost);
        // After we create a new blogpost, we want to re-render our HTML to include the new post
        this.render();
    }
    initialize() {
        // Will set up out program to respon to the user
        // We need to grab the yser text from the input elements when the user clicks on the Add New Post button
        const addButton = document.getElementById("add-post-btn"); // The document object is the HtML document represented as a JavaScript object
        //console.log(addButton);
        addButton.addEventListener("click", () => {
            //console.log("Buttone was clicked");
            // We need to then grab the text from the input elements
            const title = document.getElementById("title-input").value;
            const content = document.getElementById("content-input").value;
            // Once we have the text, we now want to create a new blog post
            if (title && content) { // We want to validate that the strings are not empty
                this.addPost(title, content);
                document.getElementById("title-input").value = "";
                document.getElementById("content-input").value = "";
            }
        })
    }
}