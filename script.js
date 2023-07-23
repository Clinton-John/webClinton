// The Dark/Light Mode

function darkTheme() {
    var getMode = document.getElementById("mode-select").value;
    if (getMode == "Lightmode") {

        document.body.classList.toggle("light-theme");
    } else {
        document.body.classList.toggle("dark-theme");
    }
}

function search() {
    setTimeout(function() {
        alert("We can't find a match to the item");
    }, 3000);
}


/* the form validation and handling section
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let form = document.getElementById("form");
let newElement = document.createElement("p");
let createText;
let getError = document.querySelector(".errorDisplay");
form.addEventListener("submit", (e) => {
    e.preventdefault();

    if (username === '' || username.value == 0) {
        createText = "please enter a valid username";
    } else if (password === '' || password.value.length < 5) {
        createText = "password must be more than 5 characters";
    }
    let newcontent = document.createTextNode(createText);
    newElement.appendChild(newcontent);
    geter.appendChild(newElement);
});


*/
/*let getTimeBody = document.querySelector(".welcome");

let newElement = document.createElement("h1");
let date = new Date();
let currenthour = date.getHours();
let createText;
if (currenthour >= 4 && currenthour <= 13) {
    createText = "Good morning:-)";
} else if (currenthour > 13 && currenthour <= 17) {
    createText = "Good Afternoon";
} else if (currenthour > 17 && currenthour <= 21) {
    createText = "Good evening";
} else if (currenthour > 21) {
    createText = "Good evening :)";

} else {
    createText = "Oops!! an Alien";
}

newElement.style.cssText = "color:red;  font-size:20px; position:top;"
*/
let getSubmit = document.getElementById("submit-button");
getSubmit.onclick = function(event) {

    event.preventDefault();
    //   window.open("index.html");
    window.location.href = "index.html";
    // window.history.back();
}