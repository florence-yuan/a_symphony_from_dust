window.addEventListener("DOMContentLoaded", handleCursor);
window.addEventListener("reload", handleCursor);

function handleCursor() {
    const cursor = document.querySelector(".cursor");
    window.addEventListener("mousemove", (e) => {
        cursor.style.translate = `${e.clientX}px ${e.clientY}px`;
        if (box) {
            moveShape(e);
        }
    });

    [...document.links].forEach(link => {
        link.addEventListener("mouseenter", () => {
            cursor.classList.add('hover');
        });
        link.addEventListener("mouseleave", () => {
            cursor.classList.remove('hover');
        });
    });
}

const box = document.querySelector(".box");
const centerX = window.innerWidth / 2;
const centerY = window.innerHeight / 2;

function moveShape(e) {
    // console.log(`translateX(${(e.clientX - centerX) / 10}px) translateY(${(e.clientY - centerY) / 10}px)`)
    box.style.transform = `translateX(${(e.clientX - centerX) / 10}px) translateY(${(e.clientY - centerY) / 10}px)`;
}