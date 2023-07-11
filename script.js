//The login/ sign up section
let getSubmit = document.getElementById("submit-button");
getSubmit.onclick = function(event) {
        event.preventDefault();
        //   window.open("index.html");
        window.location.href = "index.html";
        //window.history.back();
    }
    /*
    // The Dark/Light Mode
    let getBody = document.body;
    let getDark = document.getElementById("dark");
    getDark.onclick = function() {
        getBody.style.cssText = "background-color:#111;";
        document.body.classList.toggle("light-theme");
    }
    */
function darkTheme() {
    var getMode = document.getElementById("mode-select").value;
    if (getMode == "Lightmode") {

        document.body.classList.toggle("light-theme");
    } else {
        document.body.classList.toggle("dark-theme");
    }
}