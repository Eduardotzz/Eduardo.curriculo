document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = 0;
    setTimeout(() => {
        document.body.style.transition = "opacity 0.8s ease";
        document.body.style.opacity = 1;
    }, 100);
});
document.addEventListener("DOMContentLoaded", () => {

    // Fade
    document.body.style.opacity = 0;
    setTimeout(() => {
        document.body.style.transition = "opacity 0.8s ease";
        document.body.style.opacity = 1;
    }, 100);

    // Barras de progresso
    document.querySelectorAll(".progress-bar").forEach(bar => {
        const value = bar.getAttribute("data-progress");
        bar.style.width = value;
    });

});
