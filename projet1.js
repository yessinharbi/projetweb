//this is for alert and prompt using do..while and if  
window.onload = function () {
    welcomeUser();
};
function welcomeUser() {
    var userName;

    do {
        userName = prompt("Please enter your name:");
        if (userName !== null) {
         
            if (isValidName(userName)) {
                alert("Welcome to the website, " + userName + "!\nYou can login by pressing on the login button.");
            } else {
                alert("Please enter a valid name (characters only).");
            }
        } else {
           
            alert("Welcome to the website!");
            break; 
        }
    } while (userName === null || !isValidName(userName));
}
function isValidName(name) {   
    return /^[A-Za-z]+$/.test(name);
}
document.write("<p class='ty'>Thanks for visiting our website</p>");
// this is for like and dislike button
document.querySelectorAll(".gallery").forEach(gallery => {
    const postId = gallery.querySelector("img").id;
    const ratings = gallery.querySelectorAll(".post-rating"); 
    const likeRating = ratings[0];

    ratings.forEach(rating => {
        const button = rating.querySelector(".post-rating-button");
        const count = rating.querySelector(".post-rating-count");

        button.addEventListener("click", async () => {
            if (rating.classList.contains("post-rating-selected")) {
                return;
            }

            count.textContent = Number(count.textContent) + 1;

            ratings.forEach(otherRating => {
                if (otherRating.classList.contains("post-rating-selected")) {
                    const otherCount = otherRating.querySelector(".post-rating-count");

                    otherCount.textContent = Math.max(0, Number(otherCount.textContent) - 1);
                    otherRating.classList.remove("post-rating-selected");
                }
            });

            rating.classList.add("post-rating-selected");

            const likeOrDislike = likeRating === rating ? "like" : "dislike";

            const response = await fetch(`/posts/${postId}/${likeOrDislike}`);
            const body = await response.json();
        });
    });
/* pour les commentaires */

    const getElementById = id => gallery.querySelector(`#${id}`);
    
    const specificElement = getElementById("specificElementId");
    console.log(specificElement);
});
var feild = document.querySelector('textarea');
var backUp = feild.getAttribute('placeholder');
var btn = document.querySelector('.btn');
var clear = document.getElementById('clear')

feild.onfocus = function(){
    this.setAttribute('placeholder', '');
    this.style.borderColor = '#333';
    btn.style.display = 'block'
}

feild.onblur = function(){
    this.setAttribute('placeholder',backUp);
    this.style.borderColor = '#aaa'
}

clear.onclick = function(){
    btn.style.display = 'none';
    feild.value = '';
}
