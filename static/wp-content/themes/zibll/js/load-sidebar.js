// load-sidebar.js

document.addEventListener('DOMContentLoaded', function() {
    loadSidebarContent();
});

function loadSidebarContent() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/load-sidebar.php', true); // Adjust the URL as needed
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                document.getElementById('dynamic-sidebar').innerHTML = xhr.responseText;
            }
        }
    };
    xhr.send();
}
