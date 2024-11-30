// Скрипт для анимации секций при прокрутке
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    function checkVisibility() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // для сразу видимых секций при загрузке страницы
});
