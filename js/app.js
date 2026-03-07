const projectMedia = document.querySelectorAll(".project-media");

projectMedia.forEach(media => {
    const images = JSON.parse(media.dataset.images);
    const alts = JSON.parse(media.dataset.alts);

    let index = 0;
    const img = media.querySelector("img");
    const counter = media.querySelector(".image-counter");

    counter.textContent = `1 / ${images.length}`;

    media.addEventListener("click", () => {
        index = (index + 1) % images.length;
        img.src = images[index];
        img.alt = alts[index];
        counter.textContent = `${index + 1} / ${images.length}`;
    });
});