document.addEventListener("DOMContentLoaded", function () {
    const titleElement = document.querySelector(".title-me");
    const words = ["Developer. ", "Graphic Designer. "];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentWord = words[wordIndex];
        
        // Update text with cursor
        titleElement.textContent = currentWord.substring(0, charIndex) + "|";

        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        // Random speed for natural typing
        let typingSpeed = isDeleting 
            ? 70 
            : 120 + Math.random() * 100; 

        if (!isDeleting && charIndex === currentWord.length) {
            typingSpeed = 500; // pause before deleting
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typingSpeed = 300; // pause before next word
        }

        setTimeout(typeEffect, typingSpeed);
    }

    typeEffect();
});





document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".like-button").forEach((button, index) => {
    let countSpan = button.querySelector(".like-count");
    let likeLabel = button.querySelector(".like");

    // unique storage key per button
    let storageKey = "likeCount_" + index;

    // get saved count from localStorage or 0
    let count = parseInt(localStorage.getItem(storageKey)) || 0;
    countSpan.textContent = count;

    likeLabel.addEventListener("click", () => {
      if (count < 1000) {
        count++;
        countSpan.textContent = count;

        // save new count
        localStorage.setItem(storageKey, count);

        // add animation class
        likeLabel.classList.add("liked");
        setTimeout(() => likeLabel.classList.remove("liked"), 300);
      }
    });
  });
});


