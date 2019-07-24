// Object Literals

let user = {
    name: 'Assboi',
    age: '30',
    email: 'assboi@cheese.co.uk',
    location: 'Ethiopia',
    blogs: [
        { title: 'Sup Dawg', likes: 30 },
        { title: '10 things to make with your ass', likes: 50 }
    ],
    dissTrack() {
        console.log(`${this.name} is a real piece of trashhhh`);
    },
    logBlog() {
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        });
    }
};

console.log(user);
console.log(user.name);

console.log(typeof user);

user.dissTrack();

user.logBlog();

const random = Math.random();

console.log(Math.round(random * 100));

const header = document.querySelector('h1');

console.log(header);

header.classList.add('Test');