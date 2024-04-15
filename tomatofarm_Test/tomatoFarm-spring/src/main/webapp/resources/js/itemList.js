const listfilter = document.getElementById("listfilter");

window.addEventListener('scroll', function () {
    listfilter.style.height = `calc(100vh - 320px - 30px + ${window.scrollY}px)`;
    if (window.scrollY <= 300) {
        listfilter.style.top = `calc(325px - ${window.scrollY}px)`;
    } else {
        listfilter.style.top = `30px`;
    }
    console.log(window.scrollY);
});

function showList(event) {
    event.target.children[0].classList.add('selected');
    event.target.children[1].style.display = "block";
    console.log(event.target)
}