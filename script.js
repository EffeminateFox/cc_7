  //54529624
// Keeps form from submitting the traditional way
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('feedbackForm');
    const feedbackDisplay = document.getElementById('feedbackDisplay');
    form.addEventListener('submit', function(event) {
        event.preventDefault();  
        
// Validates the form fields
        const name = document.getElementById('name').value.trim();
        const rating = document.getElementById('rating').value;
        const comments = document.getElementById('comments').value.trim();

        if (!name || !rating || !comments) {
            alert('Please fill out all fields.');
            return;
        }

  // Create feedback details
        const feedbackItem = document.createElement('div');
        feedbackItem.classList.add('feedback-item');
        
        const nameElem = document.createElement('p');
        nameElem.textContent = `Name: ${name}`;
        
        const ratingElem = document.createElement('p');
        ratingElem.textContent = `Rating: ${rating}`;
        
        const commentsElem = document.createElement('p');
        commentsElem.textContent = `Comments: ${comments}`;
        
        feedbackItem.appendChild(nameElem);
        feedbackItem.appendChild(ratingElem);
        feedbackItem.appendChild(commentsElem);
        
        feedbackDisplay.appendChild(feedbackItem);
        
    //Resets
        form.reset();
    });
});
