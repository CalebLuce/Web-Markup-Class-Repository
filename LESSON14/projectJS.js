document.addEventListener('DOMContentLoaded', function() {
    
    let mealPlanningForm = document.getElementById('mealPlanningForm');

    mealPlanningForm.addEventListener('submit', function(event) {

        // Prevent Form from Actually Submitting
        event.preventDefault();

        let email = document.getElementById('emailInput').value.trim();

        if (isValidEmail(email)) {
            
            mealPlanWindow();

        } else {

            alert('Please Enter a Valid Email Address.');

        }

    });

    // Function to Make the Meal Plan and Open in a New Window
    function mealPlanWindow() {

        let name = document.getElementById('nameInput').value.trim();
        let email = document.getElementById('emailInput').value.trim();
        let goal = document.getElementById('goalInput').value.trim();
        let breakfast = document.getElementById('breakfastInput').value.trim();
        let snack1 = document.getElementById('snack1Input').value.trim();
        let lunch = document.getElementById('lunchInput').value.trim();
        let snack2 = document.getElementById('snack2Input').value.trim();
        let dinner = document.getElementById('dinnerInput').value.trim();

        let mealPlanWindow = window.open('', '_blank');
        mealPlanWindow.document.write('');
        // Fill More .document.write() as Needed

        mealPlanWindow.document.write('</body></html>');
        mealPlanWindow.document.close();

    };

    // Function to Validate Email
    function isValidEmail(email) {
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

});