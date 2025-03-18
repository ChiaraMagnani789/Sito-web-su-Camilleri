document.addEventListener("DOMContentLoaded", function() {
    const accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Toggle the active class on the button
            this.classList.toggle('active');

            // Toggle the visibility of the corresponding content
            const content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});

 document.querySelector(".like-btn").addEventListener("click", function() {
        this.classList.toggle("liked");
        this.style.color = this.classList.contains("liked") ? "red" : "#3E65B2";
    });

    document.querySelector(".send-comment").addEventListener("click", function() {
        let input = document.querySelector(".comment-input");
        if (input.value.trim() !== "") {
            let newComment = document.createElement("p");
            newComment.textContent = input.value;
            document.querySelector(".post").appendChild(newComment);
            input.value = ""; // Svuota il campo input
        }
    });

