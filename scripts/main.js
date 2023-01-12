function readMore(project) {
    let dots = document.querySelector(`.project-container[project-name="${project}"] .dots`);
    let moreText = document.querySelector(`.project-container[project-name="${project}"] .more`); 
    let btnText = document.querySelector(`.project-container[project-name="${project}"] .myBtn`);

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.textContent = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.textContent = "Read less"; 
        moreText.style.display = "inline";
    }
}