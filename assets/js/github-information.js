/**
 * function called in github.html
 * selects the id= gh-username and the value
 * if no username asks for one
 * 
 * if text has been imputted the html displays the loader
 */
function fetchGitHubInformation(event) {

    var username = $("#gh-username").val();
    if (!username) {
        $("#gh-user-data").html(`<h2>Please enter a GitHub username</h2>`);
        return;
    }

    $("#gh-user-data").html(
        `<div id="loader">
            <img src="assets/css/loader.gif" alt="loading..." />
        </div>`);
}