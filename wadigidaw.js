document.addEventListener('DOMContentLoaded', function() {
    const categoryButton = document.getElementById('categoryButton');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    categoryButton.addEventListener('click', function(event) {
        event.stopPropagation();
        dropdownMenu.classList.toggle('show');
    });

    document.addEventListener('click', function() {
        dropdownMenu.classList.remove('sh;ow')
    });
});