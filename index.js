// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph that has the id="error".
let errorMsg = document.getElementsByTagName("button")[0];
errorMsg.addEventListener("click", function() {
    let element = document.getElementById("error");
    element.innerHTML += "Something went wrong, please try again"
});