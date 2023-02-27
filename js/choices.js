document.addEventListener("DOMContentLoaded", () => {
    const element = document.querySelector('.filter__art');
    const choices = new Choices(element, {
        searchEnabled: false,
        itemSelectText: '',
    });
})
