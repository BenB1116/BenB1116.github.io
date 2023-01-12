function readMore(project) {
    let dots = document.querySelector(`.project-container[project-name="${project}"] .dots`);
    let moreText = document.querySelector(`.project-container[project-name="${project}"] .more`); 
    let moreImg = document.querySelector(`.project-container[project-name="${project}"] .more-img`); 
    let btnText = document.querySelector(`.project-container[project-name="${project}"] .read-btn`);

    // If dots is shown hide the more section
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.textContent = "Read More";
        moreText.style.display = "none";
        moreImg.style.display = "none";
    } else {
        // If dots are hidden show the more section
        dots.style.display = "none";
        btnText.textContent = "Read Less"; 
        moreText.style.display = "inline";
        moreImg.style.display = "inline";
    }
}