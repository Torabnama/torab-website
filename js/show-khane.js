
document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("khaneGallery");
    const track = document.getElementById("khaneGalleryTrack");
    const dotsContainer = document.getElementById("khaneGalleryDots");

    if (!gallery || !track || !dotsContainer) return;

    const items = Array.from(
        track.querySelectorAll(".khane-gallery-item")
    );

    if (items.length < 2) return;

    let currentIndex = 0;
    let timer;

    const dots = items.map((item, index) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.setAttribute("aria-label", `رفتن به تصویر ${index + 1}`);

        dot.addEventListener("click", () => {
            currentIndex = index;
            showImage(index);
            startAutoScroll();
        });

        dotsContainer.appendChild(dot);
        return dot;
    });

    
function showImage(index) {
    currentIndex = index;

    const item = items[index];
    const galleryRect = gallery.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();

    const offset = itemRect.left - galleryRect.left
        - (gallery.clientWidth - item.clientWidth) / 2;

    gallery.scrollBy({
        left: offset,
        behavior: "smooth"
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
}

    function moveToNextImage() {
        const nextIndex = (currentIndex + 1) % items.length;
        showImage(nextIndex);
    }

    function startAutoScroll() {
        clearInterval(timer);
        timer = setInterval(moveToNextImage, 4000);
    }

    gallery.addEventListener("mouseenter", () => clearInterval(timer));
    gallery.addEventListener("mouseleave", startAutoScroll);

    showImage(0);
    startAutoScroll();
});

document.addEventListener("DOMContentLoaded", () => {
    const showMoreBtn = document.getElementById("khaneShowMore");
    const moreActors = document.getElementById("khaneMoreActors");

    if (!showMoreBtn || !moreActors) return;

    showMoreBtn.addEventListener("click", () => {
        const isExpanded = showMoreBtn.getAttribute("aria-expanded") === "true";

        moreActors.hidden = isExpanded;

        showMoreBtn.setAttribute("aria-expanded", String(!isExpanded));

        showMoreBtn.textContent = isExpanded
            ? "نمایش بیشتر +"
            : "نمایش کمتر −";
    });
});
