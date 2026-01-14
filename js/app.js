const projectMedia = document.querySelectorAll(".project-media");

projectMedia.forEach(media => {
    const images = [
        "assets/photos/JosElioAngel_Atmosphere_Screenshot_0.png",
        "assets/photos/JosElioAngel_Atmosphere_Screenshot_1.png",
        "assets/photos/JosElioAngel_Atmosphere_Screenshot_2.png",
        "assets/photos/JosElioAngel_Atmosphere_Screenshot_3.png",
        "assets/photos/JosElioAngel_Atmosphere_Screenshot_4.png"  
    ];

    const alts = [
        "Screenshot of visual atmosphere generator startpage with blue visuals",
        "Screenshot of info modal with instructions",
        "Screenshot of filter control sliders",
        "Screenshot of red visuals",
        "Screenshot of fullscreen view of orange visuals with white dots",
    ]

    let index = 0;
    const img = media.querySelector("img");
    const counter = media.querySelector(".image-counter");

    media.addEventListener("click", () => {
        index = (index + 1) % images.length;
        img.src = images[index];
        img.alt = alts[index];
        counter.textContent = `${index + 1} / ${images.length}`;
    });
});