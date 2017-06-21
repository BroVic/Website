window.onload = init;

function init() {
    console.log("The DOM is ready.");
}


addEventListener("click", function() {
    var myHeading = document.querySelector("#topHeader");
    myHeading.innerHTML = 'The Opportunist';    
})

