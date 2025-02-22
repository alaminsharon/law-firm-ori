(function ($) {

    document.querySelectorAll(".pricing-card-item").forEach((item) => {
        let counterDisplay = item.querySelector(".pricing-card-item-number");
        let incrementButton = item.querySelector(".pricing-card-increment");
        let decrementButton = item.querySelector(".pricing-card-decrement");
    
        let count = 0; // Individual count for each item
    
        incrementButton.addEventListener("click", () => {
            count++;
            counterDisplay.value = count;
        });
    
        decrementButton.addEventListener("click", () => {
            if (count > 0) {
                count--;
                counterDisplay.value = count;
            }
        });
    });

})(jQuery);


