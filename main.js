const faqsContainer = document.querySelector(".faq");

const getHeight = (faqItem) => {
    const faqTextInner = faqItem.querySelector(".faq__item__text");
    if (faqItem.classList.contains("active")) return 0;
    return faqTextInner.getBoundingClientRect().height;
};

faqsContainer.addEventListener("click", (e) => {
    const toggle =
        e.target.closest(".faq__item__title") ||
        e.target.closest(".faq__icons");
    if (!toggle) return;
    const faqItem = e.target.closest(".faq__item");
    const faqTextWrapper = faqItem.children[1];

    //Get height of faqItem

    const height = getHeight(faqItem);

    //Update faqItem
    faqTextWrapper.style.height = height + "px";
    toggle.parentNode.classList.toggle("active");
});

/***************
 Search input
 ***************/

const searchInput = document.querySelector("#search-input");
const faqContainer = document.querySelector("#faq");
const faqItems = [...document.querySelectorAll(".faq__item")];

searchInput.addEventListener("keyup", (e) => {
    const input = e.target.value.toLowerCase();

    //Filter the faqItems
    filteredItems(input);
});

function filteredItems(input) {
    faqItems.forEach((faqItem) => {
        //Get title and body for each faqItem and make them lowerCase
        const title = faqItem
            .querySelector(".btn-title")
            .innerText.toLowerCase();
        const body = faqItem
            .querySelector(".faq__item__text")
            .innerText.toLowerCase();

        // Filter and show faqItems that include the same text from search input
        if (title.includes(input) || body.includes(input))
            return (faqItem.style.display = "");
        return (faqItem.style.display = "none");
    });
}
